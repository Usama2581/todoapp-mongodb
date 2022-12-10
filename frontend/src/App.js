import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {

  const [id, setId] = useState('')
  const [editMode, setEditMode] = useState('')
  const [text, setText] = useState('')
  const [todo, setTodo] = useState([])

  // console.log(todo)

  const addTodo = () => {

      axios.post('https://fair-pear-tadpole-garb.cyclic.app/todo/insert', { text })
        .then(res => console.log(res))
        .catch(err => console.log(err))

      setText("")
    
  
  }

  useEffect(() => {
    axios.get('https://fair-pear-tadpole-garb.cyclic.app/todo/')
      .then(res => setTodo(res.data))
      .catch(err => console.log(err))
  }, [todo])


  const deleteToDo = (id) => {
    //  console.log(id)
    axios.delete(`https://fair-pear-tadpole-garb.cyclic.app/todo/delete/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  const update = (id, text) => {
    setEditMode(true)
    setId(id)
    // console.log(uid)
    setText(text)
  }
  // console.log(id)

  const updateTodo = () => {
    axios.put(`https://fair-pear-tadpole-garb.cyclic.app/todo/update/${id}`, { text })
      .then(res => console.log(res))
      .catch(err => console.log(err))

      setText('')
      setEditMode(false)
  }
  return (

    <div className="parent">

      <div className='child'>
        <div className='head'>
          <h1>Todos-{(todo.length)}</h1>
        </div>
        <div className='inputbox'>
          <input type="text" onChange={e => setText(e.target.value)}
            placeholder='Enter todo here'
            value={text} />
          {
            editMode ?
              <button onClick={updateTodo} className='btn'>Update</button>
              :
              <button onClick={addTodo} className='btn' >Add</button>
          }
        </div>
        <div className='list'>
          {
            todo.map(item => {
              return (
                <div className='todo'>
                  <div>{item.text}</div>
                  <div className='icon'>
                    <i id='bin' class="fa-solid fa-trash" onClick={() => deleteToDo(item._id)}></i>
                    {/* <button onClick={() => update(item._id, item.text)}>Edit</button> */}
                    <i id='edit' onClick={() => update(item._id, item.text)} class="fa-regular fa-pen-to-square"></i>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </div>

  );
}

export default App;
