
document.addEventListener('DOMContentLoaded', function() {
    // Tab Navigation Functionality
    const tabs = document.querySelectorAll('.nav-tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
        });
    });

    // Optional: Add smooth scrolling for mobile overflow
    const tabsContainer = document.querySelector('.nav-tabs');
    let isScrolling = false;
    let startX;
    let scrollLeft;

    tabsContainer.addEventListener('mousedown', (e) => {
        isScrolling = true;
        startX = e.pageX - tabsContainer.offsetLeft;
        scrollLeft = tabsContainer.scrollLeft;
    });

    tabsContainer.addEventListener('mouseleave', () => {
        isScrolling = false;
    });

    tabsContainer.addEventListener('mouseup', () => {
        isScrolling = false;
    });

    tabsContainer.addEventListener('mousemove', (e) => {
        if (!isScrolling) return;
        
        const x = e.pageX - tabsContainer.offsetLeft;
        const walk = (x - startX) * 2;
        tabsContainer.scrollLeft = scrollLeft - walk;
    });
});