import React, { memo, useMemo } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import "./home.scss";

const HomeManage = ({ data, deleteTodos, updateValus }) => {
  console.log(data);

  let total = useMemo(() => {
    return data.length;
  }, []);
  let todosItems = data?.map((el) => (
    <tr key={el.id}>
      <td>{el.text}</td>
      <td>{el.title}</td>
      <td>{el.status}</td>
      <td>{el.time}</td>
      <td>
        <button className="data__btn" onClick={() => updateValus(el)}>
          <FaEdit className="edit__btn" />{" "}
          <span className="edit__btn">Edit</span>
        </button>
      </td>
      <td>
        <button className="data__btn" onClick={() => deleteTodos(el.id)}>
          <MdDeleteForever className="delete__btn" />{" "}
          <span className="delete__btn">Delete</span>
        </button>
      </td>
    </tr>
  ));
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Text</th>
            <th>Title</th>
            <th>Status</th>
            <th>Time</th>
            <th>Edit</th>
            <th>Delet</th>
          </tr>
        </thead>
        <tbody>{todosItems}</tbody>
      </table>
    </div>
  );
};

export default memo(HomeManage);
