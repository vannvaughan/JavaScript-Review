//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  //code here
  function Animal(species, name, legs, color, food){
    this.species = species;
    this.name = name;
    this.legs = legs;
    this.color = color;
    this.food = food;
  }

//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  //code here
  function person(name, age, height, gender){
    return{
      name: name,
      age: age,
      height: height,
      gender: gender
    }
  }



//Create a animal array and a person array.

  //code here
  var animals = [];
  var people = [];

//Create two instances of Animal and push those into your animal array
  var cheetah = new Animal('cheetah', 'frank', 4, 'spotted', ['People', 'Small mammals', 'Blueberries'])
  var monkey = new Animal('monkey', 'herbert', 2, 'brown', ['berries', 'nuts', 'coconuts'])
  //code here
  
  animals.push(cheetah)
  animals.push(monkey)

//Create two instances of person and push those into your person array.
  var vann = person('Vann', 26, 60, 'male')
  var terry = person('Terry', 25, 58, 'female')
  //code here

  people.push(vann)
  people.push(terry)

//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  //code here
  Animal.prototype.eat = function() {
    var food = Math.floor(Math.random() * this.food.length)
    alert(this.name + "ate" + food)
  }

//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?

  // No, because it has no contextual bindings.


/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
    // Creates a new instance of the object with passed in arguments.
  2) What's a good way to describe the keyword 'this'
    // A pointer to objects. Defines context.
  3) Can a normal function which creates an object and then returns that object use the prototype?
    // yes, but with static values, so essentiallty no.
  4) What happens if you forget to use 'new' when calling a constructor?\
    // binds to window. Bad juju.
*/