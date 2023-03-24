import { useState } from "react";
import ThemeContex from "./ThemeContext";


export default function ThemeProvider({children}){
    //criando um espaco de memoria
    const [theme, setTheme] = useState('light');

    function toggleTheme(){
        //trocar valor da variavel, usando setTheme
        setTheme(theme  === 'light' ? 'dark' : 'light');
    }

    return (
        //Passando a funcao, mas nao executando a funcao na hora que esta passando
        <ThemeContex.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContex.Provider>
    );
}
