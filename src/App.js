import { useEffect, useState } from "react";
import "./App.css";
import "./reset.css";
import Time from "./components/Time";
import Input from "./components/Input";

function App() {
  const [count, setCount] = useState();
  const [state, setState] = useState([]);

  const handlechange2 = (event) => {
    event.currentTarget.className == "check"
      ? (event.currentTarget.className = "checked")
      : (event.currentTarget.className = "check");
    console.log(event.target);
  };

  const handlechange3 = (event) => {
    const k = state.pop();
    setState([...state]);
  };

  return (
    <>
      <div className="divmain">
        <div className="divproject">
          <Time setCount={setCount} state={state} />
          <div className="divForcenter">
            <Input state={state} setState={setState} count={count} />
          </div>
        </div>
      </div>
      <div className="divforcolor2">
        <div className="forcolor5">
          {state.map((element) => (
            <div className="divForcenter1">
              <div className="box">
                <div className="divhs">
                  <h10>{element.name}</h10>
                  <h11>
                    Today at{" "}
                    {(element.count1.currenTime2 % 12 || 12) +
                      ":" +
                      element.count1.currentTime3}
                    {element.count1.currenTime2 > 12 ? "PM" : "AM"}
                  </h11>
                </div>
                <div className="divicons">
                  <div className="check" onClick={handlechange2}>
                    <img src="./img/mark.png" />
                  </div>
                  <div className="delete" onClick={handlechange3}>
                    <img src="./img/delete.png" alt="deletebutton" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
