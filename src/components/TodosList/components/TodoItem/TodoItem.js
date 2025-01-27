import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodoItem, updateTodoItem } from '../../../../store/actions';
import styles from './todoItem.module.css';

export const TodoItem = ({ id, title }) => {
	const dispatch = useDispatch();

	const [editItemId, setEditItemId] = useState(null);
	const [valueForEdit, setValueForEdit] = useState('');

	const editTodoItem = (id, title) => {
		setValueForEdit(title);
		if (id !== editItemId) {
			setEditItemId(id);
		} else {
			setEditItemId(null);
			dispatch(updateTodoItem({ id, title: valueForEdit }));
		}
	};

	const deleteItem = (id) => {
		dispatch(deleteTodoItem({ id }));
	};

	return (
		<li key={id} className={styles['todos-list-item']}>
			{editItemId === id ? (
				<input
					className={styles.field}
					defaultValue={title}
					onChange={({ target }) => setValueForEdit(target.value)}
				/>
			) : (
				title
			)}
			<div className={styles['buttons-container']}>
				<button
					className={styles['edit-button'] + (editItemId === id ? ' ' + styles.edit : '')}
					type="button"
					onClick={() => editTodoItem(id, title)}
				></button>
				<button className={styles['delete-button']} type="button" onClick={() => deleteItem(id)}>
					X
				</button>
			</div>
		</li>
	);
};
