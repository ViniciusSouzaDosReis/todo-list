import { PlusCircle } from 'phosphor-react'

import styles from './App.module.css'

import './global.css'

import { Header } from './components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'


function App() {
  return (
    <>
      <Header />
      <main>
        <form action="" className={styles.formAddTask}>
          <Input placeholder='Adicione uma nova tarefa' />
          <Button>
            Criar
            <PlusCircle size={24} color='#F2F2F2' ></PlusCircle>
          </Button>
        </form>
        <section className={styles.taskContainer}>
          <span className={styles.taskContainerTitleWrapper}>
            <span>
              <strong>Tarefas criadas</strong>
              <span className={styles.counter}>
                0
              </span>
            </span>
            <span>
              <strong>
                Concluídas
              </strong>
              <span className={styles.counter}>
                0
              </span>
            </span>
          </span>
        </section>
      </main>
    </>
  )
}

export default App
