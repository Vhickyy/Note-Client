import { createContext, useContext, useState } from "react";

type ContextProp = {
    theme: string
    toggleTheme: () => void
}

const ThemeContext = createContext({} as ContextProp);

const getTheme = () : "dark" | "light" => {
    const localTheme = localStorage.getItem("note-theme");
    document.body.classList.toggle("dark",localTheme == "dark");
    return localTheme ? localTheme as "dark" | "light" : "light";
}

export const ThemeProvider = ({children}:{children:React.ReactNode}) => {
    const [theme, setTheme] = useState<"light" | "dark">(getTheme());
    
    const toggleTheme = () => {
        if(theme === "light"){
            setTheme("dark");
        }else setTheme("light");
        document.body.classList.toggle("dark",theme == "dark");
        localStorage.setItem("note-theme",theme)
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