/*
 File:          turnpot.js
 Purpose:       Turns the potentiometer (blue square with white arrow) on the web page
                as the user clicks the pot.
 Author:		yzjnxsantiago
 Date:			March 7, 2023
 */

$(document).ready(function(){

    let button = document.getElementById("button-off");

    $("#button").mousedown(function() { 

        button.src = "static/portfolio/ButtonON.svg"

    })

    $("#button").mouseup(function() { 

        button.src = "static/portfolio/ButtonOFF.svg"

    })


})


