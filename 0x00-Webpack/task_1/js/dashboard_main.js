import $ from 'jquery';
import _ from 'lodash';

    const elements = [
        '<p>Holberton Dashboard</p>',
        '<p>Dashboard data for the students</p>',
        '<button>Click here to get started</button>',
        '<p id="count"></p>',
        '<p>Copyright - Holberton School</p>'
    ];

    $('body').append(elements.join(''));

    let count = 0;

    function updateCounter() {
        count++;
        $('#count').html(`${count} clicks on the button`);
    };

    $('button').on('click',_.debounce(updateCounter, 200));
