// app.js
import initAlpine from './initAlpine';
import injectCSS from './injectCSS';

//Get Configs from the Script Attributes
window.acclaimAllianceId = document.currentScript.getAttribute('data-acclaim-widget-id');

initAlpine(acclaimAllianceId);
injectCSS();