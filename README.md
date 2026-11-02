# Eventora — Event Management Website

A responsive event discovery and registration website built for the K Explore Web Designing assignment.

## Features

- Responsive homepage with announcement bar, navigation header, hero section and footer
- Featured event and event cards with dates, venues, images and descriptions
- Live search and category filters
- Event detail dialog with registration call-to-action
- Registration form with JavaScript validation for name, email, phone, event selection and consent
- Successful registration confirmation
- Registration and newsletter data saved in browser Local Storage
- Dark/light theme toggle
- Featured-event countdown timer
- Mobile navigation menu
- Keyboard shortcut `Ctrl + K` / `⌘ + K` to focus event search

## Tech stack

- HTML5
- CSS3
- Vanilla JavaScript
- Local Storage
- Google Fonts and remote Unsplash images

## Run locally

No build tools or package installation are required.

1. Download or clone this repository.
2. Open `index.html` in a browser.

For a local development server, you can use the VS Code **Live Server** extension.

## Deploy

### GitHub Pages
1. Push the project files to a GitHub repository.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select `main` and `/ (root)`, then save.
5. Wait for GitHub Pages to publish the site.

### Netlify
Drag the project folder into Netlify's manual deploy area, or connect the GitHub repository.

## Registration data

This is a front-end assignment demo. Registration records are stored in the visitor's browser using Local Storage under `eventoraRegistrations`. Newsletter emails are stored under `eventoraSubscribers`. Data is not sent to a backend or shared across devices.

To inspect demo registrations:
1. Open the website.
2. Press `F12` → **Application** → **Local Storage**.
3. Select the website origin and inspect `eventoraRegistrations`.

## Customization

Edit the `events` array near the top of `script.js` to change event names, categories, dates, venues, descriptions and images. Update the featured-event content in `index.html` if you change the featured event.

## Notes

- Event names, dates and venues are sample/demo content created for this assignment.
- Remote images and Google Fonts require an internet connection.
- Replace the demo contact email and event details with your own information before final submission.
