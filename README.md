# VPower Electrical Services Website Template

This is a customizable Next.js template for electrical service company websites. It features a modern, responsive design built with Next.js, Tailwind CSS, and Framer Motion.

## How to Customize

This template is designed to be easily customizable by updating a central configuration file. Follow these steps to rebrand it for your own company:

### 1. Update the Configuration File

All customizable aspects of the website are managed in a single file: `lib/config.ts`. Here you can change:

- Company information (name, tagline, description, contact details)
- Brand colors
- Logo and image paths
- Service areas and services offered
- Licenses and certifications
- Social media links
- Business hours
- SEO information

The config file is structured like this:

```typescript
export const config = {
  // Base Paths and URLs
  basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
  
  // Company information
  companyName: 'Your Company Name',
  shortName: 'Short Name',
  tagline: 'Your Company Tagline',
  // ... and more
}
```

### 2. Replace Assets

Replace the following assets in the `public` folder:

- Your company logo at `/public/YOUR-LOGO.svg` (and update the path in config)
- Hero and experience images with your own
- Any other images referenced in the config

### 3. Update Content

After updating the config file, review the website to ensure all content is appropriate for your business. You may want to modify:

- Services offered
- Testimonials
- About/team information
- Service area specifics

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment

For GitHub Pages deployment, update the `basePath` in the config file to match your repository name.

For other hosting services, the site should be deployable as a standard Next.js project.

## License

This template is provided for commercial use with proper licensing. Please refer to the license agreement for details. 