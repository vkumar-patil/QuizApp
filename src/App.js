import "./App.css";
import Home from "./Coumponent/Home";
//import Quetion from "./Coumponent/Quetion";
import Quizpage from "./Coumponent/Quizpage";
import Result from "./Coumponent/Result";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Quetion" element={<Quetion />} /> */}
        <Route path="/Quizpage" element={<Quizpage />} />
        <Route path="/Result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
