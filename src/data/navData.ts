// [
//   {
//     "key": "Home",
//     "url": "/",
//     "children": []
//   },
//   {
//     "key": "About Us",
//     "url": "/about",
//     "children": []
//   },
//   {
//     "key": "Services",
//     "url": "/services/",
//     "children": [
//       {
//         "key": "Deep Tissue Massage",
//         "url": "/services/deep-tissue"
//       },
//       {
//         "key": "Swedish Massage",
//         "url": "/services/swedish"
//       },
//       {
//         "key": "Prenatal Massage",
//         "url": "/services/prenatal"
//       },
//       {
//         "key": "Cupping",
//         "url": "/services/cupping"
//       },
//       {
//         "key": "Sports Massage",
//         "url": "/services/sports"
//       },
//       {
//         "key": "Craniosacral Massage",
//         "url": "/services/craniosacral"
//       },
//       {
//         "key": "MVA (Motor Vehicle Accident) Massage",
//         "url": "/services/mva"
//       },
//       {
//         "key": "Bucal Massage",
//         "url": "/services/bucal-massage"
//       },
//       {
//         "key": "Couples Massage",
//         "url": "/services/couples-massage"
//       },
//       {
//         "key": "Injury Recovery Massage",
//         "url": "/services/injury-recovery-massage"
//       },
//       {
//         "key": "Filipino Oil Massage",
//         "url": "/services/filipino-oil-massage"
//       },
//       {
//         "key": "Foot Massage",
//         "url": "/services/foot-massage"
//       },
//       {
//         "key": "Therapeutic Massage",
//         "url": "/services/therapeutic-massage"
//       },
//       {
//         "key": "Hot Stone Massage",
//         "url": "/services/hot-stone"
//       }
//     ]
//   },
//   {
//     "key": "Contact Us",
//     "url": "/contact/",
//     "children": []
//   },
//   {
//     "key": "Direct Billing",
//     "url": "/direct-billing/",
//     "children": []
//   },
//   {
//     "key": "Book Appointment",
//     "url": "https://imassage-therapeutic.janeapp.com/",
//     "children": []
//   }
// ]


import { getCollection } from 'astro:content';

export type NavChild = {
  key: string;
  url: string;
};

export type NavItem = {
  key: string;
  url: string;
  children?: NavChild[];
};

export async function getNavData(): Promise<NavItem[]> {
  // Static items except Services children
  const baseNav: NavItem[] = [
    { key: 'Home', url: '/' },
    { key: 'About Us', url: '/about' },
    { key: 'Services', url: '/services/' },
    { key: 'Contact Us', url: '/contact/' },
    { key: 'Direct Billing', url: '/direct-billing/' },
    {
      key: 'Book Appointment',
      url: 'https://imassage-therapeutic.janeapp.com/',
    },
  ];

  const servicesEntries = await getCollection('services');

  const serviceChildren: NavChild[] = servicesEntries
    .sort((a, b) => a.data.title.localeCompare(b.data.title))
    .map((entry) => ({
      key: entry.data.title,
      url: `/services/${entry.id}`,
    }));

  // Attach children to the Services node
  return baseNav.map((item) =>
    item.key === 'Services'
      ? { ...item, children: serviceChildren }
      : item,
  );
}
