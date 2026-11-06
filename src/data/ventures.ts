/**
 * The Dove portfolio. Every venture on the site comes from this list.
 *
 * To add a venture: append an entry and add its logo as a new case in
 * src/components/VentureMark.astro. A detail page is generated automatically at
 * /ventures/<slug>/ when `detailPage` is true.
 *
 * Only list confirmed facts. Leave optional fields out rather than guessing.
 */
/** Sectors in the order they appear on /ventures/. Add new ones here. */
export const sectors = ['Church and ministry'] as const;
export type Sector = (typeof sectors)[number];

export type Venture = {
  slug: string;
  name: string;
  /** Short category label shown under the name. */
  category: string;
  /** Sector the venture belongs to. Ventures are grouped by sector on /ventures/. */
  sector: Sector;
  /** Short line for venture lists (about 12 words). Falls back to `description`. */
  summary?: string;
  /** Full description (confirmed product description). */
  description: string;
  /** The problem the product solves, in plain language. */
  problem: string;
  /** Who it is for. */
  audience: string;
  /** What it helps people do. Only confirmed capabilities. */
  capabilities: string[];
  /** Live product URL. */
  url: string;
  /** Generate a /ventures/<slug>/ page. */
  detailPage: boolean;
  /** Only set when confirmed, e.g. 'Free while in early access'. */
  status?: string;
  /** Optional product screenshot in /public, with alt text. */
  image?: { src: string; alt: string };
  /** The product's own colours, so each venture keeps its identity. */
  theme: {
    surface: string;
    ink: string;
    muted: string;
    accent: string;
    /** Button background and text. */
    button: string;
    buttonInk: string;
  };
};

export const ventures: Venture[] = [
  {
    slug: 'gather-hq',
    name: 'Gather HQ',
    category: 'Church attendance and membership',
    sector: 'Church and ministry',
    summary: 'Member records and attendance tracking across every branch of a church.',
    description:
      'Church attendance and membership management for organising member records and tracking attendance across branches.',
    problem:
      'Churches with more than one branch often keep member records and attendance in separate notebooks, spreadsheets and group chats. Gather HQ brings them into one place, so leaders can see who belongs where and who has been attending.',
    audience: 'Churches and church leaders, including churches with several branches.',
    capabilities: [
      'Keep member records organised in one place',
      'Track attendance at services and gatherings',
      'See attendance across every branch of the church',
    ],
    url: 'https://gatherhq-app.netlify.app',
    detailPage: true,
    theme: {
      surface: '#244E43',
      ink: '#F6F7F3',
      muted: '#C9D6CF',
      accent: '#C69B55',
      button: '#F6F7F3',
      buttonInk: '#244E43',
    },
  },
  {
    slug: 'pastora',
    name: 'Pastora',
    category: 'Church administration and pastoral care',
    sector: 'Church and ministry',
    summary: 'Prayer requests, counselling, guest welcome cards and tasks for church leaders.',
    description:
      'Church administration and pastoral care tools, including prayer requests, counselling appointments, guest welcome cards, tasks, and operational workflows.',
    problem:
      'Pastoral care is easy to lose track of. Prayer requests, counselling appointments and first-time guests arrive through many channels, and follow-up depends on someone remembering. Pastora gives church leaders one place to receive, assign and follow through.',
    audience: 'Pastors, church administrators and pastoral care teams.',
    capabilities: [
      'Receive and respond to prayer requests',
      'Schedule counselling appointments',
      'Welcome guests with digital welcome cards',
      'Assign and track tasks across the team',
      'Run the operational workflows behind church administration',
    ],
    url: 'https://pastora-platform.netlify.app',
    detailPage: true,
    theme: {
      surface: '#F7F1E4',
      ink: '#24342C',
      muted: '#5A6A60',
      accent: '#C8954F',
      button: '#345647',
      buttonInk: '#F7F1E4',
    },
  },
  {
    slug: 'selah-studio',
    name: 'Selah Studio',
    category: 'Sermon-to-media for churches',
    sector: 'Church and ministry',
    summary: 'Turns sermon recordings into clips, quote graphics and devotionals.',
    description:
      'A sermon-to-media platform that turns sermon recordings into content churches can review and share, including clips, quote graphics and devotionals.',
    problem:
      'A sermon is often the most valuable thing a church produces each week, but turning it into posts, clips and devotionals takes time and skills many teams do not have. Selah Studio does the first pass, so the church team only has to review and publish.',
    audience: 'Churches and their media and communications teams.',
    capabilities: [
      'Turn sermon recordings into short video clips',
      'Create quote graphics from the message',
      'Draft devotionals based on the sermon',
      'Review everything before it is shared',
    ],
    url: 'https://selah-studio-hnxp.netlify.app',
    detailPage: true,
    theme: {
      surface: '#2B2540',
      ink: '#F4F1F8',
      muted: '#C9C2DA',
      accent: '#D9A86C',
      button: '#F4F1F8',
      buttonInk: '#2B2540',
    },
  },
];

export const getVenture = (slug: string) => ventures.find((v) => v.slug === slug);

/** Ventures grouped by sector, in sector order, skipping empty sectors. */
export const venturesBySector = () =>
  sectors
    .map((sector) => ({ sector, items: ventures.filter((v) => v.sector === sector) }))
    .filter((g) => g.items.length > 0);

/** "A", "A and B", "A, B and C" */
export const ventureNames = () => {
  const n = ventures.map((v) => v.name);
  return n.length < 2 ? n.join('') : `${n.slice(0, -1).join(', ')} and ${n[n.length - 1]}`;
};
