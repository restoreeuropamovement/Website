import type { InvolvementText } from "./index";

export const involvementText: InvolvementText = {
  join: {
    eyebrow: "Membership",
    title: "Join the movement.",
    metaTitle: "Join",
    lede: "Membership is belonging. If you can also help build the movement, choose Volunteer. The form asks for five things, encrypts your name and address before storing them, and commits you to nothing until a person has reviewed the application.",
    description: "Join Restore Europa Movement as a member, or volunteer to help build it.",
    prefilled:
      "You arrived from the wing in {country}, so the form below is set to it. Change either field if that is not right.",
    roleLegend: "How you are applying",
    fields: {
      name: "Name",
      email: "Email",
      country: "Country",
      region: "Region or city",
      interest: "Area of interest",
      message: "Message",
      messageHint:
        "What you would like to do, and anything about your circumstances that is relevant to it.",
      optional: "Optional",
      placeholder: "Select…",
      otherCountry: "Other",
    },
    consent:
      "I am applying to join Restore Europa Movement, and I agree that what I have entered above may be held for that purpose. Membership in a political movement implies a political opinion, which the law protects more strictly than ordinary personal data; I may withdraw this consent and have the record erased at any time.",
    submit: "Apply to join",
    submitting: "Sending…",
    privacyNote: "Everything you enter is encrypted before it is stored. See our",
    privacyLink: "privacy note",
    received: {
      title: "Your application has been received.",
      body: "It now waits to be reviewed by a person. Membership begins when that review is complete, not when a form is submitted — so nothing has been decided yet, and nothing about you has been published anywhere.",
      privacy:
        "Your name and address were encrypted before they were written down. What we hold, how long we hold it and how to have it erased are set out in the",
      privacyLink: "privacy note",
    },
    unavailable:
      "The membership roll is not accepting applications at this moment. Nothing you type here has been sent. Please try again shortly.",
    throttled:
      "Several applications have already been submitted from this connection. Please wait an hour before sending another.",
    busy:
      "More applications are arriving at once than this site is set up to accept. Nothing you typed has been sent, and nothing is wrong with what you wrote. Please try again in a few minutes.",
    problemCount: {
      one: "There is {count} problem with this form",
      other: "There are {count} problems with this form",
    },
    errors: {
      name: "Enter your name, up to 120 characters.",
      email: "Enter a valid email address.",
      country: "Choose a country from the list.",
      region: "Region or city is limited to 120 characters.",
      message: "Your message is limited to 1500 characters.",
      role: "Choose whether you are applying as a member or a volunteer.",
      interest: "Choose an area of interest.",
      consent: "You must agree before continuing.",
    },
  },

  roles: {
    member: {
      title: "Member",
      summary:
        "Be counted as a member of the movement. When Restore Europa can receive contributions, members are the people who will be asked to support the work.",
      commitment: "The ordinary way in",
    },
    volunteer: {
      title: "Volunteer",
      summary:
        "Help build it: local organising, writing, translation, events, or a trade. Choose the area of interest that fits best.",
      commitment: "As you can spare",
    },
  },

  retiredRoles: {
    supporter: "Supporter",
    organizer: "Local organiser",
    writer: "Writer / researcher",
    professional: "Professional contributor",
  },

  interests: {
    policy: "Policy and research",
    organising: "Local organising",
    writing: "Writing and editing",
    events: "Events and meetings",
    translation: "Translation",
    legal: "Legal and compliance",
    technology: "Technology and infrastructure",
    agriculture: "Agriculture and land",
    architecture: "Architecture and planning",
    other: "Other",
  },

  contact: {
    eyebrow: "Contact",
    title: "Reaching the movement.",
    metaTitle: "Contact",
    lede: "Correspondence is handled by function rather than by individual, so a letter reaches the people who can answer it rather than whoever happens to read it first.",
    description:
      "How to reach Restore Europa Movement: general enquiries, press, research, organisation and local chapters.",
    channelsHeading: "Channels",
    writeHeading: "Write to us",
    writeBody:
      "No email addresses are printed above, because each is published when the function it belongs to exists and someone is answerable for reading it. This form reaches the same people in the meantime.",
    fields: {
      name: "Name",
      email: "Email",
      subject: "What this is about",
      message: "Message",
      placeholder: "Select…",
    },
    submit: "Send message",
    submitting: "Sending…",
    privacyNote: "Encrypted before it is stored. See our",
    privacyLink: "privacy note",
    sent: {
      title: "Your message has been received.",
      body: "It will be read by whoever holds the function you addressed it to. The movement is small and answers correspondence by hand, so a reply may take some days.",
      privacy:
        "Your name, address and message were encrypted before they were stored, and can be erased on request — see the",
      privacyLink: "privacy note",
    },
    unavailable:
      "Correspondence is not being accepted at this moment. Nothing you type here has been sent. Please try again shortly.",
    throttled:
      "Several messages have already been sent from this connection. Please wait an hour before sending another.",
    busy:
      "More messages are arriving at once than this site is set up to accept. Nothing you typed has been sent, and nothing is wrong with what you wrote. Please try again in a few minutes.",
    problemCount: {
      one: "There is {count} problem with this form",
      other: "There are {count} problems with this form",
    },
    errors: {
      name: "Enter your name, up to 120 characters.",
      email: "Enter a valid email address, so a reply can reach you.",
      subject: "Choose what your message is about.",
      message: "Your message should be between 10 and 2000 characters.",
    },
    ratherTakePart: {
      before: "If you would rather take part than ask a question,",
      joinLink: "join the movement",
      between: ". Publisher information is on the",
      imprintLink: "imprint",
      after: ".",
    },
  },

  channels: {
    general: {
      title: "General enquiries",
      description: "Questions about the movement, its programme and its activities.",
    },
    press: {
      title: "Press",
      description: "Journalists, broadcasters and researchers seeking comment or background.",
    },
    research: {
      title: "Research",
      description: "Academic correspondence and submissions to the policy catalogue.",
    },
    organization: {
      title: "Organisation",
      description: "Membership administration, statutes, compliance and internal matters.",
    },
    chapters: {
      title: "Local chapters",
      description: "Establishing a chapter, or contacting one once chapters are constituted.",
    },
  },
};
