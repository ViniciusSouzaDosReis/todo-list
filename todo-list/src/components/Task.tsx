import { Trash } from 'phosphor-react'
import { useState } from 'react'

import { TaskType } from '../App'
import styles from './Task.module.css'

interface TaskProps extends TaskType {
  handleChecked: () => void
  removeTask: () => void
}

function Task({ title, isConcluded, handleChecked, removeTask }: TaskProps) {
  return (
    <div className={styles.task}>
      <button
        className={`${styles.checkbox} ${isConcluded ? styles.isChecked : ''}`}
        onClick={handleChecked}
      >
        <span />
      </button>
      <span>{title}</span>
      <button onClick={removeTask}>
        <Trash size={24} color='#808080' />
      </button>
    </div>
  );
}

export { Task }