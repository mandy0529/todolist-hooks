const TodoList = ({title, children}) => {
  return (
    <>
      <h2>{title}</h2>
      <ul>{children}</ul>
    </>
  );
};

export default TodoList;
