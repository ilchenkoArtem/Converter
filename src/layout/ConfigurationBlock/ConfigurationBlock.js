import React, { useState, memo } from "react";

import JsonTextArea from "../../components/JsonTextArea/JsonTextArea";
import { Button } from "antd";
import { transformFromJson, checkTypeValue } from "../../helper";
import { message } from "antd";

const ConfigurationBlock = ({ setConfig }) => {
  const [incomingValue, setIncomingValue] = useState("");

  const handlerEnter = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      updateConfig();
    }
  };

  const validationIncomingData = () => {
    if (!incomingValue) {
      message.error("Конфигурация не может быть пустой");
      return null;
    }

    const data = transformFromJson(incomingValue);

    if (data) {
      if (!Object.values(data).some(keys => checkTypeValue(keys, "number"))) {
        message.error("Всё свойсвта конфигурации должны быть типа Number");
        return null;
      }
      message.success("Конфигурация была изменена");
      return data;
    } else {
      return null;
    }
  };

  const updateConfig = () => {
    const parseNewConfig = validationIncomingData();
    parseNewConfig && setConfig(state => ({ ...state, ...parseNewConfig }));
  };

  const handlerInput = e => {
    setIncomingValue(e.target.value);
  };
  return (
    <JsonTextArea
      title="Конфигурирование"
      value={incomingValue}
      onChange={handlerInput}
      onKeyDown={handlerEnter}
    >
      <Button
        type="primary"
        block
        size="large"
        style={{ marginTop: 10 }}
        onClick={updateConfig}
      >
        Дополнить/изменить конфигурацию
      </Button>
    </JsonTextArea>
  );
};

export default memo(ConfigurationBlock);
