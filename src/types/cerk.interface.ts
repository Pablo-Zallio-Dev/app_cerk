
export interface CerkState {
      userName: string;
      contactName: string;
      phoneContact: string;
      message: string;
      shareLocation: boolean;
      hasStarted: boolean;
      setHasStarted: (hasStarted: boolean) => void;
      setUserName: (userName: string) => void;
      setContactName: (contactName: string) => void;
      setPhoneContact: (phoneContact: string) => void;
      setMessage: (message: string) => void;
      setShareLocation: (shareLocation: boolean) => void;

      isConfigurationComplete: () => boolean;
}