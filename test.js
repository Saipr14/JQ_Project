//Function for Text Elongation and Retraction
function setUp(){
var content = document.getElementById("content");
var button = document.getElementById("but");
button.onclick = function()
{
if(content.className == "open"){
       content.className = "";
       button.innerHTML = "Show More"
}
else{
    content.className = "open";
    button.innerHTML = "Show Less"
}
};
}

//Function of timer for color changer


function colortransition(){
    var colors = [ "linear-gradient(to right, #780206, #061161)","linear-gradient(to right, #ff4e50, #f9d423)","linear-gradient(to right, #add100, #7b920a)","linear-gradient(to right, #fbd3e9, #bb377d)","linear-gradient(to right, #5d4157, #a8caba)"];
    var colourBox = document.getElementById("box");
    var Cnames = document.getElementById("CName");
    var names = ["Man of Steel","Dance To Forget","Parklife","Cherry Blossoms","Forever Lost"];
    var count =0;
function changerBox(){
    if(count>=colors.length){
        count=0;
    }
        colourBox.style.background = colors[count];
        Cnames.innerHTML = names[count];
        count++;
    }

    
colourBox.onclick= function()
{
   var timer = setInterval(changerBox,3000);
   colourBox.onmouseover = function()
{
    clearInterval(timer);
}
}
}

//Function for Forms
function formSubmit(){
   var myform = document.forms.myform;
   var errorMessage = document.getElementById("Message");
   myform.onsubmit = function(){
    if(myform.name.value == ''){
       errorMessage.innerHTML = '**Fill Your Name**';
       return false;
   }
   else if(myform.email.value == ''){
    errorMessage.innerHTML = '**Fill Your E-Mail**';
    return false;   
}
   else if(myform.choice.value == ''){
    errorMessage.innerHTML = '**Enter Your Course Selection**';
    return false;
}
};
}


//Functions of javascript jquery

$(document).ready(function(){

    $("#fadeout").click(function(){
        $("#para").fadeOut();
    });
    
    $("#Options ul li:nth-child(2)").click(function(){
        $("#para").fadeIn();
    });
    
    $("#Options ul li:nth-child(1)").click(function(){
        $("#para").css("color","red");
    });

    $("#Options ul li:nth-child(4)").click(function(){
        $("body").css("visibility","hidden");
        document.write("Reload to get the Fun again");
    });

});
   
//Function for jquery practice
$(document).ready(function(){

    $("*").on("click",function(x){
        
        console.log(x.type);
        $("#Coor >  p").text(x.pageX);
        $("#Coor p ").text(x.pageY);//doesn't work need to use the brain
        x.stopPropagation();

    });

});

$(document).ready(function(){
   
    $(".rslides").responsiveSlides({speed:500,auto:true,random:true,pause:true});

});
window.onload = function(){
    setUp();
    formSubmit();
    colortransition();   
}

