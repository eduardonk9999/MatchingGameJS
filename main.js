// toda variavel que começa com $ guarda uma referencia da tela
import CardGame from "./src/components/CardGame"

const $root = document.querySelector("#root")

const $htmlCardGame = CardGame()


$root.insertAdjacentHTML('beforeend', $htmlCardGame) 