import { useEffect } from "react";
import style from "./Alert.module.css";
import clsx from "clsx";
import block from "module-clsx";
const b = block(style);

const Alert = ({ show, content, type, removeAlert }) => {
  const classCss = `style.${type}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert({
        show: false,
        content: "",
        type: "",
      });
    }, 3000);

    return () => {
      clearTimeout();
    };
  }, []);

  return <div className={b("root", type)}> {content} </div>;
};

export default Alert;
