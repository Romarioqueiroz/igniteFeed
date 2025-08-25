import styles from "./Avatar.module.css";
const Avatar = (props) => {
  return (
    <div>
      <img className={styles.avatar} src={props.src} />
    </div>
  );
};

export default Avatar;
