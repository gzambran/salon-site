# Placeholder Content - Susana Beauty Salón

This document lists all placeholder content that needs to be replaced with real information before the site goes live.

## How to Update

All placeholders are marked in the code with:
- `<!-- PLACEHOLDER -->` comments
- `placeholder-content` CSS class (shows a yellow "PLACEHOLDER" badge)
- `PLACEHOLDER_` prefix in the data file

The main data file is located at: `src/data/services.ts`

---

## Contact Information

| Item | Current Value | Location | Notes |
|------|---------------|----------|-------|
| Phone Number | `PLACEHOLDER_PHONE` | `src/data/services.ts` | Used in header, contact section, footer |
| WhatsApp Number | `PLACEHOLDER_PHONE` | `src/data/services.ts` | Can be same as phone or different |
| Business Hours | `PLACEHOLDER_HOURS` | `src/data/services.ts` | Example: "Lun-Sab 10am-6pm" |
| Instagram URL | `PLACEHOLDER_INSTAGRAM` | `src/data/services.ts` | Full URL to Instagram profile |
| Facebook URL | `PLACEHOLDER_FACEBOOK` | `src/data/services.ts` | Full URL to Facebook page |

---

## Content

| Item | Location | Notes |
|------|----------|-------|
| Tagline | `src/components/Hero.astro` | Current: "Tu belleza, nuestra pasión" |
| About Bio | `src/components/About.astro` | Susana's bio, years of experience, philosophy |
| Why Choose Us | `src/components/About.astro` | 3 key differentiators/reasons |

---

## Images

| Item | Location | Notes |
|------|----------|-------|
| Susana Photo | `src/components/About.astro` | Replace placeholder div with actual `<img>` tag |
| Salon Interior | Optional | Can add to hero or create gallery section |
| Before/After Photos | Optional | Can create a portfolio/gallery section |

---

## Quick Update Guide

### 1. Update Contact Info (src/data/services.ts)

```typescript
export const contactInfo = {
  phone: '+593 99 XXX XXXX',  // Replace with real number
  whatsapp: '+593 99 XXX XXXX',  // Same or different number
  whatsappMessage: 'Hola, me gustaría agendar una cita en Susana Beauty Salón',
  address: 'Avenida Reales Tamarindo, Portoviejo, Ecuador',
  hours: 'Lun-Sab 10am-6pm',  // Replace with real hours
  instagram: 'https://instagram.com/susanabeautysalon',  // Replace
  facebook: 'https://facebook.com/susanabeautysalon',  // Replace
};
```

### 2. Update Tagline (src/components/Hero.astro)

Find line ~26 and update:
```html
<p class="...">
  "Your custom tagline here"
</p>
```

### 3. Update About Section (src/components/About.astro)

- Replace placeholder bio text (~line 35-42)
- Replace "Why choose us" reasons (~line 48-65)
- Add Susana's photo by replacing the placeholder div

### 4. Add Susana's Photo

Replace the placeholder div in About.astro with:
```html
<img
  src="/images/susana.jpg"
  alt="Susana - Propietaria de Susana Beauty Salón"
  class="w-full h-full object-cover"
/>
```

---

## After Updating

1. Remove `placeholder-content` class from updated elements
2. Remove `<!-- PLACEHOLDER -->` comments
3. Test all links (phone, WhatsApp, social media)
4. Run `npm run build` to verify no errors
5. Delete this file when all placeholders are replaced

---

## Files Modified

When updating placeholders, these files will need changes:

- `src/data/services.ts` - Main contact data
- `src/components/Hero.astro` - Tagline
- `src/components/About.astro` - Bio, reasons, photo
- `public/images/` - Add real photos here
