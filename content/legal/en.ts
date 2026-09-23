import type { LegalText } from "./index";

export const legalText: LegalText = {
  privacy: {
    eyebrow: "Legal",
    title: "Privacy",
    metaTitle: "Privacy",
    lede: "Reading this site collects nothing from you. Two pages ask for something, and only if you choose to give it. What happens to it is set out below.",
    description:
      "Reading this site collects nothing: no analytics, no cookies, no tracking. Two pages ask for something, and only if you choose to give it. What is held, what is encrypted, and how to have it erased.",
    sections: {
      "what-we-collect": {
        title: "What this site collects",
        body: [
          {
            type: "lead",
            text: "Reading collects nothing that identifies you. This website has no accounts, no advertising, no tracking pixels and no third-party embeds.",
          },
          {
            type: "paragraph",
            text: "Reading it sets no cookies and writes nothing to your browser's local or session storage. No profile of your visit is built, purchased or sold. The one script is the traffic counter described below, which is anonymous and cannot identify you.",
          },
          {
            type: "paragraph",
            text: "There are two places on this site through which you can hand over personal data, and in both you have to mean it: the membership application on [Get Involved][join] and the message form on [Contact][contact]. Nothing else on the site transmits anything, and neither form is reachable by accident.",
          },
        ],
      },

      membership: {
        title: "If you apply to join",
        body: [
          {
            type: "paragraph",
            text: "Applying sends what you typed to the movement, where it is written to a database. Submitting the form does not make you a member: the record arrives marked unread, and a person decides. Until then, and afterwards, you are entitled to know exactly what is held.",
          },
          {
            type: "paragraph",
            text: "An application passes through five states, and nothing moves it between them except somebody's judgement. It arrives **unread**. When an administrator begins considering it, it is **in review**. If they write to you with questions, it is marked **awaiting reply** until you answer — a state that exists so that nobody who has been written to is forgotten. It then becomes either **accepted**, as a member or a volunteer according to what you asked for, or **declined**. No step is automatic, and no algorithm assesses you at any point.",
          },
          {
            type: "paragraph",
            text: "A record holds seven things at most: your name, your email address, your country, the role you asked for, one area of interest, and — only if you choose to give them — your region or city and a message. There is no postal address, no telephone number and no date of birth. Nothing is inferred, enriched or bought in from anywhere else.",
          },
          {
            type: "paragraph",
            text: "The two optional fields are the ones that can say most about you, so they are treated as carefully as your name. A region narrows a person far more than a country does, and a message is free text — which is where people mention an employer, a family situation or a legal one. **Both are encrypted**, and neither is ever written to the administrative log. If you would rather not give them, leave them empty; the application works exactly the same.",
          },
          {
            type: "subheading",
            text: "One thing you did not write",
          },
          {
            type: "paragraph",
            text: "While considering an application, an administrator can attach a short note to it — the substance of a conversation, a reason for a decision, who to introduce you to. This is the only thing in your record that you did not write yourself, and it is the only field in the entire database holding one person's assessment of another, so it is **encrypted like the rest** and is never written to the administrative log.",
          },
          {
            type: "paragraph",
            text: "It is also part of your record for the purpose of a subject access request. If you ask what is held about you, the note is included in the answer. Anyone writing one is expected to write it knowing that.",
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
              "Nothing is deleted automatically on a timer, because an application nobody has read yet is somebody's application rather than something stale.",
              "**An application that is declined is kept, marked as declined, rather than erased.** This is a deliberate choice and it has a cost to you, so it is stated plainly: erasing the record would also erase the means of recognising that the same application had been considered before, and the movement would review it again from the start each time it was resubmitted. If you would rather nothing at all were kept, ask, and it will be erased.",
              "The administrative log described below records that a record was created, changed or deleted, and by whom, but never its contents.",
            ],
          },
          {
            type: "subheading",
            text: "What the form itself does",
          },
          {
            type: "paragraph",
            text: "Your name, address, region and message are encrypted before they are written down, in the same request — none of them is ever stored in readable form. The reply you see is identical whether or not the address was already on the roll, so the form cannot be used to test whether a particular person is a member. Applications are rate-limited per connection, and there is a ceiling on how many the site will accept in an hour from everyone together; both are defences against a script filling the roll rather than measures aimed at you.",
          },
          {
            type: "paragraph",
            text: "The form also carries one field you will never see: an empty box, positioned off the screen, skipped by the keyboard and hidden from screen readers. Automated submitters fill in every field they find and people cannot fill in this one, so anything arriving with it completed is discarded without being stored. **We use no CAPTCHA and no third-party bot detection**, deliberately — those work by having an outside company observe everyone who tries to join a political movement, which is a worse trade than the one this makes.",
          },
          {
            type: "paragraph",
            text: "Your details are never sold, never shared with another organisation, never used to build an advertising profile, and never passed to a third party for any purpose. No automated decision is made about you.",
          },
        ],
      },

      "how-it-is-protected": {
        title: "How it is protected",
        body: [
          {
            type: "paragraph",
            text: "A membership list is exactly the kind of document that should never leak, so it is built on the assumption that one day something will go wrong. What follows is a description of the safeguards rather than a promise that nothing can happen. Correspondence sent through the contact form is held the same way.",
          },
          {
            type: "list",
            marker: "rule",
            items: [
              "**Your name, email address, region, message and any note written about you are encrypted** before they are written down, with a key that is not kept in the database. A stolen copy of the database, or of a backup of it, decrypts to nothing.",
              "**Your country is held unencrypted**, because counting and organising by country is the reason the list exists. On its own it identifies nobody. Your region, which would narrow you down much further, is not treated this way — it is encrypted with the rest.",
              "**Nobody signs in with a password.** Administrative access requires a passkey held on a physical device, which cannot be guessed, phished or read out of a stolen database.",
              "**Reading names or messages requires a second confirmation.** Being signed in shows only counts; revealing any individual, or opening any letter, needs a fresh passkey touch valid for minutes. Someone who steals an active session gets statistics, not people.",
              "**Every reading is logged** — who looked, and when. Not merely every change: for a list like this, the act of looking is the thing worth recording. What was searched for is recorded as a one-way digest, so the log can confirm whether a particular person was looked up without itself becoming a list of names.",
              "**There is no export function.** The list cannot be downloaded as a file, because a file is the form in which such lists escape.",
            ],
          },
          {
            type: "paragraph",
            text: "Nobody outside the movement's own administration can read any part of it, and no part of it is published anywhere, at any aggregation, without consent.",
          },
        ],
      },

      forms: {
        title: "The two forms",
        body: [
          {
            type: "paragraph",
            text: "The first is the membership application on [Get Involved][join], described above.",
          },
          {
            type: "paragraph",
            text: "The second is the message form on [Contact][contact]. It holds your name, your email address, which function you addressed and what you wrote. Name, address and message are encrypted exactly as a member's details are — writing to an organisation is not the same as belonging to it, but the gap is thinner than it looks, and a letter saying you are thinking of joining is as disclosing as the roll itself.",
          },
          {
            type: "paragraph",
            text: "Correspondence is kept until it has been dealt with and for no longer than answering it requires, is erased on request, and is never used to add you to the membership roll. Joining is a separate decision you have to make deliberately. No email addresses are printed on the contact page because each is published only when the function it belongs to exists and somebody is answerable for reading it.",
          },
        ],
      },

      analytics: {
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
        ],
      },

      "fonts-and-assets": {
        title: "Fonts and assets",
        body: [
          {
            type: "paragraph",
            text: "Typefaces are served from this site rather than from a font network, so loading a page does not disclose your visit to a third party. All imagery is stored locally; nothing is hotlinked from another domain.",
          },
        ],
      },

      "server-logs": {
        title: "Server logs",
        body: [
          {
            type: "paragraph",
            text: "Whoever hosts this site will keep ordinary web server logs, which typically include IP addresses, requested paths and timestamps. That is a function of the hosting arrangement rather than of this website, and the arrangement will be named here once it is settled.",
          },
        ],
      },

      "your-rights": {
        title: "Your rights",
        body: [
          {
            type: "paragraph",
            text: "Under the General Data Protection Regulation you have rights of access, rectification, erasure, restriction, portability and objection in respect of personal data held about you. Where processing rests on consent, you may also withdraw that consent at any time, and withdrawing it is as straightforward as giving it was.",
          },
          {
            type: "paragraph",
            text: "Those rights are real and the machinery to honour them exists: a record can be produced, corrected or deleted outright on request, and deletion means deletion rather than a flag on a row that is quietly kept.",
          },
          {
            type: "statement",
            text: "One thing is missing, and we would rather say so than leave you to discover it.",
          },
          {
            type: "paragraph",
            text: "Registration as a party or association has not completed, so no data controller can yet be named and no correspondence address is published — see the [imprint][imprint]. Until that is settled there is no address to which you can send a request with certainty of who will read it, and no supervisory authority with which a complaint could be lodged against a named controller.",
          },
          {
            type: "paragraph",
            text: "That is a genuine gap, and it argues for waiting: if the absence of a named controller troubles you, do not apply yet. Nothing is lost by applying later. This page will name the controller, the address and the supervisory authority before the gap closes rather than after.",
          },
          {
            type: "note",
            text: "This note describes the site as it stands and is written to be read rather than to satisfy a checklist. It is not legal advice, and it will be replaced by a full privacy policy on registration.",
          },
        ],
      },
    },
  },

  imprint: {
    eyebrow: "Legal",
    title: "Imprint",
    metaTitle: "Imprint",
    lede: "Publisher information, as required by European media and party law.",
    description:
      "Publisher information for Restore Europa Movement. The movement is in formation; registered particulars are published as they become genuine.",
    intro: [
      {
        type: "lead",
        text: "This website is published by Restore Europa Movement, a political movement of Europe's national peoples.",
      },
      {
        type: "paragraph",
        text: "Registration as a party or association is under way and has not yet completed in any jurisdiction. Until it does, there is no registered name, entry number or statutory representative to state, and this page will not invent one. Each particular appears here as it becomes a matter of public record.",
      },
      {
        type: "paragraph",
        text: "Legal notices and corrections should be sent through the correspondence channels on [Contact][contact], which lists the address published for each function.",
      },
    ],
    particularsHeading: "Particulars to be published",
    particularsNote: "On completion of registration, in this order.",
    aboutLabel: "About this website",
    entries: {
      publisher: {
        term: "Publisher",
        description: "The registered name of the association or party.",
      },
      "legal-form": {
        term: "Legal form and jurisdiction",
        description: "Determined by the country of registration.",
      },
      "registered-address": {
        term: "Registered address",
        description: "The seat of the organisation.",
      },
      responsible: {
        term: "Responsible for content",
        description: "The person answerable under applicable press law.",
      },
      register: {
        term: "Register and number",
        description: "The register of associations or parties, and the entry.",
      },
      "represented-by": {
        term: "Represented by",
        description: "The officers empowered to act for the organisation.",
      },
      "supervisory-authority": {
        term: "Supervisory authority",
        description: "Where national party law provides for one.",
      },
    },
    closing: [
      {
        type: "subheading",
        text: "This website",
      },
      {
        type: "paragraph",
        text: "The manifesto, the principles and the policy catalogue are published by the movement and may be quoted with attribution. Photographic credits and licences are recorded in the repository that builds this site.",
      },
      {
        type: "paragraph",
        text: "Corrections and legal notices may be sent through [Contact][contact] once addresses are published.",
      },
    ],
  },
};
