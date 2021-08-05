import { directive } from "@babel/types";
import "./App.css";
import Game from "./components/Game/Game";
import Header from "./components/Header/header";

function App() {
  return (
    <div>
      <Header></Header>
      <Game></Game>
    </div>
  );
}

export default App;
