import { useState ,useMemo, useEffect, useCallback , memo} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



// function App() {
//         const [title, settitle] = useState("My name is saurabh")
//         function updateTitle(){
//           settitle("my name is "+Math.random())
//         }

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         {/* <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button> */}
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//       <button onClick={updateTitle}>Update The title</button>
//       <Header title={title}></Header>
//       <Header title={title}></Header>
//       <Header title={"saurabh"}></Header>
//       <Header title={"saurabh"}></Header>
//     </>
//   )
// }

// function App(){
//      return <div>
//       <CardWrapper innerComponent={<TextComponent/>}/>
//       <CardWrapper innerComponent={<TextComponent/>}/>

//      </div>
// }

// function CardWrapper({innerComponent}) {
//   return <div style={{border:"2px solid black",padding:20}}> {innerComponent}</div>
// }

// function TextComponent(){
//   return <div>
//     hi there 1
//   </div>
// }


// function Header({title}){
//   return <div>
//     <h1>{title}</h1>
//   </div>
// }


function App(){
  // const [counter,setCounter] = useState(0);
  // const [inputValue,setInputValue] = useState(0);
  const [count,setCount] = useState(0);


  /*
    with help ot useMemo functionality of react 
  */
// let count = useMemo(()=>{
// console.log("callled from memo");
//   let finalCount =0;
//   for(let i=1;i<=inputValue;i++){
//     finalCount = finalCount +i;
//   }
//   return finalCount
// },[inputValue]);


  /*
    with help ot useEffect functionality of react 
  */
// useEffect (() =>{
//     let count = 0;
//       for(let i=1;i<=inputValue;i++){
//         count = count + i;
//       }
//      setCount(count);
// },[inputValue])

//   return <div>
//     <input onChange={function(e){
//       setInputValue(e.target.value);
//     }} placeholder={"Find sum of 1 to n"}/>
//     <br/>
//     Sum of 1 to {inputValue} is {count}
//     <br/>
//     <button onClick={()=> {
//       setCounter(counter +1 );
//     }}>Counter {counter}</button>
//   </div>

 function inputFunction(){
    console.log("Hi there");
 }

// const inputFunction  = useCallback(()=>{
//     console.log("hi there")
// },[])

 return <div>
  <ButtonComponent inputFunction={inputFunction} />
  <button onClick={()=>{
    setCount(count +1);
  }} >Click Me {count}</button>
 </div>
}

const ButtonComponent = memo( ( { inputFunction}) => {
      console.log("child render");
      return <div>
        <button>Button Clicked</button>
      </div>
});




export default App
