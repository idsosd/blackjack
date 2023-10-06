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
let cardamount = 0
let cardamountdealer = 1
let random_nmbr = 0
let playerpoints = 0
let orplayerpoints = 0
let dealerpoints = 0
let playercardpoints = [];
let orplayercardpoints = [];
startgame()

function startgame()
{
    give()
    give()
    //als black jack meteen end-game met blackjack
    if(playerpoints == 21)
        endgame(1)

    random_nmbr = Math.floor(Math.random()*52)
    document.getElementById("dealercard_1").src = "img/" + cards[random_nmbr]
    let dealercard1value = cards[random_nmbr].split("_")

    dealerpoints += parseInt(dealercard1value[0])
    document.getElementById("dealerpoints").innerText = dealerpoints
}

function give()
{
    let cardpushnumber = cardamount + 1
    random_nmbr = Math.floor(Math.random()*52)
    document.getElementById("playercard_" + cardpushnumber).src = "img/" + cards[random_nmbr]
    let cardvalue = cards[random_nmbr].split("_")
    //plaats deze waarde in de array playercardspoints
    playercardpoints.push(cardvalue[0])
    if(parseInt(cardvalue[0]) == 11){
        orplayercardpoints.push('1')
    }
    else {
        orplayercardpoints.push(cardvalue[0])
    }

    playerpoints = countplayerpoints()
    orplayerpoints = countorplayerpoints()
    document.getElementById("playerpoints").innerText = playerpoints
    if(playerpoints != orplayerpoints){
        document.getElementById("or_playerpoints").innerText = orplayerpoints
    }

    cardamount++
    if(playerpoints > 21 && orplayerpoints > 21){
        endgame(0)
    }
}

function givedealer()
{
    if(dealerpoints >= 17)
        return
    setTimeout(function(){ givedealer() }, 2000);
    let cardpushnumber = cardamountdealer + 1
    random_nmbr = Math.floor(Math.random()*52)
    document.getElementById("dealercard_" + cardpushnumber).src = "img/" + cards[random_nmbr]
    cardamountdealer++;
    let nextcardvalue = cards[random_nmbr].split("_")
    dealerpoints += parseInt(nextcardvalue[0])
    document.getElementById("dealerpoints").innerText = dealerpoints 
}

function stand()
{
    document.getElementById("givebtn").disabled = true
    givedealer()
}

function endgame(doodofblackjack)
{
    if(doodofblackjack == 0){
        document.getElementById("givebtn").disabled = true
        document.getElementById("standbtn").disabled = true
        document.getElementById("dood").classList.add("text-bg-danger")
        document.getElementById("dood").innerText = "DOOD"
    }
    else if(doodofblackjack == 1){
        document.getElementById("givebtn").disabled = true
        document.getElementById("standbtn").disabled = true
        document.getElementById("dood").classList.add("text-bg-success")
        document.getElementById("dood").innerText = "BLACK JACK"
    }
}

function proces_ace()
{

}

function countplayerpoints()
{
    let aantalpoints = 0
    for(teller = 0; teller < playercardpoints.length; teller++)
    {
        aantalpoints += parseInt(playercardpoints[teller])
    }
    return aantalpoints
}

function countorplayerpoints()
{
    let aantalpoints = 0
    for(teller = 0; teller < orplayercardpoints.length; teller++)
    {
        aantalpoints += parseInt(orplayercardpoints[teller])
    }
    return aantalpoints
}