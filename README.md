# Harry Bandukda - Modern Portfolio

A sleek, modern portfolio website built with Next.js 16, React, Tailwind CSS, and Framer Motion. Designed to showcase projects, skills, and experience with smooth animations and a contemporary dark theme.

## Features

- **Modern Design**: Contemporary dark theme with cyan and magenta accents
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion powered animations for engaging interactions
- **Performance Optimized**: Built with Next.js for fast loading and SEO
- **Accessible**: Semantic HTML and ARIA attributes for accessibility
- **Dark Mode**: Beautiful dark theme optimized for eye comfort
- **Component-Based**: Modular, reusable React components

## Tech Stack

- **Framework**: Next.js 16
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & JetBrains Mono from Google Fonts

## Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/harrybandukda/harrybandukda.github.io.git
   cd harrybandukda.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio in action.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main home page
│   └── globals.css         # Global styles and utilities
├── components/
│   ├── Navigation.tsx      # Header navigation
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills showcase
│   ├── Projects.tsx        # Featured projects
│   ├── Experience.tsx      # Work experience timeline
│   ├── Contact.tsx         # Contact form and info
│   └── Footer.tsx          # Footer
├── lib/
│   └── utils.ts            # Utility functions
├── public/
│   └── assets/             # Images and media
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── next.config.mjs         # Next.js configuration
```

## Customization

### Update Personal Information
- Edit component files to update your name, email, and social links
- Update project details in `components/Projects.tsx`
- Modify experience in `components/Experience.tsx`
- Add your photo to `public/assets/images/`

### Change Colors
Edit the color palette in `tailwind.config.ts` and `app/globals.css`:
- Primary color: `#00d9ff` (cyan)
- Accent color: `#ff006e` (magenta)
- Background: `#0a0e27` (dark navy)

### Modify Content
All section content is contained in their respective components for easy editing.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically build and deploy
5. Your portfolio is now live!

### Other Deployment Options

- **GitHub Pages**: Push to GitHub and enable Pages from settings
- **Netlify**: Connect your GitHub repo to Netlify
- **Any static host**: Run `npm run build` and deploy the `.next` folder

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images with Next.js Image component
- Tailwind CSS purging for minimal CSS
- Code splitting with Next.js
- SEO optimized with metadata
- Core Web Vitals optimized

## License

This project is open source and available under the MIT License.

## Contact

- Email: harry@example.com
- GitHub: [@harrybandukda](https://github.com/harrybandukda)
- LinkedIn: [@harrybandukda](https://linkedin.com/in/harrybandukda)

---

Built with by Harry Bandukda
