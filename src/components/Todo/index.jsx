import PropTypes from 'prop-types';
import { useRef, useState } from 'react';

import {
  todo,
  todoHeader,
  todoInput,
  todoAdd,
  todoList,
  todoItem,
  todoClose,
  isChecked,
  error as errorStyle,
} from './style.module.css';

const Todo = ({
  title,
  list: initialList,
}) => {
  const todoInputRef = useRef(null);
  const [list, setList] = useState(initialList);
  const [error, setError] = useState(null);

  const addTodo = () => {
    if (!todoInputRef.current.value) {
      setError('Please enter a list item');
      return;
    }
    if (
      list.some((item) => item.label.toLowerCase() === todoInputRef.current.value.toLowerCase())
    ) {
      setError(`${todoInputRef.current.value} is already on the list`);
      return;
    }
    setError('');
    setList([...list, { checked: false, label: todoInputRef.current.value }]);
  };

  function todoDone(label) {
    const newList = list.map((item) => {
      if (item.label === label) {
        const updatedItem = {
          ...item,
          checked: !item.checked,
        };
        return updatedItem;
      }
      return item;
    });
    setList(newList);
  }

  const todoRemove = (label) => {
    const newList = list.filter((item) => item.label !== label);
    setList(newList);
  };

  return (
    <>
      <article className={todo}>
        <div id="todoHead" className={todoHeader}>
          <h3>{title}</h3>
          <input type="text" className={todoInput} ref={todoInputRef} placeholder="Enter list item..." />
          <span onClick={addTodo} className={todoAdd}>+</span>
        </div>
        {error && <div className={errorStyle}>{error}</div>}
        <ul className={todoList}>
          {list.length
            ? list.map((item) => <li className={item.checked ? isChecked : ''} key={item.label.replace(/ /g, '_')}><span className={` ${todoItem} ${item.checked ? isChecked : ''}`} onClick={() => todoDone(item.label)}>{item.label}</span><span className={todoClose} onClick={() => todoRemove(item.label)}>×</span></li>)
            : <li>No items in list.</li>}
        </ul>
      </article>
    </>
  );
};

export default Todo;

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};
