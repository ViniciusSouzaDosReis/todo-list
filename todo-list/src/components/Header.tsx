import styles from './Header.module.css'

import todoLogo from '../assets/Logo.png'

function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="" />
    </header>
  )
}

export { Header }