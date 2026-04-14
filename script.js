// ===== PAGE INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
  console.log("🚀 Portfolio Website Loaded - Full-Stack Developer");
  initializeSkillsFilter();
  initializeSmoothScroll();
  initializeContactForm();
  initializeHamburgerMenu();
});

// ===== SKILLS FILTER FUNCTIONALITY =====
function initializeSkillsFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const selectedCategory = button.getAttribute('data-filter');

      // Filter skills with animation
      skillCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (selectedCategory === 'all' || cardCategory === selectedCategory) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.8)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// ===== SMOOTH SCROLL =====
function initializeSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          
          // Close hamburger menu if open
          const navMenu = document.querySelector('.nav-menu');
          if (navMenu && navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
          }
        }
      }
    });
  });
}

// ===== CONTACT FORM HANDLING =====
function initializeContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(this);
      const name = this.querySelector('input[type="text"]').value;
      const email = this.querySelector('input[type="email"]').value;
      const message = this.querySelector('textarea').value;

      // Simple validation
      if (name && email && message) {
        // Simulate sending email (in production, use a backend service)
        console.log('Message sent:', { name, email, message });
        
        // Show success message
        const successMsg = document.createElement('div');
        successMsg.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
        successMsg.style.cssText = `
          background: rgba(76, 201, 240, 0.1);
          border: 1px solid #4cc9f0;
          color: #4cc9f0;
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 20px;
          animation: slideIn 0.3s ease;
        `;
        
        contactForm.insertBefore(successMsg, contactForm.firstChild);
        
        // Reset form
        contactForm.reset();
        
        // Remove message after 5 seconds
        setTimeout(() => successMsg.remove(), 5000);
      }
    });
  }
}

// ===== HAMBURGER MENU =====
function initializeHamburgerMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
  }
}

// ===== GitHub API Integration - BACKEND CONCEPT =====
async function fetchGitHubUser() {
  const username = document.getElementById('userInput').value.trim();
  const resultContainer = document.getElementById('apiResult');

  if (!username) {
    resultContainer.innerHTML = '<p style="color: #f0466f;">Please enter a GitHub username.</p>';
    return;
  }

  // Show loading state
  resultContainer.innerHTML = '<p style="color: #4cc9f0;">Loading...</p>';

  try {
    // Fetch user data from GitHub API (demonstrating backend API integration)
    const response = await fetch(`https://api.github.com/users/${username}`);
    
    if (!response.ok) {
      throw new Error('User not found');
    }

    const userData = await response.json();

    // Display user profile
    const profileHTML = `
      <div class="github-profile">
        <h3>${userData.name || userData.login}</h3>
        <div class="profile-info">
          <img src="${userData.avatar_url}" alt="${userData.login}" class="profile-avatar">
          <div class="profile-details">
            <p><strong>Username:</strong> ${userData.login}</p>
            <p><strong>Public Repos:</strong> ${userData.public_repos}</p>
            <p><strong>Followers:</strong> ${userData.followers}</p>
            <p><strong>Following:</strong> ${userData.following}</p>
            <p><strong>Bio:</strong> ${userData.bio || 'No bio available'}</p>
            <p><strong>Location:</strong> ${userData.location || 'Not specified'}</p>
            <p><a href="${userData.html_url}" target="_blank" style="color: #4cc9f0; text-decoration: none;">View Profile ➜</a></p>
          </div>
        </div>
      </div>
    `;
    
    resultContainer.innerHTML = profileHTML;
    resultContainer.classList.add('loaded');
  } catch (error) {
    resultContainer.innerHTML = `<p style="color: #f0466f;">❌ Error: ${error.message}</p>`;
    resultContainer.classList.remove('loaded');
  }
}

// Allow Enter key to submit in API demo
document.addEventListener('keypress', function(e) {
  if (e.key === 'Enter' && document.getElementById('userInput') === document.activeElement) {
    fetchGitHubUser();
  }
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'slideUp 0.6s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all skill cards and project cards for animation
document.querySelectorAll('.skill-card, .project-card, .timeline-content').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  observer.observe(el);
});

// ===== ADD SLIDE UP ANIMATION =====
const style = document.createElement('style');
style.textContent = `
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .skill-card {
    transition: all 0.3s ease;
  }
`;
document.head.appendChild(style);

// ===== NAVBAR SCROLL EFFECT =====
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    navbar.style.boxShadow = 'none';
  } else {
    navbar.style.boxShadow = '0 10px 30px rgba(76, 201, 240, 0.1)';
  }

  lastScroll = currentScroll;
});

// ===== PERFORMANCE MONITORING =====
console.log('%cFull-Stack Developer Portfolio', 'color: #4cc9f0; font-size: 20px; font-weight: bold;');
console.log('%cCapabilities: Frontend Development, Backend APIs, Database Design, DevOps, QA Automation', 'color: #f0466f; font-size: 14px;');
console.log('%cGitHub: https://github.com/bakanacareerz-byte', 'color: #4cc9f0; font-size: 12px;');
