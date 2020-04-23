import React, { useEffect, useState, memo } from "react";
import converter from "./converter";
import JsonTextArea from "../../components/JsonTextArea/JsonTextArea";

const ResultBlock = ({ incomingValue, conversionOption }) => {
  const [fieldValue, setFieldValue] = useState("");

  useEffect(() => {
    setFieldValue(converter(incomingValue, conversionOption));
  }, [incomingValue, conversionOption]);

  return <JsonTextArea title="Результат" value={fieldValue} readOnly />;
};

export default memo(ResultBlock);
