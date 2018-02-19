$(document).ready(function() {
var magicNumber;
var sweetTooth;
var wins=0; 
var losses=0;
var ocean, princess, unicorn, usa;

var startGame = function () {
    //clear sweet tooth and show to user
    sweetTooth=0;
    $("#sweet-tooth").text("0");

    //generate magic number and show to user
    magicNumber = Math.floor(Math.random()*120)+1;
    console.log("the magic number is: " +magicNumber);
    $("#magic-number").text(magicNumber);

    //generate cupcake values and set attribute values to new numbers
    ocean = Math.floor(Math.random()*12)+1;
    $("#ocean-cupcakes").attr("data", ocean);

    princess= Math.floor(Math.random()*12)+1;
    $("#princess-cupcakes").attr("data", princess);

    unicorn = Math.floor(Math.random()*12)+1; 
    $("#unicorn-cupcakes").attr("data", unicorn);

    usa = Math.floor(Math.random()*12)+1;
    $("#usa-cupcakes").attr("data", usa);
    console.log("ocean: " +ocean + " princess: " + princess + " unicorn: " + unicorn + " usa: " +usa);
}

    startGame();

    $(".cupcake").on("click", function() {
        //get value of what was clicked and add it to sweet tooth
        sweetTooth = sweetTooth + parseInt(($(this).attr("data")));   
        console.log(sweetTooth);
        //show new sweet tooth total to user
        $("#sweet-tooth").text(sweetTooth);

        //check if user won 
        if (sweetTooth===magicNumber) {
            $("#win-or-lose").text("You win!");
            wins++;
            $("#wins").text("Wins: "+wins)
            startGame();
        }
        else if (sweetTooth > magicNumber ) {
            //
            $("#win-or-lose").text("You lose!");
            losses++;
            $("#losses").text("Losses: "+losses);
            startGame();

        }    

        })
    
       

     
       
    

    })


//document.ready function