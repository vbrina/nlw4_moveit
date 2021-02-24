import React, { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengeContext";
import styles from "./ExperienceBar.module.css";

export const ExperienceBar = () => {
  const { currentXp, xpToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round(currentXp * 100) / xpToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 XP</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span
          className={styles.currentExperience}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentXp} XP
        </span>
      </div>
      <span>{xpToNextLevel} XP</span>
    </header>
  );
};
