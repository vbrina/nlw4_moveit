import { createContext, ReactNode, useState } from "react";
import { message } from "antd";
import challenges from "../../challenges.json";
interface IChallengesProviderProps {
  children: ReactNode;
}

interface IChallengesContextData {
  level: number;
  currentXp: number;
  challengesCompleted: number;
  activeChallenge: IChallenge;
  xpToNextLevel: number;
  previousXpToNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
}

interface IChallenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

export const ChallengesContext = createContext({} as IChallengesContextData);

export const ChallengesProvider = ({ children }: IChallengesProviderProps) => {
  const [level, setLevel] = useState(1);
  const [currentXp, setCurrentXp] = useState(0);
  const [challengesCompleted, setChallengedCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [previousXpToNextLevel, setPreviousXpToNextLevel] = useState(0);

  const xpToNextLevel = Math.pow((level + 1) * 4, 2);

  const levelUp = () => {
    setLevel(level + 1);
    setPreviousXpToNextLevel(xpToNextLevel);
  };

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio("/notification.mp3").play();

    message.success("Novo desafio 🎉");
  };

  const resetChallenge = () => {
    setActiveChallenge(null);
  };

  const completeChallenge = () => {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;
    let finalXp = currentXp + amount;

    if (finalXp >= xpToNextLevel) {
      levelUp();
    }

    setCurrentXp(finalXp);
    setActiveChallenge(null);
    setChallengedCompleted(challengesCompleted + 1);
  };

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentXp,
        challengesCompleted,
        activeChallenge,
        xpToNextLevel,
        previousXpToNextLevel,
        levelUp,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};
