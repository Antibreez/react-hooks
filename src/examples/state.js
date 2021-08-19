import React, {useState} from 'react';

function App() {
  const [counter, setCounter] = useState(0)
  const [state, setState] = useState({
    title: 'Title',
    date: Date.now()
  })

  function increment() {
    setCounter(counter + 1)
  }

  function decrement() {
    setCounter(counter - 1)
  }

  return (
    <div>
      <h1>Счетчик: {counter}</h1>
      <button onClick={increment} className='btn btn-success'>Добавить</button>
      <button onClick={decrement} className='btn btn-danger'>Убавить</button>
      <button onClick={() => setState({...state, title: 'New title'})} className='btn btn-primary'>Изменить Title</button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
