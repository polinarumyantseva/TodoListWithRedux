import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTodoList } from './store/actions';
import { TodosList, ControlPanel } from './components';
import styles from './app.module.css';

export const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setTodoList());
	}, [dispatch]);

	return (
		<div className={styles.app}>
			<div className={styles.container}>
				<h1 className={styles.title}>Todo list with React Context</h1>
				<ControlPanel />

				<TodosList />
			</div>
		</div>
	);
};
