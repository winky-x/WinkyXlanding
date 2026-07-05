import { Link } from "react-router-dom";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

export function Footer({
  logo = {
    src: "/logo-white.png",
    alt: "WinkyX Logo",
    title: "WinkyX",
    url: "/",
  },
  tagline = "The Secure, Private Messenger That Works Anywhere.",
  menuItems = [
    {
      title: "Navigation",
      links: [
        { text: "Home", url: "/" },
        { text: "Why Choose Us", url: "/why-choose-us" },
        { text: "Privacy Policy", url: "/privacy" },
        { text: "What is Privacy?", url: "/what-is-privacy" },
        { text: "Unbreakable Encryption", url: "/encryption" },
      ],
    },
    {
      title: "Security Spec",
      links: [
        { text: "Architecture", url: "/architecture" },
        { text: "Threat Model", url: "/threat-model" },
        { text: "Digital Pigeon Protocol", url: "/digital-pigeon-protocol" },
        { text: "One-Time Pad (OTP)", url: "/one-time-pad" },
      ],
    },
    {
      title: "Community",
      links: [
        { text: "GitHub Repository", url: "https://github.com/winky-x/winkyx" },
        { text: "Twitter / X", url: "https://x.com" },
        { text: "Discord Community", url: "https://discord.com" },
      ],
    },
  ],
  copyright = "© 2026 WinkyX. All rights reserved.",
  bottomLinks = [
    { text: "Privacy Policy", url: "/privacy" },
  ],
}: FooterProps) {
  return (
    <section className="py-24 border-t border-white/5 w-full relative z-10 bg-transparent">
      <div className="container mx-auto px-8 md:px-28">
        <footer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-3">
                <Link to={logo.url} className="flex items-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="h-12 w-auto object-contain"
                  />
                </Link>
              </div>
              <p className="mt-6 text-sm text-zinc-400 font-medium max-w-sm leading-relaxed">
                {tagline}
              </p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-white text-sm uppercase tracking-wider">{section.title}</h3>
                <ul className="space-y-3 text-sm text-zinc-400">
                  {section.links.map((link, linkIdx) => {
                    const isInternal = link.url.startsWith("/") && !link.url.startsWith("/#");
                    return (
                      <li
                        key={linkIdx}
                        className="font-medium hover:text-white transition-colors duration-200"
                      >
                        {isInternal ? (
                          <Link to={link.url}>{link.text}</Link>
                        ) : (
                          <a href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-16 flex flex-col justify-between gap-6 border-t border-white/5 pt-8 text-xs font-medium text-zinc-500 md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-6">
              {bottomLinks.map((link, linkIdx) => {
                const isInternal = link.url.startsWith("/");
                return (
                  <li key={linkIdx} className="hover:text-zinc-300 transition-colors duration-200">
                    {isInternal ? (
                      <Link to={link.url}>{link.text}</Link>
                    ) : (
                      <a href={link.url}>{link.text}</a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
}
