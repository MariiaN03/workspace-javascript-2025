var messageE =  document.getElementById('message');

const showKey = (event)=>{
    document.getElementById("lastKey").innerHTML="You pressed:" + event.key;
}

const showPosition = (event)=>{
    document.getElementById("charactersLeft").innerHTML="Position (" + event.pageX + "," + event.pageY+")";
}






messageE.addEventListener('keydown', showKey, false); 
document.addEventListener('mousemove', showPosition, false);