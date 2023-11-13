import { toast } from "react-toastify";
const defaultOptions = {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};
export const ToastCustom = {
  loading: (message, options) => {
    return toast.loading(message, { ...defaultOptions, ...options });
  },
  success: (message, options) => {
    return toast.success(message, { ...defaultOptions, ...options });
  },
  error: (message, options) => {
    return toast.error(message, { ...defaultOptions, ...options });
  },
  // Add other toast types as needed
};
