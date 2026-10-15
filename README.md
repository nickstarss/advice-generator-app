# Frontend Mentor - Advice generator app

This is my solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db).

## Table of contents

- [Overview](#overview)
- [My process](#my-process)
- [Getting started](#getting-started)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

The goal is to build a responsive advice generator where users can view a piece of advice and request another one using the dice button.

### Features

- Responsive advice card for mobile and desktop screens.
- Loads advice when the app opens and when the dice button is clicked.
- Shows a skeleton while advice is loading.
- Retrieves advice from the [Advice Slip API](https://api.adviceslip.com/).

### Links

- Solution URL: TODO
- Live site URL: TODO

## My process

### Built with

- [Next.js](https://nextjs.org/) with the App Router
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Advice Slip API](https://api.adviceslip.com/)

### Implementation notes

- The advice is requested from the Advice Slip API when the page loads and when the user activates the dice button.
- A loading skeleton is displayed while a request is in progress.
- Separate divider images are used for mobile and desktop layouts.

## Getting started

Install the dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Other available scripts:

- `npm run build` — create a production build.
- `npm run start` — serve the production build.
- `npm run lint` — run ESLint.

## Author

- Frontend Mentor: TODO
- GitHub: TODO

## Acknowledgments

- [Frontend Mentor](https://www.frontendmentor.io/) for the challenge.
- [Advice Slip API](https://api.adviceslip.com/) for the advice data.
