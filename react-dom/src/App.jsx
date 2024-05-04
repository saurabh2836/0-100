
import './App.css'
// import { Suspense, lazy} from'react';
// const  Dashboard  = lazy( () => import ('./components/Dashboard'))
// const  Landing = lazy( () => import ('./components/Landing'))
// import {BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom';
import { useState, useContext } from 'react'
import { CounterContext } from './context';
import { useRecoilState, useRecoilValue,RecoilRoot, useRecoilValueLoadable } from 'recoil';
import { countAtom, evenSelector } from './store/atoms/count';
import {todosAtomFamily} from './atoms';

// function App() {
//   return (
//     <div>
//       {/* <div style ={{background:"orange"}}>
//         Hi this is the top bar
//       </div> */}
    
//     <BrowserRouter>
//       <Appbar/>
//       <Routes>
//         <Route path='/dashboard' element={<Suspense fallback={"loading ..."}><Dashboard/></Suspense>} />
//         <Route path='/' element={<Suspense fallback={"loading....."}><Landing/></Suspense>} />
//       </Routes>
//     </BrowserRouter>
//     </div>
//   )
// }

// function Appbar(){
//   const navigate = useNavigate();

//   return  <div>
//         <button onClick={()=>{
//           navigate("/");
//         }}>Landing page </button>
//         <button onClick={()=>{
//           navigate("/dashboard");
//         }}>Dashboard page </button>
  
// </div>
// }

// function App() {
  
//     return (
//         <div>
//           {/* <CounterContext.Provider value={count} >
//           <Count count = {count} setCount={setCount}/>
//           </CounterContext.Provider>
//            */}
//            <RecoilRoot>
//              <Count />
//              <EvenCountRenderer/>
//            </RecoilRoot>
//          </div>
//     )
// }
// function Count(){
//   return <div>
//     <CountRenderer />
//     <Buttons />
//   </div>
// }

// function CountRenderer(){
//   // const count = useContext(CounterContext);
//   const count = useRecoilValue(countAtom);
//   return <div>
//     {count}
//   </div>
// }


// function EvenCountRenderer(){
//   const isEven = useRecoilValue(evenSelector);
//     console.log("even",isEven)
//   return <div>
//     {isEven ? " It is even":null}
//   </div>
// }

// function Buttons(){
//   const [count,setCount] = useRecoilState(countAtom);

//   return <div>
//       <button onClick={()=>{
//         setCount(count +1)
//       }}>Increase</button>
//       <button onClick={()=>{
//         setCount(count -1 )
//       }}>Decrease</button>
//   </div>
// }
function App(){
  return <RecoilRoot>
    <Todo id={1} />
    <Todo id={2} />
    <Todo id={3} />

  </RecoilRoot>
}

// function MainApp(){
//   // const [count,setCount] =useState(0);
//       const [notificationCount,setnotificationCount] = useRecoilState(notifications);
//       // const jobsCount = useRecoilValue(notificationCount);
//       // const notificationCount = useRecoilValue(notificationCount);
//       // const messagingCount= useRecoilValue(notificationCount);
//       const totalNotificationCount = useRecoilValue(totalNotificationSelector);

//       // const totalNotification =useMemo(()=>{
//       //  return networkNotificationCount + jobsCount + notificationCount+messagingCount;
//       // },[networkNotificationCount,jobsCount,notificationCount,messagingCount])
//   return (
//     <>
//           <button>Home</button>
//           <button>My Network ({ notificationCount.network > 100  ? "99+" : notificationCount.network})</button>
//           <button>Jobs({notificationCount.jobs > 100 ? "99+": notificationCount.jobs})</button>
//           <button>Messaging({notificationCount.messaging > 100 ? "99+": notificationCount.messaging})</button>
//           <button>Notification({notificationCount.notifications > 100 ? "99+": notificationCount.notifications})</button>
//           {/* <button onClick={() => {
//               setMessagingCount(messagingCount + 1);
//           }}>Me</button>  */}
//             <button >Me ({totalNotificationCount})</button> 
//     </>
//   )
// }

function Todo({id}){
  const currentTodo =useRecoilValueLoadable(todosAtomFamily(id));
  return (
    <>
      {currentTodo.contents.title}
      {currentTodo.contents.description}
      <br/>
    </>
  )
}
export default App
