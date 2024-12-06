// JavaScript for tab interactions
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tabs a');

    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to the clicked tab
            this.classList.add('active');
            // Load the corresponding content
            const page = this.getAttribute('href');
            if (page === '#home') {
                // Load content into the main section
                fetch('index_content.html')
                    .then(response => response.text())
                    .then(data => {
                        document.querySelector('main').innerHTML = data;
                    });
            } else {
                // Navigate to the page
                window.location.href = page;
            }
        });
    });
});
