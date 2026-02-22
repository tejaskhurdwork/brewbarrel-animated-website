const cards = [
  {
    image: "./assets/images/3.png",
    name: "Golden Lager",
    cost: "₹149",
    quantity: "500 ml"
  },
  {
    image: "./assets/images/1.png",
    name: "Dark Stout",
    cost: "₹169",
    quantity: "500 ml"
  },
  {
    image: "./assets/images/4.png",
    name: "Hoppy IPA",
    cost: "₹189",
    quantity: "500 ml"
  },
  {
    image: "./assets/images/2.png",
    name: "Wheat Ale",
    cost: "₹139",
    quantity: "500 ml"
  },
  {
    image: "./assets/images/5.png",
    name: "Classic Pilsner",
    cost: "₹129",
    quantity: "500 ml"
  }
];


let cardContainer = document.querySelector(".card-container");
let str = "";
let i = 1;

cards.forEach(elem => {
  if (i == 3) {
    str += `
  <div class="card">
    <img class = "hidden" src="${elem.image}">
    <div class="card-content">
      <h2>${elem.name}</h2>
      <p class="quantity">${elem.quantity}</p>
      <p class="cost">${elem.cost}</p>
      <button>Add to Cart</button>
    </div>
  </div>
  `
  }
  else {
    str += `
    <div class="card">
      <img src="${elem.image}">
      <div class="card-content">
        <h2>${elem.name}</h2>
        <p class="quantity">${elem.quantity}</p>
        <p class="cost">${elem.cost}</p>
        <button>Add to Cart</button>
      </div>
    </div>
    `
  }

  i++;
});

cardContainer.innerHTML = str;


let style = document.createElement("style");
style.innerText = `
.card {
  width: 15rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
  margin-bottom: 2rem;
}

.hidden {
  visibility: hidden;
}

.card img {
  width: 100%;
  height: 28rem;
  object-fit: cover;
}

.card .card-content {
  margin-top: 2rem;
}

.card h2 {
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #00000084;
  margin-top: -3rem;
}

.card .quantity {
  color: #86070780;
  margin-top: 0.5;
}

.card .cost {
  color: #0000004e;
  margin-top: 0.5rem;
}

.card button {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background-color: #000000da;
  margin-top: 0.5rem;
}

/* MEDIA QUERY */
@media (max-width: 1528px), (min-width: 1551px) {
  .card img {
    visibility: visible;
  }
}
  `;

document.head.append(style);