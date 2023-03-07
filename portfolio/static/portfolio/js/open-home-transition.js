/*
 File:          turnpot.js
 Purpose:       Turns the potentiometer (blue square with white arrow) on the web page
                as the user clicks the pot.
 Author:		yzjnxsantiago
 Date:			March 7, 2023
 */

 $(document).ready(function(){

    const observer = new IntersectionObserver((entries) => {
        
        entries.forEach((entry) => {

            console.log(entry);

            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }

        })


    })

    const hidden_elements = document.querySelectorAll('.hidden');
    hidden_elements.forEach((el) => observer.observe(el));

    let open_container = document.getElementById("non-important-open");
    let micro_controller = document.getElementById("MCU");
    let PCB = document.getElementById("PCB");
    let navbar = document.getElementById("nav");
    let home_container = document.getElementById("home");

    $("#button").click(function() { 

        //open_container.style.display = "none";
        //PCB.style.display = "none";
        open_container.remove()
        PCB.remove()
        micro_controller.style.position = "absolute";
        micro_controller.style.bottom = "88px";
        
        $("#MCU").animate({

            top: '-53px',
            height: '210px',
            width: '210px',
            
        }, 1000, )
        
        navbar.style.display = "";
        home_container.style.display = "";
        


    })

   


})