import { useEffect, useState } from "react";
import styles from "./Alert.module.css";
import clsx from "clsx";
import block from "module-clsx";

const Alert = ({ show, content, type, removeAlert }) => {
  const classess =
    type === "success"
      ? clsx({ [styles.success]: true })
      : clsx({ [styles.danger]: true });

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

  return <div className={classess}>{content}</div>;
};

export default Alert;
