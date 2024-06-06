import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  // let a = 3;
  // let b = 2;

  // arithmetic operator 
  // let c = a + b;
  // let c = a - b;
  // let c = a * b;
  // let c = a / b;
  // let c = a % b;

  // let c = a ** b ;


  // assignment operator 
  //  a += b
  //  a = a + b
  //  a -= b

  // comparision operator 
  // == equal value 
  // === equal value and data type 

  // != not equal 
  // !== not equal and data type 

  // > greater than
  // < less than 
  // >= greater than or equal
  {/* <= less than or equal   */ }

  // console.log(c)


  // if (condition) {
  //   statement 
  // }

  //  if (condition) {
  //   statement 
  // } else {
  //   staement 
  // }


  // if (condition) {
  //   statement
  // } else if {
  //   statement
  // } else if {
  //   statement
  // } else if {
  //   statement
  // } else {
  //   statement 
  // }


  // if ( a == b) {
  // if ( a === b) {
  // if ( a != b) {
  // if ( a !== b) {
  // if ( a > b) {
  // if ( a < b) {
  // if ( a >= b) {
  // if ( a <= b) {
  //   console.log("True")
  // } else {
  //   console.log("False")
  // }



  // if ( a == b && a > b){
  // if ( a == b || a > b){
  //   console.log("True")
  // } else{
  //   console.log("False")
  // }

  // age => 13 - 19 => Teen 
  // age => 20 - 25 => Adult 

  // mark sheet 

  // let marks = 10;

  // if ( marks == 0 || marks < 16 ){
  //   console.log("Need Improvement")
  // } else {
  //   console.log("False")
  // }


  const course = [
    {
      name: "UI/UX",
      duration: "2.5 month",
      image: "https://mindrisers.com.np/static/Images/courses/UI-ux.webp"
    },
    {
      name: "MERN",
      duration: "2.5 month",
      image: "https://mindrisers.com.np/static/Images/courses/Mernstack.webp"
    },
    {
      name: "QA",
      duration: "2.5 month",
      image: "https://mindrisers.com.np/static/Images/courses/Quality_Assurance.webp"
    },
    {
      name: "Python",
      duration: "2.5 month",
      image: "https://mindrisers.com.np/static/Images/courses/Python_with_Django.webp"
    },
    {
      name: "Graphic",
      duration: "2.5 month",
      image: "https://mindrisers.com.np/static/Images/courses/Graphic-Design.webp"
    },
  ]


  return (
    <>
      {/* <h2>Arithmetic Operator</h2> */}




   


      <div class="grid h-screen bg-gray-800 lg:grid-cols-3 justify-center">
        <div></div>
        <div class="group border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-gray-700 shadow-md">
          <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
            <img class="peer absolute top-0 right-0 h-full w-full object-cover" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b" alt="product image" />
            <img class="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
            <svg class="group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0 pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>
            {/* <!-- <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span> --> */}
          </a>
          <div class="mt-4 px-5 pb-5">
            <a href="#">
              <h5 class="text-xl tracking-tight text-white">Nike Air MX Super 2500 - Red</h5>
            </a>
            <div class="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span class="text-3xl font-bold text-white">$449</span>
                <span class="text-sm text-white line-through">$699</span>
              </p>
            </div>
            <a href="#" class="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart</a
            >
          </div>
        </div>
      </div>



    </>

  )
}

export default App
