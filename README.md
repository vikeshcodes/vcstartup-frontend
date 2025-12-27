# CodeLearn - Complete Educational Website

A professional, fully-responsive educational website built with HTML, CSS, and vanilla JavaScript. Perfect for hosting on Netlify, GitHub Pages, or any static hosting platform.

## 🚀 Features

### Core Pages
- **Homepage** - Hero section, categories, testimonials, trust indicators
- **Courses Page** - Browse, search, filter premium courses with pricing
- **Tutorials Page** - Free tutorials with sidebar navigation and lesson content
- **Notes Page** - Downloadable PDF cheat sheets and study materials
- **Blog Page** - Article listings with readable posts
- **Contact Page** - Contact form, business information, FAQ section
- **Login/Signup** - Authentication pages with form validation

### Technical Features
- **Responsive Design** - Mobile-first, works on all devices (320px - 4K)
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Search & Filter** - Search courses and filter by category/difficulty
- **Form Validation** - Client-side validation for all forms
- **Dynamic Content Loading** - Load lessons and tutorials dynamically
- **Local Storage Support** - Save user preferences
- **Modern UI** - Clean, professional design with animations
- **Fast Performance** - No external dependencies except Font Awesome

## 📁 Project Structure

```
codelearn/
├── index.html           # Homepage
├── courses.html         # Courses listing page
├── tutorials.html       # Free tutorials page
├── notes.html          # Study notes/downloads page
├── blog.html           # Blog articles page
├── contact.html        # Contact form page
├── login.html          # Login & Signup page
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Color Scheme

- **Primary Color**: #3498db (Blue)
- **Secondary Color**: #2ecc71 (Green)
- **Accent Color**: #e74c3c (Red)
- **Dark Background**: #1a1a1a
- **Light Background**: #f8f9fa
- **Text Dark**: #333333
- **Text Light**: #666666

## 🔧 Customization Guide

### 1. Change Website Name
Edit the logo text in each HTML file:
```html
<div class="logo">
    <i class="fas fa-code"></i> Your Name Here
</div>
```

### 2. Update Contact Information
In `contact.html`, update:
- Address
- Phone numbers
- Email addresses
- Business hours

### 3. Add More Courses
In `courses.html`, duplicate a course card and modify:
```html
<div class="course-card" data-category="web" data-difficulty="beginner" data-price="499">
    <!-- Update details -->
</div>
```

### 4. Add Blog Posts
In `script.js`, expand the `blogPosts` object:
```javascript
const blogPosts = {
    1: { title: '...', date: '...', content: '...' },
    2: { title: '...', date: '...', content: '...' },
    // Add more posts
};
```

### 5. Customize Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    /* Update as needed */
}
```

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🚀 Deployment

### Netlify (Recommended)
1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop project folder
3. Done! Your site is live

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in settings
3. Set source to `main` branch
4. Your site is available at `username.github.io/repo-name`

### Vercel
1. Import project from GitHub
2. Click Deploy
3. Auto-deployed on every push

### Traditional Hosting
1. Upload all files to hosting server via FTP
2. No build process required
3. Works instantly

## 📊 Browser Compatibility

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎓 JavaScript Functions

### Navigation
- `toggleMenu()` - Toggle mobile menu
- `updateActiveNavLink()` - Highlight current page

### Search & Filter
- `searchCourses()` - Search by title/description
- `filterByCategory(cat)` - Filter by category
- `filterByDifficulty(level)` - Filter by difficulty

### Forms
- `validateForm(formId)` - Validate form inputs
- `submitForm(formId)` - Submit and validate form
- `enrollCourse(name, price)` - Enroll in course
- `downloadNote(name)` - Download note file

### Content
- `loadTutorial(name, lesson)` - Load lesson content
- `readBlogPost(id)` - Display blog post
- `addToFavorites(id)` - Add to favorites

### Utils
- `navigateTo(url)` - Navigate with scroll
- `paginate(page, itemsPerPage)` - Paginate items
- `sortCourses(sortBy)` - Sort course list

## 💾 Storage

### LocalStorage Keys
- `favorites` - Array of favorite course IDs
- `user_preferences` - User theme/language preferences

### SessionStorage Keys
- Temporary user data during session

## 🔒 Security Notes

This is a frontend-only website. For production:

1. **Backend Integration**
   - Connect to Node.js/Python backend
   - Handle payment processing via Razorpay/Stripe
   - Store user data in database

2. **Authentication**
   - Implement JWT authentication
   - Secure password hashing
   - Email verification

3. **Data Protection**
   - HTTPS only
   - Input sanitization
   - CSRF protection

## 📈 SEO Optimization

- Meta descriptions on all pages
- Open Graph tags for social sharing
- Semantic HTML structure
- Responsive design (mobile-friendly)
- Fast loading times
- Proper heading hierarchy

## 🐛 Troubleshooting

### Mobile menu not closing
- Clear browser cache
- Check JavaScript console for errors

### Responsive design issues
- Test in browser DevTools
- Check viewport meta tag

### Forms not working
- Verify form ID matches JavaScript
- Check browser console for errors
- Ensure all required fields have `required` attribute

## 📞 Support

For issues or questions:
1. Check browser console (F12)
2. Review JavaScript errors
3. Clear cache and reload
4. Test in different browser

## 📝 License

This project is open source and available for personal and commercial use.

## 🎯 Future Enhancements

- [ ] User dashboard
- [ ] Payment integration (Razorpay/Stripe)
- [ ] Email notifications
- [ ] Progress tracking
- [ ] Certificates generation
- [ ] Discussion forums
- [ ] Live chat support
- [ ] Video player integration
- [ ] Database integration
- [ ] Admin panel

## 🙏 Credits

Built with:
- HTML5
- CSS3
- Vanilla JavaScript
- Font Awesome Icons
- Google Fonts

---

**Made with ❤️ for learners** | CodeLearn 2025
