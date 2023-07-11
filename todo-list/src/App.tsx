import { useState, ChangeEvent, FormEvent } from 'react'
import { PlusCircle } from 'phosphor-react'

import styles from './App.module.css'
import './global.css'

import clipBoard from './assets/Clipboard.png'

import { Header } from './components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { Task } from './components/Task'

export interface TaskType {
  title: string,
  isConcluded: boolean
}

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [task, setTask] = useState({
    title: '',
    isConcluded: false
  })

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setTask({ ...task, ['title']: event.target.value })
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setTasks(oldTasks => [...oldTasks, task])
    setTask({
      title: '',
      isConcluded: false
    })
  }

  function removeTask(positionItem: number) {
    const tasksWithoutItem = tasks.slice(0, positionItem).concat(tasks.slice(positionItem + 1));
    setTasks(tasksWithoutItem)
  }

  const handleCheck = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isConcluded = !updatedTasks[index].isConcluded;
    setTasks(updatedTasks);
  };

  const dontHaveTasks = tasks.length === 0

  const sortedTasks = tasks.sort((a, b) => {
    if (a.isConcluded && !b.isConcluded) {
      return 1; // Move concluded tasks to the end
    } else if (!a.isConcluded && b.isConcluded) {
      return -1; // Move unconcluded tasks to the beginning
    }
    return 0;
  });

  return (
    <>
      <Header />
      <main>
        <form action="" className={styles.formAddTask} onSubmit={e => handleSubmit(e)}>
          <Input placeholder='Adicione uma nova tarefa' value={task.title} onChange={e => handleChange(e)} />
          <Button>
            Criar
            <PlusCircle size={15} color='#F2F2F2' ></PlusCircle>
          </Button>
        </form>
        <section className={styles.taskWrapper}>
          <span className={styles.taskWrapperTitleWrapper}>
            <span>
              <strong>Tarefas criadas</strong>
              <span className={styles.counter}>
                {tasks.length}
              </span>
            </span>
            <span>
              <strong>
                Concluídas
              </strong>
              <span className={styles.counter}>
                {
                  tasks.filter(task => task.isConcluded === true).length
                }
                ‎
                de
                ‎
                {
                  tasks.length
                }
              </span>
            </span>
          </span>
          {dontHaveTasks
            ? <div className={styles.empetyContainer}>
              <img src={clipBoard} alt="" />
              <span>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </span>
            </div>
            : <div className={styles.tasksContainer}>
              {
                sortedTasks.map((item, index) => (
                  <Task
                    key={`${item.title}_${index}`}
                    title={item.title}
                    isConcluded={item.isConcluded}
                    handleChecked={() => handleCheck(index)}
                    removeTask={() => removeTask(index)}
                  />
                ))
              }
            </div>
          }
        </section>
      </main>
    </>
  )
}

export default App
