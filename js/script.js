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
let cardamountdealer = 1
let random_nmbr = 0
let playerpoints = 0
let dealerpoints = 0

random_nmbr = Math.floor(Math.random()*52)
document.getElementById("playercard_1").src = "img/" + cards[random_nmbr]
let card1value = cards[random_nmbr].split("_")

playerpoints = parseInt(card1value[0])

random_nmbr = Math.floor(Math.random()*52)
document.getElementById("playercard_2").src = "img/" + cards[random_nmbr]
let card2value = cards[random_nmbr].split("_")

playerpoints += parseInt(card2value[0])
document.getElementById("playerpoints").innerText = playerpoints

random_nmbr = Math.floor(Math.random()*52)
document.getElementById("dealercard_1").src = "img/" + cards[random_nmbr]
let dealercard1value = cards[random_nmbr].split("_")

dealerpoints += parseInt(dealercard1value[0])
document.getElementById("dealerpoints").innerText = dealerpoints

function give()
{
    let cardpushnumber = cardamount + 1
    random_nmbr = Math.floor(Math.random()*52)
    document.getElementById("playercard_" + cardpushnumber).src = "img/" + cards[random_nmbr]
    
    let nextcardvalue = cards[random_nmbr].split("_")
    playerpoints += parseInt(nextcardvalue[0])
    document.getElementById("playerpoints").innerText = playerpoints

    cardamount++
}

function givedealer()
{
    let cardpushnumber = cardamountdealer + 1
    random_nmbr = Math.floor(Math.random()*52)
    document.getElementById("dealercard_" + cardpushnumber).src = "img/" + cards[random_nmbr]
    
    let nextcardvalue = cards[random_nmbr].split("_")
    dealerpoints += parseInt(nextcardvalue[0])
    document.getElementById("dealerpoints").innerText = dealerpoints

    cardamountdealer++
}

function stand()
{
    //de geef knop de-activeren
    document.getElementById("givebtn").disabled = true
    //de kaarten voor de dealer moeten gegeven worden volgens de regels die de dealer heeft
    //sws stoppen bij 17 of hoger
    //als 22 of hoger --> player wint
    //als 17 t/m 21: vergelijken met wat de player heeft en dan bepalen wie er gewonnen heeft
    //vraag: stel de player heeft 14, mag de dealer dan stoppen bij 15?
    while(dealerpoints < 17)
    {
        //geef een kaart aan de dealer en werk de punten bij
        givedealer();
        break
    }
    //bepaal wie er gewonnen heeft
}