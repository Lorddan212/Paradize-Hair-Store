/**
 * PARADIZE HAIR STORE - LUXURY FUTURISTIC JAVASCRIPT
 * Author: Senior Frontend Developer
 * Features: Animations, 3D Effects, Form Validation, Gallery, Lightbox
 */

// ============================================
// DOM READY - INITIALIZE ALL FUNCTIONS
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules
    initThemeToggle();
    initNavbarScroll();
    initScrollAnimations();
    initCountUpAnimation();
    initProductFilter();
    initProductCardSliders();
    initHeroImageSlider();
    initGalleryFilter();
    initLightbox();
    initContactForm();
    initSmoothScroll();
    initParticles();
    initHeroParticles();
    init3DCardEffect();
});

// ============================================
// THEME TOGGLE - DARK/LIGHT MODE
// ============================================
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle?.querySelector('i');
    const html = document.documentElement;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('paradize-theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    themeToggle?.addEventListener('click', function() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('paradize-theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Add rotation animation
        themeIcon.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeIcon.style.transform = 'rotate(0deg)';
        }, 300);
    });
    
    function updateThemeIcon(theme) {
        if (themeIcon) {
            themeIcon.className = theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
        }
    }
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ============================================
// SCROLL ANIMATIONS - REVEAL ON SCROLL
// ============================================
function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => revealObserver.observe(el));
}

// ============================================
// COUNT UP ANIMATION FOR STATS
// ============================================
function initCountUpAnimation() {
    const statNumbers = document.querySelectorAll('.stats-number[data-count]');
    
    const countObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const countTo = parseInt(target.getAttribute('data-count'));
                const duration = 2000; // 2 seconds
                const startTime = performance.now();
                
                function updateCount(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    // Easing function for smooth animation
                    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                    const currentCount = Math.floor(easeOutQuart * countTo);
                    
                    target.textContent = currentCount.toLocaleString();
                    
                    if (progress < 1) {
                        requestAnimationFrame(updateCount);
                    } else {
                        target.textContent = countTo.toLocaleString();
                    }
                }
                
                requestAnimationFrame(updateCount);
                countObserver.unobserve(target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    statNumbers.forEach(stat => countObserver.observe(stat));
}

// ============================================
// PRODUCT FILTER
// ============================================
function initProductFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productItems = document.querySelectorAll('.product-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter products
            productItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.classList.remove('hidden', 'fade-out');
                    item.classList.add('fade-in');
                } else {
                    item.classList.add('fade-out');
                    setTimeout(() => {
                        item.classList.add('hidden');
                    }, 300);
                }
            });
        });
    });
}

// ============================================
// PRODUCT CARD IMAGE SLIDERS
// ============================================
function initProductCardSliders() {
    const sliders = document.querySelectorAll('[data-product-slider]');
    
    sliders.forEach(slider => {
        const slides = slider.querySelectorAll('.product-image-slide');
        if (slides.length < 2) return;
        
        let currentIndex = 0;
        slides[currentIndex].classList.add('active');
        
        setInterval(() => {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add('active');
        }, 3200);
    });
}

function initHeroImageSlider() {
    const heroSlider = document.querySelector('[data-hero-image-slider]');
    if (!heroSlider) return;

    const slides = heroSlider.querySelectorAll('.hero-image-slide');
    if (slides.length < 2) return;

    let currentIndex = 0;

    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentIndex);
    });

    setInterval(() => {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }, 4000);
}

// ============================================
// GALLERY FILTER
// ============================================
function initGalleryFilter() {
    const filterBtns = document.querySelectorAll('.gallery-filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// ============================================
// LIGHTBOX FOR GALLERY
// ============================================
function initLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImage');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxCategory = document.getElementById('lightboxCategory');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    
    if (!lightbox) return;
    
    let currentIndex = 0;
    const visibleItems = () => Array.from(document.querySelectorAll('.gallery-item:not([style*="display: none"])'));
    
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            const items = visibleItems();
            currentIndex = items.indexOf(this);
            openLightbox(this);
        });
    });
    
    function openLightbox(item) {
        const img = item.querySelector('img');
        const title = item.querySelector('.gallery-overlay-title')?.textContent || '';
        const category = item.querySelector('.gallery-overlay-category')?.textContent || '';
        
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxTitle.textContent = title;
        lightboxCategory.textContent = category;
        
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function showPrev() {
        const items = visibleItems();
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        openLightbox(items[currentIndex]);
    }
    
    function showNext() {
        const items = visibleItems();
        currentIndex = (currentIndex + 1) % items.length;
        openLightbox(items[currentIndex]);
    }
    
    lightboxClose?.addEventListener('click', closeLightbox);
    lightboxPrev?.addEventListener('click', showPrev);
    lightboxNext?.addEventListener('click', showNext);
    
    // Close on background click
    lightbox?.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
    });
}

// ============================================
// CONTACT FORM VALIDATION
// ============================================
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const submitButton = document.getElementById('contactSubmitBtn');
    
    contactForm?.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Clear previous errors
        clearErrors();
        clearFormAlert();
        
        let isValid = true;
        
        // Validate Name
        const name = document.getElementById('name');
        if (!name.value.trim()) {
            showError(name, 'Please enter your name');
            isValid = false;
        }
        
        // Validate Phone
        const phone = document.getElementById('phone');
        const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
        if (!phone.value.trim()) {
            showError(phone, 'Please enter your phone number');
            isValid = false;
        } else if (!phoneRegex.test(phone.value)) {
            showError(phone, 'Please enter a valid phone number');
            isValid = false;
        }
        
        // Validate Email
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            showError(email, 'Please enter your email');
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate Service
        const service = document.getElementById('service');
        if (!service.value) {
            showError(service, 'Please select a service');
            isValid = false;
        }
        
        // Validate Message
        const message = document.getElementById('message');
        if (!message.value.trim()) {
            showError(message, 'Please enter your message');
            isValid = false;
        } else if (message.value.trim().length < 10) {
            showError(message, 'Message must be at least 10 characters');
            isValid = false;
        }
        
        if (isValid) {
            const endpoint = contactForm.dataset.formEndpoint?.trim();
            
            if (!endpoint || endpoint.includes('your-form-id')) {
                showFormAlert('Form sending is not fully connected yet. Add your Formspree form endpoint in contact.html to receive messages.', 'error');
                return;
            }
            
            const originalButtonHtml = submitButton?.innerHTML;
            
            try {
                if (submitButton) {
                    submitButton.disabled = true;
                    submitButton.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>Sending...';
                }
                
                const formData = new FormData(contactForm);
                formData.append('_page', window.location.pathname);
                
                const response = await fetch(endpoint, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (!response.ok) {
                    throw new Error('Submission failed');
                }
                
                showFormSuccess();
                contactForm.reset();
            } catch (error) {
                showFormAlert('We could not send your message right now. Please try again or contact us by WhatsApp.', 'error');
            } finally {
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.innerHTML = originalButtonHtml;
                }
            }
        }
    });
    
    function showError(input, message) {
        input.classList.add('error');
        const errorElement = input.parentElement.querySelector('.form-error');
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add('show');
        }
    }
    
    function clearErrors() {
        const inputs = contactForm.querySelectorAll('.form-control, .form-select');
        inputs.forEach(input => input.classList.remove('error'));
        
        const errors = contactForm.querySelectorAll('.form-error');
        errors.forEach(error => error.classList.remove('show'));
    }
    
    function clearFormAlert() {
        const existingAlert = contactForm.querySelector('.form-status-alert');
        if (existingAlert) existingAlert.remove();
    }
    
    function showFormAlert(message, type) {
        clearFormAlert();
        
        const alert = document.createElement('div');
        const isSuccess = type === 'success';
        alert.className = `alert mt-4 form-status-alert ${isSuccess ? 'alert-success' : 'alert-danger'}`;
        alert.style.cssText = `
            background: ${isSuccess
                ? 'linear-gradient(135deg, #10B981, #059669)'
                : 'linear-gradient(135deg, #EF4444, #DC2626)'};
            color: white;
            padding: 20px;
            border-radius: 12px;
            text-align: center;
            animation: fadeIn 0.5s ease;
        `;
        alert.innerHTML = `<i class="bi bi-${isSuccess ? 'check-circle-fill' : 'exclamation-triangle-fill'} me-2"></i>${message}`;
        
        contactForm.appendChild(alert);
        
        setTimeout(() => {
            alert.remove();
        }, 5000);
    }
    
    function showFormSuccess() {
        showFormAlert("<strong>Thank you!</strong> Your message has been sent successfully. We'll get back to you soon!", 'success');
    }
    
    // Real-time validation
    const inputs = contactForm?.querySelectorAll('.form-control, .form-select');
    inputs?.forEach(input => {
        input.addEventListener('blur', function() {
            this.classList.remove('error');
            const errorElement = this.parentElement.querySelector('.form-error');
            if (errorElement) errorElement.classList.remove('show');
        });
    });
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// PARTICLES BACKGROUND ANIMATION
// ============================================
function initParticles() {
    const container = document.querySelector('.particles-container');
    if (!container) return;
    
    // Add random movement to particles
    const particles = container.querySelectorAll('.particle');
    
    particles.forEach((particle, index) => {
        // Randomize initial positions slightly
        const randomX = (Math.random() - 0.5) * 20;
        const randomY = (Math.random() - 0.5) * 20;
        const randomDelay = Math.random() * 5;
        const randomDuration = 6 + Math.random() * 4;
        
        particle.style.transform = `translate(${randomX}px, ${randomY}px)`;
        particle.style.animationDelay = `${randomDelay}s`;
        particle.style.animationDuration = `${randomDuration}s`;
    });
}

// ============================================
// HERO PARTICLE NETWORK ANIMATION
// ============================================
function initHeroParticles() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let w = 0;
    let h = 0;
    let particles = [];
    const particleCount = 70;

    const rand = (min, max) => Math.random() * (max - min) + min;

    function resize() {
        const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
        w = canvas.clientWidth;
        h = canvas.clientHeight;
        canvas.width = Math.floor(w * dpr);
        canvas.height = Math.floor(h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function init() {
        resize();
        particles = Array.from({ length: particleCount }, () => ({
            x: rand(0, w),
            y: rand(0, h),
            r: rand(1.2, 3.2),
            vx: rand(-0.35, 0.35),
            vy: rand(-0.30, 0.30),
            a: rand(0.25, 0.65),
            hue: rand(270, 340)
        }));
    }

    function draw() {
        ctx.clearRect(0, 0, w, h);

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            for (let j = i + 1; j < particles.length; j++) {
                const q = particles[j];
                const dx = p.x - q.x;
                const dy = p.y - q.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 110) {
                    const alpha = (1 - dist / 110) * 0.18;
                    ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(q.x, q.y);
                    ctx.stroke();
                }
            }
        }

        for (const p of particles) {
            const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
            grd.addColorStop(0, `hsla(${p.hue}, 90%, 65%, ${p.a})`);
            grd.addColorStop(1, `hsla(${p.hue}, 90%, 65%, 0)`);
            ctx.fillStyle = grd;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = `rgba(255,255,255,${p.a * 0.65})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function step() {
        for (const p of particles) {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < -40) p.x = w + 40;
            if (p.x > w + 40) p.x = -40;
            if (p.y < -40) p.y = h + 40;
            if (p.y > h + 40) p.y = -40;
        }

        draw();
        requestAnimationFrame(step);
    }

    init();
    step();
    window.addEventListener('resize', init);
}

// ============================================
// 3D CARD HOVER EFFECT
// ============================================
function init3DCardEffect() {
    const cards = document.querySelectorAll('.card-3d, .service-card, .feature-card');
    
    // Skip on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Preloader (optional enhancement)
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('fade-out');
        setTimeout(() => preloader.remove(), 500);
    }
});

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation keyframes dynamically
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ============================================
// WHATSAPP ORDER FUNCTION
// ============================================
function orderOnWhatsApp(productName) {
    const phone = '2348168532364';
    const message = encodeURIComponent(`Hello Paradize Hair Store, I'm interested in ordering: ${productName}`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}

// Generic WhatsApp chat function
function chatOnWhatsApp(message = '') {
    const phone = '2348168532364';
    const defaultMessage = "Hello Paradize Hair Store, I'd like to order/ask about...";
    const finalMessage = encodeURIComponent(message || defaultMessage);
    window.open(`https://wa.me/${phone}?text=${finalMessage}`, '_blank');
}

// Call function
function callNow() {
    window.open('tel:+2347018377263');
}

// ============================================
// PRODUCT MODAL FUNCTION
// ============================================
const featuredProductModalData = {
    'straight-bundle': {
        name: 'Silky Straight Bundle',
        price: '₦45,000',
        description: 'Premium 100% human hair, soft and tangle-free with natural shine.',
        image: 'assets/img/Silky_Straight_Bundle_1.jpg'
    },
    'deep-wave-wig': {
        name: 'Deep Wave Wig',
        price: '₦85,000',
        description: 'Luxurious deep wave texture, pre-plucked with baby hair.',
        image: 'assets/img/Deep_Wave_Wig_1.jpg'
    },
    'goddess-braids': {
        name: 'Goddess Braids Wig',
        price: '₦120,000',
        description: 'Hand-braided perfection with intricate patterns and long-lasting quality.',
        image: 'assets/img/Goddess_Braids_Wig_1.jpg'
    }
};

function setProductModalDetails(product) {
    const modalElements = {
        title: document.getElementById('modalProductTitle'),
        name: document.getElementById('modalProductName'),
        price: document.getElementById('modalProductPrice'),
        description: document.getElementById('modalProductDescription'),
        image: document.getElementById('modalProductImage'),
        priceGuide: document.getElementById('modalPriceGuide'),
        priceBreakdown: document.getElementById('modalPriceBreakdown'),
        orderButton: document.getElementById('modalOrderBtn')
    };

    if (!modalElements.title || !modalElements.name || !modalElements.price || !modalElements.description || !modalElements.image || !modalElements.orderButton) {
        return false;
    }

    modalElements.title.textContent = product.name;
    modalElements.name.textContent = product.name;
    modalElements.price.textContent = product.price;
    modalElements.description.textContent = product.description;
    modalElements.image.src = product.image;
    modalElements.image.alt = product.name;

    if (modalElements.priceGuide && modalElements.priceBreakdown) {
        modalElements.priceBreakdown.innerHTML = '';
        modalElements.priceGuide.hidden = true;
    }

    modalElements.orderButton.onclick = function() {
        orderOnWhatsApp(product.name);
    };

    return true;
}

function openProductModal(productId) {
    const modalElement = document.getElementById('productModal');
    const product = featuredProductModalData[productId];

    if (!modalElement || !product) {
        return;
    }

    setProductModalDetails(product);

    const modal = new bootstrap.Modal(modalElement);
    modal.show();
}

// Make functions globally available
window.orderOnWhatsApp = orderOnWhatsApp;
window.chatOnWhatsApp = chatOnWhatsApp;
window.callNow = callNow;
window.openProductModal = openProductModal;
