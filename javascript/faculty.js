 // Get the modal
        const modal = document.getElementById("myModal");
    
        // Get the button that opens the modal
        const btn1 = document.getElementById("myBtn1");
        const btn2 = document.getElementById("myBtn2");
        const btn3 = document.getElementById("myBtn3");
        const btn4 = document.getElementById("myBtn4");
        const btn5 = document.getElementById("myBtn5");
        const btn6 = document.getElementById("myBtn6");
    
        // Get the <span> element that closes the modal
        const span = document.getElementsByClassName("close")[0];
    
        // When the user clicks on the button, open the modal

        btn1.onclick = function () {
            modal.style.display = "block";
        };
        btn2.onclick = function () {
            modal.style.display = "block";
        };
        btn3.onclick = function () {
            modal.style.display = "block";
        };
        btn4.onclick = function () {
            modal.style.display = "block";
        };
        btn5.onclick = function () {
            modal.style.display = "block";
        };
        btn6.onclick = function () {
            modal.style.display = "block";
        };
    
    
        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        };
    
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };
