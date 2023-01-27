import React, {useState} from 'react'

function Todolist() {
    const [state, setState] = useState([])
    const [input, setInput] = useState("")

    // console.log(input)
    // console.log(state)

    const addtodolist = (todo) => {
        const newtodo = {
            id: Math.random(),
            text: todo
        }
        setState([...state, newtodo])

        setInput('')
    }

    const deleteitem = (deleteID) => {
        const newstate = state.filter((item) => item.id !== deleteID)

        setState(newstate)
    }

  return (
    <div>
        <input placeholder='enter thing' value={input} onChange={e => setInput(e.target.value)} />
        <button onClick={() => addtodolist(input)} >add</button>

        <ul>
            {state.map((item) =>
                <li key={item.id}>
                    {item.text}
                    <button onClick={()=> deleteitem(item.id)}>delete</button>
                </li>
                
            )}
        </ul>

    </div>
  )
}

export default Todolist