import React from "react";

import "./App.css";

import { Icon } from "@iconify/react";
import Profile from "./assets/profile.svg";

function App() {
  return (
    <div className="body">
      <div className="content">
        <div className="submenu">
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
        </div>
        <article className="article-lateral">
          <div className="content-icons first">
            <h1>Menu</h1>
            <Icon icon="ep:menu" className="icons" />
          </div>
          <div className="content-icons">
            <h2>Admin</h2>
            <Icon icon="mdi:user-circle-outline" className="icons" />
          </div>
          <div className="content-icons">
            <h2>Adicionar Instituição</h2>
            <Icon
              icon="material-symbols:home-outline-rounded"
              className="icons"
            />
          </div>
          <div className="button-article">
            <button>
              <strong>Sair</strong>
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}

export default App;
