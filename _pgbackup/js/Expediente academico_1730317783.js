            //institucion
            function togglePopup() {
                const overlay = document.getElementById('popupOverlay');
                overlay.classList.toggle("show");

                // If the popup is shown, add the event listener to the button
                if (overlay.classList.contains("show")) {
                    const btnSubmit = document.getElementById("btn-submit");
                    btnSubmit.addEventListener("click", handleButtonClick);
                }
            }

            function handleButtonClick(event) {
                event.preventDefault(); // Prevent the default form submission (if applicable)
                const selectedOption = document.getElementById("select_institucion").value;
                document.getElementById("texto_institucion").textContent = selectedOption;
                togglePopup();
            }

            // Optionally, if you want to remove the event listener when the popup is closed
            document.getElementById("btn-close").addEventListener("click", function() {
                const btnSubmit = document.getElementById("btn-submit");
                btnSubmit.removeEventListener("click", handleButtonClick); // Clean up
            });

            //titulo
            function togglePopup() {
                const overlay = document.getElementById('popupOverlay');
                overlay.classList.toggle("show");

                // If the popup is shown, add the event listener to the button
                if (overlay.classList.contains("show")) {
                    const btnSubmit = document.getElementById("btn-submit");
                    btnSubmit.addEventListener("click", handleButtonClick);
                }
            }

            function handleButtonClick(event) {
                event.preventDefault(); // Prevent the default form submission (if applicable)
                const selectedOption = document.getElementById("select_institucion").value;
                document.getElementById("texto_institucion").textContent = selectedOption;
                togglePopup();
            }

            // Optionally, if you want to remove the event listener when the popup is closed
            document.getElementById("btn-close").addEventListener("click", function() {
                const btnSubmit = document.getElementById("btn-submit");
                btnSubmit.removeEventListener("click", handleButtonClick); // Clean up
            });