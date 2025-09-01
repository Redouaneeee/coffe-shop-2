 // Wait for DOM content to be fully loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Header scroll effect
            const header = document.getElementById('header');
            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    header.style.background = 'var(--dark-brown)';
                    header.style.padding = '0.5rem 0';
                } else {
                    header.style.background = 'rgba(58, 42, 29, 0.95)';
                    header.style.padding = '1rem 0';
                }
            });

            // Animation on scroll for elements
            const animateOnScroll = function() {
                const elements = document.querySelectorAll('.product-card, .guide-card');
                
                elements.forEach(element => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;
                    
                    if (elementPosition < screenPosition) {
                        element.classList.add('visible');
                    }
                });
            };

            // Initial check and add scroll event listener
            animateOnScroll();
            window.addEventListener('scroll', animateOnScroll);

            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Product card animation on hover
            const productCards = document.querySelectorAll('.product-card');
            productCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px) rotate(2deg)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) rotate(0)';
                });
            });

            // Form validation for subscription
            const subscriptionForm = document.querySelector('.subscription .btn');
            subscriptionForm.addEventListener('click', function(e) {
                e.preventDefault();
                const emailInput = document.querySelector('.subscription input[type="email"]');
                const email = emailInput.value;
                
                if (validateEmail(email)) {
                    alert('Thank you for subscribing! You will receive a confirmation email shortly.');
                    emailInput.value = '';
                } else {
                    alert('Please enter a valid email address.');
                    emailInput.focus();
                }
            });

            // Email validation function
            function validateEmail(email) {
                const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return re.test(email);
            }

            // Pulse animation for CTA button
            const pulseBtn = document.querySelector('.pulse');
            setInterval(function() {
                pulseBtn.classList.toggle('pulse');
            }, 2000);
        });
