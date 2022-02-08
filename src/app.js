window.onload = () => {
  let suits = ["diams", "hearts", "clubs", "spades"];
  let ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  let objOfCards = [];

  let buttonDraw = document.querySelector(".draw-button");
  buttonDraw.addEventListener("click", myFunctionCards);

  function myFunctionCards() {
    objOfCards = [];
    let myCard = document.querySelector(".container");
    if (myCard.childNodes.length !== 0) {
      myCard.innerHTML = "";
    }
    let inputValueCards = parseInt(
      document.getElementById("numberusercards").value
    ); //estoy llamando al valor del input que coloca el usuario
    if (inputValueCards === 0) {
      alert("Coloca un numero mayor a 0");
    } else if (inputValueCards !== 0) {
      for (let i = 0; i < inputValueCards; i++) {
        let objElementsCard = {
          suits: suits[Math.floor(Math.random() * suits.length)],
          ranks: ranks[Math.floor(Math.random() * ranks.length)]
        };
        objOfCards.push(objElementsCard);
      }
      if (myCard.childNodes.length === 0) {
        for (let element of objOfCards) {
          if (element.ranks === 1) {
            element.ranks = "A";
          }
          if (element.ranks === 11) {
            element.ranks = "J";
          }
          if (element.ranks === 12) {
            element.ranks = "Q";
          }
          if (element.ranks === 13) {
            element.ranks = "K";
          }
          let myDiv = document.createElement("div");
          let contentDiv = document.createTextNode(`${element.ranks}`);
          myDiv.className = `card ${element.suits}`;
          myDiv.appendChild(contentDiv);
          myCard.appendChild(myDiv);
        }
      }
    }
  }
  const selectSort = () => {
    let myUl = document.querySelector(".lista-containers-cards-sort");
    if (myUl.childNodes.length !== 0) {
      myUl.innerHTML = "";
    }
    let min = 0;
    while (min < objOfCards.length - 1) {
      if (objOfCards[min].ranks === "A") {
        objOfCards[min].ranks = 1;
      }
      if (objOfCards[min].ranks === "J") {
        objOfCards[min].ranks = 11;
      }
      if (objOfCards[min].ranks === "Q") {
        objOfCards[min].ranks = 12;
      }
      if (objOfCards[min].ranks === "K") {
        objOfCards[min].ranks = 13;
      }
      for (let i = min + 1; i < objOfCards.length; i++) {
        if (objOfCards[i].ranks === "A") {
          objOfCards[i].ranks = 1;
        }
        if (objOfCards[i].ranks === "J") {
          objOfCards[i].ranks = 11;
        }
        if (objOfCards[i].ranks === "Q") {
          objOfCards[i].ranks = 12;
        }
        if (objOfCards[i].ranks === "K") {
          objOfCards[i].ranks = 13;
        }
        if (objOfCards[min].ranks > objOfCards[i].ranks) {
          let aux = objOfCards[min].ranks;
          objOfCards[min].ranks = objOfCards[i].ranks;
          objOfCards[i].ranks = aux;
        }
      }
      min++;
    }

    for (let element of objOfCards) {
      if (element.ranks === 1) {
        element.ranks = "A";
      }
      if (element.ranks === 11) {
        element.ranks = "J";
      }
      if (element.ranks === 12) {
        element.ranks = "Q";
      }
      if (element.ranks === 13) {
        element.ranks = "K";
      }
      let myLi = document.createElement("li");
      let contentLi = document.createTextNode(`${element.ranks}`);
      myLi.className = `card ${element.suits}`;
      myLi.appendChild(contentLi);
      myUl.appendChild(myLi);
    }
    return objOfCards;
  };

  let sortButton = document.querySelector(".sort-button");
  sortButton.addEventListener("click", selectSort);
};
