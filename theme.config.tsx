import type { SectionBlogTheme } from "section-theme-blog";

const themeConfig: SectionBlogTheme = {
  homePageAsAuthor: true,
  siteURL: "https://ratna.tech",
  defaultSeo: {
    openGraph: {
      type: "website",
      locale: "en_IE",
      url: "https://ratna.tech",
      siteName: "Ratna Bollapalli",
    },
    twitter: {
      handle: "@ratnabollapalli",
      site: "@site",
      cardType: "summary_large_image",
    },
  },
  logo: {
    text: "Ratna Bollapalli",
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="8" r="7" fill="#FF5733" />

        <rect x="10" y="4" width="8" height="16" fill="#007ACC" />

        <polygon points="20,20 24,12 20,4 16,12" fill="#47B881" />

        <circle cx="4" cy="20" r="4" fill="#FFD700" />
      </svg>
    ),
  },
  primary_navigation: [
    {
      route: "/",
      name: "Home",
    },
    {
      route: "/projects",
      name: "Projects",
    },
    {
      route: "/posts",
      name: "Blog",
    },
  ],
  secondary_navigation: [
    {
      route: "https://ratna.tech/pages/disclaimer",
      name: "Disclaimer",
    },
    {
      route: "https://ratna.tech/pages/privacy-policy",
      name: "Privacy policy",
    },
    {
      route: "https://ratna.tech/pages/contact",
      name: "Contact",
    },

  ],
  social_links: [
    {
      name: "Github",
      url: "https://github.com/deepurich/ratna.tech",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/ratnabollapalli/",
    },
  ],
};

export default themeConfig;
