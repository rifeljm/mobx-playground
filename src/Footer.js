import React from "react";
import { observer } from "mobx-react-lite";
import { StoreContext } from "./Store.js";
import actions from "./FooterActions";

function Footer() {
  const store = React.useContext(StoreContext);
  return <div onClick={() => actions.fetchUsers(store)}>Fetch users!</div>;
}

export default observer(Footer);
