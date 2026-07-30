import { useEffect, useRef, useState } from "react";
import type { AlertStatus } from "../types/alertStatus.type";
import { useCerkStore } from "../stores/cerk.store";

export const useAlertFlow = () => {
      const [alertStatus, setAlertStatus] = useState<AlertStatus>("idle");
      const [pressSeconds, setPressSeconds] = useState<number | null>(null);
      const [countdown, setCountdown] = useState(5);
      const [location, setLocation] = useState<string | null>(null);
      const pressTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
      const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
      const countdownTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

      const handlePointerDown = () => {
            setPressSeconds(3);

            pressTimerRef.current = setInterval(() => {
                  setPressSeconds((previous) => {
                        if (previous === null) return null;

                        return previous - 1;
                  });
            }, 1000);

            timerRef.current = setTimeout(() => {
                  if (pressTimerRef.current) {
                        clearInterval(pressTimerRef.current);
                        pressTimerRef.current = null;
                  }

                  setAlertStatus("countdown");
            }, 3000);
      };
      const handlePointerUp = () => {
            if (timerRef.current) {
                  clearTimeout(timerRef.current);
                  timerRef.current = null;
            }

            if (pressTimerRef.current) {
                  clearInterval(pressTimerRef.current);
                  pressTimerRef.current = null;
            }

            setPressSeconds(null);
      };

      const getLocation = (): Promise<string | null> => {
            return new Promise((resolve) => {
                  if (!navigator.geolocation) {
                        resolve(null);
                        return;
                  }

                  navigator.geolocation.getCurrentPosition(
                        (position) => {
                              const { latitude, longitude } = position.coords;

                              resolve(`https://maps.google.com/?q=${latitude},${longitude}`);
                        },

                        (error) => {
                              alert(`Código: ${error.code}\nMensaje: ${error.message}`);

                              resolve(null);
                        },

                        {
                              enableHighAccuracy: true,
                              timeout: 10000,
                              maximumAge: 0,
                        },
                  );
            });
      };

      useEffect(() => {
            if (alertStatus !== "countdown") return;
            const loadLocation = async () => {
                  const currentLocation = await getLocation();

                  setLocation(currentLocation);
            };

            loadLocation();

            countdownTimerRef.current = setInterval(() => {
                  setCountdown((previous) => previous - 1);
            }, 1000);

            return () => {
                  if (countdownTimerRef.current) {
                        clearInterval(countdownTimerRef.current);
                        countdownTimerRef.current = null;
                  }
            };
      }, [alertStatus]);

      // Solo queremos ejecutar este efecto cuando el countdown llegue a 0.
      // No añadimos `location` porque podría volver a ejecutar sendAlert()
      // y abrir WhatsApp dos veces.

      useEffect(() => {
            const sendAlert = () => {
                  const { phoneContact, message } = useCerkStore.getState();
                  const finalMessage = `${message}. ${location ? `Mi ubicacion es:${location} ` : ""} `;
                  const whatsappUrl = `https://wa.me/${phoneContact}?text=${encodeURIComponent(finalMessage)}`;


                  window.open(whatsappUrl, "_self");

            };

            if (countdown !== 0) return;

            if (countdownTimerRef.current) {
                  clearInterval(countdownTimerRef.current);
                  countdownTimerRef.current = null;
            }

            sendAlert();
            // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [countdown]);

      useEffect(() => {
            const handleVisibility = () => {
                  if (document.visibilityState === "visible") {
                        setAlertStatus("idle");
                        setCountdown(5);
                        setPressSeconds(null);
                        setLocation(null);
                  }
            };

            document.addEventListener("visibilitychange", handleVisibility);

            return () => {
                  document.removeEventListener("visibilitychange", handleVisibility);
            };
      }, []);

      const handleCancel = () => {
            if (countdownTimerRef.current) {
                  clearInterval(countdownTimerRef.current);
                  countdownTimerRef.current = null;
            }

            setCountdown(5);
            setAlertStatus("idle");
            setPressSeconds(null);
      };

      return {
            alertStatus,
            pressSeconds,
            countdown,
            handlePointerDown,
            handlePointerUp,
            handleCancel,
      };
};
