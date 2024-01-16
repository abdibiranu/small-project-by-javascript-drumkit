var length=document.querySelectorAll("button").length;
for(i=0;i<length;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttoninnerHTML=this.innerHTML;
    MakeSound(buttoninnerHTML);
    buttomAnimmation(buttoninnerHTML);
}); }

document.addEventListener("keypress", function(event){
   
    MakeSound(event.key);
    buttomAnimmation(event.key);
  
});
function MakeSound(key){

    switch(key){
        case "w":
            var audio= new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a" :
            var audio= new Audio("sounds/crash.mp3");
            audio.play();
            break;
            case "s":
                var audio= new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
        case "d":
            var audio= new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "j" :
            var audio= new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k" :
            var audio= new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio= new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
            default:
                alert(key);
        }
}
function  buttomAnimmation(currentkey){
    var activebtn= document.querySelector("."+ currentkey);
    activebtn.classList.add("pressed");
    setTimeout(function(){
        activebtn.classList.remove("pressed");
    } , 100);
}