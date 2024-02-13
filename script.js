document.addEventListener("DOMContentLoaded", function() {
    const projectItems = document.querySelectorAll(".project-item");
    const imageDisplay = document.getElementById("project-image");

    projectItems.forEach(item => {
        item.addEventListener("mouseover", function() {
            const project = this.dataset.project;
            const imagePath = `resorces/projects/${project}.jpg`; // Adjust the path accordingly
            imageDisplay.src = imagePath;
            imageDisplay.classList.add("bord"); // Add border class
        });

        item.addEventListener("mouseout", function() {
            imageDisplay.src = "resorces/black_bg.jpg";
            imageDisplay.classList.remove("bord"); // Remove border class
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");

    // Add event listeners for mouseover and mouseout events
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function() {
            // Remove active class from all links except the "Home" link
            navLinks.forEach(link => {
                if (link.textContent.trim() !== "Home") {
                    link.classList.remove("active");
                }
            });
            // Add active class to the current link
            this.classList.add("active");
        });

        link.addEventListener("mouseout", function() {
            // Remove active class from all links except the "Home" link
            navLinks.forEach(link => {
                if (link.textContent.trim() !== "Home") {
                    link.classList.remove("active");
                }
            });
        });
    });
});

// Add an event listener when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the image element
    const image = document.getElementById("#profile_p");

    // Add event listener for mouseover
    image.addEventListener("mouseover", function() {
        // Add the border class when mouse hovers over the image
        this.classList.add("bord");
    });

    // Add event listener for mouseout
    image.addEventListener("mouseout", function() {
        // Remove the border class when mouse moves out of the image
        this.classList.remove("bord");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const copyButton = document.getElementById("copyButton");

    copyButton.addEventListener("click", function() {
        // Create a dummy textarea element
        const textarea = document.createElement("textarea");
        // Set the value to be copied to the clipboard
        textarea.value = "yagyeshvishnoi11@gmail.com";
        // Make the textarea invisible
        textarea.style.position = "fixed";
        textarea.style.opacity = 0;
        // Append the textarea to the DOM
        document.body.appendChild(textarea);
        // Select the text in the textarea
        textarea.select();
        // Copy the selected text to the clipboard
        document.execCommand("copy");
        // Remove the textarea from the DOM
        document.body.removeChild(textarea);
        // Optionally, you can provide feedback to the user that the text has been copied
        alert("Email copied to clipboard!");
    });
});










