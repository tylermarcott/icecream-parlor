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
  name: '2',
  price: 2,
  quantity: 0
}]



function orderVanilla() {
  let findVanilla = iceCream.find((cream) => cream.name == 'Vanilla')

  findVanilla.quantity++


  console.log('ordering vanilla', findVanilla,)
  console.log(findVanilla.quantity)
}




function orderStrawberry() {
  let findStrawberry = iceCream.find((cream) => cream.name == 'Strawberry')

  findStrawberry.quantity++


  console.log('ordering strawberry', findStrawberry,)
  console.log(findStrawberry.quantity)
}




function orderCookieDough() {
  let findCookieDough = iceCream.find((cream) => cream.name == 'Cookie Dough')

  findCookieDough.quantity++


  console.log('ordering Cookie Dough', findCookieDough,)
  console.log(findCookieDough.quantity)
}