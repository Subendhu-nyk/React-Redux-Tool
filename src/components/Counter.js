import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { counterAction } from '../store/counter';
const Counter = () => {
  // The useSelector hook is used to access the state from the Redux store, and useDispatch is used to dispatch actions.
  const dispatch=useDispatch();
  const counter=useSelector(state=>state.counter.counter);
  const show=useSelector(state=>state.counter.showCounter)

  // const incrementHandler=()=>{
  //   dispatch({type:'increment'})
  // }
  const incrementHandler=()=>{
    dispatch(counterAction.increment())
  }

  // const decrementHnadler=()=>{
  //   dispatch({type:'decrement'})
  // }
  const decrementHnadler=()=>{
    dispatch(counterAction.decrement())
  }

  // const incrementby5Handler=()=>{
  //   dispatch({type:'incrementby5',amount:5})
  // }
  const incrementby5Handler=()=>{
    dispatch(counterAction.increase({ payload: 5 }))
  }

  // const decrementby5Hnadler=()=>{
  //   dispatch({type:'decrementby5',amount:5})
  // }
  const decrementby5Hnadler=()=>{
    dispatch(counterAction.decrease({ payload: 5 }))
  }


  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
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
