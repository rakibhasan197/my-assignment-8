# BookNest

BookNest is an online book borrowing platform built for Assignment 8. It digitizes a library experience where users can browse books, filter categories, view private book details, borrow books, and manage their profile securely.

## Live URL

https://my-assignment-8.vercel.app

## Key Features

- Responsive navbar with conditional login/logout state.
- Home page with banner, new-arrivals marquee, featured books, and two extra content sections.
- All Books page with title search and category sidebar filtering.
- Private book details page with cover image, description, quantity, and borrow confirmation toast.
- BetterAuth email/password authentication and Google social login.
- Private profile page with update profile flow for name and image.
- MongoDB-backed auth storage with environment-variable based configuration.

## Tech Stack

- Next.js
- React
- Tailwind CSS
- HeroUI
- BetterAuth
- MongoDB

## NPM Packages Used

- `better-auth`
- `@better-auth/mongo-adapter`
- `mongodb`
- `@heroui/react`
- `@gravity-ui/icons`
- `framer-motion`
- `react-fast-marquee`
- `react-icons`
- `react-toastify`
- `animate.css`

## Environment Variables

Create a `.env` file with:

```env
BETTER_AUTH_SECRET=your-secret
BETTER_AUTH_URL=http://localhost:3000
MONGODB_URI=your-mongodb-uri
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

For Vercel, set `BETTER_AUTH_URL` to your live domain.

## Local Development

```bash
npm.cmd run dev
```

Open `http://localhost:3000`.
