import { createContext, useContext, useState } from "react";

type ContextProp = {
    theme: string
    toggleTheme: () => void
}

const ThemeContext = createContext({} as ContextProp);

const getTheme = () : "dark" | "light" => {
    const localTheme = localStorage.getItem("note-theme");
    document.body.classList.toggle("dark",localTheme == "dark");
    if(localTheme){
        return localTheme as "dark" | "light"
    }else{
        localStorage.setItem("note-theme","light")
        return "light"
    }
    // return localTheme ? localTheme as "dark" | "light" : "light";
}

export const ThemeProvider = ({children}:{children:React.ReactNode}) => {
    const [theme, setTheme] = useState<"light" | "dark">(getTheme());
    // console.log(getTheme());
    
    
    const toggleTheme = () => {
        if(theme == "light"){
            setTheme("dark");  
        }else setTheme("light");
        // theme will remain the same value despite the state being set so there is need to check if it is light or dark in other to set it in body class and local storage
        document.body.classList.toggle("dark",theme == "light" ? true : false);
        localStorage.setItem("note-theme",theme === "light" ? "dark" : "light")
    }
    

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext);
}