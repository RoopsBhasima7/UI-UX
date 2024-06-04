import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let a = 1;
  let b = 2;
  // Assignment Operator 
  // c = a + b;
  // c = a - b;
  // c = a * b;
  // c = a / b;
  // c = a % b;
  // a += b;
  // let c = a ** b;
  // a -= b;

  //Comparison operator
  // ==equal value
  // === equal value and data type
  // != not equal
  // !== not equal and data type 
  // > greater than 
  // < less than
  // >= greater than or equal 
  // <= less than or equal 
  // console.log(c)

  // if(condition){
  //   statement
  // }

  // if(condition){
  //   statement
  // }
  // else(condition){
  //   statement
  // }

  // if(condition){
  //   statement
  // }
  // elseif(condition){
  //   statement
  // }
  // elseif(condition){
  //   statement
  // }
  // elseif(condition){
  //   statement
  // }
  // else {
  //   statement
  // }

  // if(a>b){
  //   console.log("True")
  // } else{
  //   console.log("False")
  // }

  // if(a == b || a > b){
  //   console.log("True")
  // }
  // else{
  //   console.log("False")
  // }

  // age=> 13 - 19 = Teen
  // age=> 20 - 25 = Adult

  // mark sheet
  // 0 - 35 => D
  // 40 - 
  let marks = 30;
  if( marks == 0 || marks < 16){
    console.log("Needs Improvement")
  }
  else if( marks == 17 || marks < 25){
    console.log("Pass")
  }
  else if( marks == 26 || marks < 28){
    console.log("Average")
  }
  else if( marks == 29 || marks < 30){
    console.log("Above Average")
  }
  else if( marks == 31 || marks < 35){
    console.log("Good")
  }
  return (
    <>
      <h2>Arithematic Operator</h2>
    </>
  )
}

export default App
