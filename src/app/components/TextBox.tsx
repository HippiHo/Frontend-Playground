"use client";

import "./textBox.css";
import { useState } from "react";

type TextBoxProps = {
  text: string;
};

const TextBox = ({ text }: TextBoxProps) => {
  const [fullView, setFullView] = useState<boolean>(false);
  return (
    <div className={fullView ? "box full" : "box"}>
      <div className={fullView ? "box__text full" : "box__text"}>{text}</div>
      <button
        className="box__see-more-btn"
        onClick={() => setFullView(!fullView)}
      >
        {fullView ? "See less" : "See more"}
      </button>
    </div>
  );
};

export default TextBox;
