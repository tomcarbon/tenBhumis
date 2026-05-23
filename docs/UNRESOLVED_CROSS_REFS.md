# Unresolved Cross-References

These ref ids appear in the `crossReferences` arrays of items/lists in `src/data/` but do not yet have a corresponding list defined in `src/data/lists.js` (and registered in `src/data/index.js`). In the UI they currently render as visibly dimmed, non-interactive buttons.

For each one, decide whether to:
- **author content** — add a new list to `src/data/lists.js`, then register it in `src/data/index.js` (the button will become live automatically), or
- **leave unresolved** — keep the dimmed button as a pointer to a topic the reader can explore elsewhere, or
- **remove the reference** — delete the ref id from the relevant `crossReferences` array in `src/data/bhumis.js`.

## Checklist — See also rows (item-level, on each bhumi)

17 unique ids referenced from `src/data/bhumis.js`:

- [ ] `three-fetters` — referenced by Bhumi 1 (Joyous)
- [ ] `three-types-of-morality` — referenced by Bhumi 2 (Stainless)
- [ ] `three-types-of-patience` — referenced by Bhumi 3 (Luminous)
- [ ] `four-right-efforts` — referenced by Bhumi 4 (Radiant)
- [ ] `five-powers` — referenced by Bhumi 4 (Radiant)
- [ ] `two-truths` — referenced by Bhumi 5 (Difficult to Conquer)
- [ ] `dependent-origination` — referenced by Bhumi 6 (Approaching)
- [ ] `three-doors-of-liberation` — referenced by Bhumi 6 (Approaching)
- [ ] `three-vehicles` — referenced by Bhumi 7 (Far-Going)
- [ ] `skillful-means` — referenced by Bhumi 7 (Far-Going)
- [ ] `ten-masteries` — referenced by Bhumi 8 (Immovable)
- [ ] `irreversibility` — referenced by Bhumi 8 (Immovable)
- [ ] `four-perfect-knowledges` — referenced by Bhumi 9 (Excellent Intelligence)
- [ ] `ten-powers-of-buddha` — referenced by Bhumi 9 (Excellent Intelligence) and Bhumi 10 (Cloud of Dharma)
- [ ] `four-fearlessnesses` — referenced by Bhumi 9 (Excellent Intelligence)
- [ ] `vajra-samadhi` — referenced by Bhumi 10 (Cloud of Dharma)
- [ ] `buddhahood` — referenced by Bhumi 10 (Cloud of Dharma); also from list-level Related: on `two-obscurations` and `three-bodies`

## Checklist — Related: rows (list-level, in `src/data/lists.js`)

6 additional unique ids referenced from list-level `crossReferences` that also don't resolve:

- [ ] `emptiness` — referenced by `twelve-links`, `three-marks`, `five-aggregates`, `three-bodies`
- [ ] `vipassana` — referenced by `three-marks`
- [ ] `heart-sutra` — referenced by `five-aggregates`
- [ ] `three-poisons` — referenced by `six-root-afflictions`
- [ ] `karma` — referenced by `ten-virtuous-actions`
- [ ] `three-trainings` — referenced by `eightfold-path`
