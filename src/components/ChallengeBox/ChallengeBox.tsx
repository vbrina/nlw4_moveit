import React, { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengeContext";
import { CountdownContext } from "../../contexts/CountdownContext";
import styles from "./ChallengeBox.module.css";

export const ChallengeBox = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );
  const { resetCountdown } = useContext(CountdownContext);

  const handleChallengeSucceeded = () => {
    completeChallenge();
    resetCountdown();
  };

  const handleChallengeFailed = () => {
    resetChallenge();
    resetCountdown();
  };

  const showActiveChallenge = () => {
    if (activeChallenge) {
      return (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              FALHEI
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
              COMPLETEI
            </button>
          </footer>
        </div>
      );
    }

    return (
      <div className={styles.challengeNotActive}>
        <strong>Finalize um ciclo para receber um desafio</strong>
        <p>
          <img src="icons/level-up.svg" alt="level-up" />
          Avance de level completando desafios.
        </p>
      </div>
    );
  };

  return (
    <div className={styles.challengeBoxContainer}>{showActiveChallenge()}</div>
  );
};
