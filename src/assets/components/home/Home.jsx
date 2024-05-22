import React, { useCallback, useEffect, useState } from "react";
import HomCreate from "./HomCreate";
import HomeManage from "./HomeManage";

let initialState = {
  id: null,
  text: "",
  title: "",
  status: "",
  time: "",
};

const Home = () => {
  const [formData, setFormData] = useState(initialState);
  const [data, setData] = useState(() => {
    const saveData = localStorage.getItem("save");
    return saveData ? JSON.parse(saveData) : [];
  });

  useEffect(() => {
    localStorage.setItem("save", JSON.stringify(data));
  }, [data]);
  let createTodos = useCallback(
    (todos) => {
      setData((prev) => [...prev, todos]);

      setFormData(initialState);
    },
    [data]
  );

  let deleteTodos = useCallback(
    (id) => {
      let filterData = data?.filter((el) => el.id !== id);
      setData(filterData);
    },
    [data]
  );

  let updateTodos = useCallback(
    (payload) => {
      console.log(payload);
      let index = data?.findIndex((el) => el.id === payload.id);
      data?.splice(index, 1, payload);
      setData([...data]);
      setFormData(initialState);
    },
    [data]
  );

  let getValue = useCallback((payload) => {
    setFormData((p) => ({ ...p, ...payload }));
  }, []);

  let updateValus = useCallback((payload) => {
    setFormData(payload);
  }, []);
  return (
    <div>
      <HomCreate
        formData={formData}
        createTodos={createTodos}
        updateTodos={updateTodos}
        getValue={getValue}
      />
      <HomeManage
        updateValus={updateValus}
        deleteTodos={deleteTodos}
        data={data}
      />
    </div>
  );
};

export default Home;
