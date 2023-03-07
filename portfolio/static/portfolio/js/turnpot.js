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

    window.addEventListener('mousemove', mouseCoordinates);

    let pot = document.getElementById("pot-img");
    let mouse_down_pot = false;
    

    $("#pot").mousedown(function() {

        mouse_down_pot = true;
        
        let position = pot.getBoundingClientRect();
        let pot_mid_x = position.left - ((position.left - position.right)/2);
        let pot_mid_y = position.top - ((position.top-position.bottom)/2);
        let x = client_x[0] - pot_mid_x;
        let y = client_y[0] - pot_mid_y;
        let angle = Math.atan(x/y) * 180/Math.PI; 
        //console.log(pot_mid_x, pot_mid_y)

        for (let i = 0; i < 4; i++){
            for (let k = 0; k < 9; k++){
                for (let j = 0; j < 10; j++){
                    if (Math.abs(Math.floor(angle)) == i*10+j) {
                        pot.src = "static/portfolio/potentiometer/Group 72(" + i + ").svg";
                        console.log(Math.floor(angle))
                    }
                }
            }
        }
    
            
    })

    $("#pot").mouseup(function() {

        mouse_down_pot = false;
        //console.log(mouse_down_pot)
        
    })

    /*while (mouse_down_pot) {

        let x = client_x[0] - pot_mid_x;
        let y = client_y[0] - pot_mid_y;
        let angle = Math.atan(x/y);
        console.log(angle)

        for (let i = 0; i < 36; i++){
            for (let j = 0; j < 10; j++){
                if (Math.floor(angle) == i*j) {

                    pot.src = "static/portfolio/potentiometer/Group 72(" + i + ").svg";

                }
            }
        }

    }*/
    
})
