import React, { useState } from "react";
import { Drawer } from "antd";

import "./App.css";
import { Icon } from '@iconify/react';
import Profile from "./assets/profile.svg";

function App() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <section className="header-menu-left">
        <div className="image-profile">
          <img src={Profile} alt="usuário" />
        </div>
        <div className="text-menu-left">
          <h1>Bem vindo, Instituição</h1>
          <h3>Admin</h3>
        </div>
      </section>
      <section className="content-card">
        <div className="site-card-border-less-wrapper">
          <div className="content-title">
            <h1>Tipos de doações esse mês</h1>
          </div>
          <div className="content-bar-progress">
            <div className="data-content">
              <div className="content-30">
                <h2>Tecido</h2>
              </div>
              <div className="content-70">
                <div className="progress-bar"></div>
                <h3>26/30</h3>
              </div>
            </div>
            <div className="data-content">
              <div className="content-30">
                <h2>Orgãos</h2>
              </div>
              <div className="content-70">
                <div className="progress-bar"></div>
                <h3>14/30</h3>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
      <Icon icon="material-symbols:menu" onClick={showDrawer} className="icon-menu-wraper" />
      <Drawer
        title="Título"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
}

export default App;
