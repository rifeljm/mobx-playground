import { makeAutoObservable } from "mobx";
import { createContext } from "react";

export const StoreContext = createContext();
export class Store {
  title = "Setcce";
  users = [];
  constructor() {
    makeAutoObservable(this);
  }
}
