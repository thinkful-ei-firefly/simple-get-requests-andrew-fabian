'use strict';

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random') //update fetch to handle multiple//
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //Add foreach/forloop that adds each image into DOM
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    //Get value of input
    //Ensure value is a number 1-50
        //log error if not
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});