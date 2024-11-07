import React from "react";
import "./footer.css"

function Footer(){
    return(
    <>
  <div className="ticket-list tab-content" id="ticketList">
    <h2>Все заявки</h2>
    <div id="tickets" />
  </div>
  <div className="calendar-events tab-content" id="calendarEvents">
    <h2>Календарь событий</h2>
    <div id="calendarTickets" />
  </div>
</>

    );
}

export default Footer;