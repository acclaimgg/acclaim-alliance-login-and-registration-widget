const injectCSS = () => {
    // Create a <link> element
    var link = document.createElement("link");
  
    // Set the link type to and rel attributes
    link.type = "text/css";
    link.rel = "stylesheet";
    
    let font = document.createElement("link");
    font.rel = "stylesheet";
    font.href = "https://fonts.googleapis.com/css2?family=Oxanium:wght@800&display=swap"

    //if (process.env.NODE_ENV  == 'production') {
      // A CDN link to your production CSS
      link.href = "https://cdn.acclaim.gg/acclaim-alliance-widget/styles.css";
    //} else {
      // Your local CSS for local development
    //  link.href = "../../dist/styles.css";
    //}

    // Append the stylesheet to the <head> of the DOM
    var head = document.head;
    head.appendChild(font);
    head.appendChild(link);
    
  }
  
  export default injectCSS;