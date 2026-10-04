---
name: ai-writing-check
description: Check copy for patterns that make it read as AI-written, line by line, and suggest human rewrites. Use when reviewing or writing website copy, microcopy, taglines, posts or emails for Interplay / sfevents.app, or when someone asks "does this sound like AI?"
---

# AI writing check

A field guide to the patterns readers in 2026 associate with AI-written text. It was distilled from 30+ sources (listed in `sources.md`), including Wikipedia's "Signs of AI writing" guide, Pew Research's 2026 study of web text, GPTZero, tropes.fyi and two academic papers on overused LLM vocabulary.

**Read this first.** These are signals, not proof. Models learned them from human writing, so people use them too. One pattern is noise. Several patterns stacked in a short passage is what makes copy *read* as AI. On a landing page, what matters is how it reads, not who wrote it.

## The patterns

The "Sources" column counts how many of the ~30 sources reviewed name the pattern. It shows how widely recognised a tell is, not a measured frequency. Hard numbers are quoted where a source gave them.

| # | Pattern | Looks like | Where it shows up | Sources | Hard numbers |
|---|---|---|---|---|---|
| 1 | **AI vocabulary** | delve, tapestry, testament, pivotal, landscape, robust, seamless, unlock, leverage, elevate, foster, intricate, meticulous, realm, **interplay** | Body text, intros, academic and SEO writing | ~20 | Pew (2026): words like "delve", "interplay", "testament" more than doubled on the web since 2023. arXiv: 21 words surged in scientific abstracts after ChatGPT. |
| 2 | **Rule of three** | "fast, simple, and secure"; three-item lists everywhere | Hero subheads, feature lists, sentence endings | ~12 | One 2026 stylometry paper: 7.13 tricolons per LLM document vs 3.73 for human experts. |
| 3 | **No specifics** | "a small audience", "leading experts", "many studies"; no names, numbers, dates or places | Heroes, ledes, claims | ~8 | Kompozy AI Tells Index (2026): 82% of AI-flagged landing pages had **no digit in the hero**, the single most common tell. |
| 4 | **Em dashes for punch** | "It's simple — and it works." | Mid-sentence everywhere, social posts | ~10 | Pew: em dashes about 2× more common on the web since 2023. OpenAI added an opt-out in Nov 2025. |
| 5 | **Negative parallelism** | "It's not just X, it's Y." / "Not X. Y." / "No X. Just Y." | Taglines, essay ledes, LinkedIn hooks | ~9 | Pew: nearly tripled since 2023, but still rare overall. |
| 6 | **Staccato fragments and uniform rhythm** | "No spam. No fluff. Just results." Three or more short fragments in a row, or every sentence the same length | Microcopy, CTAs, closers, LinkedIn | ~7 | AI sentences cluster at 15–25 words. Human text mixes 3-word and 35-word sentences ("burstiness"). |
| 7 | **Hype words** | game-changing, cutting-edge, revolutionary, innovative, next-level | Heroes, product descriptions | ~7 | Kompozy: 7% of pages had hype words, 34% filler words, 15% weak CTAs, 14% all-caps headline words. |
| 8 | **Decorative metaphor** | symphony, dance, journey, tapestry, "where X meets Y"; one conceit carried through every line | Taglines, brand and luxury copy, essays | ~4 | — |
| 9 | **Significance adverbs** | quietly, deeply, truly, genuinely, honestly, simply | Descriptions meant to feel understated or important | ~3 | tropes.fyi lists "quietly" as a top tell. |
| 10 | **Filler and hedging** | "It's important to note", "it's worth mentioning", "in today's fast-paced world" | Intros, transitions | ~6 | — |
| 11 | **Wrap-up summaries** | "In conclusion", "Overall", "Ultimately", a closing line that restates | Ends of sections and posts | ~4 | — |
| 12 | **Formatting tells** | Bold on every key phrase, emoji bullets, Title Case Headings | Blogs, docs, LinkedIn | ~5 | — |
| 13 | **Formula openers** | "Have you ever wondered…", "What if I told you…" | First line of posts and emails | ~2 | — |
| 14 | **Template waitlist promises** | "Be the first to know", "Secure your spot", "No spam, ever" | Waitlist and signup pages | ~2 | — |

## Where each pattern shows up on a page

- **Hero or tagline:** no specifics (3), negative parallelism (5), decorative metaphor (8), hype (7), all caps
- **Lede or body:** vocabulary (1), rule of three (2), em dashes (4), hedging (10)
- **CTA or button:** weak or generic verbs (Submit, Learn more, Get started), template promises (14)
- **Fine print and reassurance:** staccato fragment closers (6): "Nothing else.", "No spam. Ever."
- **Endings:** wrap-up summaries (11)

## Which kinds of writing get which tells

- **Academic and encyclopedic:** vocabulary, filler, summaries
- **Marketing and landing pages:** no specifics, hype, rule of three, template CTAs
- **Social and LinkedIn:** fragments, em dashes, formula openers, negative parallelism
- **Essays and Substack:** negative parallelism, decorative metaphor, uniform rhythm
- **Brand and luxury:** decorative metaphor, significance adverbs, elevated nouns

## How to run a check

1. Split the copy into lines: each sentence, button and label.
2. For each line, list the pattern numbers it hits and where it sits on the page.
3. Rate each line:
   - **High:** two or more patterns, or a pattern that's a signature of AI text (fragment closer, negative parallelism, no specifics in a hero)
   - **Medium:** one pattern
   - **Low:** none
4. Check the whole passage too: does one metaphor run through every line? Are all the sentences the same length? Is there a single concrete fact (number, place, date, name)?
5. For every High or Medium line, give a rewrite that adds a specific, breaks the rhythm, or drops the decoration. Don't just swap synonyms. Swapping synonyms is itself a tell ("elegant variation").
6. Keep the brand's voice. The goal is copy that sounds like one particular person wrote it, not copy that is plain.

## Fast fixes

- Add one real number or place: "Twelve seats. San Francisco."
- Replace a metaphor with the literal fact it stands for: "when the curtain rises" becomes "when we set a date".
- Merge stacked fragments into one natural sentence.
- Vary sentence length on purpose.
- Name the action on buttons: what happens when it's clicked.
