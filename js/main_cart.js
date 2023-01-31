const rendergamesCart = () => {
  const cart_games = loadgamesCart();
  let output = ""

  if (totalCart() > 0) {
    output = `<table class="table">
                <tbody>
                  <tr>
                    <td colspan="5" class="text-end"><a href="#" class="btn btn-danger" onClick="emptyCart()">Borrar carrito <img src="img/trash.png" alt="Delete Cart" width="10"></a></td>
                  </tr>`;

//                                                        Lo que haremos aqui es sumar la cantidad de juegos con su respectivo producto y si el usuario quiere puede quitar la cantidad de juegos que desee

    for (let game of cart_games) {
      output +=   `<tr>
                    <td class="pt-3 pb-3"><img src="img/games/${game.image}" alt="${game.name}" width="96"></td>
                    <td class="align-middle fs-6"><b>Titulo:</b> ${game.name}<br><b>Desarrollador:</b> ${game.developer}<br><b>Plataforma:</b> ${game.category}</td>
                    <td class="align-middle fs-6 pt-3"><button class="btn btn-danger" title="Delete Item" onClick="deletegameItem(${game.id})">-</button> ${game.quantity} x $${game.price} <button class="btn btn-success" title="Agregar" onClick="addgameItem(${game.id})">+</button></td>
                    <td class="align-middle text-start pt-3 fs-6">$${(game.quantity * game.price).toFixed(2)}</td>
                    <td class="align-middle text-end"><a href="#" title="Quitar juego"><img src="img/trash.png" alt="Delete game" onClick="deleteItemCart(${game.id});" width="32"></a></td>
                  </tr>`;
    }

//                                                                    Aqui lo que hara sera mostrar el subtotal, el iva y el total del precio

    output +=     `<tr>
                    <td colspan="3" class="fs-6 text-start">Subtotal</td>
                    <td class="fs-6 text-start">$${subtotal().toFixed(2)}</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="fs-6 text-start">IVA + Impuestos</td>
                    <td class="fs-6 text-start">$${tax().toFixed(2)}</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="fs-3 text-start"><b>Total</b></td>
                    <td class="fs-3 text-start"><b>$${sumCart().toFixed(2)}</b></td>
                    <td colspan="20" class="text-end"><a href="#" class="btn btn-success" onClick="successCart()"> Comprar<img src="img/success.png" alt="Delete Cart" width="10"></a></td>
                    <td>&nbsp;</td>
                  </tr>
                </tbody>
              </table>`;
  }

  //                                                      Si el usuario no tiene ningun item directamente se le notifica.

  else {
    output = `<div class="alert alert-secondary text-center" role="alert">*..Cri 🦗 cri..* Parece que aun no has seleccionado ninguno..</div>`
  }

  document.getElementById("games_selected").innerHTML = output;
}

rendergamesCart();
renderCartButton();
