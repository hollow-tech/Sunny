import { Language } from "./Languages.types";

import EN from "./icons/en.svg";
import RU from "./icons/ru.svg";
import UA from "./icons/ua.svg";

export const languages: Language[] = [
  { locale: "ru", icon: <RU />, id: 1, label: "RU" },
  { locale: "en", icon: <EN />, id: 2, label: "EN" },
  { locale: "ua", icon: <UA />, id: 3, label: "UA" },
];
