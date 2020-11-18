let animal = ""

function myAnimal(str="dog") {
  animal = str
  return animal
}

function yourAnimal(str="cat") {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  animal = str
  return animal
}

function add2(n) {
  
  // Feel free to move things around!
  let two = 2
  return n + two
}