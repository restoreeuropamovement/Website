import type { ContentBlock } from "@/lib/content-types";

export const privacy = {
  eyebrow: "Legal",
  title: "Privacy",
  lede: "This site collects nothing from its readers. What the movement holds about its members, and how, is set out below.",
  sections: [
    {
      id: "what-we-collect",
      title: "What this site collects",
      body: [
        {
          type: "lead",
          text: "Nothing that identifies you. This website has no accounts, no advertising, no tracking pixels and no third-party embeds.",
        },
        {
          type: "paragraph",
          text: "Reading it sets no cookies and writes nothing to your browser's local or session storage. No profile of your visit is built, purchased or sold. The one script is the traffic counter described below, which is anonymous and cannot identify you.",
        },
        {
          type: "paragraph",
          text: "Neither form on this site transmits anything. There is no place on this website through which you can hand over personal data, deliberately or otherwise.",
        },
      ] satisfies readonly ContentBlock[],
    },
    {
      id: "membership",
      title: "If you are a member",
      body: [
        {
          type: "paragraph",
          text: "Membership applications reach the movement by correspondence rather than through this website, and are entered by hand. So although nothing is collected here, records about members are **held** here, and you are entitled to know what they contain.",
        },
        {
          type: "paragraph",
          text: "A record holds five things: your name, your email address, your country, the role you asked for and one area of interest. That is all of it. There is no postal address, no telephone number, no date of birth and no free-text field — the last of those is absent on purpose, because free text is where people mention their employer, their family or their legal situation, and we would rather not hold it.",
        },
        {
          type: "subheading",
          text: "Why we are allowed to hold it",
        },
        {
          type: "paragraph",
          text: "Belonging to a political movement implies a political opinion, which the General Data Protection Regulation treats as a special category of data under Article 9 and protects more strictly than ordinary personal data. We rely on your explicit consent, given when you applied, together with Article 9(2)(d), which permits a not-for-profit body with a political aim to process the data of its own members — provided the data is not disclosed outside the body without consent. It is not, and will not be.",
        },
        {
          type: "subheading",
          text: "How long it is kept",
        },
        {
          type: "list",
          marker: "rule",
          items: [
            "While the membership stands, and no longer than the movement needs it.",
            "Deleted whenever you ask, without your having to give a reason.",
            "Nothing is deleted automatically on a timer, because an application awaiting review is somebody's application rather than something stale.",
            "The administrative log described below records that a record was created, changed or deleted, and by whom, but never its contents.",
          ],
        },
        {
          type: "paragraph",
          text: "Your details are never sold, never shared with another organisation, never used to build an advertising profile, and never passed to a third party for any purpose. No automated decision is made about you.",
        },
      ] satisfies readonly ContentBlock[],
    },
    {
      id: "how-it-is-protected",
      title: "How it is protected",
      body: [
        {
          type: "paragraph",
          text: "A membership list is exactly the kind of document that should never leak, so it is built on the assumption that one day something will go wrong. What follows is a description of the safeguards rather than a promise that nothing can happen.",
        },
        {
          type: "list",
          marker: "rule",
          items: [
            "**Your name and email address are encrypted** before they are written down, with a key that is not kept in the database. A stolen copy of the database, or of a backup of it, decrypts to nothing.",
            "**Your country is held unencrypted**, because counting and organising by region is the reason the list exists. On its own it identifies nobody.",
            "**Nobody signs in with a password.** Administrative access requires a passkey held on a physical device, which cannot be guessed, phished or read out of a stolen database.",
            "**Reading names requires a second confirmation.** Being signed in shows only counts by country; revealing any individual needs a fresh passkey touch, valid for minutes. Someone who steals an active session gets statistics, not people.",
            "**Every reading is logged** — who looked, and when. Not merely every change: for a list like this, the act of looking is the thing worth recording. What was searched for is recorded as a one-way digest, so the log can confirm whether a particular person was looked up without itself becoming a list of names.",
            "**There is no export function.** The list cannot be downloaded as a file, because a file is the form in which such lists escape.",
          ],
        },
        {
          type: "paragraph",
          text: "Nobody outside the movement's own administration can read any part of it, and no part of it is published anywhere, at any aggregation, without consent.",
        },
      ] satisfies readonly ContentBlock[],
    },
    {
      id: "forms",
      title: "The forms",
      body: [
        {
          type: "paragraph",
          text: "The forms on [Get Involved](/join) and [Contact](/contact) are not connected to any system. They validate what you type in your browser and go no further: no request is made, no data leaves the page, and nothing is stored. Both say so on the page itself, not only here.",
        },
        {
          type: "paragraph",
          text: "Please do not use either for anything you need a reply to, and do not send sensitive information through them. When a submission system is established, this page will be updated first — stating what is collected, why, how long it is kept and how to have it erased.",
        },
      ] satisfies readonly ContentBlock[],
    },
    {
      id: "analytics",
      title: "Traffic figures",
      body: [
        {
          type: "paragraph",
          text: "Visits are counted using Vercel Web Analytics, which is cookieless: it sets nothing on your device, stores no personal data, assigns you no identifier and cannot follow you between sites. It is served from this domain rather than from a third-party network, so loading a page discloses your visit to nobody else. This is why the site carries no consent banner — there is nothing to consent to.",
        },
        {
          type: "paragraph",
          text: "What it produces is a count of page views and visitors, by page and by country. It is not linked to membership records, and it cannot be: the two hold nothing in common that would join them.",
        },
        {
          type: "paragraph",
          text: "The administrative pages are excluded from the count, so the figures describe readers rather than our own editing.",
        },
      ] satisfies readonly ContentBlock[],
    },
    {
      id: "fonts-and-assets",
      title: "Fonts and assets",
      body: [
        {
          type: "paragraph",
          text: "Typefaces are served from this site rather than from a font network, so loading a page does not disclose your visit to a third party. All imagery is stored locally; nothing is hotlinked from another domain.",
        },
      ] satisfies readonly ContentBlock[],
    },
    {
      id: "server-logs",
      title: "Server logs",
      body: [
        {
          type: "paragraph",
          text: "Whoever hosts this site will keep ordinary web server logs, which typically include IP addresses, requested paths and timestamps. That is a function of the hosting arrangement rather than of this website, and the arrangement will be named here once it is settled.",
        },
      ] satisfies readonly ContentBlock[],
    },
    {
      id: "your-rights",
      title: "Your rights",
      body: [
        {
          type: "paragraph",
          text: "Under the General Data Protection Regulation you have rights of access, rectification, erasure, restriction, portability and objection in respect of personal data held about you. Where processing rests on consent, you may also withdraw that consent at any time, and withdrawing it is as straightforward as giving it was.",
        },
        {
          type: "paragraph",
          text: "For membership records those rights are real and the machinery to honour them exists: a record can be produced, corrected or deleted outright on request, and deletion means deletion rather than a flag on a row that is quietly kept. Ask through whatever correspondence you used to apply.",
        },
        {
          type: "statement",
          text: "One thing is missing, and we would rather say so than leave you to discover it.",
        },
        {
          type: "paragraph",
          text: "The movement is not yet formally constituted, which means no data controller can honestly be named and no correspondence address has been published — see the [imprint](/imprint), which lists what is still to be established. Until that is settled there is no address to which you can send a request with any certainty of who will read it, and no supervisory authority with which a complaint could be lodged against a named controller.",
        },
        {
          type: "paragraph",
          text: "This is a genuine gap rather than an oversight, and it argues for waiting: if the absence of a named controller troubles you, do not apply yet. Nothing is lost by applying later, and this page will be updated — naming the controller, the correspondence address and the supervisory authority — before that gap is closed rather than after.",
        },
        {
          type: "note",
          text: "This note describes the site as it stands, and is written to be read rather than to satisfy a checklist. It is not legal advice, and it will be replaced by a full privacy policy once the movement is registered and a controller can be named.",
        },
      ] satisfies readonly ContentBlock[],
    },
  ],
} as const;

export const imprint = {
  eyebrow: "Legal",
  title: "Imprint",
  lede: "Publisher information, as required by European media and party law.",
  intro: [
    {
      type: "lead",
      text: "Restore Europe Movement is in formation. It is not yet registered as a political party or association in any jurisdiction, and no responsible person can therefore be named here in a legal capacity.",
    },
    {
      type: "paragraph",
      text: "Publishing an invented name, address or registration number would be worse than publishing none. The entries below state what will appear here, and remain unfilled until each particular is genuine.",
    },
  ] satisfies readonly ContentBlock[],
  entries: [
    { term: "Publisher", description: "Registered name of the association or party, once constituted." },
    { term: "Legal form", description: "To be determined by the jurisdiction of registration." },
    { term: "Registered address", description: "Published on registration." },
    { term: "Responsible for content", description: "Name and address of the person responsible under applicable press law." },
    { term: "Register and number", description: "Register of associations or parties, and the entry number." },
    { term: "Represented by", description: "The officers empowered to represent the organisation." },
    { term: "Contact", description: "Correspondence address and electronic contact point." },
    { term: "VAT identification", description: "Where applicable." },
    { term: "Supervisory authority", description: "Where applicable under national party law." },
  ],
  closing: [
    {
      type: "subheading",
      text: "This website",
    },
    {
      type: "paragraph",
      text: "The text of the manifesto, the principles and the journal is published by the movement in formation and may be quoted with attribution. The placeholder artwork used throughout the site was generated for this project and carries no third-party rights.",
    },
    {
      type: "paragraph",
      text: "Corrections and legal notices may be sent through [Contact](/contact) once addresses are published.",
    },
  ] satisfies readonly ContentBlock[],
} as const;
