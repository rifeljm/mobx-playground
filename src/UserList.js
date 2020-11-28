import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "./Store.js";

function UserList() {
  const store = useStore();

  function renderList() {
    return store.users.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.lastName}</td>
        </tr>
      );
    });
  }

  function renderHeader() {
    return (
      <tr>
        <td>ID</td>
        <td>First Name</td>
        <td>Last Name</td>
      </tr>
    );
  }
  return (
    <table>
      <thead>{renderHeader()}</thead>
      <tbody>{renderList()}</tbody>
    </table>
  );
}

export default observer(UserList);
