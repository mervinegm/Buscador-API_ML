function mostrarResultados(result) {
  const contenedor = document.querySelector(".results");

  const template = document.querySelector("#result-item-template");

  const resultsCountEl = document.querySelector(".results-count");
  resultsCountEl.textContent = result.length;

  for (const r of result) {
    const titleEl = template.content.querySelector(".result-item-title");
    titleEl.textContent = r.title;

    const statusEl = template.content.querySelector(".result-item-status");
    statusEl.textContent = r.condition;

    const soldEl = template.content.querySelector(
      ".result-item-sell-count-number"
    );
    soldEl.textContent = r.sold_quantity;

    const priceEl = template.content.querySelector(".result-item-price");
    priceEl.textContent = r.price;

    const clone = document.importNode(template.content, true);
    contenedor.appendChild(clone);
  }
}

function main() {
  const formEl = document.querySelector(".search-form");
  formEl.addEventListener("submit", function (e) {
    e.preventDefault();

    const palabraABuscar = e.target.buscar.value;

    fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + palabraABuscar)
      .then((response) => response.json())
      .then((data) => mostrarResultados(data.results));
  });
}

main();
