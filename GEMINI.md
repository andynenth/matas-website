# Project Overview: Matas Website

This document outlines the key aspects of the Matas Website project, primarily built with Astro.

## Technologies Used:
- **Framework:** Astro
- **Language:** TypeScript
- **Styling:**
    - Tailwind CSS (configured via `tailwind.config.mjs` and imported in `src/styles/global.css`)
    - Pages CSS (legacy framework, referenced in `src/layouts/Layout.astro`)
    - Bootstrap (referenced in `src/layouts/Layout.astro`)
    - Component-scoped CSS (`<style>` blocks within Astro components)
- **Internationalization (i18n):** Custom implementation
    - `src/i18n/translations.ts`: Centralized translation strings for 'th' (Thai) and 'en' (English).
    - `src/i18n/utils.ts`: Utility functions for translation (`t`), URL localization (`getLocalizedUrl`), language detection (`getCurrentLang`), etc.
- **Component Architecture:** Astro components (`.astro` files) are used for UI elements, with a clear structure for header components (`src/components/header/`).
- **Routing:** Astro's file-based routing (`src/pages/`) with dynamic routing support (`[...path].astro`).

## Key Project Files and Directories:
- `astro.config.mjs`: Astro configuration, including i18n settings (`defaultLocale: 'th'`, `locales: ['th', 'en']`).
- `package.json`: Project dependencies (Astro) and scripts (`dev`, `build`, `preview`).
- `tsconfig.json`: TypeScript configuration.
- `tailwind.config.mjs`: Tailwind CSS configuration.
- `src/`: Main source directory.
    - `src/components/`: Reusable Astro components.
        - `src/components/Header.astro`: Main header component, orchestrates sub-components.
        - `src/components/header/`: Sub-components and utilities for the header (e.g., `Logo.astro`, `LanguageToggle.astro`, `constants.ts`, `types.ts`, `utils.ts`).
    - `src/content/`: Content collections (if used, not extensively reviewed yet).
    - `src/i18n/`: Internationalization logic.
        - `src/i18n/translations.ts`: All translatable strings.
        - `src/i18n/utils.ts`: i18n helper functions.
    - `src/layouts/`: Astro layout components (e.g., `Layout.astro` for global structure, SEO, and script/style imports).
    - `src/pages/`: Astro pages, defining routes.
        - `src/pages/index.astro`: Homepage.
        - `src/pages/[...path].astro`: Dynamic route handling.
    - `src/styles/`: Global styles, including Tailwind imports.
        - `src/styles/global.css`: Main stylesheet.
    - `src/templates/`: Page templates (e.g., `HomePage.astro`).
    - `src/types/`: Global TypeScript type definitions (e.g., `i18n.ts`).
    - `src/utils/`: General utility functions.

## Internationalization (i18n) Details:
- **Supported Languages:** Thai (`th`) and English (`en`).
- **Default Language:** Thai (`th`).
- **URL Structure:** English pages are prefixed with `/en/` (e.g., `/en/about`), while Thai pages are at the root (e.g., `/about`). The homepage for English is `/en/` and for Thai is `/`.
- **Translation Function:** The `t(key, lang)` function in `src/i18n/utils.ts` is used to retrieve translated strings.
- **Constants vs. Translations:** Some configuration (like phone numbers, LINE URL, logo paths) are in `src/components/header/constants.ts`, while their display text is in `src/i18n/translations.ts`. The `getContactConfig` and `getNavigation` functions in `src/components/header/utils.ts` correctly merge these to provide localized data.

## Styling Considerations:
- The project uses a combination of Tailwind CSS, Pages CSS, and Bootstrap. When adding new styles or modifying existing ones, prioritize Tailwind classes. If modifying existing elements that use Pages CSS or Bootstrap, adhere to their conventions or migrate them to Tailwind if appropriate and within scope.
- Global font styling is handled in `src/layouts/Layout.astro` and `src/styles/global.css`, with language-specific font families.

## Development Scripts:
- `npm run dev`: Starts the Astro development server.
- `npm run build`: Builds the project for production.
- `npm run preview`: Previews the production build locally.

## AI Agent Instructions:
- When making changes, always consider the i18n system. If new text is introduced, it should be added to `src/i18n/translations.ts` for both 'th' and 'en' languages.
- Respect existing component structure and styling conventions.
- Use the `t()` function for all translatable text.
- Ensure type safety by adhering to the defined TypeScript interfaces.
- Before suggesting code changes, verify the context by reading relevant files.
- After making changes, suggest running `npm run build` to check for compilation errors.
