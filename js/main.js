const rendergames = () => {
  const games = loadgamesLS();
  let output = "";

//                                        Vamos a mostrar en la pantalla principal las portadas de los juegos disponibles junto con su precio

  for (let game of games) {
    output += `<div class="col-md-2 mb-4 mt-2">
                <a href="#" onClick="seegame(${game.id});" class="text-decoration-none text-dark">
                  <div class"card">
                    <img src="img/games/${game.image}" alt="${game.name}" class="card-img-top">
                    <div class="card-body text-center mt-3">
                      <h5 class="card-title mb-2">${game.name}</h5>
                      <p>$${game.price}</p>
                    </div>
                  </div>
                </a>
              </div>`;
  }
  document.getElementById("games").innerHTML = output;
}

rendergames();
renderCartButton();