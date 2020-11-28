import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "./Store.js";
import actions from "./FooterActions";

function Footer() {
  const store = useStore();
  return <div onClick={() => actions.fetchUsers(store)}>Fetch users!</div>;
}

export default observer(Footer);
