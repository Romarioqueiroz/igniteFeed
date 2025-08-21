import styles from "./Sidebar.module.css";
const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1519789110007-0e751882be76?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

      <div className={styles.profile}>
        <strong>Romario Queiroz</strong>
        <span>Web developer</span>
      </div>
      <footer>
        <a href="#">Editar seu perfil</a>
      </footer>
    </aside>
  );
};

export default Sidebar;
