const $ = require('jquery');
const _ = require('lodash');
import './body.css';

$('body').append('<button>Click here to get started</button>')
    .append('<p id="count"></p>');
    let count = 0;

    function updateCounter() {
      count++;
      $("#count").html(`${count} clicks on the button`);
    };
    
    $('button').on('click', _.debounce(updateCounter, 500));

