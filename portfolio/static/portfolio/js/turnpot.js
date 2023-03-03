/*
 File:          turnpot.js
 Purpose:       Turns the potentiometer (blue square with white arrow) on the web page
                as the user clicks the pot.
 Author:		yzjnxsantiago
 Date:			December 1, 2022
 */

let client_x = [];
let client_y = [];
 
function mouseCoordinates(event){

   client_x = [event.clientX];
   client_y = [event.clientY];
    
}

$(document).ready(function(){

    let pot = document.getElementById("pot-img");
    let mouse_down_pot = false;
    
    window.addEventListener('mousemove', mouseCoordinates);

    $("#pot").mousedown(function() {

        mouse_down_pot = true;
            
    })

    $("#pot").mousedown(function() {

        mouse_down_pot = false;
        
    })

    while (mouse_down_pot) {

        for (let i = 0; i < 36; i++){
            for (let j = 0; j < 10; i++){
                    
            }
        }

    }
    
})
