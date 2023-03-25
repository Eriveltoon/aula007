import { Routes, Route} from "react-router-dom";
import ThemeProvider from "./ThemeProvider";
//import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";

function App() {
  //npm install react-router-dom (Biblioteca de Rotas)
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/">

          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="*" element={<NotFound/>}/>

        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
