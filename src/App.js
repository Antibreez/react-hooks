import React, {useState, useCallback} from 'react';
import Main from './Main';
import Alert from './Alert';

export const AlertContext = React.createContext();

function App() {
  const [alert, setAlert] = useState(false)

  return (
    <AlertContext.Provider value={alert}>
      <div className={'container pt-3'}>
        <Alert></Alert>
        <Main></Main>
      </div>
    </AlertContext.Provider>
  );
}

export default App;
