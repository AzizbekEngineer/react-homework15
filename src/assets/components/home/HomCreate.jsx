import React from "react";
import "./home.scss";

const HomCreate = ({ updateTodos, formData, getValue, createTodos }) => {
  const handleCreateTodos = (e) => {
    e.preventDefault();
    if (formData.id) {
      // update
      updateTodos(formData);
    } else {
      // create
      let date = new Date();
      formData.id = date.getTime();
      formData.time = `${date.getHours()}:${date.getMinutes()}`;
      createTodos(formData);
    }
  };
  return (
    <div className="home container">
      <form onSubmit={handleCreateTodos} action="" className="home__form">
        <h2>
          {formData.id
            ? "Mavjud malumotlarni tahrirlash"
            : "Yangi malumotlar qo'shish "}
        </h2>
        <input
          required
          value={formData.text}
          onChange={(e) => getValue({ text: e.target.value })}
          type="text"
          placeholder="Text"
        />
        <input
          required
          value={formData.title}
          onChange={(e) => getValue({ title: e.target.value })}
          type="text"
          placeholder="Title"
        />
        <select
          required
          value={formData.status}
          onChange={(e) => getValue({ status: e.target.value })}
        >
          <option value="" selected disabled hidden>
            choose
          </option>
          <option value="important">Important</option>
          <option value="average">Average</option>
          <option value="not important">Not Important</option>
        </select>
        <button className="home__form__btn">
          {formData.id ? "Save" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default HomCreate;
