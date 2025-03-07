import { useSelector } from 'react-redux';
import { TodoItem } from './components/TodoItem/TodoItem';
import { selectTodoList } from '../../store/selectors';
import styles from './components/TodoItem/todoItem.module.css';

export const TodosList = () => {
	const todosList = useSelector(selectTodoList);

	return (
		<>
			{todosList && todosList.length > 0 ? (
				<ul className={styles['todos-list']}>
					{todosList.map(({ id, title }) => (
						<TodoItem key={id} id={id} title={title} />
					))}
				</ul>
			) : (
				<p>Нет данных</p>
			)}
		</>
	);
};
