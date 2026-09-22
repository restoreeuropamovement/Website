import type { JournalArticle } from "@/lib/content-types";
import { journalImages } from "@/content/images";

/**
 * The journal.
 *
 * Once `DATABASE_URL` is set this module is the seed for `npm run db:seed` and
 * the fallback for deployments with no database. Published essays are edited
 * through `/admin/journal`, not here.
 *
 * Essays cite real, checkable sources: treaty articles, encyclical paragraph
 * numbers, Commission document references. Nothing here is invented, and
 * anything asserted as fact should be verifiable by a reader who goes looking.
 * That constraint is the whole point — an essay that argues purely from first
 * principles, citing only our own documents, reads like something generated
 * rather than written, and gives a sceptical reader nothing to check.
 */
export const articles: readonly JournalArticle[] = [
  {
    slug: "three-yellow-cards",
    title: "Three Yellow Cards",
    subtitle: "Subsidiarity is written into European law. That has not made it binding.",
    standfirst:
      "The principle we invoke most often is one the Commission also professes. The argument was never about the principle. It is about who decides whether it has been honoured, and what happens when the answer is no.",
    category: "Europe",
    date: "2026-09-20",
    author: "Restore Europa Editorial Desk",
    readingMinutes: 7,
    hero: journalImages.vault,
    featured: true,
    body: [
      {
        type: "lead",
        text: "In May 2012 twelve national parliaments told the European Commission that a proposed regulation on the right to take collective action breached the principle of subsidiarity. The Commission withdrew the proposal. It also said the withdrawal had nothing to do with them.",
      },
      {
        type: "paragraph",
        text: "Subsidiarity is the idea this movement returns to more than any other. It is also, and this is the part we tend to skip, written into the founding treaties of the union we spend most of our time criticising. Article 5 of the Treaty on European Union binds the Union to act only where the objectives of a proposed action cannot be sufficiently achieved by the member states.[^1] If our case rested on getting the principle adopted, we won in 1992 and can go home.",
      },
      {
        type: "paragraph",
        text: "We obviously have not won. Working out why is more useful than repeating the word.",
      },
      { type: "subheading", text: "Two different questions" },
      {
        type: "paragraph",
        text: "The formulation nearly everyone borrows was set out by Pius XI in 1931. Most of Quadragesimo Anno is about wages and ownership, but one passage in its seventy-ninth paragraph has outlived the rest: it is an injustice, and a disturbance of right order, to assign to a greater and higher association what lesser and subordinate bodies can do.[^2] The encyclical does not present this as a matter of administrative tidiness. It presents it as a matter of justice, which is a much stronger claim and a much harder one to satisfy.",
      },
      {
        type: "paragraph",
        text: "The treaty asks something subtly different. Pius XI asks whether the higher body should be acting in this field at all. Article 5(3) asks whether the objectives of the proposed action can be sufficiently achieved by the member states — which requires you to accept the objective before you may question the competence. And the objective is written by the institution whose competence is in question.",
      },
      {
        type: "paragraph",
        text: "Once a proposal's stated aim is uniform enforcement across the internal market, no member state can achieve it alone. That is not a finding. It is a tautology, and it is satisfied before the test is applied.",
      },
      {
        type: "pullquote",
        text: "A test of whether a body should act, administered by that body, is not a test.",
      },
      { type: "subheading", text: "The mechanism, and what it has done" },
      {
        type: "paragraph",
        text: "This was not unnoticed at the time. The Lisbon Treaty, in force since December 2009, added a procedure. National parliaments get eight weeks to examine a draft legislative act and send a reasoned opinion if they think it breaches subsidiarity. Each parliament holds two votes; where there are two chambers, each holds one. If the objections reach a third of the votes available — a quarter for justice and home affairs — the Commission must review the proposal, and may then maintain, amend or withdraw it, provided it publishes its reasons.[^3] This is the yellow card.",
      },
      {
        type: "paragraph",
        text: "The Commission's own record of the mechanism lists three.",
      },
      {
        type: "list",
        marker: "rule",
        items: [
          "**2012, Monti II.** Twelve chambers objected to a regulation on the right to take collective action: nineteen votes against a threshold of eighteen. The proposal was withdrawn. The Commission attributed the withdrawal to a lack of agreement in the Council rather than to the parliaments.",
          "**2013, the European Public Prosecutor's Office.** Fourteen chambers objected, eighteen votes. The Commission reviewed the file, concluded that the proposal complied with subsidiarity, and maintained it.",
          "**2016, the Posted Workers Directive.** Fourteen chambers across eleven member states objected, twenty-two votes. The Commission reviewed, concluded that the proposal complied, and maintained it.",
        ],
      },
      {
        type: "paragraph",
        text: "The orange card, which needs a simple majority of the votes and drags the Council and Parliament into the question, has never been triggered at all.",
      },
      { type: "subheading", text: "The uncomfortable reading" },
      {
        type: "paragraph",
        text: "The convenient conclusion is that this is a scandal. It is not, quite, and we should resist saying so. On each occasion the Commission did what Protocol No. 2 requires. It reviewed the file. It published its reasoning, in documents that carry reference numbers and can be read by anyone who wants to disagree with them. No step was skipped.",
      },
      {
        type: "paragraph",
        text: "That is the difficulty rather than the defence. A safeguard triggered three times in sixteen years, which altered an outcome on at most one of them and arguably none, is not being circumvented. It is working exactly as it was drafted to work. The parliaments were given a right to be heard. They were not given a right to decide, and nobody ever said they were.",
      },
      {
        type: "note",
        text: "Two of the three files are worth reading in full before forming a view, because in both the Commission's reasoning is more substantial than a summary suggests. Being unpersuaded by an argument is a different thing from pretending it was not made.",
      },
      { type: "subheading", text: "What follows for how we argue" },
      {
        type: "paragraph",
        text: "If the Commission professes subsidiarity and we profess subsidiarity, the word has stopped doing any work in the dispute. Saying that we stand for it commits us to nothing our opponents do not also claim. The real disagreement sits one layer down, in three questions the treaty answers one way and we would answer another.",
      },
      {
        type: "list",
        marker: "numbered",
        items: [
          "Which question comes first. Whether a matter belongs at this level at all, before what the stated objective happens to require.",
          "Who arbitrates. Something other than the institution whose competence is being tested.",
          "What an objection does. Whether reaching the threshold stops a proposal, or merely obliges a reply.",
        ],
      },
      {
        type: "paragraph",
        text: "The third is the one that bites. A red card — an objection that halts a proposal outright rather than triggering a review — has been proposed repeatedly and adopted never. It would make subsidiarity justiciable in the way the encyclical implies it should be, since justice is the sort of thing that eventually requires a court.",
      },
      {
        type: "paragraph",
        text: "We should be honest that this is not free. An arbiter with the authority to bind the Commission is itself a central institution, and we would have argued ourselves into building one. A red card in the hands of national parliaments would make European legislation slower and, in some fields, effectively impossible; there are fields where we would welcome that and fields where we would not, and we have not done the work of saying which are which.",
      },
      {
        type: "statement",
        text: "We have been asking for a principle that the people we are arguing with already claim to hold.",
      },
      {
        type: "paragraph",
        text: "That is not a reason to stop invoking subsidiarity. It is a reason to stop treating the word as the end of an argument rather than the beginning of one. The next thing this movement owes its readers is not another defence of the principle. It is a concrete answer to the question the treaty leaves open: when the centre and the parts disagree about where a decision belongs, who settles it, and on what terms.",
      },
    ],
    footnotes: [
      {
        id: 1,
        text: "Treaty on European Union, Article 5(3), consolidated version. Subsidiarity entered Community law through the Maastricht Treaty of 1992, originally as Article 3b of the EC Treaty.",
      },
      {
        id: 2,
        text: "Pius XI, Quadragesimo Anno (1931), §79. Paraphrased here; the standard English translation is widely available and worth reading in the context of the paragraphs around it, which are concerned with vocational associations rather than states.",
      },
      {
        id: 3,
        text: "Protocol (No. 2) on the application of the principles of subsidiarity and proportionality, Articles 6 and 7, introduced by the Treaty of Lisbon and in force from 1 December 2009. The Commission publishes an annual report on the operation of the mechanism.",
      },
    ],
    citations: [
      {
        label: "Quadragesimo Anno (1931), §79",
        detail: "Pius XI. The origin of the formulation of subsidiarity that both this movement and the European treaties borrow.",
      },
      {
        label: "Treaty on European Union, Article 5",
        detail: "Consolidated version. Sets out conferral, subsidiarity and proportionality.",
      },
      {
        label: "Protocol (No. 2), Articles 6–7",
        detail: "The eight-week window, the vote thresholds, and the Commission's obligation to review and give reasons.",
      },
      {
        label: "European Commission, subsidiarity control mechanism",
        detail: "The Commission's own record of the yellow card procedure, including the three occasions on which it has been triggered and the reasoning published on each.",
      },
      {
        label: "Manifesto — Authority and Subsidiarity",
        detail: "Our own statement of the principle, which this essay argues is not yet sufficient on its own.",
      },
    ],
  },
];
