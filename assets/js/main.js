// loading js only after page is ready
document.addEventListener('DOMContentLoaded', function () {
    // initial message for confirmation
    console.log("main.js said hello!");

    // variables
    var modalState1 = false;
    const modal1 = document.getElementById("modal-container-1");
    const modalOpenTrigger1 = document.getElementById("modal-open-trigger");
    const modalCloseTrigger1 = document.getElementById("modal-close-trigger-1");
    const modalActionCloseTrigger1 = document.getElementById("modal-action-close-trigger-1");

    // initial state
    if(!modalState1){
        modal1.style = "display:none";
    }

    // adding events
    // showing modal
    modalOpenTrigger1.addEventListener('click', function(){
        modalState1 = !modalState1;
        modal1.style = "display:flex";
    });

    // hiding modal
    modalCloseTrigger1.addEventListener('click', function () {
        modalState1 = !modalState1;
        modal1.style = "display:none";
    });

    modalActionCloseTrigger1.addEventListener('click', function () {
        modalState1 = !modalState1;
        modal1.style = "display:none";
    });
});