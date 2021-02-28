import { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { message } from "antd";
import challenges from "../../challenges.json";
import { LevelUpModal } from "../components/LevelUpModal/LevelUpModal";
interface IChallengesProviderProps {
  children: ReactNode;
  level: number;
  currentXp: number;
  challengesCompleted: number;
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
  closeLevelUpModal: () => void;
  resetAllStats: () => void;
}

interface IChallenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

export const ChallengesContext = createContext({} as IChallengesContextData);

export const ChallengesProvider = ({
  children,
  ...rest
}: IChallengesProviderProps) => {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentXp, setCurrentXp] = useState(rest.currentXp ?? 0);
  const [challengesCompleted, setChallengedCompleted] = useState(
    rest.challengesCompleted ?? 0
  );
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [previousXpToNextLevel, setPreviousXpToNextLevel] = useState(0);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const xpToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Cookies.set("level", String(level));
    Cookies.set("currentXp", String(currentXp));
    Cookies.set("challengesCompleted", String(challengesCompleted));
  }, [level, currentXp, challengesCompleted]);

  const levelUp = () => {
    setLevel(level + 1);
    setPreviousXpToNextLevel(xpToNextLevel);
    setIsLevelUpModalOpen(true);
  };

  const closeLevelUpModal = () => {
    setIsLevelUpModalOpen(false);
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

  const resetAllStats = () => {
    setLevel(1);
    setCurrentXp(0);
    setChallengedCompleted(0);
    setPreviousXpToNextLevel(0);
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
        closeLevelUpModal,
        resetAllStats,
      }}
    >
      {children}
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  );
};
