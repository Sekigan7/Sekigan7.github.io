//                     En esta funcion lo que haremos es mostrar el precio, el desarrollador, la categoria y agregar un boton en el cual al seleccionarlo
//                                                                    lo mande al carrito

const rendergame = () => {
  const game = loadgame();
  let output = `<div class="col-4">
                  <img src="img/games/${game.image}" alt="${game.name}" class="img-fluid ps-3">
                </div>
                <div class="col-8">
                  <h2>${game.name}</h2>
                  <h4 class="pt-1 pb-1">${game.developer}</h4>
                  <h5 class="pt-1 pb-1">${game.category}</h5>
                  <p class="pt-1 pb-1">${game.description}</p>
                  <p>$${game.price}</p>
                  <p><a href="#" class="btn btn-warning" onClick="addToCart(${game.id});">Agregar (+)</a></b></p>
                  <alert
                </div>`;
  
  document.getElementById("game").innerHTML = output;
}

rendergame();
renderCartButton();