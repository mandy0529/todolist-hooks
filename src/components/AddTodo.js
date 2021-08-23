import {useState} from 'react';
import {ADD} from './action';
import {useDispatch} from '../components/Context';

const AddTodo = () => {
  const [newTodoArray, setNewTodoArray] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({type: ADD, actionSubmit: newTodoArray, completed: false});
    setNewTodoArray('');
  };

  const handleChange = (event) => {
    const {value} = event.target;
    setNewTodoArray(value);
  };

  return (
    <>
      <h1>✏️Today to dos</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={newTodoArray}
          placeholder="write a to do"
          type="text"
        ></input>
        <button>+</button>
      </form>
    </>
  );
};

export default AddTodo;
