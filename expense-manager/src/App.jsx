import { useState } from 'react'
import './App.css'
 import 'bootstrap/dist/css/bootstrap.min.css';
 import ExpenseTracker from './Implement';
 
function App() {
  const [count, setCount] = useState(0)
  const [amt,setAmt]=useState(0)
  
  return (
    <>

      
          <h1>Manage Expense</h1>
      <ExpenseTracker></ExpenseTracker>
    </>
  )
}

export default App
