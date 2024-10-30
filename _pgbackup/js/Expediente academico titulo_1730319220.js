            //titulo
            function togglePopupt() {
                const overlay = document.getElementById('popupOverlayt');
                overlay.classList.toggle("show");

                // If the popup is shown, add the event listener to the button
                if (overlay.classList.contains("show")) {
                    const btnSubmitt = document.getElementById("btn-submitt");
                    btnSubmitt.addEventListener("click", handleButtonClick);
                }
            }

            function handleButtonClick(event) {
                event.preventDefault(); // Prevent the default form submission (if applicable)
                togglePopupt();
                const checkbox = document.getElementById('check_titulo');
                checkbox.checked = true;
                document.getElementById('btn-submitt').addEventListener('click', handleButtonClick);
            }

            // Optionally, if you want to remove the event listener when the popup is closed
            document.getElementById("btn-closet").addEventListener("click", function() {
                const btnSubmitt = document.getElementById("btn-submitt");
                btnSubmitt.removeEventListener("click", handleButtonClick); // Clean up
            });