import { useContext } from "react";
import ThemeContex from "./ThemeContext";
import "./Navbar.css";

export default function NavBar(){

    //Usa o contexto e acessa o conteudo que esta dentro do contexto(theme, toggleTheme).
    const{theme, toggleTheme} = useContext(ThemeContex);
    return(
        <div className={theme}>
            <h1>{theme}</h1>
            <button onClick={toggleTheme}>Troca o Tema</button>
        </div>
    )
}

