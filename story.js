// 5 variables
// one string
const placeWithEggs = "Walmart";

// one number
const numberOfEggs = 3;

// one boolean
// This variable will control if the place I went had eggs or not
let hasIngredient = false;

// one array with strings or numbers
const places = ["convenience store", "Costco", "Walmart"];

// one object
// This object is the main character of the story
const person = {
  name: "Tainara",
  age: 12,
  role: "student",
};

// 3 functions. At least 1 receives a parameter
// This function will check if the place from the array has eggs.
// if it does, it will set the variable hasIngredient to true
// otherwise, the variable will be false
function checkIfHasEggs(place) {
  if (place === placeWithEggs) {
    hasIngredient = true;
  } else {
    hasIngredient = false;
  }
}

// This function will check if the variable hasIngredient is true
// If it is, it will write on the console the version of the story that I found the eggs
// Otherwise it will display the version of not finding the egg
function storyByPlace(place) {
  if (hasIngredient === true) {
    console.log(`
      When I got to ${place}, it didn't take long to spot
      what I wanted. I couldn't believe it!
    `);
  } else {
    console.log(`
      I went to ${place} to see if there was some eggs.
      After walking the whole place, and asking the workers
      I had to leave without them. So I went to the next place
    `);
  }
}

// This function will just write on the console the ending part of the story
function storyEnding() {
  console.log(`
    After walking for so long, I finally got the eggs.
    When I arrived at my Grandma's house, I got a surprise:
    My Uncle had arrived during my time outside and he 
    brought a lot of products with him, and guess what?
    There were eggs among the things he brought...
    At first I was a bit disapointed of having to go 
    through all that walking, but it passed quickly, as
    the cake was almost done and we had his presence with us!
  `);
}

// Minimum of 2 if/else conditions
// At least one should check and change the boolean value

// console.log in each function
function startStory() {
  // This is the first part of the story
  console.log(`
    This is a story of me, ${person.name}. When I was ${person.age}, my siblings and I 
    went to our Grandma's house, in a nearby city. At that time I was a ${person.role}.
    After the lunch, my Gradma had the idea of baking a cake, and she asked me
    to look after the ingredients.
    After searching the entire house, I noticed it was missing the ${numberOfEggs} eggs
    needed for the recipe, so I decided to go out to buy more.
  `);

  // Array.forEach
  // It will read each place on the array and write on the console the correct part of the story
  places.forEach(function (place) {
    checkIfHasEggs(place);

    storyByPlace(place);
  });

  storyEnding();
}

// This is just for triggering the function above
startStory();
