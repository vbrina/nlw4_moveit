import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

import { ChallengesContext } from "../../contexts/ChallengeContext";
import { IGitHubUser } from "../../pages/[username]";

import { LogoutOutlined } from "@ant-design/icons";

import styles from "./Profile.module.css";

export const Profile = (user: IGitHubUser) => {
  const { level, resetAllStats } = useContext(ChallengesContext);
  const { push } = useRouter();

  useEffect(() => {
    if (!user.name) {
      resetAllStats();
    }
  }, [user]);

  const handleLogoutButtonClick = () => {
    Cookies.remove("userName");
    Cookies.remove("challengesCompleted");
    Cookies.remove("level");
    Cookies.remove("currentXp");

    push("/");
  };

  return (
    <div className={styles.profileContainer}>
      <div>
        {user.name && <img src={user.avatar_url} alt="profilePicture" />}
      </div>
      <div>
        <div>
          <strong>{user.name || "Usuário não encontrado 😞"}</strong>
          <button title="Logout" onClick={handleLogoutButtonClick}>
            <LogoutOutlined style={{ fontSize: "1.3rem" }} />
          </button>
        </div>
        <div>
          <p>
            <img src="icons/level.svg" alt="level" />
            Level {level}
          </p>
        </div>
      </div>
    </div>
  );
};
