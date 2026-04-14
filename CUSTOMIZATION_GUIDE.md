# Quick Customization Guide

## 🔧 How to Customize Your Portfolio

### 1. **Update Personal Information**

#### In `index.html`:
```html
<!-- Line 6: Update the title -->
<title>Your Name | Your Title</title>

<!-- Line 37: Update your social links -->
<a href="https://github.com/YOUR-USERNAME">
<a href="https://www.linkedin.com/in/YOUR-PROFILE/">
<a href="mailto:your-email@example.com">

<!-- Line 50: Update main headline -->
<h1>Hi, I'm <span class="highlight">Your Name</span></h1>

<!-- Line 51: Update subtitle -->
<h2 class="subtitle">Your Title | Your Specialty | Your Focus</h2>

<!-- Contact section (around line 370) -->
<a href="mailto:your-email@example.com">your-email@example.com</a>
<a href="https://github.com/your-username">github.com/your-username</a>
<a href="https://www.linkedin.com/in/your-profile/">LinkedIn Profile</a>
```

---

### 2. **Update Projects**

#### Add/Edit Project Information:
Each project card follows this structure in `index.html` (around line 245):

```html
<div class="project-card">
  <div class="project-image" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
    <!-- Change gradient colors here -->
  </div>
  <div class="project-content">
    <h3>Your Project Title</h3>
    <p>Detailed description of your project...</p>
    <div class="project-tech">
      <span class="tech-tag">Technology1</span>
      <span class="tech-tag">Technology2</span>
    </div>
    <div class="project-stats">
      <span><i class="fas fa-star"></i> Your Stat</span>
      <span><i class="fas fa-code"></i> 2000+ Lines</span>
    </div>
  </div>
</div>
```

**Update:**
- `h3` - Project title
- `p` - Project description
- `.tech-tag` - Technologies used
- `.project-stats` - Relevant metrics

**Gradient Color Pairs (pick your favorites):**
- Purple to Pink: `135deg, #667eea 0%, #764ba2 100%`
- Pink to Red: `135deg, #f093fb 0%, #f5576c 100%`
- Blue to Cyan: `135deg, #4facfe 0%, #00f2fe 100%`
- Orange to Yellow: `135deg, #fa709a 0%, #fee140 100%`

---

### 3. **Update Skills**

#### Add/Remove Skills (in `index.html` around line 190):

```html
<div class="skill-card" data-category="frontend">
  <div class="skill-icon"><i class="fas fa-react"></i></div>
  <h3>Skill Name</h3>
  <p>Brief description of skill</p>
</div>
```

**Update:**
- `data-category` - Choose: frontend, backend, database, devops, testing
- `.skill-icon` - Font Awesome icon (https://fontawesome.com/icons)
- `h3` - Skill name
- `p` - Skill description

**Example Icons:**
- React: `fas fa-react`
- JavaScript: `fab fa-js-square`
- Python: `fab fa-python`
- Java: `fab fa-java`
- Docker: `fab fa-docker`
- AWS: `fab fa-aws`
- Database: `fas fa-database`

---

### 4. **Update Colors**

#### In `style.css` (root variables, lines 1-10):

```css
:root {
  --primary-color: #4cc9f0;      /* Change cyan to your color */
  --secondary-color: #f0466f;    /* Change pink to your color */
  --dark-bg: #0f0f1e;            /* Dark background */
  --light-bg: #1a1a2e;           /* Lighter background */
  --card-bg: #16213e;            /* Card background */
  --text-primary: #e4e4e7;       /* Main text */
  --text-secondary: #a1a1a1;     /* Secondary text */
}
```

**Color Suggestions:**
- Modern Blue: `#0066ff` or `#2563eb`
- Tech Green: `#10b981` or `#00d96f`
- Purple: `#7c3aed` or `#a855f7`
- Orange: `#f97316` or `#ff6b35`

---

### 5. **Update Timeline (Experience)**

#### In `index.html` (around line 297):

```html
<div class="timeline-item">
  <div class="timeline-date">YEAR-YEAR</div>
  <div class="timeline-content">
    <h3>Your Position</h3>
    <p class="timeline-company">Company/Organization</p>
    <p>Description of what you did...</p>
    <div class="timeline-tags">
      <span>Technology1</span>
      <span>Technology2</span>
    </div>
  </div>
</div>
```

**Update:**
- `timeline-date` - Year range (e.g., 2024-Present)
- `h3` - Job title
- `.timeline-company` - Company name
- `p` - Job description
- `.timeline-tags` - Skills developed

---

### 6. **Update Hero Section Text**

#### In `index.html` (lines 50-60):

```html
<!-- Main headline -->
<h1>Hi, I'm <span class="highlight">Your Name</span></h1>

<!-- Subtitle with your specialties -->
<h2 class="subtitle">Frontend Developer | React Specialist | Web Designer</h2>

<!-- Description -->
<p class="hero-description">
  Write a compelling 2-3 sentence description of your expertise and passion.
  Focus on what you can do and what value you bring.
</p>
```

---

### 7. **Update About Section**

#### In `index.html` (around line 100):

```html
<p>
  Update this text with your actual background, education, and experience.
</p>

<ul class="about-list">
  <li><strong>Your Focus 1:</strong> Description</li>
  <li><strong>Your Focus 2:</strong> Description</li>
  <li><strong>Your Focus 3:</strong> Description</li>
  <li><strong>Your Focus 4:</strong> Description</li>
</ul>
```

---

### 8. **Update Statistics**

#### In `index.html` (around line 135):

```html
<div class="stat">
  <h3>50+</h3>        <!-- Change number -->
  <p>Projects</p>     <!-- Change label -->
</div>
```

---

### 9. **Customize Font Awesome Icons**

Find icons at: https://fontawesome.com/icons

#### Format: `<i class="fas fa-ICON-NAME"></i>` or `<i class="fab fa-ICON-NAME"></i>`

```
fas = solid icons
fab = brand icons
far = regular icons

Examples:
<i class="fas fa-star"></i>
<i class="fab fa-github"></i>
<i class="fas fa-code"></i>
<i class="fas fa-database"></i>
```

---

### 10. **Add Project Links**

#### Update project card links (around line 260):

```html
<!-- Change # to your actual project URLs -->
<a href="https://your-project-live-link.com" class="project-link" title="View Project">
<a href="https://github.com/your-username/project-repo" class="project-link" title="Source Code">
```

---

### 11. **Contact Form Customization**

The contact form in the HTML is connected to the JavaScript validation in `script.js`.

To actually send emails, you have options:
1. Use a service like **Formspree** (https://formspree.io/)
2. Use **EmailJS** (https://www.emailjs.com/)
3. Create a backend endpoint to handle emails

#### Example with Formspree:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- form fields -->
</form>
```

---

### 12. **Update README.md**

Update `README.md` with:
- Your specific project details
- Your actual skills and experience
- Your real project links and descriptions
- Your personal learning goals

---

## 🚀 Deployment Checklist

Before deploying, verify:
- [ ] All personal info updated
- [ ] Project links working
- [ ] Contact email is correct
- [ ] GitHub link points to your profile
- [ ] LinkedIn profile link is correct
- [ ] No placeholder text remaining
- [ ] All images optimized (if adding images)
- [ ] Mobile view looks good
- [ ] Links open in new tabs (for external links)
- [ ] No console errors (F12 to check)

---

## 📤 Deploy to Vercel

```bash
# 1. Push to GitHub
git add .
git commit -m "Update portfolio"
git push origin main

# 2. Go to Vercel (https://vercel.com)
# 3. Click "New Project"
# 4. Select your GitHub repository
# 5. Deploy!
```

---

## 💡 Pro Tips

1. **Keep it Updated** - Update projects, skills, and experience quarterly
2. **Add Real Projects** - Replace placeholder projects with your actual work
3. **Optimize Images** - Keep image file sizes small (< 100KB each)
4. **Test Mobile** - Use Chrome DevTools (F12) to test mobile layout
5. **Analytics** - Consider adding Google Analytics to track visitors
6. **SEO** - Update meta tags in `<head>` for better search visibility

```html
<meta name="description" content="Your tagline describing your portfolio">
<meta name="keywords" content="developer, full-stack, web development">
```

---

## ❓ Common Questions

**Q: How do I change the main color?**
A: Edit `--primary-color` in `:root` in `style.css`

**Q: How do I add more projects?**
A: Copy a project card and paste it in the projects grid

**Q: How do I hide the API demo section?**
A: Remove or comment out the entire `<section id="api-demo">` section

**Q: How do I make the contact form send emails?**
A: Use Formspree, EmailJS, or create a backend service

**Q: How do I add my projects' images?**
A: Save images in `/assets/images` and reference them in project cards

---

## 📧 Still Need Help?

- Check the main README.md for more information
- Review UPGRADES.md for full feature list
- Visit Font Awesome docs for icon options
- Check MDN Web Docs for HTML/CSS/JavaScript reference

---

**Your portfolio is ready to customize! Good luck with your applications!** 🚀
