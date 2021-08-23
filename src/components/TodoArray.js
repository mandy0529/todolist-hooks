import {useDispatch} from './Context';
import {COM, DEL, UNCOM} from './action';

const TodoArray = ({text, id, index, completed}) => {
  const dispatch = useDispatch();
  return (
    <li key={id}>
      {index + 1} ·
      <span
        style={{
          textDecoration: completed ? 'line-through' : '',
        }}
      >
        {text}
      </span>
      <button onClick={() => dispatch({type: DEL, deleteItem: id})}>❌</button>
      <button
        onClick={() =>
          dispatch({type: completed ? UNCOM : COM, completeItem: id})
        }
      >
        ✅
      </button>
    </li>
  );
};

export default TodoArray;
