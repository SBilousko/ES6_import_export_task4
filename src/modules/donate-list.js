export class DonateList {
  constructor(donates) {
    // this.date = new Date();
    // this.amount = donates.amount;
    this.donates = donates;
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

  updateDonates(updatedDonates) {
    const donates = document.querySelector(".donates-container__donates");
    updatedDonates.forEach((donate) => {
      const donateItem = this.#createElement("div", "donate-item");
      donateItem.textContent = `${donate.date} - `;
      const boldText = this.#createElement("b");
      boldText.textContent = `${donate.amount}$`;
      donateItem.append(boldText);
      donatesContainerDonates.append(donateItem);
    });
  }

  render() {
    const donatesContainer = this.#createElement("div", "donates-container");

    const donatesContainerTitle = this.#createElement(
      "h2",
      "donates-container__title"
    );
    donatesContainerTitle.textContent = "Список донатов";

    const donatesContainerDonates = this.#createElement(
      "div",
      "donates-container__donates"
    );

    document.body.append(donatesContainer);
    donatesContainer.append(donatesContainerTitle, donatesContainerDonates);

    this.donates.forEach((donate) => {
      const donateItem = this.#createElement("div", "donate-item");
      donateItem.textContent = `${donate.date} - `;
      const boldText = this.#createElement("b");
      boldText.textContent = `${donate.amount}$`;
      donateItem.append(boldText);
      donatesContainerDonates.append(donateItem);
    });
  }
}

/* 
<div class="donates-container">
  <h2 class="donates-container__title">Список донатов</h2>
  <div class="donates-container__donates">
    <div class="donate-item">
      July 6th 2021, 10:28:49 am - <b>4$</b>
    </div>
    <div class="donate-item">
      July 6th 2021, 10:28:49 am - <b>20$</b>
    </div>
    <div class="donate-item">
      July 6th 2021, 10:28:49 am - <b>3$</b>
    </div>
    <div class="donate-item">
      July 6th 2021, 10:28:49 am - <b>1$</b>
    </div>
  </div>
</div>
*/