/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../../public/static/plyr/plyr.css';
import '../scss/app.scss';
import Plyr from '../../public/static/plyr/plyr';

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

// trigger js after the dom is completelly lodaded
document.addEventListener('DOMContentLoaded', () => { 
    const playerElement = document.getElementById('player');

    // instantiate the Plyr player object
    new Plyr(playerElement);
});
