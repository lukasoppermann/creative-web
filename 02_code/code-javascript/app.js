/*
  popup
 */
var name = 'Hans';
// alert('Hello');
// comment: write something to console
// open in chrome with cmd + alt + i
// console.log('Hello');

// alert('Hello '+name);
// var number = 1;
// alert(number+12);
//
//
var name = 'Matthias';


var hello = function(name, lastname){
    alert('Hello '+name+' '+lastname);
}



// hello('Hans', 'Meyer'); // Hello Hans
// hello('Udo'); // Hello Matthias
// alert(name);



var sum = function(a,b){
    var result = a + b;
    return result;
}
var sum = sum(20,10);
console.log('Sum: '+sum);



var headlineColor = function(selector){
    var element = document.querySelector(selector);
    element.classList.toggle('green');
    element.classList.toggle('red');
}

var headline = document.querySelector('.js-color');

headline.addEventListener('click', function(event){
    headlineColor('.js-color');
});
