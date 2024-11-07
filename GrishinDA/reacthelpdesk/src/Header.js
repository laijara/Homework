import React from "react";
import "./header.css"

function Header(){
    return (
        <div className="container">
  <h1>Help Desk Система</h1>
  <div className="current-time" id="currentDateTime" />
  <div className="nav">
    <div className="tab active" data-tab="formContainer">
      Создать заявку
    </div>
    <div className="tab" data-tab="ticketList">
      Все заявки
    </div>
    <div className="tab" data-tab="calendarEvents">
      Календарь событий
    </div>
  </div>
</div>
    );
}

export default Header;