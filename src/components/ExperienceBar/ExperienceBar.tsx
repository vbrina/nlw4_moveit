import { Col, Progress, Row, Tooltip } from "antd";
import React, { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengeContext";
import styles from "./ExperienceBar.module.css";

export const ExperienceBar = () => {
  const { currentXp, xpToNextLevel, previousXpToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel = Math.round(currentXp * 100) / xpToNextLevel;

  return (
    <>
      <Row justify="space-between">
        <Col span={2} style={{ marginRight: "-2rem" }}>
          <span className={styles.experience}>{previousXpToNextLevel} XP</span>
        </Col>
        <Col span={18}>
          <Progress
            strokeColor={{
              "0%": "#5965e0",
              "100%": "#4cd62b",
            }}
            percent={percentToNextLevel}
            showInfo={false}
          />
        </Col>
        <Col span={2}>
          <span className={styles.experience}>{xpToNextLevel} XP</span>
        </Col>
      </Row>
      <Row>
        <Col span={10}>
          <div className={styles.currentXp}>
            <span>Experiência atual</span>
            <span>{currentXp} XP</span>
          </div>
        </Col>
      </Row>
    </>
  );
};
