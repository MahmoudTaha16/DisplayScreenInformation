function AppendElementToTheScreen(title,val){
    let body= document.body;

    let heightp= document.createElement("p");
    body.append(heightp);
    heightp.innerText=title+" : "+val;

}

AppendElementToTheScreen("Screen Height",screen.height);
AppendElementToTheScreen("Screen Width",screen.width);
AppendElementToTheScreen("Screen Available Height",screen.availHeight);
AppendElementToTheScreen("Screen Available Width",screen.availWidth);
AppendElementToTheScreen("Screen orientation type",screen.orientation.type);
AppendElementToTheScreen("Screen pixelDepth",screen.pixelDepth);
AppendElementToTheScreen("Screen colorDepth",screen.colorDepth);
