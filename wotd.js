function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
          callback(xmlHttp.responseText);
        }
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

var wotdString="";
function getWotd(){
  httpGetAsync("http://www.dictionary.com/wordoftheday/wotd2.js", snip);
  return wotdString;
}

function snip(content) {
  wotdString = content;
}
