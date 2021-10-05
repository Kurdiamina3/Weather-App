var button = document.querySelector('.buttton');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

function()

button.addEventListener('click', function(){
  fetch('api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=e3ace024fb02522bf9e3476b1dcc4399')
  .then(response => response.json())
  .then(data => console.log(data))

.catch(err => alert("Wrong City name!"))
});