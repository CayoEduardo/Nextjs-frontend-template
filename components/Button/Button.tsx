import React, { useState } from "react";
import styles from "./button.module.scss";

interface IAttributes {
  text?: string;
  isSelected?: boolean;
  onClick?: () => void;
}

interface IButton {
  attributes?: IAttributes;
}

const Button = ({ attributes = {} }: IButton) => {
  const {
    text = "Button",
    isSelected = false,
    onClick: onClickExternal = () => {},
    ...rest
  } = attributes;
  const [isButtonSelected, setIsButtonSelected] = useState(isSelected);
  const selected = isButtonSelected ? styles["selected"] : "";

  const onClick = () => {
    setIsButtonSelected(!isButtonSelected);
    onClickExternal();
  };

  return (
    <button
      className={`${styles["button"]} ${selected}`}
      onClick={onClick}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
