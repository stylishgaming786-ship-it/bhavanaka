# Netlify Deployment Guide

## Project Structure
Your portfolio website is now ready for deployment with the following structure:
- `index.html` - Main portfolio page
- `port.css` - Main stylesheet
- `port.js` - Main JavaScript
- `login/` - Login and signup pages
- `images/` - Images folder (add your images here)
- `netlify.toml` - Netlify configuration
- `_redirects` - URL redirects configuration

## Deployment Steps

### Option 1: Netlify Drop (Easiest)

1. Go to https://app.netlify.com/drop
2. Drag and drop your entire project folder
3. Your site will be live instantly!

### Option 2: Netlify CLI

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Deploy from project directory:
   ```bash
   netlify deploy --prod
   ```

### Option 3: Git Integration

1. Create a GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
3. Connect repository in Netlify dashboard
4. Netlify will auto-deploy on every push

## Important Notes

### Missing Files
The following files need to be added to the `images/` folder:
- `bhav pic.jpeg` - Your profile picture
- `my resume.pdf` - Your resume PDF

Without these files, the image and resume link won't work properly.

### What's Configured
- Single Page Application routing (all routes redirect to index.html)
- Proper folder structure for login/signup pages
- All file paths updated correctly

### After Deployment
Your site will be accessible at: `https://[random-name].netlify.app`
You can customize the domain name in Netlify settings.

## Testing Locally
Simply open `index.html` in a browser to test locally.
