import styles from "./Profile.module.css";

export const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/vbrina.png" alt="profilePicture" />
      <div>
        <strong>Vitor Brina</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
        </p>
      </div>
    </div>
  );
};
