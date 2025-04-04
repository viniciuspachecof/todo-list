import './global.css';

import { PlusCircle } from '@phosphor-icons/react';

import styles from './App.module.css';
import clipBoard from './assets/clipboard.svg';

import { Header } from './components/Header';
import { Tarefa } from './components/Tarefa';
import { ChangeEvent, FormEvent, useState } from 'react';

export interface ITarefas {
  selecionado: boolean;
  descricao: string;
}

function App() {
  const [descricaoTarefa, setDescricaoTarefa] = useState('');

  const [tarefas, setTarefas] = useState<ITarefas[]>([]);

  function onChangeSelecionarTarefa(descricao: string) {    
    const tarefaSelecionada = tarefas.find((tarefa) => tarefa.descricao === descricao);

    if (tarefaSelecionada) {
      tarefaSelecionada.selecionado = !tarefaSelecionada.selecionado;
    }

    setTarefas([...tarefas]);
  }

  function onChangeDescricaoTarefa(event: ChangeEvent<HTMLInputElement>) {
    setDescricaoTarefa(event.target.value);
  }

  function handleFormTarefas(event: FormEvent) {
    event.preventDefault();

    const tarefa = {
      selecionado: false,
      descricao: descricaoTarefa
    }

    setTarefas([...tarefas, tarefa]);

    setDescricaoTarefa('');
  }

  function handleDeletarTarefa(descricao: string) {
    const listaTarefas = tarefas.filter((tarefa) => tarefa.descricao !== descricao);

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

      <div className={styles.wrapper}>
      <form className={styles.formTarefas} onSubmit={handleFormTarefas}>
        <input
          onChange={onChangeDescricaoTarefa}
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={descricaoTarefa}
          required
        />
        <button>
          <span>Criar</span>
          <PlusCircle size={20} />
        </button>
      </form>

      <div className={styles.tarefas}>
        <div className={styles.registrosTarefas}>
          <p className={styles.textoTarefas}>
            Tarefas criadas <span>{tarefas.length}</span>
          </p>
          <p className={styles.textoConcluidos}>
            Concluídas <span>{tarefas.length ? `${tarefas.filter((item) => item.selecionado).length} de ${tarefas.length}` : tarefas.length}</span>
          </p>
        </div>        

        <div className={styles.listaTarefas}>
          {exibirMensagemTarefasVazio()}

          {tarefas.map((tarefa, index) => (
            <Tarefa key={index} {...tarefa} onDeletarTarefa={handleDeletarTarefa} onSelecionarTarefa={onChangeSelecionarTarefa}/>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
