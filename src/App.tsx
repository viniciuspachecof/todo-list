import './global.css';

import { PlusCircle } from '@phosphor-icons/react';

import styles from './App.module.css';
import clipBoard from './assets/clipboard.svg';

import { Header } from './components/Header';
import { Tarefa } from './components/Tarefa';
import { ChangeEvent, FormEvent, useState } from 'react';

function App() {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState<string[]>([]);

  function onChangeTarefas(event: ChangeEvent<HTMLInputElement>) {
    setTarefa(event.target.value);
  }

  function handleFormTarefas(event: FormEvent) {
    event.preventDefault();

    setTarefas([...tarefas, tarefa]);

    setTarefa('');
  }

  function handleDeletarTarefa(tarefaDeletada: string) {
    const listaTarefas = tarefas.filter((tarefa) => tarefa !== tarefaDeletada);

    setTarefas(listaTarefas);
  }

  function exibirMensagemTarefasVazio() {
    if (!tarefas.length) {
      return (      
        <div className={styles.tarefasVazio}>
          <img src={clipBoard} alt="clipboard" />
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      );
    }
  }

  return (
    <>
      <Header />

      <form className={styles.formTarefas} onSubmit={handleFormTarefas}>
        <input
          onChange={onChangeTarefas}
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={tarefa}
        />
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
          {exibirMensagemTarefasVazio()}

          {tarefas.map((tarefa, index) => (
            <Tarefa key={index} content={tarefa} onDeletarTarefa={handleDeletarTarefa}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
