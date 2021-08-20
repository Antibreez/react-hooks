import React, {useState, useEffect, useRef} from 'react';

function App() {
  //const [renderCount, setRenderCount] = useState(1)
  const [value, setValue] = useState('initial')
  const renderCount = useRef(1)
  const inputRef = useRef(null)
  const prevValue = useRef('')

  const focus = () => {
    inputRef.current.focus()
  }

  useEffect(() => {
    //setRenderCount(prev => prev + 1)
    renderCount.current++;
  })

  useEffect(() => {
    console.log('value changed');
    prevValue.current = value
    console.log(prevValue.current);
  }, [value])

  return (
    <div>
      <h1>Количество рендеров: {renderCount.current}</h1>
      <h1>Предыдущий value: {prevValue.current}</h1>
      <input ref={inputRef} onChange={e => setValue(e.target.value)} value={value}></input>

      <button onClick={focus} className='btn btn-success'>Клик</button>
    </div>
  );
}

export default App;
