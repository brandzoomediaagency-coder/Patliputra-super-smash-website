// Patliputra Super Smash - Professional Interactions v2.0

document.addEventListener('DOMContentLoaded', () => {

    // Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Reveal on scroll (Fallback for GSAP)
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // Stats Counter Animation
    const stats = document.querySelectorAll('.stat-number');
    let started = false;

    const startCount = (el) => {
        let goal = parseInt(el.dataset.goal);
        let count = setInterval(() => {
            el.textContent++;
            if (el.textContent == goal) {
                clearInterval(count);
                el.textContent += '+';
            }
        }, 2000 / goal);
    };

    window.addEventListener('scroll', () => {
        const statsSection = document.querySelector('.stats-bar');
        if (statsSection) {
            const pos = statsSection.getBoundingClientRect().top;
            if (pos < window.innerHeight - 100 && !started) {
                stats.forEach(startCount);
                started = true;
            }
        }
    });

    // Placeholder for Register Form success handling
    const regForm = document.getElementById('registration-form');
    if (regForm) {
        regForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real app, you'd send data here.
            // Professional UX Feedback:
            const btn = regForm.querySelector('button');
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            btn.disabled = true;

            setTimeout(() => {
                regForm.innerHTML = `
                    <div style="text-align:center; padding: 60px 40px;">
                        <div style="width: 80px; height: 80px; background: #27ae60; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 30px; font-size: 40px;">
                            <i class="fas fa-check"></i>
                        </div>
                        <h2 style="color: var(--primary); margin-bottom: 20px;">Registration Received!</h2>
                        <p style="color: var(--text-muted); margin-bottom: 30px;">Thank you for your interest. Our recruitment team will review your profile and contact you via WhatsApp shortly.</p>
                        <a href="index.html" class="btn btn-outline">Back to Homepage</a>
                    </div>
                `;
            }, 1500);
        });
    }
});
