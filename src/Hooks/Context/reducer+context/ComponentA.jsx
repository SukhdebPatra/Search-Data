import React,{useContext} from 'react'
import { CountContext } from '../../../App'

const ComponentA = () => {
    const countContext=useContext(CountContext)
  return (
<>
<h1>Component A</h1>
<button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
            <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
</>
  )
}

export default ComponentA