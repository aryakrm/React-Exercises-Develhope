import { useState } from "react";
import { LanguageContext } from "./LanguageContext";
import Consumer from "./Consumer";

export default function DisplayLanguage() {
  const [language, setLanguage] = useState("en");

  const changeHandler = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div>
      <select value={language} onChange={changeHandler}>
        <option value="en">English</option>
        <option value="de">Deustch</option>
      </select>
      <LanguageContext.Provider value={language}>
        <div>{language}</div>
        <Consumer />
      </LanguageContext.Provider>
    </div>
  );
}
