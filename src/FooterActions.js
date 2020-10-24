import { action } from "mobx";
const actions = {};

actions.fetchUsers = (store) => {
  setTimeout(
    action(() => {
      store.users = [
        { id: 1, name: "Arna", lastName: "Cvetlić" },
        { id: 2, name: "Nika", lastName: "Ragva" },
      ];
    }, 300)
  );
};
export default actions;
