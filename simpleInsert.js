if (window.getSelection) {
        
        var selObj = window.getSelection();
        var selRange = selObj.getRangeAt(0);
        
        var newElement = document.createElement("code");
        newElement.setAttribute("class","language-java");
        var documentFragment = selRange.extractContents();
        newElement.appendChild(documentFragment);
        selRange.insertNode(newElement);
        
        selObj.removeAllRanges();
    }
    
 Prism.highlightAll();