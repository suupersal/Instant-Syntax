chrome.browserAction.onClicked.addListener(function(tab) {
  
  chrome.tabs.executeScript(null, {file: "prism.js"});
  chrome.tabs.executeScript(null, {file: "simpleInsert.js"});
 
  
  	
  //chrome.tabs.executeScript(null, {file: "mainJS.js"});
  chrome.tabs.insertCSS(tab.id, {
            file: "prism.css"
        });
});

