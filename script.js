// CamTech Agency JavaScript

// Service details data
const serviceDetails = {
    'web-development': {
        title: 'Web Development',
        description: 'We create responsive, high-performance websites and web applications using the latest technologies. Our development process ensures scalability, security, and optimal user experience.',
        features: [
            'Custom website development',
            'E-commerce solutions',
            'Web application development',
            'API integration',
            'Progressive Web Apps (PWA)',
            'Performance optimization'
        ],
        icon: 'code'
    },
    'ui-ux-design': {
        title: 'UI/UX Design',
        description: 'Our design team creates intuitive and visually stunning interfaces that enhance user engagement and drive conversions.',
        features: [
            'User research & analysis',
            'Wireframing & prototyping',
            'Visual design & branding',
            'User testing & validation',
            'Design systems',
            'Accessibility compliance'
        ],
        icon: 'layout'
    },
    'digital-marketing': {
        title: 'Digital Marketing',
        description: 'Strategic marketing campaigns that increase brand visibility, drive traffic, and generate qualified leads for your business.',
        features: [
            'SEO optimization',
            'Social media marketing',
            'Content strategy',
            'Email marketing',
            'PPC advertising',
            'Analytics & reporting'
        ],
        icon: 'trending-up'
    }
};
// Project details data
const projectDetails = {
    'apple-home': {
        title: 'Apple Home',
        description: 'Smart home integration platform that seamlessly connects with the Apple ecosystem, providing intuitive control and automation.',
        technologies: ['Swift', 'HomeKit', 'CloudKit', 'SiriKit'],
        image: 'http://static.photos/technology/640x360/1',
        client: 'Apple Ecosystem',
        duration: '5 months'
    },
'drip-lux': {
        title: 'Drip Lux',
        description: 'Luxury brand management and e-commerce platform that provides premium shopping experiences and inventory management.',
        technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe API'],
        image: 'http://static.photos/minimal/640x360/2',
        client: 'Luxury Brands',
        duration: '6 months'
    },
    'tracking-agency': {
        title: 'Tracking Agency',
        description: 'Advanced tracking and analytics platform that provides real-time insights for digital marketing campaigns and performance monitoring.',
        technologies: ['React', 'Python', 'PostgreSQL', 'Chart.js'],
        image: 'http://static.photos/workspace/640x360/3',
        client: 'Marketing Agencies',
        duration: '3 months'
    },
    'premium-estates': {
        title: 'Premium Estates',
        description: 'Luxury real estate platform featuring virtual property tours, smart home integration, and advanced property matching algorithms.',
        technologies: ['React', 'Node.js', 'Three.js', 'AWS'],
        image: 'http://static.photos/estate/640x360/4',
        client: 'Real Estate Developers',
        duration: '8 months'
    },
    'savory-bites': {
        title: 'Savory Bites',
        description: 'Comprehensive restaurant management system with online ordering, table reservations, inventory management, and customer loyalty programs.',
        technologies: ['Vue.js', 'Express.js', 'PostgreSQL', 'Stripe API'],
        image: 'http://static.photos/restaurant/640x360/5',
        client: 'Restaurant Chains',
        duration: '4 months'
    },
    'paws-home': {
        title: 'Paws Home',
        description: 'Animal adoption platform connecting shelters with potential pet owners, featuring pet profiles, adoption applications, and shelter management tools.',
        technologies: ['React', 'Firebase', 'Cloudinary', 'Twilio'],
        image: 'http://static.photos/animals/640x360/6',
        client: 'Animal Shelters',
        duration: '6 months'
    }
};
// DOM Elements
const modalOverlay = document.getElementById('modal-overlay');
const modalContent = document.getElementById('modal-content');
const closeModal = document.getElementById('close-modal');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const closeMobileMenu = document.getElementById('close-mobile-menu');
const getStartedBtn = document.getElementById('get-started-btn');
const viewProjectsBtn = document.getElementById('view-projects-btn');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    initializeSmoothScrolling();
});

// Initialize all event listeners
function initializeEventListeners() {
// Service cards
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', function(e) {
            // Only open modal if clicked on the "Learn more" span or if not specifically clicking on other interactive elements
            if (e.target.closest('.learn-more-span') || !e.target.closest('a, button')) {
                const serviceId = this.getAttribute('data-service');
                openServiceModal(serviceId);
            }
        });
    });
// Project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });

    // Modal controls
    closeModal.addEventListener('click', closeModalHandler);
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModalHandler();
        }
    });

    // Mobile menu controls
    mobileMenuButton.addEventListener('click', openMobileMenu);
    closeMobileMenu.addEventListener('click', closeMobileMenu);

    // Hero section buttons
    getStartedBtn.addEventListener('click', function() {
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    });

    viewProjectsBtn.addEventListener('click', function() {
        document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !modalOverlay.classList.contains('hidden')) {
            closeModalHandler();
        }
    });
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Open service modal
function openServiceModal(serviceId) {
    const service = serviceDetails[serviceId];
    if (!service) return;
        const modalHTML = `
        <div class="modal-enter">
            <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-[#14B8A6] rounded-lg flex items-center justify-center mr-4">
                    <i data-feather="${service.icon}" class="text-white"></i>
                </div>
                <h2 class="text-3xl font-bold text-gray-800">${service.title}</h2>
            </div>
            
            <p class="text-[#94A3B8] mb-6 text-lg">${service.description}</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mb-4">What We Offer:</h3>
            <ul class="space-y-3 mb-8">
                ${service.features.map(feature => `
                    <li class="flex items-center text-[#94A3B8]">
                        <i data-feather="check" class="w-5 h-5 text-[#9333EA] mr-3"></i>
                        ${feature}
                    </li>
                `).join('')}
            </ul>
            
            <div class="bg-[#0F172A] rounded-lg p-6 mb-6">
                <h4 class="font-semibold text-gray-800 mb-3">Why Choose Our ${service.title}?</h4>
            <p class="text-[#94A3B8]">
                Our team of experienced professionals delivers high-quality solutions tailored to your specific business needs. We focus on creating value and driving results.
            </p>
            </div>
            
            <button class="w-full bg-[#14B8A6] text-white py-4 rounded-lg font-semibold hover:bg-[#0D9488] transition-colors contact-btn">
Get a Free Consultation
            </button>
        </div>
    `;
modalContent.innerHTML = modalHTML;
    modalOverlay.classList.remove('hidden');
    feather.replace();

    // Add event listener to contact button in modal
    document.querySelector('.contact-btn').addEventListener('click', function() {
        closeModalHandler();
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    });
}

// Open project modal
function openProjectModal(projectId) {
    const project = projectDetails[projectId];
    if (!project) return;

    const modalHTML = `
        <div class="modal-enter">
            <img src="${project.image}" alt="${project.title}" class="w-full h-64 object-cover rounded-lg mb-6">
            
            <h2 class="text-3xl font-bold text-gray-800 mb-4">${project.title}</h2>
            
            <p class="text-gray-600 mb-6 text-lg">${project.description}</p>
            
            <div class="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                    <h4 class="font-semibold text-gray-800 mb-2">Technologies Used:</h4>
                    <div class="flex flex-wrap gap-2">
                        ${project.technologies.map(tech => `
                        <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
${tech}
                        </span>
`).join('')}
                    </div>
                </div>
                
                <div class="space-y-3">
                    <div>
                        <span class="font-semibold text-gray-700">Client:</span>
                        <span class="text-gray-600 ml-2">${project.client}</span>
                    </div>
                    <div>
                        <span class="font-semibold text-gray-700">Duration:</span>
                        <span class="text-gray-600 ml-2">${project.duration}</span>
                    </div>
                </div>
            </div>
            
            <div class="bg-gray-50 rounded-lg p-6">
                <h4 class="font-semibold text-gray-800 mb-2">Project Highlights:</h4>
                    <ul class="list-disc list-inside text-gray-600 space-y-1">
                <li>Increased user engagement by 45%</li>
                <li>Improved conversion rates by 30%</li>
                <li>Reduced loading times by 60%</li>
                <li>Enhanced mobile experience</li>
            </ul>
            </div>
        </div>
    `;

    modalContent.innerHTML = modalHTML;
    modalOverlay.classList.remove('hidden');
}

// Close modal handler
function closeModalHandler() {
    modalOverlay.classList.add('hidden');
    modalContent.innerHTML = '';
}

// Mobile menu functions
function openMobileMenu() {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('mobile-menu-enter');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = '';
}

// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent!';
                submitBtn.classList.remove('bg-gradient-to-r', 'from-blue-500', 'to-cyan-500', 'hover:from-blue-600', 'hover:to-cyan-600');
                submitBtn.classList.add('bg-gradient-to-r', 'from-blue-400', 'to-cyan-400');
setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('bg-secondary');
                submitBtn.classList.add('bg-primary', 'hover:bg-blue-600');
                    contactForm.reset();
                }, 2000);
            }, 1500);
        });
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.service-card, .project-card');
    animateElements.forEach(el => observer.observe(el));