import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengeContext";
import styles from "./CompletedChallenges.module.css";

export const CompletedChallenges = () => {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.completesChallengesContainer}>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
};
