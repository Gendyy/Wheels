function selector(type, name){
    var theElement;
    
    if(type == "class"){
        theElement = document.getElementsByClassName(name);
    }else if(type == "id"){
        theElement = document.getElementById(name);
    }else if(type == "tag"){
        theElement = document.getElementsByTagName(name);
    }
        return theElement;
}

function modernSelector(name){
    var theElement;
    var type;
    var selectorName = name.slice(1, name.length)
    type = name.slice(0,1);
    
    if(type == "."){
        theElement = document.getElementsByClassName(selectorName);
    }else if(type == "#"){
        theElement = document.getElementById(selectorName);
    }else{
        theElement = document.getElementsByTagName(name);
    }
        return theElement;
}
