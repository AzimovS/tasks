import { createContext, ReactNode, useReducer } from "react";
import { toast } from "react-toastify";

type ToastAction = {
  SUCCESS: "SUCCESS";
  WARNING: "WARNING";
  ERROR: "ERROR";
};

type ToastPosition =
  | "top-left"
  | "top-right"
  | "top-center"
  | "bottom-left"
  | "bottom-right"
  | "bottom-center";

interface Action {
  type: keyof ToastAction;
  payload: {
    message: string;
    props?: {
      position?: ToastPosition;
      autoClose?: number;
      hideProgressBar?: boolean;
      closeOnClick?: boolean;
      pauseOnHover?: boolean;
      draggable?: boolean;
      progress?: number;
    };
  };
}

interface ToastContextState {
  message: string;
  dispatch: (action: Action) => void;
}

interface ProviderProps {
  children: ReactNode;
}

const initialState: ToastContextState = {
  message: "",
  dispatch: (action: Action) => {},
};

function reducer(state: any, action: Action) {
  switch (action.type) {
    case "SUCCESS":
      toast.success(action.payload.message, { ...action.payload.props });
      return { message: action.payload };
    case "ERROR":
      toast.error(action.payload.message, { ...action.payload.props });
      return { message: action.payload };
    case "WARNING":
      toast.warning(action.payload.message, { ...action.payload.props });
      return { message: action.payload };
    default:
      return state;
  }
}

export const ToastContext = createContext(initialState);

export const ToastProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, { message: "" });

  return (
    <ToastContext.Provider value={{ message: state.message, dispatch }}>
      {children}
    </ToastContext.Provider>
  );
};
