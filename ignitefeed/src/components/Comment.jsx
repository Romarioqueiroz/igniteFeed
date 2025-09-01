import { Trash, ThumbsUp } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import Avatar from "./Avatar";
const Comment = () => {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://i.pinimg.com/736x/89/04/b0/8904b095a90fd3fa5fc0ed070b72db63.jpg"
        alt=""
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Romario Queiroz</strong>
              <time dateTime="22 de Agosto às 13h17"> Cerca de 1h atrás </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom, Romário. Parabéns!! 👍</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Comment;
