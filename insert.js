


var insertHtmlBeforeSelection, insertHtmlAfterSelection;

(function() {
    function createInserter(isBefore) {
        return function(html) {
            var sel, range, node;
            if (window.getSelection) {
                // IE9 and non-IE
                sel = window.getSelection();
                if (sel.getRangeAt && sel.rangeCount) {
                    range = window.getSelection().getRangeAt(0);
      
                    range.collapse(isBefore);
        
                    // Range.createContextualFragment() would be useful here but is
                    // non-standard and not supported in all browsers (IE9, for one)
                    var el = document.createElement("div");
                    el.innerHTML = html;
                    var frag = document.createDocumentFragment(), node, lastNode;
                    while ( (node = el.firstChild) ) {
                        lastNode = frag.appendChild(node);
                    }
                    range.insertNode(frag);
                }
            } else if (document.selection && document.selection.createRange) {
                // IE < 9
                range = document.selection.createRange();
                range.collapse(isBefore);
                range.pasteHTML(html);
            }
        }
    }
    
    insertHtmlBeforeSelection = createInserter(true);
    insertHtmlAfterSelection = createInserter(false);
})();

insertHtmlBeforeSelection("<jojo>");
insertHtmlAfterSelection("</jojo>");
  	//Prism.highlightAll();


