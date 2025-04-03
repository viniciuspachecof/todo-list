import styles from './Tarefa.module.css';
import { Trash } from '@phosphor-icons/react';

interface TarefaProps {
  content: string;
  onDeletarTarefa: (tarefa: string) => void;
}

export function Tarefa({ content, onDeletarTarefa}: TarefaProps) {
  function deletarTarefa() {
    onDeletarTarefa(content);
  }

  return (  
    <>
    <div className={styles.conteudoTarefa}>
      <div className={styles.checkbox}>
        <div className={styles.round}>
          <input type="checkbox" id="checkbox-17" />
          <label htmlFor="checkbox-17"></label>
        </div>
      </div>
      <p>{content}</p>
      <button onClick={deletarTarefa}>
        <Trash size={18}/>      
      </button>
    </div>

    {/* <div className={styles.conteudoTarefa}>
      <div className={styles.checkbox}>
        <div className={styles.round}>
          <input type="checkbox" id="checkbox-18" />
          <label htmlFor="checkbox-18"></label>
        </div>
      </div>
      <p className={styles.tarefaMarcada}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. </p>
      <Trash size={18} className={styles.excluir}/>
    </div> */}
    </>
  );
}