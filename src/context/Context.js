import React, { useState } from 'react';
import { LanguageContext } from '.';

const Context = ({children}) => {
    const [language,setLanguage]=useState('en-US')
    const [click,setClick]=useState(true)
    const [mode,setMode]=useState(
        JSON.parse(localStorage.getItem('mode')) || false)
    return (
        <LanguageContext.Provider value={{language,setLanguage,mode,setMode,click,setClick}}>
            {children}
        </LanguageContext.Provider>
    );
};

export default Context;