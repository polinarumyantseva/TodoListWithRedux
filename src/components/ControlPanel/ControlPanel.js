import { useDispatch, useSelector } from 'react-redux';
import { selectTodoList, selectInputValue, selectIsSortValue } from '../../store/selectors';
import {
	addToTodoList,
	setInputValue,
	resetInputValue,
	setIsSorted,
	searchTodoItem,
	setTodoList,
} from '../../store/actions';
import styles from './controlPanel.module.css';

export const ControlPanel = () => {
	const dispatch = useDispatch();
	const todosList = useSelector(selectTodoList);
	const todoItemInputValue = useSelector(selectInputValue);
	const isSorted = useSelector(selectIsSortValue);

	const onClear = () => {
		dispatch(resetInputValue);
		dispatch(setIsSorted(false));
		dispatch(setTodoList());
	};

	const addTodoItem = () => {
		dispatch(addToTodoList({ title: todoItemInputValue }));
		dispatch(resetInputValue);
	};

	const searchTodos = () => {
		const foundItem = todosList.filter((item) => item.title.indexOf(todoItemInputValue) !== -1);
		dispatch(searchTodoItem(foundItem));
	};

	const sortTodoList = (list) => list.sort((a, b) => (a.title > b.title ? 1 : -1));
	const sortItem = ({ target }) => {
		dispatch(setIsSorted(target.checked));

		if (target.checked) {
			const sortedTodos = sortTodoList(todosList);
			dispatch(searchTodoItem(sortedTodos));
		} else {
			dispatch(setTodoList());
		}
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
