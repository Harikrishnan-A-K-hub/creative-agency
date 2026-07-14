# Creative Agency Website

A premium creative agency website built with Next.js, Tailwind CSS, and a monochrome design aesthetic.

## Features

- **Homepage** with hero section, services overview, portfolio showcase, testimonials, and contact CTA
- **About page** with agency story, values, and team members
- **Services page** with detailed service descriptions
- **Portfolio gallery** with filtering and individual project pages
- **Blog** with articles and individual post pages
- **Contact form** with service selection and budget range
- **Admin dashboard** for managing portfolio and blog content
- **Authentication** with login and registration pages

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS with custom monochrome theme
- **CMS**: Sanity (headless) - ready to integrate
- **Database**: PostgreSQL via Supabase - ready to integrate
- **Authentication**: NextAuth.js
- **Deployment**: Vercel

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.local.example` to `.env.local` and fill in your environment variables
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── (auth)/           # Authentication pages
│   ├── (main)/           # Public pages
│   ├── api/              # API routes
│   └── dashboard/        # Admin dashboard
├── components/
│   ├── layout/           # Header, Footer, Navigation
│   ├── sections/         # Page sections (Hero, Services, etc.)
│   └── ui/               # Reusable UI components
└── lib/                  # Utility functions
```

## Design System

The site uses a monochrome color palette with elegant typography:

- **Colors**: Neutral scale from #FAFAFA to #171717 with black (#000000) as accent
- **Typography**: Playfair Display for headings, Inter for body text
- **Spacing**: 8px base unit with generous whitespace
- **Components**: Minimal, no icons, hairline borders

## Environment Variables

See `.env.local` for required environment variables:

- `NEXTAUTH_SECRET` - Secret for NextAuth.js
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Sanity project ID
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `RESEND_API_KEY` - Resend API key for emails

## License

MIT