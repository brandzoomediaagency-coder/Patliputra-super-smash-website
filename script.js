// Patliputra Super Smash - Reboot Logic v3.0

document.addEventListener('DOMContentLoaded', () => {

    // Reveal animations on scroll
    const reveals = document.querySelectorAll('section');
    const options = { threshold: 0.15 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, options);

    reveals.forEach(rev => {
        rev.style.opacity = '0';
        rev.style.transform = 'translateY(50px)';
        rev.style.transition = 'all 1s cubic-bezier(0.165, 0.84, 0.44, 1)';
        observer.observe(rev);
    });

    // Simple Form Validation & WhatsApp Redirect for Registration
    const regForm = document.getElementById('registration-fields');
    if (regForm) {
        regForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(regForm);
            const name = formData.get('name');
            const city = formData.get('city');

            // Construct WhatsApp message
            const message = `Halo PSS Team! My name is ${name} from ${city}. I want to confirm my registration for the cricket trials.`;
            const waUrl = `https://wa.me/918789434546?text=${encodeURIComponent(message)}`;

            window.location.href = waUrl;
        });
    }

});
