import React from "react";
import { observer } from "mobx-react-lite";

function UserList({ store }) {
  function renderList() {
    return store.users.map((user) => {
      return (
        <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.lastName}</td>
        </tr>
      );
    });
  }

  function renderHeader() {
    return (
      <thead>
        <tr>
          <td>ID</td>
          <td>First Name</td>
          <td>Last Name</td>
        </tr>
      </thead>
    );
  }
  return (
    <table>
      {renderHeader()}
      {renderList()}
    </table>
  );
}

export default observer(UserList);
