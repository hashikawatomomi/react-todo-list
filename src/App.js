import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

const [todos, setTodos] = useState([]);

const [todoText, setTodoText] = useState(['']);

const onChangeTodoText = (event) => {
  setTodoText(event.target.value);
};

const onClickAdd = () => {
  if (todoText === '') return;
  const newTodoText = [...todos, todoText];
  setTodos(newTodoText);
  setTodoText('');
};

const onClickDelete = (index) => {
  const newTodoText = [...todos];
  newTodoText.splice(index, 1);
  setTodos(newTodoText);
};

  return (
    <>
    <div>
      <div>
        <h1>TODOリスト</h1>
      </div>
      <ul>
        {todos.map((todo ,index) => {
          return  (
          <li key={todo}>
            <p>{todo}</p>
            <button onClick={() => onClickDelete(index)}>削除</button>
          </li>
          );
        })}
      </ul>
    </div>
    <div>
      <p>追加フォーム</p>
      <input type='text' label='タイトル' value={todoText} onChange={onChangeTodoText} />
      <button onClick={onClickAdd}>作成</button>
    </div>
    </>
  );
}

export default App;
