import { useState } from "react";

function FormArea() {
  let [num, setNum] = useState(0);
  let clickHandler = () => {
    setNum(function(init) {
      return init + 1;
    });
  }
  return (
    <div>
        <div className="bg-white p-8 rounded-lg shadow-sm">
        <input type="text" placeholder="Type here" className="input w-full bg-[#F9F9F9]" />
        <small className="pb3 text-red-600 hidden">Something Is Wrong</small>
        <input type="text" placeholder="Type here" className="input w-full bg-[#F9F9F9] mt-5" />
        <small className="pb3 text-red-600 hidden">Something Is Wrong</small>
        <input type="text" placeholder="Type here" className="input w-full bg-[#F9F9F9] mt-5" />
        <button className="w-[230px] h-[60px] bg-[#00BD56] mt-7 font-inter font-bold text-[#EEEEEE] rounded-md" onClick={clickHandler}>Add Token {num} </button>
        </div>
        <h2 className="font-inter font-medium text-3xl text-center mt-8">Total Tokens {num}</h2>
    </div>
  )
}

export default FormArea