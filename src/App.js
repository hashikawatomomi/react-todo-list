import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

const [todoText, setTodoText] = useState(['']);

const [todos, setTodos] = useState(['']);

const [editTodos, setEditTodos] = useState([''])

const onChangeTodos = (event) => {
  setTodos(event.target.value);
};

const onClickAdd = () => {
  if (todos === '') return;
  const newTodos = [...todoText, todos];
  setTodoText(newTodos);
  setTodos('');
};

const onClickDelete = (index) => {
  const newTodos = [...todoText];
  newTodos.splice(index, 1);
  setTodoText(newTodos);
};

const onClickEdit = (index) => {
  const newTodoText = [...todoText];
  newTodoText.splice(index, 1);

};


  return (
    <>
    <div>
      <div>
        <h1>TODOリスト</h1>
        <select>
          <option>全て表示</option>
          <option>未着手</option>
          <option>進行中</option>
          <option>完了</option>
        </select>
      </div>
      <ul>
        {todoText.map((todo ,index) => {
          return  (
          <li key={todo}>
          <p>{todo}</p>
          <button onClick={() => onClickEdit(index)}>編集</button>
          <button onClick={() => onClickDelete(index)}>削除</button>
        </li>
          );
        })}
      </ul>
    </div>
    <div>
      <p>追加フォーム</p>
      <input type='text' label='タイトル' value={todos} onChange={onChangeTodos} />
      <button onClick={onClickAdd}>作成</button>
    </div>
    <div>
      <p>編集フォーム</p>
            <input type='text' label='新しいタイトル' value={todoText}/>
      <button>編集を保存</button>
      <button>キャンセル</button>
    </div>
    </>
  );
}

export default App;
