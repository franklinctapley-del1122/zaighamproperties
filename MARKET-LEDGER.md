# Zaigham Properties — Market Ledger Operating Guide

## Purpose
Maintain a dated, append-only record of DHA market intelligence supplied by the owner. This ledger is the structured source for future rate history, comparisons, market notes and approved website updates.

## Daily update workflow
1. Owner shares rates and market observations in ordinary Urdu, Roman Urdu or English.
2. Convert each item into a dated record in `src/data/marketLedger.json`.
3. Preserve the owner's exact distinctions between investor buying rate, seller/client demand, asking price and confirmed deal price.
4. Add a short market note explaining movement, demand, liquidity or negotiation context where supplied.
5. Do not invent missing rates, dates, blocks, transactions or trends. Leave unknown fields null or mark confidence as indicative.
6. Keep all historical entries. Correct an earlier entry by appending a correction record that references the original record; do not silently erase history.
7. Only publish rates that the owner explicitly approves for public display.

## Pairing and trail records
Record the number of adjoining plots, their combined base value, the buyer-specific pair/trail demand and the owner's explanation separately. Pair/trail premiums are conditional, buyer-specific and negotiation-dependent; never present them as guaranteed value or profit.

## Privacy
Do not publish plot numbers, owner/client identities, phone numbers, negotiation details or private portfolio values without explicit approval.

## Existing website prices
The pre-existing rate array on the website is a legacy snapshot. It has not been automatically copied into the verified ledger. The owner must reconfirm its date, category and values before it is treated as a verified historical snapshot or republished as current.

## Suggested daily message
"Date: [today]. Phase: [phase]. Size/type/category: [details]. Investor rate: [amount]. Client demand: [amount]. Confirmed deal: [amount or not confirmed]. Trend: [rising/falling/stable]. Note: [market context]. Publish: yes/no."

## Record status definitions
- User-confirmed: explicitly supplied or reconfirmed by the owner.
- Independently checked: supported by a separately checked source.
- Indicative: a market estimate or working range, not a confirmed transaction.
- Unverified: awaiting confirmation.
