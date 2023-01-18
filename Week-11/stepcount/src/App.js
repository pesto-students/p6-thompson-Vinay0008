import { useSelector, useDispatch } from 'react-redux'
import { increment, reset } from './logic/countSlice'

import './App.css'

const App = () => {

  const { count } = useSelector((state) => state.count)

  const dispatch = useDispatch()

  return (
    <div className="container">
      <p>You have walked {count} steps today</p>
      <button
        className="btn addBtn"
        onClick={() => dispatch(increment())}
      >
        Add a Step
      </button>
      <button 
        className="btn resetBtn"
        onClick={() => dispatch(reset())}
      >
        Reset Steps
      </button>
    </div>
  );
}

export default App;
