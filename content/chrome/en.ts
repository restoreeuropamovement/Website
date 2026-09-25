/**
 * Every string in the shared chrome: masthead, footer, the fullscreen mobile
 * index, the language switcher, the error page and the form furniture.
 *
 * Text only. Hrefs live in `lib/site.ts` keyed by the same ids, so translating
 * this file cannot break a link, and adding a page means editing the routes in
 * one place rather than six.
 *
 * The English file is the shape: `ChromeContent` is `typeof chrome`, so a
 * translation missing a key fails the build rather than rendering a gap.
 *
 * Deliberately not `as const`. Frozen literal types would make every value its
 * own English string, and a translation could then only ever be assigned the
 * English words back. Widening to `string` keeps the keys checked, which is
 * the part that matters.
 */
export const chrome = {
  site: {
    /** Set beneath the name in the stacked wordmark. */
    descriptor: "Movement",
    tagline: "For a Christian, European and Human-Scale Civilization.",
    description:
      "Restore Europa Movement is a political movement of Europe's national peoples, for a Christian, European and human-scale civilization: family, widespread property, national continuity, subsidiarity, stewardship and technology under human control.",
    closing: "Receive. Renew. Transmit.",
  },

  nav: {
    principles: {
      label: "Principles",
      description: "The sixteen commitments that define our politics.",
    },
    manifesto: {
      label: "Manifesto",
      description: "The founding document, in full.",
    },
    policy: {
      label: "Policy",
      description: "Searchable positions, topic by topic.",
    },
    vision: {
      label: "Vision",
      description: "What the programme means in ordinary life.",
    },
    about: {
      label: "About",
      description: "Who we are and how we organise.",
    },
    wings: {
      label: "Wings",
      description: "The national wing in each European nation.",
    },
  },

  cta: {
    label: "Join the Movement",
  },

  footer: {
    movement: {
      title: "The Movement",
      principles: "Principles",
      manifesto: "Manifesto",
      policy: "Policy Catalogue",
      vision: "Vision",
      about: "About",
      wings: "National Wings",
      join: "Get Involved",
    },
    contact: {
      title: "Contact",
      contact: "Contact",
      press: "Press",
      research: "Research",
      chapters: "Local Chapters",
    },
    legal: {
      title: "Legal",
      privacy: "Privacy",
      imprint: "Imprint",
    },
  },

  common: {
    skipToMain: "Skip to main content",
    menu: "Menu",
    close: "Close",
    /** Appended to the wordmark link so its accessible name says where it goes. */
    home: "home",
    primaryNavLabel: "Primary",
    siteNavLabel: "Site navigation",
    language: "Language",
    optional: "Optional",
    /* The copy-link button, which the manifesto and the principles both use. */
    copied: "Copied",
    copiedToClipboard: "Link copied to clipboard",
  },

  notFound: {
    eyebrow: "Error 404",
    title: "This page does not exist.",
    lede: "The address may have changed, or it may never have been here. The main sections of the site are below.",
    sectionsLabel: "Main sections",
    backHome: "Return to the home page",
  },
};
