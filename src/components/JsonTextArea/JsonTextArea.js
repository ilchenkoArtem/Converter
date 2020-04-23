import React from "react";

import { Input } from "antd";
import classes from "./JsonTextArea.module.css";
import { Card } from "antd";

const { TextArea } = Input;

const JsonTextArea = ({ title, children, ...props }) => {
  return (
    <Card title={title} style={{ marginBottom: 15 }}>
      <TextArea
        className={classes.textField}
        autoSize={{ minRows: 4 }}
        {...props}
      />
      {children}
    </Card>
  );
};

export default JsonTextArea;
