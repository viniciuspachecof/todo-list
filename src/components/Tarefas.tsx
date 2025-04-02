import styles from './Tarefas.module.css';
import { Trash } from '@phosphor-icons/react';

export function Tarefas() {
  return (  
    <>
    <div className={styles.conteudoTarefa}>
      <input className={styles.checkbox} type="checkbox" name="" id="" />
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. </p>
      <Trash size={18} className={styles.excluir}/>
    </div>

    <div className={styles.conteudoTarefa}>
      <input className={styles.checkbox} type="checkbox" name="" id="" />
      <p className={styles.tarefaMarcada}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. </p>
      <Trash size={18} className={styles.excluir}/>
    </div>
    </>
  );
}