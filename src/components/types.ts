export interface NotificationProps {
  type: "success" | "info" | "warning" | "error";
  message: string;
  onClose: () => void;
  animation?: "fade" | "pop" | "slide";
}

// Define the allowed positions
export type PositionType =
  | "bottom-left"
  | "bottom-right"
  | "top-left"
  | "top-right";

// Define the properties of a notification
export interface NotificationProps {
  type: "success" | "info" | "warning" | "error";
  message: string;
  duration: number;
  animation?: "fade" | "pop" | "slide";
}

// Define the return type of the hook
export interface UseNotificationReturn {
  NotificationComponent: JSX.Element;
  triggerNotification: (notificationProps: NotificationProps) => void;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}


export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

