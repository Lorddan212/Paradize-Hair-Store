# Paradize Hair Store

A modern multi-page hair vendor portfolio website built for **Paradize Hair Store**. The project showcases premium human hair products, wigs, services, gallery items, and contact options in a polished, responsive layout.

## Overview

This website is designed to help a hair brand present its products and services professionally online. It combines a visually rich landing page with supporting pages for brand story, services, product catalog, gallery, and customer contact.

## Features

- Responsive multi-page website
- Modern hero section with animated canvas effects
- Dark and light theme toggle
- Product showcase with quick-view interactions
- Product category filtering
- Gallery filtering with lightbox preview
- Contact form validation
- Newsletter form interaction
- WhatsApp and phone call call-to-action buttons
- Smooth scroll and reveal-on-scroll animations

## Pages

- `index.html` - Home page
- `about.html` - Brand story and business introduction
- `services.html` - Hair-related services offered
- `products.html` - Product catalog with category filters
- `gallery.html` - Visual gallery with filter and lightbox
- `contact.html` - Contact details and inquiry form

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- Bootstrap 5
- Bootstrap Icons
- Google Fonts

## Project Structure

```text
Hair Vendor Portfolio/
|-- index.html
|-- about.html
|-- services.html
|-- products.html
|-- gallery.html
|-- contact.html
|-- README.md
`-- assets/
    |-- css/
    |   `-- style.css
    |-- js/
    |   `-- script.js
    `-- img/
```

## Getting Started

1. Clone or download this project.
2. Open the project folder.
3. Launch `index.html` in your browser.

For a better development experience, you can run it with a local server such as the VS Code **Live Server** extension.

## Contact Form Setup

The contact form is prepared for **Formspree** submissions.

To make it send real emails:

1. Create a form in Formspree.
2. Copy your Formspree endpoint, which looks like `https://formspree.io/f/your-form-id`.
3. Open `contact.html`.
4. Replace the `data-form-endpoint` value on the `#contactForm` element with your real Formspree endpoint.

After that, messages submitted from the contact page will be sent through Formspree instead of showing only a demo success message.

## Customization

You can easily adapt this project for another hair brand or beauty business by updating:

- Business name and brand text in the HTML files
- Contact details like phone number, email, and WhatsApp link
- Product names, prices, and descriptions
- Gallery and product images in `assets/img/`
- Colors, spacing, and typography in `assets/css/style.css`
- Interactive behavior in `assets/js/script.js`

## Brand Contact Used In This Project

- WhatsApp: `+234 816 853 2364`
- Phone: `+234 701 837 7263`
- Email: `marychinyere170@gmail.com`

## Author

Designed for **Mary Chinyere Udeh** and the **Paradize Hair Store** brand.

## Notes

- This is a static frontend project.
- No backend or database is connected.
- Form submissions are currently handled on the client side only.
