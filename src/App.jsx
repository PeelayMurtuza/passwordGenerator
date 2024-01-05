import { useState, useCallback, useEffect } from 'react'



// // import './App.css'

// function App() {
//   const [length, setLength] = useState(8)
//   const [char, setChar] = useState(false)
//   const [number, setNumber] = useState(false)
//   const [password, setPassword] = useState("")


//   const passwordGenerator = useCallback(()=>{

//     let pass=""

//     let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

//     if(number)str +="0123456789"

//     if(char)str += "_+@#$%^&*()[]{}-" 


//     for (let i = 1; i <= length; i++) {
//       let char=Math.floor(Math.random()*str.length + 1)

//       pass += str.charAt(char); 
//       setPassword(pass)
//     }

//   },[length,char,number,setPassword])

//   useEffect(()=>{
// passwordGenerator()
//   },[length,number,char, passwordGenerator])



//   return (
//     <>
//       <div className='w-full h-screen bg-black flex justify-center items-center'>
//         <div className=" bg-gray-900 h-40 w-[650px] flex justify-center items-center rounded-xl flex-col ">

//           <div className="text-3xl py-5 flex ">

//             <input type="text" value={password} className='  w-[430px] h-12 border border-black rounded-l-xl' readOnly   />
//             <button className='border border-black h-12 pr-4 rounded-r-xl pl-3  bg-blue-800 text-white pb-3 '>copy</button>

//           </div>


//           <div className=" h-12 w-[540px] flex justify-center items-center rounded-xl gap-5 text-red-600">

//             <input type="range" min={1} max={100} value={length} id="range" className='' onChange={(e) => {
//               setLength(e.target.value)
//             }} /><label htmlFor="range">Length {length}</label>

//             <input type="checkbox" id="number" className='pr-10' defaultChecked={number} onChange={() => {
//                setNumber((prev)=>!prev)
//             }} /><label htmlFor="number" >Number</label>


//             <input type="checkbox" id="character" className='pr-10' defaultChecked={char} onChange={() => {
//                 setChar((e)=>!e)
//             }} /><label htmlFor="character">Character</label>

//           </div>

//         </div>
//       </div>
//     </>
//   )
// }

// export default App


// function App() {

//   const [length, setLength] = useState(8)
//   const [character, setCharacter] = useState(false)
//   const [number, setNumber] = useState(false)
//   const [password, setPassword] = useState("")


//   const passwordGenerator = useCallback(()=>{
//     let pass=""

//     let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

//     if(number) str +="0123456789"
//     if(character) str +="_+@#$%^&*()[]{}-"


//     for (let i = 1; i <= length; i++) {

//       let char = Math.floor(Math.random()*str.length +1);
//       pass += str.charAt(char) 
//     }

//     setPassword(pass)

//   },[length,character,number,setPassword])

//   useEffect(()=>{
//     passwordGenerator();
//   },[length,character,number,passwordGenerator])


//   return (
//     <div className=' h-screen w-full flex justify-center items-center flex-col bg-black text-white gap-8'>

//       <input type="text" className='border border-white text-black'value={password} readOnly />

//       <div className="">
//         <input type="range" min={1} max={20} id='range' value={length} onChange={(e) => {
//           setLength(e.target.value)
//         }} /> <label htmlFor="range" >length : {length} </label>

//       </div>

//       <div className="">

//       <input type="checkbox" id="character"  defaultChecked={character} onChange={()=>{
//           setCharacter((e)=>{
//             !e
//           })
//           }}/> <label htmlFor="character" >character </label>



//         <input type="checkbox" id="number"  defaultChecked={number} onChange={()=>{
//           setNumber((e)=>{
//             !e
//           })
//         }}   /> <label htmlFor="number" >Number </label> <br /> <br />

//       </div>


//     </div>
//   )
// }

// export default App;




// function App() {

//   const [text, setText] = useState("")

//   const [add, setAdd] = useState([])


//   function AccessingValue(e) {

//     setText(e.target.value)

//   }

//   function ADD() {

//     setAdd((e) => {
//       return [...e, text]
//     })

//   }

//   return (
//     <>
//       <div className=' h-screen w-full flex justify-center items-center bg-black text-black flex-col gap-5 '>

//         <input type="text" className='pl-2  ' placeholder='Add items ' onChange={AccessingValue} />

//         <button className=' border-[2px] text-white' onClick={ADD} > Click to add</button>
//         <p className='bg-red-500 w-96 h-20 flex justify-center items-center '>
//           {

//             add.map((e) => {
//               return <li className='  flex justify-center items-center flex-col'>{e}</li>
//             })
//           }

//         </p>

//       </div>

//     </>
//   )
// }

// export default App



// import React from 'react'

// function App() {
//   let [num1, setNum1] = useState(0)
//   let [num2, setNum2] = useState(0)
  
//   useEffect(()=>{
//   alert("lol")
//   },[num1])

 
//   return (


//     <>

//       <button className=' w-44 bg-red-500 border' onClick={(() => {
//         setNum1(() => num1 + 1)
//       })}> click me ={num1}</button> <br />

//       <button className=' w-44 bg-red-500' onClick={() => {
//         setNum2(() => num2 + 1)

//       }

//       }> click me ={num2}</button>

//     </>


//   )
// }

// export default App

import Header from './component/Header'
import Main from './component/Main'
import Footer from './component/Footer'

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
      
    </div>
  )
}

export default App




