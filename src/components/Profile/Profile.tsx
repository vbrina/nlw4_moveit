import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengeContext";
import styles from "./Profile.module.css";

export const Profile = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/vbrina.png" alt="profilePicture" />
      <div>
        <strong>Vitor Brina</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </div>
  );
};
