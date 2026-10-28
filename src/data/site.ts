/**
 * Company-wide settings. Change values here, not in page files.
 *
 * Anything set to `null` is not yet confirmed and is hidden on the live site.
 * See OUTSTANDING.md for the list of details still needed.
 */
export const site = {
  name: 'Dove',
  /** Used in <title>, meta description and social previews. */
  tagline: 'Building useful products. Creating lasting impact.',
  description:
    'Dove builds practical technology to solve meaningful problems and create lasting value. Our ventures include Gather HQ and Pastora.',
  /** Production URL, used for canonical links and social previews. Update when a custom domain is added. */
  url: 'https://dove-ventures.netlify.app',
  /** Public contact email. Not yet confirmed, so it is not shown. */
  email: null as string | null,
  /** Registered company name and address, for the footer. Not yet confirmed. */
  legalName: null as string | null,
};

export const nav = [
  { label: 'Our Story', href: '/our-story/' },
  { label: 'Our Ventures', href: '/ventures/' },
  { label: 'Contact', href: '/contact/' },
];
