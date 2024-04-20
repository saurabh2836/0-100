


/*
todos =[ {
    "title":"Going to Gym",
    "Description":"Doing BechPress",
}]
*/


export function Todos({todos}){
    return <div>
        {todos.map(function(todo,index)  {
            return <div>
                            <h1 key={index}>{todo.title}</h1>
                            <h2 key={index} >{todo.description}</h2>
                            <button key={index}>{todo.completed == true ? "Completed":"Complete" }</button>
                    </div>
                })}
    </div>
  
}