const circles = document.querySelectorAll(".circle"),
      progressBar = document.querySelector(".indicator"),
      buttons = document.querySelectorAll("button");
      
      let currentStep = 1;

      // function that updates the current step and update the DOM
      const updateSteps =(e) =>{
        // update current step based on the button clickes
        currentStep = e.target.id === "next" ? ++currentStep : --currentStep;
        
        // loop through all circles and add/remove "active" class based on thier index and current step
        circles.forEach((circle, index) =>{
            circle.classList[`${index < currentStep ? "add" : "remove"}`]("active");
        });

        // update progress bar width based on current step
        progressBar.style.width = `${((currentStep - 1) / (circles.length - 1)) * 100}%`;


        // chick if current step is last step oe first stepo and disable corresponding buttons 
        if(currentStep === circles.length) {
            buttons[1].disabled = true;
        }else if (currentStep === 1){
            buttons[0].disabled = true;
        }else{
            buttons.forEach((button) =>(button.disabled = false));
        }
      };

      // add click event listeners to all buttons
      buttons.forEach((button) => {
        button.addEventListener("click", updateSteps);
      });