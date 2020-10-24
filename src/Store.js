import { makeAutoObservable } from "mobx";

export default class Store {
  title = "Setcce";
  users = [];
  constructor() {
    makeAutoObservable(this);
  }
}

export const store = new Store();
