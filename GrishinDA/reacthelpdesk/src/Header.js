import React from "react";
import "./header.css"
import { Link } from "react-router-dom";

function Header(){
    return (
        <div className="container">
  <h1>Help Desk Система</h1>
  <div className="current-time" id="currentDateTime" />
  <div className="nav">
    <div className="tab active" data-tab="formContainer">
      <div>
        <Link to="/"><button>Все заявки</button></Link>
      </div>
      <div>
        <Link to="/application"><button>Создать заявку</button></Link>
      </div>
  </div>
</div>
</div>
    );
}

export default Header;