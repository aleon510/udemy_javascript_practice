var x = 16 + 'JavaScript';
// 16 is a number

// "JavaScript" is the string

// document.getElementById('test').innerHTML = x;

// Boolean

// var x = 5;
// var y = 5;
// var z = 6;

// document.getElementById("test").innerHTML = (x == y) + "<br>" + (x == z)

// Array

// var cars = ['Porsche', 'Ford', 'BMW'];

// document.getElementById("test").innerHTML = cars[0];

var person = {
  firstName: 'Learn Tech',
  lastName: 'Plus',
  age: 1,
  brandColor: 'blue',
};

document.getElementById('test').innerHTML =
  person.firstName + ' is ' + person.age + ' years old.';
