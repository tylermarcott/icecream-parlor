// icecream array with different icecream objects inside
const iceCream = [{
  name: 'Cookie Dough',
  price: 1.25,
  quantity: 0
},
{
  name: 'Vanilla',
  price: 1,
  quantity: 0
},
{
  name: 'Strawberry',
  price: 1.25,
  quantity: 0
}]

//topping array with different topping objects inside
const toppings = [{
  name: 'Sprinkles',
  quantity: 0,
  price: .25
},
{
  name: 'Chocolate Chips',
  price: .25,
  quantity: 0
},
{
  name: 'Gummy Worms',
  price: .5,
  quantity: 0
}]

const vessels = [{
  name: 'Waffle Cone',
  price: 1,
  quantity: 0
},
{
  name: 'Waffle Bowl',
  price: 1.5,
  quantity: 0
},
{
  name: 'Dipped Cone',
  price: 2,
  quantity: 0
}]




let cartElem = document.getElementById('cart')







// TODO: refactor code!
// TODO: add some styling bc site looks like shiiiiite, border looks especially bad lol



function drawCart() {
  let cartContent = ''

  iceCream.forEach(flavor => {
    if (flavor.quantity > 0) {
      cartContent += `
                  <div class="d-flex justify-content-between p-1">
            <span>${flavor.name}</span>
            <span>x ${flavor.quantity}</span>
            <span>$${flavor.price}</span>
            <div class="col-3"></div>
          </div>
        `
    }
  })

  toppings.forEach(topping => {
    if (topping.quantity > 0) {
      cartContent += `
                  <div class="d-flex justify-content-between p-1">
            <span>${topping.name}</span>
            <span>x ${topping.quantity}</span>
            <span>$${topping.price}</span>
            <div class="col-3"></div>
          </div>
        `
    }
  })

  vessels.forEach(vessel => {
    if (vessel.quantity > 0) {
      cartContent += `
                  <div class="d-flex justify-content-between p-1">
            <span>${vessel.name}</span>
            <span>x ${vessel.quantity}</span>
            <span>$${vessel.price}</span>
            <div class="col-3"></div>
          </div>
        `
    }
  })

  cartElem.innerHTML = cartContent
  totalCost()
}




// orders vanilla ice cream on click
function orderVanilla() {
  let findVanilla = iceCream.find((cream) => cream.name == 'Vanilla')

  findVanilla.quantity++

  drawCart()
}



// orders strawberry ice cream on click
function orderStrawberry() {
  let findStrawberry = iceCream.find((cream) => cream.name == 'Strawberry')

  findStrawberry.quantity++

  drawCart()
}



// orders cookie dough ice cream on click
function orderCookieDough() {
  let findCookieDough = iceCream.find((cream) => cream.name == 'Cookie Dough')

  findCookieDough.quantity++

  drawCart()
}

//TODO: add 3 functions for toppings and 3 for cones

// order sprinkles

function orderSprinkles() {
  let findSprinkles = toppings.find((topping) => topping.name == 'Sprinkles')

  findSprinkles.quantity++

  console.log(findSprinkles)

  drawCart()
}

//order choc chippies

function orderChocChips() {
  let findChocChips = toppings.find((topping) => topping.name == 'Chocolate Chips')

  findChocChips.quantity++

  console.log(findChocChips)

  drawCart()
}


//order gummy worms

function orderGummyWorms() {
  let findGummyWorms = toppings.find((topping) => topping.name == 'Gummy Worms')

  findGummyWorms.quantity++

  console.log(findGummyWorms)

  drawCart()
}


//order waffle cone

function orderWaffleCone() {
  let findWaffleCone = vessels.find((vessels) => vessels.name == 'Waffle Cone')

  findWaffleCone.quantity++

  console.log(findWaffleCone)

  drawCart()
}



//order waffle bowl

function orderWaffleBowl() {
  let findWaffleBowl = vessels.find((vessel) => vessel.name == 'Waffle Bowl')

  findWaffleBowl.quantity++

  console.log(findWaffleBowl)

  drawCart()
}



//order dipped cone

function orderDippedCone() {
  let findDippedCone = vessels.find((vessel) => vessel.name == 'Dipped Cone')

  findDippedCone.quantity++

  console.log(findDippedCone)

  drawCart()
}



// function that finds each flavor and keeps tabs of the cost of our order. This function is called in all order functions
function totalCost() {

  let orderTotal = 0

  iceCream.forEach(flavor => {
    if (flavor.quantity > 0) {
      orderTotal += flavor.quantity * flavor.price
    }
  })

  toppings.forEach(topping => {
    if (topping.quantity > 0) {
      orderTotal += topping.quantity * topping.price
    }
  })

  vessels.forEach(vessel => {
    if (vessel.quantity > 0) {
      orderTotal += vessel.quantity * vessel.price
    }
  })



  // this syntax rounds your number to 2 dec places
  orderTotal = orderTotal.toFixed(2)

  // drawing total to DOM

  let totalElem = document.getElementById('total')

  totalElem.innerText = orderTotal.toString()

}

// FIXME: need output for this guy
function checkOut() {
  iceCream.forEach(flavor => {
    if (flavor.quantity > 0) {
      flavor.quantity = 0
    }
  })
}