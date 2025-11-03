# Architecture documentation

## Overview

FAIRy Site is a marketing and documentation website for FAIRy, a local-first dataset pre-check and export tool. Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS, this site serves as the public-facing presence for Datadabra's FAIRy product.

## Tech stack

### Core framework
- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**

### Styling
- **Tailwind CSS 4** (PostCSS-based)
- Custom CSS-in-JS styles via styled-jsx for complex components
- CSS variables for theming

### Development tools
- **ESLint** (Next.js config)
- **Turbopack** (via `--turbopack` flag for faster builds)
- **Autoprefixer** (via PostCSS)

### Analytics
- **Plausible Analytics** (privacy-friendly analytics service)

### External integrations
- **Google Apps Script** (form submissions to Google Sheets)

## Project structure

```
fairy-site/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout with navigation, footer
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles and Tailwind imports
│   │   ├── about/              # About page
│   │   ├── api/                # API routes
│   │   │   └── feedback/       # Form submission endpoint
│   │   ├── biofair/            # BIOFAIR pilot page
│   │   ├── demo/               # Demo pages
│   │   ├── docs/               # Documentation
│   │   ├── institutions/       # Institutional offerings
│   │   ├── offerings/          # Product offerings
│   │   ├── preflight-mapping/  # Preflight mapping page
│   │   ├── privacy/             # Privacy policy
│   │   ├── repositories/       # Repository partners
│   │   ├── researchers/        # Community/researchers page
│   │   ├── sample-report/      # Sample report showcase
│   │   ├── survey/             # Survey pages
│   │   └── vision/             # Vision/strategy page
│   ├── components/             # Reusable React components
│   │   ├── AnalyticsBindings.tsx  # Analytics event bindings
│   │   ├── AnnouncementBar.tsx    # Site-wide announcement
│   │   ├── CTATracking.tsx         # CTA click tracking
│   │   ├── FeedbackForm.tsx       # Multi-purpose form component
│   │   ├── Navigation.tsx         # Main site navigation
│   │   └── TrackedLink.tsx        # Link with analytics
│   └── lib/                    # Utility libraries
│       └── analytics.ts        # Analytics tracking functions
├── public/                     # Static assets
│   ├── samples/                # Sample files/exports
│   └── reference-images/       # Reference images
├── context/                    # Additional documentation
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── postcss.config.mjs          # PostCSS configuration
├── eslint.config.mjs           # ESLint configuration
└── package.json                # Dependencies and scripts
```

## Component architecture

### Layout structure

The app uses a hierarchical layout system:

1. **Root layout** (`src/app/layout.tsx`):
   - Defines global HTML structure
   - Includes analytics script
   - Renders `Navigation`, `AnnouncementBar`, and `AnalyticsBindings`
   - Provides footer with company information
   - Sets max-width container and padding

2. **Page components**:
   - Each route has its own page component
   - Pages are client components when they need interactivity (`"use client"`)
   - Most pages include inline styles via styled-jsx for component-specific styling

### Component patterns

#### Navigation component
- Sticky header navigation
- Responsive mobile menu with hamburger toggle
- Dropdown menus for solutions
- Client-side state management for menu open/close

#### Feedback form component
- Multi-purpose form supporting different form types:
  - `demo` - Demo request
  - `preflight_mapping` - Preflight mapping interest
  - `biofair_pilot_interest` - BIOFAIR pilot signup
  - Generic waitlist/feedback
- Honeypot field for bot protection
- Form validation
- Integration with `/api/feedback` endpoint

#### Analytics system
- Centralized tracking via `lib/analytics.ts`
- Type-safe event names
- Privacy-friendly analytics integration
- Automatic event binding via `AnalyticsBindings` component
- Manual tracking via `track()` function

## Routing

The app uses Next.js App Router with file-based routing:

- **Dynamic routes**: Not currently used, but App Router supports them
- **API routes**: Located in `src/app/api/` directory
- **Page routes**: Each directory in `src/app/` becomes a route (except special files like `layout.tsx`)

### Key routes

- `/` - Home page with hero, features, and audience tiles
- `/about` - About page with company information
- `/docs` - Documentation
- `/institutions` - Institutional offerings
- `/researchers` - Community/researcher resources
- `/repositories` - Repository partner information
- `/sample-report` - Sample readiness report showcase
- `/preflight-mapping` - Preflight mapping interest form
- `/biofair` - BIOFAIR pilot information

## Styling approach

### Tailwind CSS
- Primary styling method
- Used via utility classes throughout components
- Configured via `postcss.config.mjs`
- Custom theme variables defined in `globals.css`

### Styled-jsx
- Used for component-specific styles
- Enables scoped CSS within React components
- Used extensively in `page.tsx` and `Navigation.tsx` for complex styling needs

### CSS variables
- Defined in `globals.css`
- Used for theming and color management
- Supports dark mode (though not actively used in current design)

### Design system
- Color palette: Purple/violet theme (`#4c1d95`, `#6b46c1`, `#7c3aed`)
- Typography: System fonts (Arial, Helvetica, sans-serif) with Geist font family support
- Spacing: Consistent padding/margin using Tailwind spacing scale
- Responsive: Mobile-first approach with breakpoints at 768px

## API routes

### `/api/feedback`
- **Method**: POST
- **Purpose**: Handle form submissions from various forms across the site
- **Functionality**:
  - Validates form data based on form type
  - Performs email format validation
  - Implements honeypot bot protection
  - Forwards submissions to external service
  - Returns success/error responses
- **Environment variables**: Service URL configured via environment variable

### CORS handling
- OPTIONS handler for CORS preflight requests
- Configured to allow cross-origin requests

## External integrations

### Form submission service
- Forms submit data to an external web app service
- Service writes submissions to spreadsheet storage
- Environment variable stores the service endpoint URL

### Analytics
- Privacy-friendly analytics service
- Loaded via script tag in root layout
- Custom event tracking for user interactions
- No cookies, GDPR compliant

## Build and deployment

### Development
```bash
npm run dev    # Starts dev server with Turbopack
```

### Production
```bash
npm run build  # Builds for production with Turbopack
npm start      # Starts production server
```

### Linting
```bash
npm run lint   # Runs ESLint
```

### Deployment options
1. **Vercel** (recommended): Automatic Next.js detection, push to deploy
2. **GitHub Pages**: Requires static export configuration (`output: "export"` in `next.config.ts`)

## TypeScript configuration

- **Strict mode**: Enabled
- **Module resolution**: Bundler (for Next.js)
- **Path aliases**: `@/*` maps to `./src/*`
- **Target**: ES2017
- **JSX**: Preserve (Next.js handles transformation)

## Key design decisions

### Client vs server components
- Pages that need interactivity (forms, state) are marked `"use client"`
- Layout and static pages can remain server components
- Navigation is client component due to mobile menu state

### Styling strategy
- Mixed approach: Tailwind for utility classes, styled-jsx for component-scoped styles
- No global CSS files except `globals.css` for base styles and Tailwind imports
- Inline styles used sparingly for dynamic values

### Form handling
- Client-side validation before API submission
- Server-side validation in API route
- Honeypot field for basic bot protection
- Error handling with user-friendly messages

### Analytics strategy
- Privacy-first: Analytics service with no cookies, GDPR compliant
- Event-based tracking for key user actions
- Type-safe event names via TypeScript
- Graceful degradation if analytics fail to load

## Security considerations

1. **Environment variables**: Never committed, stored in `.env.local` or deployment platform
2. **Honeypot fields**: Basic bot protection on forms
3. **Input validation**: Both client and server-side
4. **CORS**: Configured appropriately for API routes
5. **No sensitive data**: This is a marketing site, no user authentication or data storage

## Performance optimizations

1. **Turbopack**: Faster builds and hot module replacement
2. **Next.js optimizations**: Automatic code splitting, image optimization
3. **Font optimization**: Uses `next/font` for Geist font family
4. **Static generation**: Most pages can be statically generated

## Extension points

### Adding new pages
- Create a new directory in `src/app/` with a `page.tsx` file
- Use file-based routing conventions

### Adding new API routes
- Create route handlers in `src/app/api/[route-name]/route.ts`
- Follow Next.js App Router API route conventions

### Adding new components
- Place reusable components in `src/components/`
- Use client components when state or interactivity is needed

### Adding analytics events
- Add event names to `AnalyticsEventName` type in `src/lib/analytics.ts`
- Use `track()` function or `TrackedLink` component

## Future considerations

- Potential addition of authentication for protected areas
- Integration with actual FAIRy product backend (when available)
- Additional analytics or tracking needs
- Content management system integration (if needed)
- Multi-language support (if needed)

