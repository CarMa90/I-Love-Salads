export default function noDelivery() {
  let d = document,
    diaSemana = new Date().getDay();
  console.log(diaSemana);

  let $header = d.querySelector(".header"),
    $forjadores = d.querySelector("#forjadores .card__title");

  if (diaSemana == 1) {
    console.log("hola desde un lunes");
    let $p = d.createElement("p");
    $p.classList.add("header__message");
    $p.innerHTML =
      "Los lunes <strong>NO</strong> contamos con servicio a domicilio";

    $header.insertAdjacentElement("beforeend", $p);

    $forjadores.textContent = "Suc Forjadores";
  }
}
