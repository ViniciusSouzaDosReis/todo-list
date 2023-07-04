import { PlusCircle } from 'phosphor-react'

import styles from './App.module.css'
import './global.css'

import clipBoard from './assets/Clipboard.png'

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
        <section className={styles.taskWrapper}>
          <span className={styles.taskWrapperTitleWrapper}>
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
          <div className={styles.empetyContainer}>
            <img src={clipBoard} alt="" />
            <span>
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </span>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
