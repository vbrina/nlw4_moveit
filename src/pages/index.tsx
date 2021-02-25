import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { Row, Col, Input, Button } from "antd";
import { GithubOutlined, RightOutlined } from "@ant-design/icons";

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  const [username, setUsername] = useState("");
  const { push } = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>login | move.it</title>
      </Head>
      <section>
        <div />
        <div>
          <img src="/white-logo-full.svg" />
          <strong>Seja bem-vindo(a)!</strong>
          <div className={styles.gitTitleStyle}>
            <Row justify="start">
              <Col span={4}>
                <GithubOutlined style={{ fontSize: "3rem" }} />
              </Col>
              <Col span={18}>
                <span>Digite abaixo o seu usuário GitHub para começar.</span>
              </Col>
            </Row>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Input
              size="large"
              allowClear
              placeholder="Digite seu usuário"
              style={{
                width: "80%",
                borderRadius: "10px",
                height: "9vh",
              }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button
              style={{
                width: "15%",
                borderRadius: "10px",
                height: "9vh",
              }}
              size="large"
              onClick={() => push(`/${username}`)}
            >
              <RightOutlined />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
