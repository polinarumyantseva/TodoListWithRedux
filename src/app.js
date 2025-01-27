import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTodoList } from './store/actions';
import { selectTodoList, selectIsSortValue } from './store/selectors';
import { TodosList, ControlPanel } from './components';
import styles from './app.module.css';

export const App = () => {
	const dispatch = useDispatch();
	const todosList = useSelector(selectTodoList);
	const isSorted = useSelector(selectIsSortValue);

	useEffect(() => {
		if (!isSorted) dispatch(setTodoList());
	}, [dispatch, isSorted]);

	return (
		<div className={styles.app}>
			<div className={styles.container}>
				<h1 className={styles.title}>Todo list with React Context</h1>
				<ControlPanel />

				{todosList && todosList.length > 0 ? <TodosList /> : <p>Нет данных</p>}
			</div>
		</div>
	);
};
