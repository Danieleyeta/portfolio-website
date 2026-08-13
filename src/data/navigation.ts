export interface NavigationLink {
  href: `#${string}`;
  label: string;
}

export const primaryNavigation: NavigationLink[] = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#process', label: 'Process' },
];

export const footerNavigation: NavigationLink[] = [
  ...primaryNavigation,
  { href: '#contact', label: 'Contact' },
];
