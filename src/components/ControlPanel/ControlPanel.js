import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectInputValue } from '../../store/selectors';
import {
	addToTodoList,
	setInputValue,
	resetInputValue,
	searchTodoItem,
	resetTodoList,
	sortTodoList,
} from '../../store/actions';
import styles from './controlPanel.module.css';

export const ControlPanel = () => {
	const dispatch = useDispatch();
	const todoItemInputValue = useSelector(selectInputValue);

	const [isSorted, setIsSorted] = useState(false);

	const onClear = () => {
		dispatch(resetInputValue);
		dispatch(resetTodoList);
		setIsSorted(false);
	};

	const addTodoItem = () => {
		dispatch(addToTodoList({ title: todoItemInputValue }));
		dispatch(resetInputValue);
	};

	const searchTodos = () => {
		dispatch(searchTodoItem(todoItemInputValue));
	};

	const sortItem = ({ target }) => {
		setIsSorted(target.checked);
		dispatch(sortTodoList);
	};

	return (
		<div className={styles['add-new-value-block']}>
			<input
				type="text"
				className={styles.field}
				value={todoItemInputValue}
				onChange={({ target }) => dispatch(setInputValue(target.value))}
				placeholder="Введите название дела"
			/>
			<div className={styles['buttons-container']}>
				<button
					className={styles['submit-button']}
					type="button"
					onClick={addTodoItem}
					disabled={todoItemInputValue === ''}
				>
					Добавить
				</button>
				<button className={styles['submit-button']} type="button" onClick={searchTodos}>
					Найти
				</button>
				<button className={styles['secondary-button']} type="button" onClick={onClear}>
					Сброс
				</button>
				<label className={styles['checkbox-label']}>
					<input type="checkbox" checked={isSorted} name="sort" onChange={sortItem} />
					Отсортировать по алфавиту
				</label>
			</div>
		</div>
	);
};
