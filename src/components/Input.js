import React, { useEffect, useState } from "react";

const Input = (props) => {
  //   .log(props.color);
  const handlechange = () => {
    if (name) {
      props.setState([...props.state, { name: name, count1: props.count }]);
      setName("");
    }
  };

  const [name, setName] = useState("");
  return (
    <div className="forcolor">
      <div className="divforwidth">
        <div className="divinput">
          <div className="divimg">
            <img src="./img/mark.png" />
          </div>
          <input
            required
            id="hi"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="button" onClick={handlechange}>
          <img src="./img/plus.png" />
        </div>
      </div>
    </div>
  );
};

export default Input;
