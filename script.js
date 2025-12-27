// script.js - Main JavaScript File

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }

    // Update active nav link on page load
    updateActiveNavLink();
});

// Update Active Navigation Link
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Navigate to URL with query parameters
function navigateTo(url) {
    window.location.href = url;
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Search functionality
function searchCourses() {
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const courses = document.querySelectorAll('.course-card, .tutorial-card');

    courses.forEach(course => {
        const title = course.querySelector('h3')?.textContent.toLowerCase() || '';
        const description = course.querySelector('p')?.textContent.toLowerCase() || '';

        if (title.includes(searchTerm) || description.includes(searchTerm) || searchTerm === '') {
            course.style.display = 'block';
        } else {
            course.style.display = 'none';
        }
    });
}

// Filter courses by category
function filterByCategory(category) {
    const courses = document.querySelectorAll('.course-card, .tutorial-card');

    if (category === 'all') {
        courses.forEach(course => {
            course.style.display = 'block';
        });
    } else {
        courses.forEach(course => {
            const courseCategory = course.getAttribute('data-category') || '';
            if (courseCategory === category) {
                course.style.display = 'block';
            } else {
                course.style.display = 'none';
            }
        });
    }
}

// Filter by difficulty level
function filterByDifficulty(level) {
    const courses = document.querySelectorAll('.course-card, .tutorial-card');

    if (level === 'all') {
        courses.forEach(course => {
            course.style.display = 'block';
        });
    } else {
        courses.forEach(course => {
            const difficulty = course.getAttribute('data-difficulty') || '';
            if (difficulty === level) {
                course.style.display = 'block';
            } else {
                course.style.display = 'none';
            }
        });
    }
}

// Form Validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;

    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            input.style.borderColor = '#e74c3c';
            isValid = false;
        } else {
            input.style.borderColor = '#e0e0e0';
        }
    });

    return isValid;
}
function switchAuthTab(tab) {
  document.getElementById('login').classList.remove('active');
  document.getElementById('signup').classList.remove('active');

  document.querySelectorAll('.auth-tab').forEach(btn => {
    btn.classList.remove('active');
  });

  document.getElementById(tab).classList.add('active');

  event.target.classList.add('active');
}

// Submit form with validation
//function submitForm(formId, redirectUrl = null) {
  //  if (!validateForm(formId)) {
    //    alert('Please fill out all required fields!');
      //  return;
    //}

    //const form = document.getElementById(formId);
    //const formData = new FormData(form);
    
    // In a real application, you would send this to a server
    //old submit format
    //console.log('Form submitted:', Object.fromEntries(formData));

    //alert('Form submitted successfully!');
    
   // if (redirectUrl) {
     //   setTimeout(() => {
       //     window.location.href = redirectUrl;
        //}, 1000);
    //} else {
      //  form.reset();
    //}


// Load tutorial content
function loadTutorial(tutorialName, lessonName) {
    const mainContent = document.querySelector('.main-content');
    if (!mainContent) return;

    // Sample tutorial content
    const tutorials = {
        'html': {
            'introduction': {
                title: 'Introduction to HTML',
                content: `
                    <h2>What is HTML?</h2>
                    <p>HTML (HyperText Markup Language) is the standard markup language used to create web pages. It provides the structure and content of websites.</p>
                    
                    <h2>Basic Structure</h2>
                    <p>Every HTML document has a basic structure:</p>
                    <div class="code-example"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Page Title&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello World&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></div>

                    <h2>Common Tags</h2>
                    <p>HTML uses various tags to structure content:</p>
                    <ul>
                        <li><strong>&lt;h1&gt; to &lt;h6&gt;</strong> - Headings</li>
                        <li><strong>&lt;p&gt;</strong> - Paragraphs</li>
                        <li><strong>&lt;a&gt;</strong> - Links</li>
                        <li><strong>&lt;img&gt;</strong> - Images</li>
                        <li><strong>&lt;div&gt;</strong> - Containers</li>
                    </ul>
                `
            },
            'tags': {
                title: 'HTML Tags & Elements',
                content: `
                    <h2>Understanding Tags</h2>
                    <p>HTML tags are keywords surrounded by angle brackets that tell browsers how to display content.</p>
                    
                    <h2>Semantic Tags</h2>
                    <p>Use semantic HTML for better accessibility and SEO:</p>
                    <div class="code-example"><code>&lt;header&gt; - Page header
&lt;nav&gt; - Navigation menu
&lt;main&gt; - Main content
&lt;article&gt; - Article content
&lt;section&gt; - Section of content
&lt;aside&gt; - Sidebar content
&lt;footer&gt; - Page footer</code></div>

                    <h2>Best Practices</h2>
                    <ul>
                        <li>Always close your tags</li>
                        <li>Use lowercase tag names</li>
                        <li>Indent your code for readability</li>
                        <li>Use semantic HTML when possible</li>
                    </ul>
                `
            }
        },
        'css': {
            'introduction': {
                title: 'Introduction to CSS',
                content: `
                    <h2>What is CSS?</h2>
                    <p>CSS (Cascading Style Sheets) is used to style and layout web pages to make them visually appealing.</p>
                    
                    <h2>Three Ways to Apply CSS</h2>
                    <div class="code-example"><code>1. Inline: &lt;h1 style="color: blue;"&gt;
2. Internal: &lt;style&gt; in &lt;head&gt;
3. External: Link to .css file (Best Practice)</code></div>

                    <h2>CSS Selectors</h2>
                    <ul>
                        <li><strong>.classname</strong> - Class selector</li>
                        <li><strong>#idname</strong> - ID selector</li>
                        <li><strong>element</strong> - Element selector</li>
                        <li><strong>element.class</strong> - Combination selector</li>
                    </ul>
                `
            }
        },
        'javascript': {
            'introduction': {
                title: 'Introduction to JavaScript',
                content: `
                    <h2>What is JavaScript?</h2>
                    <p>JavaScript is a programming language that enables interactive web pages and is an essential part of web applications.</p>
                    
                    <h2>Variables</h2>
                    <div class="code-example"><code>let name = "John";
const age = 25;
var city = "New York";</code></div>

                    <h2>Data Types</h2>
                    <ul>
                        <li>String: "Hello"</li>
                        <li>Number: 42, 3.14</li>
                        <li>Boolean: true, false</li>
                        <li>Object: {name: "John"}</li>
                        <li>Array: [1, 2, 3]</li>
                    </ul>
                `
            }
        }
    };

    if (tutorials[tutorialName] && tutorials[tutorialName][lessonName]) {
        const lesson = tutorials[tutorialName][lessonName];
        mainContent.innerHTML = `<div class="lesson-content">${lesson.content}</div>`;
    }
}

// Pagination
function paginate(page, itemsPerPage = 12) {
    const items = document.querySelectorAll('.course-card, .tutorial-card');
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    items.forEach((item, index) => {
        if (index >= startIndex && index < endIndex) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    // Update pagination buttons
    updatePaginationButtons(page, totalPages);
}

function updatePaginationButtons(currentPage, totalPages) {
    const paginationContainer = document.querySelector('.pagination');
    if (!paginationContainer) return;

    paginationContainer.innerHTML = '';

    if (currentPage > 1) {
        const prevBtn = document.createElement('button');
        prevBtn.textContent = 'Previous';
        prevBtn.onclick = () => paginate(currentPage - 1);
        paginationContainer.appendChild(prevBtn);
    }

    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.className = i === currentPage ? 'active' : '';
        pageBtn.onclick = () => paginate(i);
        paginationContainer.appendChild(pageBtn);
    }

    if (currentPage < totalPages) {
        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Next';
        nextBtn.onclick = () => paginate(currentPage + 1);
        paginationContainer.appendChild(nextBtn);
    }
}

// Sort courses
function sortCourses(sortBy) {
    const courses = Array.from(document.querySelectorAll('.course-card'));
    const container = courses[0]?.parentElement;

    if (!container) return;

    courses.sort((a, b) => {
        switch(sortBy) {
            case 'name':
                return a.querySelector('h3').textContent.localeCompare(b.querySelector('h3').textContent);
            case 'price':
                const priceA = parseFloat(a.getAttribute('data-price') || 0);
                const priceB = parseFloat(b.getAttribute('data-price') || 0);
                return priceA - priceB;
            case 'rating':
                const ratingA = parseFloat(a.getAttribute('data-rating') || 0);
                const ratingB = parseFloat(b.getAttribute('data-rating') || 0);
                return ratingB - ratingA;
            default:
                return 0;
        }
    });

    courses.forEach(course => {
        container.appendChild(course);
    });
}

// Enroll in course
function enrollCourse(courseName, price = 0) {
    if (price === 0) {
        alert(`You've successfully enrolled in ${courseName}!`);
        // In real app, this would redirect to dashboard
    } else {
        alert(`Proceeding to payment for ${courseName} - ₹${price}`);
        // In real app, this would redirect to payment gateway
    }
}

// Download note
function downloadNote(noteName) {
    alert(`Downloading ${noteName}...`);
    // In real app, this would trigger actual file download
    console.log(`Downloading: ${noteName}`);
}

// Add to favorites
function addToFavorites(itemId) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    if (!favorites.includes(itemId)) {
        favorites.push(itemId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Added to favorites!');
    } else {
        alert('Already in favorites!');
    }
}

// Read blog post
function readBlogPost(postId) {
    const blogPosts = {
        1: {
            title: 'Getting Started with Web Development',
            date: 'December 15, 2024',
            author: 'CodeLearn Team',
            content: `
                <p>Web development is an exciting field that combines creativity with technical skills...</p>
                <p>In this article, we'll explore the basics of getting started with web development.</p>
            `
        },
        2: {
            title: 'JavaScript ES6 Features You Should Know',
            date: 'December 10, 2024',
            author: 'Expert Developer',
            content: `
                <p>ES6 introduced many new features to JavaScript that made the language more powerful...</p>
                <p>Let's explore some of the most important features including arrow functions, classes, and more.</p>
            `
        }
    };

    const post = blogPosts[postId];
    if (post) {
        const mainContent = document.querySelector('.main-content') || document.querySelector('main');
        if (mainContent) {
            mainContent.innerHTML = `
                <h1>${post.title}</h1>
                <p><small>By ${post.author} on ${post.date}</small></p>
                <div>${post.content}</div>
            `;
        }
    }
}

// Initialize tooltips
function initTooltips() {
    const tooltips = document.querySelectorAll('[title]');
    tooltips.forEach(element => {
        element.addEventListener('mouseenter', function(e) {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('title');
            document.body.appendChild(tooltip);

            const rect = this.getBoundingClientRect();
            tooltip.style.top = (rect.top - 30) + 'px';
            tooltip.style.left = rect.left + 'px';

            setTimeout(() => tooltip.remove(), 3000);
        });
    });
}

// Loading animation
function showLoading() {
    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.innerHTML = '<p>Loading...</p>';
    document.body.appendChild(loader);
}

function hideLoading() {
    const loader = document.querySelector('.loader');
    if (loader) loader.remove();
}

// Session storage for user preferences
function saveUserPreference(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
}

function getUserPreference(key) {
    const value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null;
}

// Theme Toggle Functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    // Get saved theme or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-color-scheme') === 'dark' ? 'dark' : 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

function setTheme(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-color-scheme', 'dark');
        if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.documentElement.removeAttribute('data-color-scheme');
        if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// Initialize on page load
window.addEventListener('load', function() {
    updateActiveNavLink();
    initThemeToggle();
});
