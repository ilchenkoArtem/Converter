import React from "react";
import { Button, Card, Tooltip } from "antd";
import { copyToClipBoard } from "../../helper";
import { additionalConverterOptions } from "../../configs/convertationConfig";
import { transformToJson } from "../../helper";
import JSONPretty from "react-json-pretty";

export const description = `Суть данной схемы заключается в том, что при переходе из старшей единицы измерения в младшую применяется умножение. И наоборот, при переходе из младшей единицы измерения в более старшую применяется деление.`;
const Description = () => <p style={{ maxWidth: 200 }}>{description}</p>;

const HelperButtons = jsonOption => (
  <>
    <Button
      onClick={() => copyToClipBoard(jsonOption)}
      style={{ marginRight: 10 }}
    >
      Скопировать
    </Button>
    <Tooltip placement="left" title={Description}>
      <Button shape="circle" icon="question" />
    </Tooltip>
  </>
);

const ExampleForConfiguration = () => {
  const jsonOption = transformToJson(additionalConverterOptions);

  return (
    <Card
      type={"inner"}
      title="Конфиг для добавления Миллиметров(mm), Ярдов(yd), Киллометров(km)"
      extra={HelperButtons(jsonOption)}
    >
      <JSONPretty
        data={jsonOption}
        theme={{
          key: "color:#f92672;"
        }}
      />
    </Card>
  );
};

export default ExampleForConfiguration;
