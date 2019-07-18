'use strict';

function getDogImage(numberPics) {
  fetch('https://dog.ceo/api/breed/hound/images/random/' + numberPics) //update fetch to handle multiple//
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => console.log('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
    console.log(responseJson);
    const numOfPics = responseJson.message.length;
    $('.results').remove();
    $('form').after('<section class="results"></section>')
    for (let i=0; i < numOfPics; i++){
        let currentImg = responseJson.message[i];
        console.log(currentImg);
        $('.results').append(`<img src=${currentImg}></img>`);
    }
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    //Get value of input
    //Ensure value is a number 1-50
        //log error if not
    const numberPics = parseInt($('.numberPics').val());
    if (numberPics > 0 && numberPics < 51){
		getDogImage(numberPics);
    }else{
    	console.log("Incorrect number");
    }
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});