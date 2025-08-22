import styles from "./Post.module.css";
const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://i.pinimg.com/736x/89/04/b0/8904b095a90fd3fa5fc0ed070b72db63.jpg"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Diego Fernandes</strong>
            <span>Web developer</span>
          </div>
        </div>

        <time datetime="22 de Agosto às 13h17"> Publicado há 1h </time>
      </header>
      <div className={styles.content}>
        <p>
          Acabei de atualizar meu portfólio com um novo projeto que me deixou
          muito orgulhoso. 🚀
        </p>

        <p>
          Foi um trabalho onde pude aplicar bastante criatividade e técnicas que
          venho estudando nos últimos meses. Se puderem dar uma olhada e deixar
          um feedback, ficarei muito feliz! 💡✨
        </p>

        <p>
          <a href=""> #Rocketseat #novoprojeto </a>
        </p>
      </div>
    </article>
  );
};

export default Post;
