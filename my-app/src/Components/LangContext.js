import React, {useState, createContext} from "react";

export const LangContext = createContext();
const Language = (props) => {
    const [language, setLanguage] = useState("eu");
    const context = {
        language,
        setLanguage,
    };
    return (
        <LangContext.Provider value={context}>
            {props.children}
        </LangContext.Provider>
    );
};
export default Language;
