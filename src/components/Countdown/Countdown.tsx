import { useContext } from "react";
import { CountdownContext } from "../../contexts/CountdownContext";
import styles from "./Countdown.module.css";

export const Countdown = () => {
  const {
    hasFinished,
    isActive,
    minutes,
    seconds,
    resetCountdown,
    startCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

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
