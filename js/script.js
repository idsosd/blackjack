const cards = ["2_of_clubs.png",
    "2_of_diamonds.png",
    "2_of_hearts.png",
    "2_of_spades.png",
    "3_of_clubs.png",
    "3_of_diamonds.png",
    "3_of_hearts.png",
    "3_of_spades.png",
    "4_of_clubs.png",
    "4_of_diamonds.png",
    "4_of_hearts.png",
    "4_of_spades.png",
    "5_of_clubs.png",
    "5_of_diamonds.png",
    "5_of_hearts.png",
    "5_of_spades.png",
    "6_of_clubs.png",
    "6_of_diamonds.png",
    "6_of_hearts.png",
    "6_of_spades.png",
    "7_of_clubs.png",
    "7_of_diamonds.png",
    "7_of_hearts.png",
    "7_of_spades.png",
    "8_of_clubs.png",
    "8_of_diamonds.png",
    "8_of_hearts.png",
    "8_of_spades.png",
    "9_of_clubs.png",
    "9_of_diamonds.png",
    "9_of_hearts.png",
    "9_of_spades.png",
    "10_of_clubs.png",
    "10_of_diamonds.png",
    "10_of_hearts.png",
    "10_of_spades.png",
    "11_ace_of_clubs.png",
    "11_ace_of_diamonds.png",
    "11_ace_of_hearts.png",
    "11_ace_of_spades.png",
    "10_jack_of_clubs.png",
    "10_jack_of_diamonds.png",
    "10_jack_of_hearts.png",
    "10_jack_of_spades.png",
    "10_king_of_clubs.png",
    "10_king_of_diamonds.png",
    "10_king_of_hearts.png",
    "10_king_of_spades.png",
    "10_queen_of_clubs.png",
    "10_queen_of_diamonds.png",
    "10_queen_of_hearts.png",
    "10_queen_of_spades.png"
]
let cardamount = 2
let random_nmbr = 0
let playerpoints = 0
random_nmbr = Math.floor(Math.random()*52)
document.getElementById("playercard_1").src = "img/" + cards[random_nmbr]
let card1value = cards[random_nmbr].split("_")
playerpoints = parseInt(card1value[0])
random_nmbr = Math.floor(Math.random()*52)
document.getElementById("playercard_2").src = "img/" + cards[random_nmbr]
let card2value = cards[random_nmbr].split("_")
playerpoints += parseInt(card2value[0])
document.getElementById("points").innerText = playerpoints

function giveCard()
{
    let cardpushnumber = cardamount + 1
    random_nmbr = Math.floor(Math.random()*52)
    document.getElementById("playercard_" + cardpushnumber).src = "img/" + cards[random_nmbr]
    cardamount++
}