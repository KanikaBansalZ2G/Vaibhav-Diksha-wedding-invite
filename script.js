// This creates an "Observer" that watches for elements entering the screen
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-element'); 
        } 
        // Optional: Remove 'else' if you want it to stay visible once revealed
        else {
            entry.target.classList.remove('show-element');
        }
    });
});

// Grab all elements with the class 'hidden-element'
const hiddenElements = document.querySelectorAll('.hidden-element');
hiddenElements.forEach((el) => observer.observe(el));