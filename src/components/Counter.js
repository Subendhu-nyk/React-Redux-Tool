import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch=useDispatch();
  const counter=useSelector(state=>state.counter);

  const incrementHandler=()=>{
    dispatch({type:'increment'})
  }

  const decrementHnadler=()=>{
    dispatch({type:'decrement'})
  }

  const incrementby5Handler=()=>{
    dispatch({type:'incrementby5'})
  }

  const decrementby5Hnadler=()=>{
    dispatch({type:'decrementby5'})
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHnadler}>Decrement</button>
      </div>
      <div>
        <button onClick={incrementby5Handler}>Increment By 5</button>
        <button onClick={decrementby5Hnadler}>Decrement By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
