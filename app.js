var eleDisplay = document.body.querySelector(".display")
var eleDisplay2 = document.body.querySelector(".display2")

var damageTotal = 0

eleDisplay.innerHTML = "Dragon damage: " + damageTotal
function totalDamage(damage, attackType) {
    if (type === "fire") {
        damageTotal = damage + attackType + damageTotal
        eleDisplay.innerHTML = "Dragon damage: " + damageTotal
    } else if (type === "ice") {
        damageTotal = damage + attackType + damageTotal
        eleDisplay.innerHTML = "Dragon damage: " + damageTotal
    } else if (type === "poison") {
        damageTotal = damage + attackType + damageTotal
        eleDisplay.innerHTML = "Dragon damage: " + damageTotal
    }
    if (damageTotal >= 10){
        eleDisplay.innerHTML = "Dragon damage: " + damageTotal
        eleDisplay2.innerHTML = "You win! You're lucky the dragon didn't fight back!"
    }
}


document.body.querySelector(".fire").addEventListener("click", function(){
    type = "fire"
    totalDamage(3, -1)
})
document.body.querySelector(".ice").addEventListener("click", function(){
    type = "ice"
    totalDamage(1, 1)
})
document.body.querySelector(".poison").addEventListener("click", function(){
    type = "poison"
    totalDamage(4, 0)
})
