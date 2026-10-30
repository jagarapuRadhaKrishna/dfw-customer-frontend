# dfw-customer-frontend
Customer-facing furniture e-commerce platform for Divya Furniture World, built with Next.js and React. Includes product discovery, shopping cart, checkout, marketplace integration, furniture rentals, repair services, store discovery, and location-based service availability.
# Divya Furniture World - Customer Website Frontend

A modern, production-oriented Next.js application for the Divya Furniture World customer website. Built with Next.js 14 App Router, React, and CSS.

## Project Overview

Divya Furniture World is a premium furniture e-commerce platform offering home interiors, business furniture, rental services, repair services, and a marketplace for verified sellers. This frontend application provides customers with a seamless shopping experience across multiple product categories and service offerings.

### Project Purpose

- Enable customers to browse and purchase furniture products
- Provide location-based serviceability checks
- Support rental services and repair service bookings
- Offer a marketplace for verified furniture sellers
- Deliver business furniture solutions
- Provide interior design consultation services

## Technology Stack

- **Framework**: Next.js 14.2.15 (App Router)
- **UI Library**: React 18.3.1
- **Styling**: CSS with component-specific stylesheets
- **Language**: JavaScript (JSX)
- **Build Tool**: Next.js built-in bundler
- **Deployment**: Next.js production server

## Frontend Architecture

### Application Structure

The application follows Next.js App Router conventions with:

- **File-based routing** in `src/app/`
- **Client components** for interactive features
- **Server components** for initial page loads
- **CSS modules** for component styling
- **Shared layout components** for consistent header/footer
- **Error boundaries** for graceful error handling

### Key Features

- **Location-based serviceability**: PIN code and city-based service checks
- **Product catalog**: Multiple furniture categories with detailed product pages
- **Shopping cart**: Add to cart functionality with persistent state
- **Wishlist**: Save favorite products for later
- **Authentication**: Login and registration modals
- **Error handling**: Centralized error UI for various failure states
- **Responsive design**: Mobile-first approach with desktop optimization
- **SEO optimization**: Dynamic metadata generation for product pages

## Project Folder Structure

```
divya-furniture-world/
├── public/                      # Static assets
│   └── images/                  # Product images, logos, banners
├── src/
│   ├── app/                     # Next.js App Router pages
│   │   ├── account/             # Customer account pages
│   │   ├── api/                 # API routes (enquiries)
│   │   ├── business-furniture/  # Business furniture service page
│   │   ├── cart/                # Shopping cart page
│   │   ├── checkout/            # Checkout process
│   │   ├── collection/          # Product category and collection pages
│   │   ├── error.jsx            # Error page component
│   │   ├── global-error.jsx     # Global error boundary
│   │   ├── home-interiors/      # Home interiors service page
│   │   ├── layout.jsx           # Root layout component
│   │   ├── location/            # Location-based pages
│   │   ├── marketplace/         # Marketplace page
│   │   ├── not-found.jsx        # 404 page component
│   │   ├── page.jsx             # Homepage
│   │   ├── product/             # Product detail pages
│   │   ├── repair-services/     # Repair services page
│   │   ├── rental/              # Rental services page
│   │   ├── stores/              # Store locator pages
│   │   └── sitemap.js           # Dynamic sitemap generation
│   ├── components/
│   │   ├── auth/                # Authentication components
│   │   ├── error/               # Error handling components
│   │   ├── layout/              # Layout components (Header, Footer, Navigation)
│   │   ├── new-arrivals/        # New arrivals showcase
│   │   ├── product-detail/      # Product detail components
│   │   └── ui/                  # Reusable UI components
│   ├── data/
│   │   └── categories/          # Category data definitions
│   ├── features/                # Feature-specific components and data
│   │   ├── beds/                # Beds feature
│   │   ├── best-buys/           # Best buys feature
│   │   ├── bookshelves/         # Bookshelves feature
│   │   ├── clearance-sale/      # Clearance sale feature
│   │   ├── coffee-tables/       # Coffee tables feature
│   │   ├── decor-on-sale/       # Decor on sale feature
│   │   ├── dining-tables/       # Dining tables feature
│   │   ├── home/                # Home page features
│   │   ├── lounge-chairs/       # Lounge chairs feature
│   │   ├── mattresses/          # Mattresses feature
│   │   ├── newarrivals/         # New arrivals feature
│   │   ├── recliners/           # Recliners feature
│   │   ├── shoe-racks/          # Shoe racks feature
│   │   ├── sideboards/          # Sideboards feature
│   │   ├── sofa-cum-beds/       # Sofa cum beds feature
│   │   ├── sofas/               # Sofas feature
│   │   ├── stores/              # Store locator feature
│   │   ├── study-tables/        # Study tables feature
│   │   ├── tv-units/            # TV units feature
│   │   └── wardrobes/           # Wardrobes feature
│   ├── hooks/                   # Custom React hooks
│   │   └── useNetworkStatus.js  # Network status monitoring
│   ├── lib/                     # Utility libraries
│   │   ├── apiClient.js         # API client for backend communication
│   │   ├── enquiry-handler.js   # Enquiry form handling
│   │   ├── location-data.js     # Location and serviceability data
│   │   └── metadata-generator.js # Dynamic metadata generation
│   ├── styles/                  # Global styles
│   │   ├── error-pages.css      # Error page styles
│   │   ├── new-arrivals.css     # New arrivals styles
│   │   └── style.css            # Global stylesheet
│   └── utils/                   # Utility functions
│       └── errorHandler.js      # Error handling utilities
├── .gitignore                   # Git ignore rules
├── AGENTS.md                    # AI agent instructions
├── jsconfig.json                # JavaScript configuration
├── next.config.js               # Next.js configuration
├── package.json                 # Project dependencies and scripts
└── README.md                    # This file
```

## Installation Instructions

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/divyafurnitureworld7539-ui/divya-furniture-world---Frontend.git
   cd divya-furniture-world---Frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## Environment Variable Configuration

Currently, the application does not require environment variables for basic functionality. If backend API integration is added, create a `.env.local` file:

```env
# Example environment variables (when implemented)
NEXT_PUBLIC_API_URL=https://api.divyafurnitureworld.com
NEXT_PUBLIC_SITE_URL=https://www.divyafurnitureworld.com
```

**Note**: Never commit `.env.local` or any file containing actual credentials, API keys, or secrets to the repository.

## Local Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Git Branching Strategy

This repository follows a professional Git branching workflow with three permanent branches.

### Permanent Branches

#### `main`
- **Purpose**: Production-ready code
- **Description**: Contains code that is deployed to the production environment. Only stable, tested, and reviewed code should be merged here.
- **Protection**: Never force-push, never delete, never rewrite history

#### `develop`
- **Purpose**: Main development and feature integration
- **Description**: The integration branch for feature development. All feature branches are merged into develop. This branch reflects the next release.
- **Protection**: Never force-push, never delete

#### `staging`
- **Purpose**: QA and pre-production testing
- **Description**: The branch for QA testing before production deployment. Code is promoted from develop to staging for final testing.
- **Protection**: Never force-push, never delete

### Branch Promotion Workflow

```
Feature Branches
       |
       v
    develop
       |
       v
    staging
       |
       v
     main
       |
       v
   Production
```

### Git Development Commands

#### Create a Feature Branch
```bash
# Switch to develop
git checkout develop
git pull origin develop

# Create and switch to new feature branch
git checkout -b feature/homepage
```

#### Commit and Push
```bash
# Stage all changes
git add .

# Commit with conventional commit message
git commit -m "feat: implement homepage"

# Push to remote
git push -u origin feature/homepage
```

#### Pull Request Flow
```bash
# Create PR: feature/homepage → develop
# After review and merge, delete feature branch

# Promote to staging
git checkout staging
git pull origin staging
git merge develop
git push origin staging

# Promote to production
git checkout main
git pull origin main
git merge staging
git push origin main
```

## Feature Branch Naming Conventions

Use these naming conventions for feature branches. These are conventions only—do not create every branch immediately.

### Homepage & Navigation
- `feature/homepage`
- `feature/header-navbar`
- `feature/mega-menu`
- `feature/promotional-banner`
- `feature/location-selector`
- `feature/footer`

### Product Discovery
- `feature/category-listing`
- `feature/product-listing`
- `feature/product-details`
- `feature/product-search`
- `feature/product-filters`
- `feature/product-sorting`

### Shopping
- `feature/cart`
- `feature/checkout`
- `feature/payment-ui`
- `feature/wishlist`

### Customer Account
- `feature/authentication`
- `feature/customer-profile`
- `feature/customer-orders`
- `feature/address-management`

### Business & Services
- `feature/business-furniture`
- `feature/rental-services`
- `feature/repair-services`
- `feature/marketplace`
- `feature/stores`
- `feature/city-based-discovery`

### SEO & Performance
- `feature/technical-seo`
- `feature/metadata`
- `feature/performance-optimization`
- `feature/responsive-design`

## Bug Fix and Hotfix Branches

### Bug Fix Branches
Use these naming conventions for bug fixes:
- `bugfix/header-overlay`
- `bugfix/mega-menu-position`
- `bugfix/filter-toolbar`
- `bugfix/mobile-responsive`
- `bugfix/product-image-loading`
- `bugfix/navigation`
- `bugfix/cart-calculation`

### Hotfix Branches
For urgent production issues:
- `hotfix/issue-description`

**Hotfix Workflow**:
```bash
# Create hotfix from main
git checkout main
git pull origin main
git checkout -b hotfix/critical-bug

# Fix and commit
git add .
git commit -m "fix: resolve critical production bug"
git push -u origin hotfix/critical-bug

# Merge to main
git checkout main
git merge hotfix/critical-bug
git push origin main

# Merge to develop and staging
git checkout develop
git merge hotfix/critical-bug
git push origin develop

git checkout staging
git merge hotfix/critical-bug
git push origin staging

# Delete hotfix branch
git branch -d hotfix/critical-bug
git push origin --delete hotfix/critical-bug
```

## Development Workflow

### 1. Feature Development
1. Checkout `develop` and pull latest changes
2. Create a feature branch from `develop`
3. Implement the feature
4. Test locally
5. Commit with conventional commit messages
6. Push to remote
7. Create Pull Request to `develop`
8. Address code review feedback
9. Merge after approval

### 2. QA and Staging
1. Merge approved features to `develop`
2. Deploy `develop` to staging environment
3. Perform QA testing
4. Fix any bugs found in staging
5. Once staging is stable, merge to `main`

### 3. Production Deployment
1. Merge `staging` to `main`
2. Deploy `main` to production
3. Monitor for issues
4. If critical issues arise, create hotfix from `main`

## Pull Request Guidelines

### PR Requirements
- **Descriptive title**: Use conventional commit format
- **Clear description**: Explain what changes were made and why
- **Related issues**: Link to relevant issues or tickets
- **Screenshots**: Include screenshots for UI changes
- **Testing**: Describe how the changes were tested

### PR Review Process
1. Self-review your code before requesting review
2. Ensure all tests pass
3. Request review from at least one team member
4. Address all review comments
5. Update PR with fixes
6. Re-request review if significant changes were made
7. Merge after approval

## Code Review Guidelines

### Review Checklist
- [ ] Code follows project conventions
- [ ] No unnecessary dependencies added
- [ ] No hardcoded values or secrets
- [ ] Error handling is appropriate
- [ ] Code is readable and maintainable
- [ ] Component responsibilities are clear
- [ ] CSS does not break existing styles
- [ ] Responsive design is preserved
- [ ] Accessibility is considered
- [ ] Performance impact is minimal

### Review Feedback
- Be constructive and specific
- Explain the reasoning behind suggestions
- Offer solutions, not just problems
- Respect the author's design decisions unless they violate conventions

## Commit Message Conventions

Follow conventional commit format:

```
<type>: <subject>

<body>

<footer>
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `style`: Changes to styling (CSS, formatting)
- `refactor`: Code refactoring without functionality change
- `perf`: Performance improvements
- `docs`: Documentation changes
- `chore`: Maintenance tasks, dependency updates
- `test`: Adding or updating tests

### Examples
```bash
feat: add product listing page
fix: resolve mega menu overlay issue
style: improve header typography
refactor: reorganize product components
perf: optimize product image loading
docs: update project documentation
chore: update dependencies
test: add checkout validation tests
```

### Subject Rules
- Use imperative mood ("add" not "added")
- Use lowercase
- No period at end
- Limit to 50 characters

### Body Rules
- Explain what and why, not how
- Wrap at 72 characters
- Use one blank line between subject and body

## Testing Guidelines

### Manual Testing
- Test all user flows relevant to changes
- Test on multiple screen sizes (desktop, tablet, mobile)
- Test in multiple browsers (Chrome, Firefox, Safari, Edge)
- Verify error states and edge cases
- Check for console errors

### Component Testing
- Test component rendering
- Test user interactions
- Test state changes
- Test error handling
- Test responsive behavior

### Regression Testing
- Run linter: `npm run lint`
- Build production version: `npm run build`
- Verify existing functionality is not broken

## Staging and Production Deployment

### Staging Deployment
```bash
# Merge develop to staging
git checkout staging
git pull origin staging
git merge develop
git push origin staging

# Deploy to staging environment
# (Deployment script or CI/CD pipeline)
```

### Production Deployment
```bash
# Merge staging to main
git checkout main
git pull origin main
git merge staging
git push origin main

# Deploy to production
# (Deployment script or CI/CD pipeline)
```

### Deployment Checklist
- [ ] All tests pass
- [ ] Code review approved
- [ ] Documentation updated
- [ ] No console errors
- [ ] Performance acceptable
- [ ] SEO metadata correct
- [ ] Responsive design verified
- [ ] Cross-browser tested

## Git Safety Rules

### Never Do These
- ❌ Force-push permanent branches (`main`, `develop`, `staging`)
- ❌ Delete permanent branches
- ❌ Discard uncommitted changes without review
- ❌ Use `git reset --hard` automatically
- ❌ Use `git clean -fd` automatically
- ❌ Rewrite commit history on permanent branches
- ❌ Commit `.env` files or credentials
- ❌ Commit API keys or secrets
- ❌ Merge without code review

### Always Do These
- ✅ Create feature branches from `develop`
- ✅ Use Pull Requests for permanent branch merges
- ✅ Write descriptive commit messages
- ✅ Review changes before committing
- ✅ Test before pushing
- ✅ Keep commits atomic and focused
- ✅ Preserve existing commit history
- ✅ Protect sensitive data

## Contribution Guidelines

### For Contributors
1. Fork the repository
2. Create a feature branch from `develop`
3. Make your changes
4. Follow commit message conventions
5. Test thoroughly
6. Submit a Pull Request
7. Address review feedback

### Code Style
- Follow existing code conventions
- Use meaningful variable names
- Write clean, readable code
- Add comments only when necessary
- Avoid code duplication
- Keep functions focused and small

### Before Submitting
- Run linter: `npm run lint`
- Build project: `npm run build`
- Test locally
- Update documentation if needed
- Check for console errors

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Conventional Commits](https://www.conventionalcommits.org)

## License

Copyright © 2024 Divya Furniture World. All rights reserved.

---

**Note**: This is the Customer Website frontend repository. Backend is maintained in a separate repository.
