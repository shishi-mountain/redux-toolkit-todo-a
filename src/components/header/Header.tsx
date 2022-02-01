import React from "react";
import styles from "./Header.module.scss";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const Header: React.FC = () => {
  return (
    <div className={styles.root}>
      <AppBar position="static" className={styles.app_bar}>
        <Toolbar className={styles.tool_bar}>
          <Typography variant="h6" component="div">
            Redux tool todo!!
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
