import React, { useState,useMemo } from "react";

function Counter() {
  const [id1, setid1] = useState(0);
  const [id2, setid2] = useState(0);

  const increment1 = () => {
    setid1(id1 + 1);
  };
  const increment2 = () => {
    setid2(id2 + 1);
  };
  const isEven =useMemo(() => {
    let n = 0;
    while (n < 20000000) n++;
    return id1 % 2 === 0 ? "even" : "odd";
  },[id1]) ;

  return (
    <div>
      <div>
        <button onClick={() => increment1()}>increment id 1-{id1}</button>
        <span>{isEven}</span>
      </div>
      <div>
        <button onClick={() => increment2()}>increment id 2-{id2}</button>
      </div>
    </div>
  );
}

export default Counter;
