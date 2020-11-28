import React, { useEffect } from "react";
import "./App.css";
import { observer } from "mobx-react-lite";
import UserList from "./UserList.js";

function App({ store }) {
  useEffect(() => {
    store.users = [
      { id: 1, name: "Arna", lastName: "Cvetlić" },
      { id: 2, name: "Nika", lastName: "Ragva" },
    ];
  }, []);
  return (
    <div className="App">
      <UserList store={store} />
    </div>
  );
}

export default observer(App);
