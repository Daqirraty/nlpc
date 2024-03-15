import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastMe = (res, message) => {
  if (res === "success") {
    toast.success(message);
  } else if (res === "error") {
    toast.error(message);
  } else if (res === "info") {
    toast.info(message);
  }

};
export default ToastMe;
