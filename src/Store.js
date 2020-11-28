import React from "react";
import { makeAutoObservable } from "mobx";
import { createContext } from "react";

export const StoreContext = createContext();

export const useStore = () => {
  return React.useContext(StoreContext);
};

export class Store {
  title = "Setcce";
  users = [];
  constructor() {
    makeAutoObservable(this);
  }
}
