const dropdown = document.querySelector(".dropdown");
    const topicLink = document.querySelector(".topic-link");

    // Toggle dropdown
    topicLink.addEventListener("click", function(e) {
        e.preventDefault();
        dropdown.classList.toggle("active");
    });

    // Close when clicking outside
    document.addEventListener("click", function(e) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove("active");
        }
    });