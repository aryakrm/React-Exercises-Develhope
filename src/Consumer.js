import React from "react";
import { LanguageContext } from "./LanguageContext";
const Strings = {
  en: {
    lang: "this is English",
  },
  de: { lang: "Das ist Deutsch" },
};

class Consumer extends React.Component {
  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {(Language) => {
            return (
              <div>
                <h1>{Strings[Language].lang}</h1>
              </div>
            );
          }}
        </LanguageContext.Consumer>
      </div>
    );
  }
}

export default Consumer;
