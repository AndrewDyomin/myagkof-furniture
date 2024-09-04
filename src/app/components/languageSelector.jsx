import { useTranslation } from "react-i18next";
import Select from "react-select";

export default function LanguageSelector () {
  const { i18n } = useTranslation();
  const langList = [
    { value: "en", label: "EN" },
    { value: "ru", label: "RU" },
    { value: "uk", label: "UK" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Select
      name="lang"
      onChange={(e) => changeLanguage(e.value)}
      placeholder={i18n.t("currentLanguage")}
      options={langList}
    />
  );
};
