// src/Todo.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Todo = () => {
  const [inputValue, setInputValue] = useState('');
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const addItem = () => {
    if (inputValue.trim()) {
      dispatch({ type: 'ADD_ITEM', payload: inputValue });
      setInputValue('');
    }
  };

  const removeItem = (index) => {
    dispatch({ type: 'REMOVE_ITEM', payload: index });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
