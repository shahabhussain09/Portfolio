import Home from "./Home";
import RoundFour from "./components/rounDesign/RoundFour";
import RoundOne from "./components/rounDesign/RoundOne";
import { RoundThree } from "./components/rounDesign/RoundThree";
import RoundeTwo from "./components/rounDesign/RoundeTwo";
import Round from "./components/rounDesign/Round";

function App() {
  return (
    <div className="w-full h-screen text-textColor bg-black relative overflow-hidden">
      <div className="max-w-screen-2xl text-white h-full mx-auto flex items-center justify-center">
        <Home />
      </div>
     <div className="w-full h-full absolute top-0 left-0 z-10">
  <Round />
  <RoundOne />
  <RoundeTwo />
  <RoundThree />
  <RoundFour/>
     </div>
    </div>
  );
}

export default App;
