import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Grommet } from 'grommet'
import { Ui } from './components/component' ;

function App() {
  const [count, setCount] = useState(0)

  return (
    <Grommet full>
        <Ui/>
    </Grommet>
  )
}

export default App
