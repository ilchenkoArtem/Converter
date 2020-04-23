import { message } from "antd";
import { transformToJson } from "../../helper";

const calculator = (value, fromUnit, convertToUnit, conversionOption) => {
  switch (true) {
    case `${fromUnit}->${convertToUnit}` in conversionOption:
      return value * conversionOption[`${fromUnit}->${convertToUnit}`];
    case `${convertToUnit}->${fromUnit}` in conversionOption:
      return value / conversionOption[`${convertToUnit}->${fromUnit}`];
    default:
      message.error(
        `Не найдено инструкции для преобразования ${fromUnit} в ${convertToUnit}`
      );
      return "";
  }
};

const converter = (incomingData, conversionOption) => {
  if (!incomingData) {
    return "";
  }

  const {
    distance: { unit: fromUnit, value: valueForConversation },
    convert_to: convertToUnit
  } = incomingData;

  const newValue = calculator(
    valueForConversation,
    fromUnit,
    convertToUnit,
    conversionOption
  );

  if (newValue) {
    return transformToJson({ unit: convertToUnit, value: newValue });
  }

  return "";
};

export default converter;
