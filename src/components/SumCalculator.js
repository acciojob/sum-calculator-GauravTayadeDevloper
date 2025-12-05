import React from "react";
import { useEffect, useState } from "react";

export default function SumCalculator() {
  const [input, setInput] = useState("");
  const [sum, setSum] = useState(0);

  useEffect(() => {
    if (input !== "") {
      setSum(prev => prev + Number(input));
    }
  }, [input]);

  return (
    <>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>Sum: {sum}</p>
    </>
  );
}
