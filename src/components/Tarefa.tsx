import { ITarefas } from '../App';
import styles from './Tarefa.module.css';
import { Trash } from '@phosphor-icons/react';

interface TarefaProps extends ITarefas {
  onDeletarTarefa: (tarefa: string) => void;
  onSelecionarTarefa: (tarefa: string) => void;
}

export function Tarefa({
  selecionado,
  descricao,
  onDeletarTarefa,
  onSelecionarTarefa,
}: TarefaProps) {
  function handleDeletarTarefa() {
    onDeletarTarefa(descricao);
  }

  function onChangeSelecionarTarefa() {
    onSelecionarTarefa(descricao);
  }

  return (
    <>
      <div className={styles.conteudoTarefa}>
        <div className={styles.checkbox}>
          <div className={styles.round}>
            <input
              type="checkbox"
              id={'checkbox-' + descricao}
              value={selecionado.toString()}
              onChange={onChangeSelecionarTarefa}
            />
            <label htmlFor={'checkbox-' + descricao}></label>
          </div>
        </div>
        <p className={selecionado ? styles.tarefaMarcada : ''}>{descricao}</p>
        <button onClick={handleDeletarTarefa}>
          <Trash size={18} />
        </button>
      </div>
    </>
  );
}
