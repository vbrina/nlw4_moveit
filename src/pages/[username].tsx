import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import Router from "next/router";

import { Countdown } from "../components/Countdown/Countdown";
import { ChallengeBox } from "../components/ChallengeBox/ChallengeBox";
import { CompletedChallenges } from "../components/CompletedChallenges/CompletedChallenges";
import { ExperienceBar } from "../components/ExperienceBar/ExperienceBar";
import { Profile } from "../components/Profile/Profile";
import { CountdownProvider } from "../contexts/CountdownContext";

import styles from "../styles/pages/UserProfile.module.css";
import { message } from "antd";

interface IGithubUser {
  name: string;
  avatar_url: string;
}

const MyProfile = (user: IGithubUser) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{user.name} | move.it</title>
      </Head>
      <ExperienceBar />
      <CountdownProvider>
        <section>
          <div>
            <Profile {...user} />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<IGithubUser> = async ({
  params,
}) => {
  const { username } = params;
  const response = await fetch(`https://api.github.com/users/${username}`);
  const user = await response.json();

  return {
    props: user,
  };
};

export default MyProfile;
