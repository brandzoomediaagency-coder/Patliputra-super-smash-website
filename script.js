// Patliputra Super Smash - Site Logic

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle (can be expanded later)
    const setupMobileMenu = () => {
        // Logic for mobile menu will go here if a burger icon is added
    };

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Submission Handling (Placeholder)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            console.log('Form Submitted:', data);
            
            // Show success message if on registration or contact page
            if (form.id === 'registration-form') {
                form.innerHTML = `
                    <div class="success-message" style="text-align:center; padding: 40px; background: #f0fff4; border: 1px solid #c6f6d5; border-radius: 8px;">
                        <h3 style="color: #2f855a; margin-bottom: 10px;">Registration Successful!</h3>
                        <p>Thank you for registering. Our team will contact you soon on WhatsApp.</p>
                        <a href="index.html" class="btn btn-primary" style="margin-top:20px;">Return Home</a>
                    </div>
                `;
            } else if (form.id === 'contact-form') {
                 form.innerHTML = `
                    <div class="success-message" style="text-align:center; padding: 40px; background: #f0fff4; border: 1px solid #c6f6d5; border-radius: 8px;">
                        <h3 style="color: #2f855a; margin-bottom: 10px;">Message Sent!</h3>
                        <p>Thank you for reaching out. We will get back to you shortly.</p>
                    </div>
                `;
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
});
