import { DonateForm } from "./donate-form";
import { DonateList } from "./donate-list";

// const mockDonates = [
//   { amount: 4, date: new Date() },
//   { amount: 20, date: new Date() },
//   { amount: 3, date: new Date() },
//   { amount: 1, date: new Date() },
// ];

export default class App {
  #formBlock;
  #donateList;
  constructor() {
    this.#formBlock = new DonateForm();
    this.#donateList = new DonateList(mockDonates);
  }

  state = {
    donates: [],
    totalAmount: 0,
  };

  run() {
    const formBlockHTML = this.#formBlock.render();
    const donatesListHTML = this.#donateList.render();
  }

  createNewDonate(newDonate) {
    this.state.donates.push(newDonate);
    this.state.totalAmount += newDonate.amount;
    this.#donateList.updateDonates(this.state.donates);
    this.#formBlock.updateTotalAmount(this.state.totalAmount);
  }
}