import styles from './my-new-lib.module.css';

export function MyNewLib() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyNewLib!</h1>
    </div>
  );
}

export default MyNewLib;
