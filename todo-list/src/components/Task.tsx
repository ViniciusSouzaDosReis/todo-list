import { Trash } from 'phosphor-react'

import { TaskType } from '../App'
import styles from './Task.module.css'

interface TaskProps extends TaskType {
  handleChecked: () => void
  removeTask: () => void
}

function Task({ title, isConcluded, handleChecked, removeTask }: TaskProps) {
  return (
    <div className={`${styles.task} ${isConcluded ? styles.taskConluded : ''}`}>
      <button
        className={styles.checkbox}
        onClick={handleChecked}
      >
        <span />
      </button>
      <span>{title}</span>
      <button onClick={removeTask}>
        <Trash size={14} color='#808080' />
      </button>
    </div>
  );
}

export { Task }