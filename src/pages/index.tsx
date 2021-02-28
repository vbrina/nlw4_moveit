import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Cookies from "js-cookie";

import { Row, Col } from "antd";
import { GithubOutlined, RightOutlined } from "@ant-design/icons";

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  const [username, setUsername] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const { push } = useRouter();

  const handleLoginButton = () => {
    Cookies.set("userName", username);
    push(`/${username}`);
  };

  useEffect(() => {
    if (!Cookies.get("userName")) {
      return;
    }

    setUsername(Cookies.get("userName"));
  }, [setUsername]);

  useEffect(() => {
    if (!username) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [username]);

  return (
    <div className={styles.container}>
      <div>
        <img src="/logo-background.svg" alt="" />
      </div>
      <div className={styles.loginContainer}>
        <Head>
          <title>login | move.it</title>
        </Head>
        <section>
          <div>
            <img src="/white-logo-full.svg" />
            <strong>Seja bem-vindo(a)!</strong>
            <div className={styles.gitTitleStyle}>
              <Row justify="start">
                <Col span={4}>
                  <GithubOutlined style={{ fontSize: "3rem" }} />
                </Col>
                <Col span={18}>
                  <span>
                    Digite abaixo o seu username no GitHub para começar.
                  </span>
                </Col>
              </Row>
            </div>
            <div className={styles.inputAndButtonDiv}>
              <input
                placeholder="Digite seu username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onSubmit={handleLoginButton}
              />
              <button
                type="submit"
                onClick={handleLoginButton}
                disabled={isButtonDisabled}
              >
                <RightOutlined />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
