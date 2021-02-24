import { createContext, ReactNode, useState } from "react";
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
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
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

  const xpToNextLevel = Math.pow((level + 1) * 4, 2);

  const levelUp = () => {
    setLevel(level + 1);
  };

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
  };

  const resetChallenge = () => {
    setActiveChallenge(null);
  };

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentXp,
        challengesCompleted,
        activeChallenge,
        xpToNextLevel,
        levelUp,
        startNewChallenge,
        resetChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};
