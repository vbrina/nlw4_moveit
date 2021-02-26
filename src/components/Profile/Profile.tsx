import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengeContext";
import styles from "./Profile.module.css";
interface IGithubUser {
  name: string;
  avatar_url: string;
}

export const Profile = (user: IGithubUser) => {
  const { level } = useContext(ChallengesContext);

  return (
    user && (
      <div className={styles.profileContainer}>
        <img src={user?.avatar_url} alt="profilePicture" />
        <div>
          <strong>{user?.name}</strong>
          <p>
            <img src="icons/level.svg" alt="level" />
            Level {level}
          </p>
        </div>
      </div>
    )
  );
};
