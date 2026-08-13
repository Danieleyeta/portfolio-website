import { Github, Linkedin, Twitter, type LucideIcon } from 'lucide-react';
import { contactInfo, type SocialPlatform } from '../data/about';

type SocialLinksVariant = 'hero' | 'contact' | 'footer';

interface SocialLinksProps {
  variant: SocialLinksVariant;
}

const socialIcons: Record<SocialPlatform, LucideIcon> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter,
};

const variantStyles: Record<SocialLinksVariant, { container: string; link: string; iconSize: number }> = {
  hero: {
    container: 'flex gap-2',
    link: 'flex h-10 w-10 items-center justify-center rounded-full border border-dark-border bg-dark-surface transition-all hover:-translate-y-1 hover:border-accent-primary hover:text-accent-primary',
    iconSize: 18,
  },
  contact: {
    container: 'flex items-center gap-3',
    link: 'flex h-11 w-11 items-center justify-center rounded-full border border-dark-border bg-dark-surface transition-all hover:-translate-y-1 hover:border-accent-primary hover:text-accent-primary',
    iconSize: 19,
  },
  footer: {
    container: 'flex gap-3',
    link: 'flex h-10 w-10 items-center justify-center rounded-lg border border-dark-border transition-all duration-300 hover:scale-110 hover:border-accent-primary',
    iconSize: 18,
  },
};

const SocialLinks = ({ variant }: SocialLinksProps) => {
  const styles = variantStyles[variant];

  return (
    <div className={styles.container}>
      {contactInfo.socials.map((social) => {
        const Icon = socialIcons[social.platform];
        return (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.platform}
            className={styles.link}
          >
            <Icon size={styles.iconSize} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
