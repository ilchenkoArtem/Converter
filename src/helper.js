import { message } from "antd";

export const transformToJson = data => {
  try {
    return JSON.stringify(data);
  } catch (e) {
    message.error("Не удалось трансформировать в JSON");
    return "";
  }
};

export const transformFromJson = data => {
  try {
    return JSON.parse(data);
  } catch (e) {
    message.error("Некорректный JSON");
    return null;
  }
};

export const copyToClipBoard = text => {
  if (!text) {
    message.warn("Нечего копировать");
  }
  navigator.clipboard
    .writeText(text)
    .then(() => {
      message.success("Скопировано. Вставьте конфиг в поле для конфигурации");
    })
    .catch(err => {
      message.error(
        "Упс. Ваш браузер не поддерживает navigator.clipboard или на сайте используется протокол http"
      );
    });
};

export const checkTypeValue = (value, type) => typeof value === type;
