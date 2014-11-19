var currentSelection = window.getSelection().toString();
if(currentSelection){
	alert(currentSelection);
highlightSyntax(currentSelection);
Prism.highlightAll();
}
//addToDOM();



function highlightSyntax(codeString){
	
	var bodyContent=document.body.innerHTML;
	bodyContent = bodyContent.split(codeString).join('<code class="language-java">'+codeString+'</code>');
	document.body.innerHTML = bodyContent;
	
}

function addToDOM(){
	var body=document.body;
	var codeElement = document.createElement("code");
	codeElement.setAttribute("class","language-java");
	codeElement.innerHTML="static int hahaha = 8;";
	body.appendChild(codeElement);
	Prism.highlightAll();
}

function injectImports(){
	var headHTML= document.head.innerHTML;
	document.head.innerHTML = headHTML+'<link href="prism.css" rel="stylesheet" type="text/css" /><script src="prism.js" type="text/javascript"></script>';
	
}



