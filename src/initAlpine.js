// initAlpine.js
// Import the Alpine JS framework
import Alpine from 'alpinejs'
import axios from 'axios'

// If you abstracted your Alpine component logic, you'd import that here
//import widget from './widget.js'

// import widget template
import widgetHTML from './../widget.html';

// initAlpine.js continued
const initAlpine = (acclaimAllianceId) => {

    //alert("Using Acclaim Alliance Id=>" + acclaimAllianceId)
    /**
     *  If you're abstracting your component logic into a JS file (imported above), 
     * you would register your component with Alpine like this:
     *  Alpine.data('widget', widget); 
     */

    window.Alpine = Alpine
    Alpine.start();

    // #app is a div that we're going to inject our markup into
    document.getElementById("acclaim-alliance-info-widget").innerHTML = widgetHTML;
}

export default initAlpine;