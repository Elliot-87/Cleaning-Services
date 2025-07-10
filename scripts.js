// Back to Top Button Logic
  const backToTop = document.getElementById('back-to-top');
  
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('hidden', window.scrollY < 300);
  });
  
  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Free Quote Form Submission
const quoteForm = document.getElementById('quote-form');

quoteForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(quoteForm);
    const data = Object.fromEntries(formData.entries());
    
    // Simulate form submission (replace with actual API call)
    console.log("Quote Request Submitted:", data);
    
    // Show success message
    Swal.fire({
        title: 'Quote Request Sent!',
        text: 'We’ll get back to you within 24 hours with your free quote.',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#1e40af',
    });
    
    // Reset form
    quoteForm.reset();
});

 document.addEventListener('DOMContentLoaded', function() {
        // Slider elements
        const hero = document.getElementById('hero');
        const slides = document.querySelectorAll('.hero-slide');
        const dots = document.querySelectorAll('.slider-dot');
        const prevBtn = document.querySelector('.slider-prev');
        const nextBtn = document.querySelector('.slider-next');
        
        // Slider state
        let currentSlide = 0;
        let slideInterval;
        const slideDuration = 5000; // 5 seconds
        
        // Initialize slider
        function initSlider() {
            updateSlider();
            startAutoSlide();
            
            // Pause on hover
            hero.addEventListener('mouseenter', pauseSlider);
            hero.addEventListener('mouseleave', startAutoSlide);
            
            // Navigation events
            prevBtn.addEventListener('click', showPrevSlide);
            nextBtn.addEventListener('click', showNextSlide);
            
            // Dot navigation
            dots.forEach(dot => {
                dot.addEventListener('click', function() {
                    const slideTo = parseInt(this.getAttribute('data-slide-to'));
                    goToSlide(slideTo);
                });
            });
        }
        
        // Update slider display
        function updateSlider() {
            slides.forEach((slide, index) => {
                slide.style.opacity = index === currentSlide ? '1' : '0';
                slide.style.zIndex = index === currentSlide ? '1' : '0';
            });
            
            // Update dots
            dots.forEach((dot, index) => {
                if (index === currentSlide) {
                    dot.classList.add('bg-opacity-100');
                    dot.classList.remove('bg-opacity-70');
                } else {
                    dot.classList.remove('bg-opacity-100');
                    dot.classList.add('bg-opacity-70');
                }
            });
        }
        
        // Go to specific slide
        function goToSlide(index) {
            currentSlide = (index + slides.length) % slides.length;
            updateSlider();
            resetAutoSlide();
        }
        
        // Show next slide
        function showNextSlide() {
            goToSlide(currentSlide + 1);
        }
        
        // Show previous slide
        function showPrevSlide() {
            goToSlide(currentSlide - 1);
        }
        
        // Auto-slide functionality
        function startAutoSlide() {
            slideInterval = setInterval(showNextSlide, slideDuration);
        }
        
        function pauseSlider() {
            clearInterval(slideInterval);
        }
        
        function resetAutoSlide() {
            pauseSlider();
            startAutoSlide();
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowRight') {
                showNextSlide();
            } else if (e.key === 'ArrowLeft') {
                showPrevSlide();
            }
        });
        
        // Initialize the slider
        initSlider();
    });
        // Set up click events for indicators
        sliderIndicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                showHeroSlide(index);
            });
        });

        // Auto-advance slides every 5 seconds
        setInterval(nextHeroSlide, 5000);

        // Testimonial Slider
        const testimonialSlider = document.getElementById('testimonial-slider');
        const testimonialDots = document.querySelectorAll('.testimonial-dot');
        let currentTestimonial = 0;

        function showTestimonial(index) {
            testimonialSlider.style.transform = `translateX(-${index * 100}%)`;
            
            testimonialDots.forEach((dot, i) => {
                if (i === index) {
                    dot.classList.remove('bg-blue-200');
                    dot.classList.add('bg-blue-600');
                } else {
                    dot.classList.add('bg-blue-200');
                    dot.classList.remove('bg-blue-600');
                }
            });
            
            currentTestimonial = index;
        }

        function nextTestimonial() {
            currentTestimonial = (currentTestimonial + 1) % testimonialDots.length;
            showTestimonial(currentTestimonial);
        }

        // Set up click events for dots
        testimonialDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showTestimonial(index);
            });
        });

        // Auto-advance testimonials every 7 seconds
        setInterval(nextTestimonial, 7000);

        // Why Choose Us Popup
        const whyUsBtn = document.getElementById('why-us-btn');
        const whyUsPopup = document.getElementById('why-us-popup');
        const closePopup = document.getElementById('close-popup');

        whyUsBtn.addEventListener('click', () => {
            whyUsPopup.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        closePopup.addEventListener('click', () => {
            whyUsPopup.classList.remove('active');
            document.body.style.overflow = '';
        });

        whyUsPopup.addEventListener('click', (e) => {
            if (e.target === whyUsPopup) {
                whyUsPopup.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Smooth scrolling for anchor links
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

        
        
    // Mobile Menu Toggle Logic
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const body = document.body;

    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('translate-x-full');
        mobileMenu.classList.add('translate-x-0');
        body.classList.add('overflow-hidden');
    });

    // Close mobile menu
    mobileMenuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('translate-x-full');
        body.classList.remove('overflow-hidden');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-0');
            mobileMenu.classList.add('translate-x-full');
            body.classList.remove('overflow-hidden');
        });
    });

    

    // Close menu when clicking outside
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            mobileMenu.classList.remove('translate-x-0');
            mobileMenu.classList.add('translate-x-full');
            body.classList.remove('overflow-hidden');
        }
    });
//Services View All/Leran More

