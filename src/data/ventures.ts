/**
 * The Dove portfolio. Every venture on the site comes from this list.
 *
 * To add a venture: append an entry, add its mark to src/components/marks/ and
 * register it in VentureMark.astro. A detail page is generated automatically at
 * /ventures/<slug>/ when `detailPage` is true.
 *
 * Only list confirmed facts. Leave optional fields out rather than guessing.
 */
export type Venture = {
  slug: string;
  name: string;
  /** Short category label shown above the name. */
  category: string;
  /** One-sentence summary (confirmed product description). */
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
];

export const getVenture = (slug: string) => ventures.find((v) => v.slug === slug);
