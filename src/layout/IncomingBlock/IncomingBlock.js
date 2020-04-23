import React, { useState } from "react";

import JsonTextArea from "../../components/JsonTextArea/JsonTextArea";
import { Button } from "antd";
import {
  transformFromJson,
  transformToJson,
  checkTypeValue
} from "../../helper";
import { message } from "antd";

const IncomingBlock = ({ setIncomingValue }) => {
  const [fieldValue, setFieldValue] = useState(
    transformToJson({ distance: { unit: "m", value: 0.5 }, convert_to: "ft" })
  );

  const saveIncomingData = () => {
    const parseIncomingData = validationIncomingData();
    parseIncomingData && setIncomingValue(parseIncomingData);
  };

  const handlerEnter = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      saveIncomingData(fieldValue);
    }
  };

  const validationIncomingData = () => {
    const getMessageMissingKey = keyName => `Не указан параметр: "${keyName}"`;

    if (!fieldValue) {
      message.error("Заполните входящие данные");
      return null;
    }

    const data = transformFromJson(fieldValue);

    if (data) {
      switch (true) {
        case !data.distance:
          message.error(
            `Укажите исходные параметры для конвертирования. ${getMessageMissingKey(
              "distance"
            )}`
          );
          return null;
        case !data.distance.unit:
          message.error(
            `Укажите исходные параметры для конвертирования. ${getMessageMissingKey(
              "distance > unit"
            )}`
          );
          return null;
        case !checkTypeValue(data.distance.unit, "string"):
          message.error(`Параметр "unit" должен быть типом "string"`);
          return null;

        case !data.distance.value:
          message.error(
            `Укажите исходные параметры для конвертирования. ${getMessageMissingKey(
              "distance > value"
            )}`
          );
          return null;
        case !checkTypeValue(data.distance.value, "number"):
          message.error(`Параметр "value" должен быть типом "number"`);
          return null;
        case !data.convert_to:
          message.error(
            `Укажите в какую единицу конвертировать. ${getMessageMissingKey(
              "convert_to"
            )}"`
          );
          return null;
        case !checkTypeValue(data.convert_to, "string"):
          message.error(`Параметр "convert_to" должен быть типом "string"`);
          return null;
        default:
          return data;
      }
    } else {
      return null;
    }
  };

  return (
    <JsonTextArea
      title="Входящие Данные"
      value={fieldValue}
      onChange={e => setFieldValue(e.target.value)}
      onKeyDown={handlerEnter}
    >
      <Button
        type="primary"
        block
        size="large"
        style={{ marginTop: 10 }}
        onClick={saveIncomingData}
      >
        Конвертировать
      </Button>
    </JsonTextArea>
  );
};

export default IncomingBlock;
