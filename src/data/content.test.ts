import { describe, expect, it } from 'vitest';
import { contactInfo } from './about';
import { footerNavigation, primaryNavigation } from './navigation';
import { projects } from './projects';

describe('portfolio content', () => {
  it('uses unique navigation targets and project titles', () => {
    const navigationTargets = footerNavigation.map((link) => link.href);
    const projectTitles = projects.map((project) => project.title);

    expect(new Set(navigationTargets).size).toBe(navigationTargets.length);
    expect(new Set(projectTitles).size).toBe(projectTitles.length);
    expect(footerNavigation).toEqual([...primaryNavigation, { href: '#contact', label: 'Contact' }]);
  });

  it('allows only HTTPS external links', () => {
    const urls = [
      ...contactInfo.socials.map((social) => social.url),
      ...projects.flatMap((project) =>
        [project.githubUrl, project.liveUrl].filter(
          (url): url is string => typeof url === 'string',
        ),
      ),
    ];

    for (const value of urls) {
      const url = new URL(value);
      expect(url.protocol).toBe('https:');
    }
  });
});
