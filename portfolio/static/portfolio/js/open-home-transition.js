/*
 File:          turnpot.js
 Purpose:       Turns the potentiometer (blue square with white arrow) on the web page
                as the user clicks the pot.
 Author:		yzjnxsantiago
 Date:			March 7, 2023
 */

 function append_code(el, height){

    for (let i = 0; i < height; i++){

        el.innerHTML += "<div style='font-size: 22px;'>" + Math.round(Math.random()) + "</div>"
    }

 }
 

 $(document).ready(function(){

    const observer = new IntersectionObserver((entries) => {
        
        entries.forEach((entry) => {
            
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
    let code_bg_0  = document.getElementById("tl-code-bg-c0");
    let code_bg_1  = document.getElementById("tl-code-bg-c1"); 
    let code_bg_2  = document.getElementById("tl-code-bg-c2");
    let right_line = document.getElementById("rightline");
    let left_line  = document.getElementById("leftline");

    addEventListener("scroll", (event) => {

        if (document.body.scrollTop > 450) {

            right_line.style.backgroundColor = "green";
            left_line.style.backgroundColor = "#555";
        
        } else {

            right_line.style.backgroundColor = "#555";
            left_line.style.backgroundColor = "green";
        }

    });

    append_code(code_bg_0, 16)
    append_code(code_bg_1, 12)
    append_code(code_bg_2, 8)

    $("#nav").fadeIn();

    micro_controller.style.position = "relative";
    micro_controller.style.left = "-200px";
    micro_controller.style.scale = "23%";
        
});

   

