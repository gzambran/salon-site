# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build production site to ./dist/
- `npm run preview` - Preview production build locally

## Architecture

This is a single-page marketing website for a beauty salon built with Astro 5 and Tailwind CSS 4.

### Key Structure

- `src/pages/index.astro` - Single page that composes all section components
- `src/layouts/Layout.astro` - Base HTML layout with SEO meta tags
- `src/components/` - Section components (Hero, Services, Products, About, Contact, Header, Footer, WhatsAppButton)
- `src/data/services.ts` - Centralized data for services, product brands, and contact info
- `src/styles/global.css` - Global Tailwind styles

### Data Model

Service and product data is managed in `src/data/services.ts` with typed interfaces:
- `ServiceCategory` / `Service` - Salon services with pricing
- `ProductBrand` - Hair care brands categorized by type
- `contactInfo` - Business contact details (contains placeholders to be filled)

### Styling

Uses Tailwind CSS 4 via the Vite plugin (configured in `astro.config.mjs`). Spanish language content targeting Ecuador locale.
