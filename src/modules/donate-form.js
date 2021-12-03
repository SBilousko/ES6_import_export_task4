// import App from './app';

export class DonateForm {
  // app = new App();
  // createNewDonate = app.createNewDonate();

  constructor(totalAmount, createNewDonate) {
    this.totalAmount = totalAmount;
    this.createNewDonate = createNewDonate;
    // this.createNewDonate.bind(this);
    // this.createNewDonate = createNewDonate;
  }

  #createElement(tagName, className = "", id = "") {
    const element = document.createElement(tagName);
    if (className) {
      element.className = className;
    }
    if (id) {
      element.id = id;
    }
    return element;
  }

  updateTotalAmount(newAmount) {
    const totalAmountH1 = document.querySelector("#total-amount");
    totalAmountH1.textContent = `${newAmount}$`;
  }

  render() {
    const donateForm = this.#createElement("form", "donate-form");

    const totalAmount = this.#createElement("h1", "", "total-amount");
    totalAmount.textContent = `${this.totalAmount}$`;

    const donateFormInputLabel = this.#createElement(
      "label",
      "donate-form__input-label"
    );
    donateFormInputLabel.textContent = "Введите сумму в $";

    const donateFormDonateInput = this.#createElement(
      "input",
      "donate-form__donate-input"
    );
    donateFormDonateInput.setAttribute("name", "amount");
    donateFormDonateInput.setAttribute("type", "number");
    donateFormDonateInput.setAttribute("max", "100");
    donateFormDonateInput.setAttribute("min", "1");

    const donateFormSubmitButton = this.#createElement(
      "button",
      "donate-form__submit-button"
    );
    donateFormSubmitButton.setAttribute("type", "submit");
    donateFormSubmitButton.textContent = "Задонатить";

    donateFormInputLabel.append(donateFormDonateInput);
    donateForm.append(
      totalAmount,
      donateFormInputLabel,
      donateFormSubmitButton
    );
    document.body.append(donateForm);

    donateForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const newDonate = {
        amount: donateFormDonateInput.value,
        date: new Date(),
      };
      this.createNewDonate(newDonate);
      donateFormDonateInput.value = "";
    });
  }
}