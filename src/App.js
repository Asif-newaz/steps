// import { useState } from "react";
// import "./index.css";
// import Typography from "./Typography";

// const messages = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤑",
// ];

// function App() {
//   const [step, setStep] = useState(1);
//   const [isOpen, setIsOpen] = useState(true);

//   // const [test, setTest] = useState({ name: "Asif" });

//   const handlePrevious = () => {
//     if (step > 1) setStep((s) => s - 1);
//   };

//   const handleNext = () => {
//     if (step < 3) {
//       setStep((s) => s + 1);
//     }
//   };

//   return (
//     <>
//       <button className="close" onClick={() => setIsOpen((is) => !is)}>
//         &times;
//       </button>
//       {isOpen && (
//         <div className="steps">
//           <div className="numbers">
//             <div className={step >= 1 ? "active" : ""}>1</div>
//             <div className={step >= 2 ? "active" : ""}>2</div>
//             <div className={step >= 3 ? "active" : ""}>3</div>
//           </div>
//           <p className="message">
//             Step {step}: {messages[step - 1]}
//           </p>
//           <Typography title="Hello world!" />
//           <div className="buttons">
//             <button
//               style={{ backgroundColor: "#7950f2", color: "#fff" }}
//               onClick={handlePrevious}
//             >
//               Previous
//             </button>
//             <button
//               style={{ backgroundColor: "#7950f2", color: "#fff" }}
//               onClick={handleNext}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import Update from "./Update";
import Read from "./Read";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
        <Route path="/read/:id" element={<Read />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
