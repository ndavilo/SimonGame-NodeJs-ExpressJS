function Rand(){
    return Math.floor(Math.random() * 6) + 1;
}
var img1_Rand = Rand()
var img2_Rand = Rand()
document.querySelector('.img1').src = 'image/dice'+img1_Rand+'.png'
document.querySelector('.img2').src = 'image/dice'+img2_Rand+'.png'

if(img1_Rand > img2_Rand){
    document.querySelector('h1').innerHTML = "Baby Wins"
} else if(img2_Rand > img1_Rand){
    document.querySelector('h1').innerHTML = "Player 2 Wins"
} else{
    document.querySelector('h1').innerHTML = "Draw!"
}

//var rClick = document.querySelector(".refresh-button");
//rClick.addEventListener("click", RefreshClick);
//function RefreshClick(){
//    window.location.reload(1);
//}
// using jQuery 

$(".refresh-button").click(function(){
    window.location.reload(1);
})

//Keyboard listener

//document.addEventListener("keypress", function(event){ 
    
//    if(event.key == 'r'){
//       window.location.reload(1);
//    } else if (event.key == 'R'){
//        window.location.reload(1);
//    }

//});

//using jQuery
$(document).keypress(function(event) {
    if(event.key =='r' || event.key == 'R'){
        window.location.reload(1);
    }
});

//$("h1").css("color", "red");

