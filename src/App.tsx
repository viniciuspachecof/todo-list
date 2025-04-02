import './global.css';

import { PlusCircle } from '@phosphor-icons/react';

import styles from './App.module.css';
import clipBoard from './assets/clipboard.svg';

import { Header } from './components/Header';
import { Tarefas } from './components/Tarefas';

function App() {
  return (
    <>
      <Header />

      <form className={styles.formTarefas} action="">
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>
          <span>Criar</span>
          <PlusCircle size={20} />
        </button>
      </form>

      <div className={styles.tarefas}>
        <div className={styles.registrosTarefas}>
          <p className={styles.textoTarefas}>
            Tarefas criadas <span>0</span>
          </p>
          <p className={styles.textoConcluidos}>
            Concluídas <span>0</span>
          </p>
        </div>
        <div className={styles.listaTarefas}>
          <div className={styles.tarefasVazio}>
            <img src={clipBoard} alt="clipboard" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>

          <Tarefas />   
        </div>
      </div>
    </>
  );
}

export default App;
