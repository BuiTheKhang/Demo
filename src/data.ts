import { Course, Feature, FooterLinkGroup } from './types';

export const COURSES: Course[] = [
  {
    id: 'pho',
    category: 'MASTERCLASS',
    title: 'The Phở Narrative',
    description: 'Learn the patient art of slow-simmered bone broth and hand-cut rice noodles.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFhmQgYBdqojG8xssaeQyYgVTRpSS1I42-gR5A3JTzf89kYrdz8qGNY8BmOc-OvDlaYgPNu42B7Bbbu2KzsMbw_iN9RMDTInBN7OCo7rIDOYhrV9TLvUrf6jkuq0JasoPOLF4mi_OOkg8-RZNfO7mD9NO7YQH5rfVWkseT0pEIuP569WQ4Cme75eIoLWmn_IFG0bESStBnJuRHsvFHDN7vrEw7kXBXqNsRcPInSS6D_zoN_AqbA4dGJtxjXUAFGjfY5-CdIuM0tFU',
    altText: 'A steaming bowl of Pho with fresh herbs and beef',
    ingredients: [
      'Beef bones (knuckle and marrow)',
      'Oxtail',
      'Flank steak',
      'Rice noodles (Banh Pho)',
      'Star anise, cloves, cinnamon, cardamom, coriander seeds',
      'Charred ginger and onion',
      'Fish sauce and rock sugar',
      'Fresh herbs: Thai basil, cilantro, mint, scallions',
      'Bean sprouts, lime, and jalapeños'
    ],
    instructions: [
      'Parboil and wash the beef bones to ensure a clear broth.',
      'Char the ginger and onions over an open flame until blackened, then peel.',
      'Toast the dry spices until fragrant, then place them in a spice bag.',
      'Simmer the bones, charred aromatics, and spice bag in a large pot of water for 6-8 hours.',
      'Season the broth with fish sauce and rock sugar to taste.',
      'Soak and blanch the rice noodles.',
      'Assemble the bowl: noodles first, then raw flank steak slices.',
      'Pour boiling hot broth over the meat to cook it instantly.',
      'Garnish with fresh herbs, bean sprouts, and a squeeze of lime.'
    ]
  },
  {
    id: 'banhxeo',
    category: 'REGIONAL CLASSIC',
    title: 'Crispy Bánh Xèo',
    description: 'Sizzling savory crepes infused with turmeric, stuffed with fresh local seafood.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0XspjxJ8LSTRGa1nqSahX2jhtm0TI4geXu85gG8V5SD3hUji8iO5IYy9DlwEv1CEv3Elgjl7Iv4AV3bh4kA56HAhwhk_2Q0f5Sq7eP0rZ-HEh0glIyH3s9BIBAy5ISR0xPVdkhCC9nHwOrkKUqo8lLfdXRkOz00w9N2nzANhjkVftl5MXsfmr12BrLLB8ml8xIDIrGGkTBjKFl927tEjQMa2t7qqH4YgEmFQcmoyYNcmOfzK3svcqBr5isxcZeHI9QcsGB9sH0vU',
    altText: 'Crispy golden Banh Xeo crepe with fresh greens',
    ingredients: [
      'Rice flour',
      'Turmeric powder',
      'Coconut milk',
      'Sparkling water or beer (for extra crispiness)',
      'Pork belly slices',
      'Shrimp (peeled and deveined)',
      'Mung beans (steamed)',
      'Bean sprouts',
      'Fresh mustard greens and lettuce for wrapping',
      'Fish sauce dipping sauce (Nuoc Cham)'
    ],
    instructions: [
      'Whisk together rice flour, turmeric powder, coconut milk, sparkling water, and a pinch of salt. Let the batter rest for 30 minutes.',
      'Heat a wok or large skillet over medium-high heat with a little oil.',
      'Sauté a few slices of pork belly and shrimp until slightly cooked.',
      'Pour a ladle of batter into the pan, swirling immediately to coat the sides and create a thin layer.',
      'Add steamed mung beans and bean sprouts to one half of the crepe.',
      'Cover with a lid and cook for 2 minutes until the edges pull away and become crispy.',
      'Fold the crepe in half and slide it onto a plate.',
      'Serve immediately. Break off a piece of the crepe, wrap it in a mustard green leaf with fresh herbs, and dip in Nuoc Cham.'
    ]
  },
  {
    id: 'dessert',
    category: 'SWEET FINALE',
    title: 'Vietnamese Desserts',
    description: 'A delicate exploration of tropical fruits, coconut cream, and sweet sticky rice.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARbqZnjBoWO-gG6lK1rPdF2hxZsB9kGZGYPUhIQNzl3j0yMDroRGhn3pRTxfE6WqsUXF-TDTCaVvbGPfPKOnbtcE4DT9BzvAQuK0c2m1O05wKoTXT-nBtLsIBgsdoYJalwvbI95cEzfZ1pBviVFEDrEN2Jy9VEbqJh0pPFDZ4fhKPuNe4uJANrClgaO2WGZSApydyuIPLIzIdRkiu0LxsM4ZWe94mE5XwNWLWeXnH6xRdn9EdHoe0ysPw841Xk0DOIsg97DCRZvlg',
    altText: 'Elegant Vietnamese desserts including jelly and mooncakes',
    ingredients: [
      'Glutinous rice',
      'Pandan leaves',
      'Coconut cream',
      'Palm sugar',
      'Mung beans (peeled and split)',
      'Agar-agar powder',
      'Fresh tropical fruits (mango, jackfruit, longan)',
      'Roasted sesame seeds or peanuts'
    ],
    instructions: [
      'Soak the glutinous rice and mung beans separately for at least 4 hours or overnight.',
      'Steam the glutinous rice with pandan leaves until soft and fragrant.',
      'Steam the mung beans until tender, then mash them into a smooth paste with a little sugar.',
      'In a saucepan, gently simmer coconut cream with palm sugar and a pinch of salt until slightly thickened.',
      'Prepare the agar-agar jelly by boiling the powder with water, sugar, and pandan extract, then let it set in molds.',
      'Assemble the dessert: layer the sticky rice, mung bean paste, and fresh fruits in a bowl.',
      'Drizzle generously with the sweet coconut cream sauce.',
      'Top with cubed agar-agar jelly and toasted sesame seeds for crunch.'
    ]
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'equipment',
    iconName: 'chef-hat',
    title: 'PROFESSIONAL EQUIPMENT',
    description: 'Work with traditional clay pots, granite mortars, and professional-grade chef tools.',
  },
  {
    id: 'knowledge',
    iconName: 'book-open',
    title: 'EXPERT KNOWLEDGE',
    description: 'Our instructors are generational chefs who share stories alongside their techniques.',
  },
  {
    id: 'sourcing',
    iconName: 'leaf',
    title: 'ORGANIC SOURCING',
    description: 'We use ingredients sourced directly from local farmers and artisan producers.',
  }
];

export const FOOTER_LINKS: FooterLinkGroup[] = [
  {
    title: 'ACADEMY',
    links: [
      { label: 'About the Masters', href: '/about' },
      { label: 'The Kitchen Lab', href: '/lab' },
      { label: 'Private Dining', href: '/private-dining' },
      { label: 'Gift Vouchers', href: '/gift-vouchers' },
    ]
  },
  {
    title: 'SUPPORT',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
      { label: 'Sitemap', href: '/sitemap' },
    ]
  }
];
