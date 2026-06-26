import { Course, Feature, FooterLinkGroup } from './types';

export const COURSES: Course[] = [
  {
    id: 'pho',
    category: 'MASTERCLASS',
    title: 'The Phở Narrative',
    description: 'Learn the patient art of slow-simmered bone broth and hand-cut rice noodles.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFhmQgYBdqojG8xssaeQyYgVTRpSS1I42-gR5A3JTzf89kYrdz8qGNY8BmOc-OvDlaYgPNu42B7Bbbu2KzsMbw_iN9RMDTInBN7OCo7rIDOYhrV9TLvUrf6jkuq0JasoPOLF4mi_OOkg8-RZNfO7mD9NO7YQH5rfVWkseT0pEIuP569WQ4Cme75eIoLWmn_IFG0bESStBnJuRHsvFHDN7vrEw7kXBXqNsRcPInSS6D_zoN_AqbA4dGJtxjXUAFGjfY5-CdIuM0tFU',
    altText: 'A steaming bowl of Pho with fresh herbs and beef',
  },
  {
    id: 'banhxeo',
    category: 'REGIONAL CLASSIC',
    title: 'Crispy Bánh Xèo',
    description: 'Sizzling savory crepes infused with turmeric, stuffed with fresh local seafood.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0XspjxJ8LSTRGa1nqSahX2jhtm0TI4geXu85gG8V5SD3hUji8iO5IYy9DlwEv1CEv3Elgjl7Iv4AV3bh4kA56HAhwhk_2Q0f5Sq7eP0rZ-HEh0glIyH3s9BIBAy5ISR0xPVdkhCC9nHwOrkKUqo8lLfdXRkOz00w9N2nzANhjkVftl5MXsfmr12BrLLB8ml8xIDIrGGkTBjKFl927tEjQMa2t7qqH4YgEmFQcmoyYNcmOfzK3svcqBr5isxcZeHI9QcsGB9sH0vU',
    altText: 'Crispy golden Banh Xeo crepe with fresh greens',
  },
  {
    id: 'dessert',
    category: 'SWEET FINALE',
    title: 'Vietnamese Desserts',
    description: 'A delicate exploration of tropical fruits, coconut cream, and sweet sticky rice.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARbqZnjBoWO-gG6lK1rPdF2hxZsB9kGZGYPUhIQNzl3j0yMDroRGhn3pRTxfE6WqsUXF-TDTCaVvbGPfPKOnbtcE4DT9BzvAQuK0c2m1O05wKoTXT-nBtLsIBgsdoYJalwvbI95cEzfZ1pBviVFEDrEN2Jy9VEbqJh0pPFDZ4fhKPuNe4uJANrClgaO2WGZSApydyuIPLIzIdRkiu0LxsM4ZWe94mE5XwNWLWeXnH6xRdn9EdHoe0ysPw841Xk0DOIsg97DCRZvlg',
    altText: 'Elegant Vietnamese desserts including jelly and mooncakes',
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
      { label: 'About the Masters', href: '#' },
      { label: 'The Kitchen Lab', href: '#' },
      { label: 'Private Dining', href: '#' },
      { label: 'Gift Vouchers', href: '#' },
    ]
  },
  {
    title: 'SUPPORT',
    links: [
      { label: 'FAQ', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Sitemap', href: '#' },
    ]
  }
];
