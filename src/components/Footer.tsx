import { contactInfo, aboutInfo } from '../data/about';
import { footerNavigation } from '../data/navigation';
import SocialLinks from './SocialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-contrast border-t border-dark-border py-12">
      <div className="container px-4 md:px-8 lg:px-16">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-3xl font-bold gradient-text mb-4">ED</div>
            <p className="text-dark-muted mb-4">
              {aboutInfo.role}
            </p>
            <p className="text-sm text-dark-muted">
              Building modern web applications and AI-powered solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerNavigation.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-dark-muted hover:text-accent-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="mb-4">
              <SocialLinks variant="footer" />
            </div>
            <p className="text-sm text-dark-muted">
              <a href={`mailto:${contactInfo.email}`} className="hover:text-accent-primary transition-colors">
                {contactInfo.email}
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-dark-muted">
            © {currentYear} {aboutInfo.name}. All rights reserved.
          </p>
          <p className="text-sm text-dark-muted">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
