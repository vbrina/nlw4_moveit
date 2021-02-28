import React, { useEffect, useState } from "react";
import Head from "next/head";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

import { Countdown } from "../components/Countdown/Countdown";
import { ChallengeBox } from "../components/ChallengeBox/ChallengeBox";
import { CompletedChallenges } from "../components/CompletedChallenges/CompletedChallenges";
import { ExperienceBar } from "../components/ExperienceBar/ExperienceBar";
import { Profile } from "../components/Profile/Profile";
import { CountdownProvider } from "../contexts/CountdownContext";

import styles from "../styles/pages/UserProfile.module.css";
import { ChallengesProvider } from "../contexts/ChallengeContext";
import { useRouter } from "next/router";
import { message } from "antd";

interface IUserNameProps {
  level: number;
  currentXp: number;
  challengesCompleted: number;
  userResponse: IGitHubUser;
}

export interface IGitHubUser {
  name: string;
  avatar_url: string;
}

const MyProfile = (props: IUserNameProps) => {
  return (
    <ChallengesProvider
      level={props.level}
      currentXp={props.currentXp}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Home | move.it</title>
        </Head>
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile {...props.userResponse} />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    level,
    currentXp,
    challengesCompleted,
    userName,
  } = context.req.cookies;

  const response = await fetch(`https://api.github.com/users/${userName}`);
  const userResponse = await response.json();

  return {
    props: {
      level: Number(level),
      currentXp: Number(currentXp),
      challengesCompleted: Number(challengesCompleted),
      userResponse,
    },
  };
};

export default MyProfile;
