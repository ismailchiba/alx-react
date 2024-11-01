import '../css/main.css';
import $ from 'jquery';
import _ from 'lodash';

$('body').prepend('<div id="logo"></div>')
  .append('<p>Holberton Dashboard</p>')
  .append('<p>Dashboard data for the students</p>')
  .append('<button>Click here to get started</button>')
  .append('<p id="count"></p>')
  .append('<p>Copyright - Holberton School</p>');

let count = 0;

function updateCounter() {
  count++;
  $("#count").html(`${count} clicks on the button`);
};

$('button').on('click', _.debounce(updateCounter, 500));
