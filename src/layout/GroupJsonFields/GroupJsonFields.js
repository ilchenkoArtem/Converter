import React, { useState, memo } from "react";
import IncomingBlock from "../IncomingBlock/IncomingBlock";
import ResultBlock from "../ResultBlock/ResultBlock";
import ConfigurationBlock from "../ConfigurationBlock/ConfigurationBlock";
import classes from "./GroupJsonFields.module.css";
import converterOptions from "../../configs/convertationConfig";

const GroupJsonFields = () => {
  const [config, setConfig] = useState(converterOptions);
  const [incomingValue, setIncomingValue] = useState("");

  return (
    <section className={classes.container}>
      <IncomingBlock setIncomingValue={setIncomingValue} />
      <ResultBlock conversionOption={config} incomingValue={incomingValue} />
      <ConfigurationBlock setConfig={setConfig} />
    </section>
  );
};

export default memo(GroupJsonFields);
