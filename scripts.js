
let universal = () => {
    
    let surati = document.getElementById("light").src;
    
    console.log(surati);

    if(surati == "file:///Users/nini/Desktop/Homework%2010/images/off.png"){
    document.getElementById("light").src = "images/on.png";
    document.getElementById("universal").innerHTML="ჩაქრობა";
    document.getElementById("universal").style.backgroundColor = "#880000";
}
    else{document.getElementById("light").src = "images/off.png";
    document.getElementById("universal").innerHTML="ანთება";
    document.getElementById("universal").style.backgroundColor = "#008840";
}
}



