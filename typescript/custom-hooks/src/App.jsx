import { useDebugValue, useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

// function useTodos(n){

//       const [todos, setTodos ] = useState([])
//       const [loading,setLoading] = useState(true);

//       useEffect(( ) =>{
//        const valueOfInterval =  setInterval(() => {
//           axios.get("https://sum-server.100xdevs.com/todos")
//           .then(res =>{
//             setTodos(res.data.todos);
//             setLoading(false);
//           })},n * 1000)

//           axios.get("https://sum-server.100xdevs.com/todos")
//           .then(res =>{
//             setTodos(res.data.todos);
//             setLoading(false);
//           })
          
//           return ()=>{
//             clearInterval(valueOfInterval);
//           }
//       },[n])

      
//       return {todos,loading};
// }
// function App() {
//   const {todos , loading} = useTodos(5);

//   return (
//     <>
//       {loading ? "Loading Data " : todos.map( (todo,index )=> <Track todo={todo} key={index}/> )}
//     </>
//   )
// }

// function Track({todo}){
  
  
// return <div>
// {todo.title}
// <br/>
// {todo.description}
// </div>
// }
  // const useMousePointer =() => {
  //   const [position , setPosition] = useState({x:0,y:0})
  
  //   const handleMouseMove =(e) =>{
  //     setPosition({x: e.clientX,y:e.clientY});
  //   }

  //   useEffect(()=>{
  //     window.addEventListener('mousemove',handleMouseMove);
  //     return ()=>{
  //       window.removeEventListener('mousemove',handleMouseMove)
  //     };

  //   },[])
  
  //     return position;
  
  // }

  // function App(){
  //   const mousePointer = useMousePointer()
  //   return(
  //     <>
  //         Your mouse position is {mousePointer.x} {mousePointer.y}
  //     </>
  //   )
  // }
  
// function useInterval(callback,delay){
// useEffect(()=>{
//   const intervalId = setInterval(callback,delay)

//   return ()=>{
//   clearInterval(intervalId)
//   }
// },[callback,delay])
// }

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay
console.log("debouncedValue",debouncedValue);
  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
  );
};
const useDebounce = (value, delay) => {
  // State to store the debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set up a timer to update the debounced value after the specified delay
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clean up the timer if the value changes before the delay has passed
    return () => clearTimeout(timerId);
  }, [value, delay]);

  return debouncedValue;
};


export default SearchBar;
