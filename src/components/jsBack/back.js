import React, {useState} from 'react';
const [valueCount, setCount] = useState(0);

const [valueCount2, setCount2] = useState(0);
console.log(useState(0))
const changeCounter = ()=>{
  setCount(valueCount +1);
  setCount2(valueCount2 + 10000000000000);  
  
}