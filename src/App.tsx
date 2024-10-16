import { Header } from './componnents/Header'
import { NewTarefa } from './componnents/Content'
// import { ListaTarefas } from './componnents/ListTarefas'

import './global.css'
import styles from './App.module.css'

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <NewTarefa />
      </div>
    </div>
  )
}

export default App
