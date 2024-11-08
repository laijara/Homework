import React from "react";
import "./Application.css";

function Application(){
    return(
        <div className="form-container tab-content active" id="formContainer">
  <form id="ticketForm">
    <label htmlFor="name">Ваше имя:</label>
    <input type="text" id="name" required="" />
    <label htmlFor="issue">Проблема:</label>
    <input type="text" id="issue" required="" />
    <label htmlFor="problem">Описание проблемы:</label>
    <textarea id="problem" required="" defaultValue={""} />
    <label htmlFor="urgency">Приоритет:</label>
    <select id="urgency">
      <option value="низкий">Низкий</option>: Определяет тип документа как
      HTML5. : Указывает, что язык страницы — русский. : Содержит метаданные,
      включая кодировку и заголовок страницы. : Основное содержимое страницы,
      включая заголовок, навигацию и контейнер для заявок.
      <option value="средний">Средний</option>
      <option value="высокий">Высокий</option>
    </select>
    <label htmlFor="date">Дата выполнения:</label>
    <input type="date" id="date" required="" />
    <label htmlFor="time">Время выполнения:</label>
    <input type="time" id="time" required="" />
    <input type="submit" defaultValue="Создать заявку" />
  </form>
  <div className = "photocontent_img" id="photocontent">
    <img src="/Cat.jpg"></img>
    <alt>Котька</alt>
  </div>
</div>

    );
}

export default Application ;