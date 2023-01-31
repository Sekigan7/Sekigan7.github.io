//                      Vamos a crear las funciones tanto de los ID para que sean mostrados inclusive su informacion,
//                                        Puedan ser almacenados los items dentro del carrito
//                        y el carrito de compras en el cual va a calcular el valor total de los productos + el iva 

const storegamesCart = (games) => {
  localStorage.setItem("cart", JSON.stringify(games));
}

const loadgamesCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
}


const loadgame = () => {
  return JSON.parse(localStorage.getItem("game"));
}

const seegame = (id) => {
  const game = searchgame(id);
  localStorage.setItem("game", JSON.stringify(game));
  location.href = "game-description.html";
}
const gameInCart = (id) => {
  const cart_games = loadgamesCart();

  return cart_games.some(item => item.id === id); 
}

const addToCart = (id) => {
  const cart_games = loadgamesCart();

  if (gameInCart(id)) {
    let position = cart_games.findIndex(item => item.id === id);
    cart_games[position].quantity += 1;
    swal.fire({
      title:"GENIAL!",
      text:"Se agrego un producto correctamente",
      icon:"success",
      width: "30%",
      timer: 1000,
      timerProgressBar: true,
      toast: true,
      position: "top"
  });
  }
  else {
    const game = games.find(item => item.id === id);
    game.quantity = 1;
    cart_games.push(game);
  }

  storegamesCart(cart_games);
  renderCartButton();
}


const emptyCart = () => {
  localStorage.removeItem("cart");
  rendergamesCart();
  renderCartButton();
}

const successCart = () => {
  localStorage.removeItem("cart");
  rendergamesCart();
  renderCartButton();
  swal.fire({
    title:"Muchas gracias!",
    text:"Compra realizada con exito!",
    icon:"success",
    width: "30%",
    backdrop : true,
    timer: 2000,
    timerProgressBar: true,
    footer:"<span>Recibida su compra pronto!" 
});
}

const deleteItemCart = (id) => {
  const cart_games = loadgamesCart();
  const games = cart_games.filter(item => item.id !== id);
  storegamesCart(games);
  rendergamesCart();
  renderCartButton();
}

const totalCart = () => {
  const cart_games = loadgamesCart();

  return cart_games.reduce((total, item) => total += item.quantity, 0);
}

const subtotal = () => {
  const cart_games = loadgamesCart();

  return cart_games.reduce((total, item) => total += item.quantity * item.price, 0);
}

//                             Duele pero se le agrega como en la vida real el 90% aca en argentina  el valor total de los productos que se van de impuestos y demas.

const tax = () => {
  const cart_games = loadgamesCart();
  
  return cart_games.reduce((total, item) => total += item.quantity * item.price * 0.900, 0);
}

const sumCart = () => {
  const cart_games = loadgamesCart();

  return cart_games.reduce((total, item) => total += item.quantity * item.price + item.quantity * item.price * 0.900, 0);
}

//                                                    El carrito de compras, hacemos la funcion para que almacene los items y puedna ser eliminados tambien

const renderCartButton = () => {
  let output = `<button type="button" class="btn btn-cart position-relative">
                  <img src="img/logo/logoCart.png" alt="Cart">
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${totalCart()}</span>
                </button>`;
  document.getElementById("cart_button").innerHTML = output;
}


const addgameItem = (id) => {
  const cart_games = loadgamesCart();
  let position = cart_games.findIndex(item => item.id === id);
  cart_games[position].quantity += 1;
  storegamesCart(cart_games);
  rendergamesCart();
  renderCartButton();
}

const deletegameItem = (id) => {
  const cart_games = loadgamesCart();
  let position = cart_games.findIndex(item => item.id === id);
  cart_games[position].quantity -= 1;

  if (cart_games[position].quantity == 0) {
    deleteItemCart(id);
  }
  else {
    storegamesCart(cart_games);
    rendergamesCart();
    renderCartButton();
  }
}

const searchgame = (id) => {
  return games.find(item => item.id === id);
}
