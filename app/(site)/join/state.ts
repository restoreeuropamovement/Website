import type { JoinErrorCode } from "@/content/involvement";

/**
 * Shape returned by the public membership intake action.
 *
 * Errors are codes, not sentences. The action runs on the server and has no
 * business deciding what language the reader is in; the form does, and turns
 * each code into a sentence from its own edition. Posting a locale to the
 * action instead would mean a client-supplied value steering server behaviour
 * to no purpose.
 */
/**
 * `throttled` and `busy` are both refusals to accept a form, and separating
 * them is not a nicety. `throttled` means this connection has sent several
 * already; `busy` means the site-wide ceiling was reached and the reader has
 * very probably done nothing at all. Telling the second group they have
 * already applied is untrue, and on the day it would happen — a launch, a
 * link that travelled — it is untrue to the largest number of people the
 * movement will ever have had at once.
 */
/**
 * What the reader typed, handed back so that a refusal does not erase it.
 *
 * React resets an uncontrolled form once its action has run. That is the right
 * default for a form that succeeded and the wrong one for a form being
 * returned for correction: without this, being told to add a family name also
 * costs the applicant their address, their country, their area of interest and
 * whatever they wrote in the message box. At that point a fair number of people
 * simply do not start again, and the movement loses the application over a
 * missing word.
 *
 * Only ever the values of this submission, never anything read from storage, so
 * the reply still cannot be used to test what is already held.
 */
export interface JoinValues {
  readonly role: string;
  readonly givenName: string;
  readonly familyName: string;
  readonly email: string;
  readonly country: string;
  readonly region: string;
  readonly interest: string;
  readonly message: string;
  readonly consent: boolean;
}

export interface JoinState {
  readonly status: "idle" | "received" | "invalid" | "unavailable" | "throttled" | "busy";
  readonly errors: readonly JoinErrorCode[];
  /**
   * Present only when the form is coming back to be corrected. A successful
   * application deliberately returns nothing, so the emptied form stays empty
   * rather than inviting somebody to submit their neighbour a second time.
   */
  readonly values?: JoinValues;
}

export const JOIN_INITIAL: JoinState = { status: "idle", errors: [] };
