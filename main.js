import './src/styles/settings/colors.css'
import './src/styles/generic/rest.css'
import './src/styles/elements/base.css'

// toda variavel que começa com $ guarda uma referencia da tela
import CardGame from "./src/components/CardGame"

const $root = document.querySelector("#root")

const $htmlCardGame = CardGame()


$root.insertAdjacentHTML('beforeend', $htmlCardGame) 