import { useState, useEffect, useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengeContext";
import styles from "./Countdown.module.css";

let countdownTimeout: NodeJS.Timeout;

export const Countdown = () => {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  const startCountdown = () => {
    setIsActive(true);
  };

  const resetCountdown = () => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  };

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time, resetCountdown]);

  // Below you'll see all the functions that return JSX
  const showStartStopOrFinishedCountdownButton = () => {
    if (!hasFinished) {
      if (isActive) {
        return (
          <button
            type="button"
            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            onClick={resetCountdown}
          >
            Abandonar Ciclo
          </button>
        );
      }

      return (
        <button
          type="button"
          className={styles.countdownButton}
          onClick={startCountdown}
        >
          Iniciar um Ciclo &nbsp;
        </button>
      );
    }

    return (
      <button disabled className={styles.countdownButton}>
        Ciclo Encerrado &nbsp;
        <img src="icons/check-circle.svg" alt="check-circle" />
      </button>
    );
  };

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      {showStartStopOrFinishedCountdownButton()}
    </div>
  );
};
