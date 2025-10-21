// Common functionality across all pages

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('[data-testid="test-mobile-menu"]');
    const navLinks = document.querySelector('[data-testid="test-nav-links"]');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.setAttribute('aria-expanded', 
                this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
            );
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navLinks && mobileMenuToggle && 
            !navLinks.contains(event.target) && 
            !mobileMenuToggle.contains(event.target) &&
            navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Initialize page-specific functionality
    if (document.querySelector('[data-testid="test-profile-card"]')) {
        initProfilePage();
    }
    
    if (document.querySelector('[data-testid="test-contact-form"]')) {
        initContactPage();
    }
});

// Profile page functionality
function initProfilePage() {
    // Update current time in milliseconds
    function updateTime() {
        const timeElement = document.getElementById('current-time');
        if (timeElement) {
            const currentTime = Date.now();
            
            // Add animation class for visual feedback
            timeElement.classList.add('time-update');
            
            // Format the number with commas for better readability
            const formattedTime = currentTime.toLocaleString();
            timeElement.textContent = formattedTime;
            
            // Remove animation class after animation completes
            setTimeout(() => {
                timeElement.classList.remove('time-update');
            }, 500);
        }
    }

    // Update time immediately and then every 100ms for smoother updates
    updateTime();
    setInterval(updateTime, 100);

    // Handle avatar upload
    const uploadButton = document.getElementById('upload-button');
    const avatarUpload = document.getElementById('avatar-upload');
    
    if (uploadButton && avatarUpload) {
        uploadButton.addEventListener('click', function() {
            avatarUpload.click();
        });

        avatarUpload.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                // Validate file type
                if (!file.type.match('image.*')) {
                    alert('Please select an image file (JPEG, PNG, etc.)');
                    return;
                }
                
                // Validate file size (max 5MB)
                if (file.size > 5 * 1024 * 1024) {
                    alert('Please select an image smaller than 5MB');
                    return;
                }
                
                const reader = new FileReader();
                reader.onload = function(event) {
                    const avatar = document.querySelector('[data-testid="test-user-avatar"]');
                    avatar.src = event.target.result;
                    
                    // Show success message
                    const button = document.getElementById('upload-button');
                    const originalText = button.textContent;
                    button.textContent = 'Photo Updated!';
                    button.style.background = '#38a169';
                    
                    setTimeout(() => {
                        button.textContent = originalText;
                        button.style.background = '';
                    }, 2000);
                };
                reader.onerror = function() {
                    alert('Error reading file. Please try again.');
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Add accessibility features
    const socialLinks = document.querySelectorAll('[data-testid^="test-user-social-"]');
    socialLinks.forEach(link => {
        const network = link.getAttribute('data-testid').split('-').pop();
        link.setAttribute('aria-label', `Visit my ${network} profile`);
    });
}

// Contact page functionality
function initContactPage() {
    const contactForm = document.querySelector('[data-testid="test-contact-form"]');
    const charCount = document.getElementById('char-count');
    const messageInput = document.querySelector('[data-testid="test-contact-message"]');
    
    if (!contactForm) return;

    // Real-time character count for message
    if (messageInput && charCount) {
        messageInput.addEventListener('input', function() {
            const count = this.value.length;
            charCount.textContent = count;
            
            if (count < 10) {
                charCount.style.color = '#e53e3e';
            } else {
                charCount.style.color = '#38a169';
            }
        });
    }

    // Form validation and submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            submitForm();
        }
    });

    // Real-time validation
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            // Clear error when user starts typing
            if (this.classList.contains('invalid')) {
                clearError(this);
            }
        });
    });

    function validateForm() {
        let isValid = true;
        const fields = [
            'test-contact-name',
            'test-contact-email', 
            'test-contact-subject',
            'test-contact-message'
        ];

        fields.forEach(fieldName => {
            const field = document.querySelector(`[data-testid="${fieldName}"]`);
            if (field && !validateField(field)) {
                isValid = false;
            }
        });

        return isValid;
    }

    function validateField(field) {
        const value = field.value.trim();
        const fieldType = field.getAttribute('data-testid');
        let isValid = true;
        let errorMessage = '';

        // Clear previous error
        clearError(field);

        // Required field validation
        if (!value) {
            errorMessage = 'This field is required';
            isValid = false;
        } else {
            // Field-specific validation
            switch (fieldType) {
                case 'test-contact-email':
                    if (!isValidEmail(value)) {
                        errorMessage = 'Please enter a valid email address';
                        isValid = false;
                    }
                    break;
                case 'test-contact-message':
                    if (value.length < 10) {
                        errorMessage = 'Message must be at least 10 characters long';
                        isValid = false;
                    }
                    break;
            }
        }

        if (!isValid) {
            showError(field, errorMessage);
        }

        return isValid;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showError(field, message) {
        field.classList.add('invalid');
        const errorElement = document.querySelector(`[data-testid="test-contact-error-${field.getAttribute('data-testid').split('-').pop()}"]`);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    }

    function clearError(field) {
        field.classList.remove('invalid');
        const errorElement = document.querySelector(`[data-testid="test-contact-error-${field.getAttribute('data-testid').split('-').pop()}"]`);
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
        }
    }

    function submitForm() {
        const submitButton = document.querySelector('[data-testid="test-contact-submit"]');
        const successMessage = document.querySelector('[data-testid="test-contact-success"]');
        
        // Disable submit button
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
        }

        // Simulate form submission
        setTimeout(() => {
            // Show success message
            if (successMessage) {
                successMessage.textContent = 'Thank you for your message! I\'ll get back to you soon.';
                successMessage.style.display = 'block';
                
                // Reset form
                contactForm.reset();
                if (charCount) charCount.textContent = '0';
                
                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth' });
            }

            // Re-enable submit button
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message';
            }

            // Hide success message after 5 seconds
            setTimeout(() => {
                if (successMessage) {
                    successMessage.style.display = 'none';
                }
            }, 5000);
        }, 1500);
    }

    // Add accessibility to social links in contact page
    const contactSocialLinks = document.querySelectorAll('[data-testid^="test-contact-social-"]');
    contactSocialLinks.forEach(link => {
        const network = link.getAttribute('data-testid').split('-').pop();
        link.setAttribute('aria-label', `Visit my ${network} profile`);
    });
}

// Performance optimization: Throttle time updates on background tabs
let isTabActive = true;

document.addEventListener('visibilitychange', function() {
    isTabActive = !document.hidden;
});