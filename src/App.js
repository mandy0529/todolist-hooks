import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import {useState} from './components/Context';
import TodoArray from './components/TodoArray';

const App = () => {
  const {todoArray} = useState();

  return (
    <>
      <AddTodo />
      <TodoList title={todoArray.length !== 0 ? 'To do List' : ''}>
        {todoArray.map(
          (toDo, index) =>
            toDo.text && (
              <TodoArray
                key={toDo.id}
                id={toDo.id}
                text={toDo.text}
                completed={toDo.completed}
                index={index}
              />
            )
        )}
      </TodoList>
    </>
  );
};

export default App;
