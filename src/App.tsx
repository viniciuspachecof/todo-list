import './global.css';
import { PlusCircle } from '@phosphor-icons/react'

import styles from './App.module.css';


import { Header } from './components/Header';

function App() {
  return (
    <>
      <Header />

      <form className={styles.formTarefas} action="">
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>
          <span>Teste</span>
          <PlusCircle size={20} />
          </button>
      </form>
    </>
  );
}

export default App;
