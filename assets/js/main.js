const home = document.getElementById("home")
const about = document.getElementById("sobre")
const bepart = document.getElementById("faca_parte")
const contact = document.getElementById("contato")

const homeButton = document.getElementById("home_button")
const aboutButton = document.getElementById("about_button")
const bepartButton = document.getElementById("bepart_button")
const contactButton = document.getElementById("contact_button")

function gotTo(){
    let elementClass = this.className
    let element = document.getElementsByClassName(`${elementClass}`)[1]
    element.scrollIntoView({behavior:'smooth'})
}

homeButton.addEventListener('click', gotTo)
aboutButton.addEventListener('click', gotTo)
bepartButton.addEventListener('click', gotTo)
contactButton.addEventListener('click', gotTo)