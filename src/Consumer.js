import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function Consumer() {
  const Strings = {
    en: {
      lang: "this is English",
    },
    de: { lang: "Das ist Deutsch" },
  };
  const language = useContext(LanguageContext);
  return (
    <div>
      <h1>{Strings[language].lang}</h1>
    </div>
  );
}

export default Consumer;
