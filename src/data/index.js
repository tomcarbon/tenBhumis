export { tenBhumis } from "./bhumis";
export { sixParamitas, tenParamitas } from "./paramitas";
export {
  fourDhyanas,
  fourFormlessAbsorptions,
  fourImmeasurables,
  nineShamatha,
} from "./meditations";
export { fivePaths, threeRealms, sixRealms } from "./paths";
export {
  fourNobleTruths,
  eightfoldPath,
  twelveLinks,
  threeMarks,
  fiveAggregates,
  thirtySeven,
  twoObscurations,
  threeBodies,
  sixRootAfflictions,
  bodhicitta,
  tenVirtuousActions,
} from "./lists";

// Registry of all lists for cross-reference resolution
import { tenBhumis } from "./bhumis";
import { sixParamitas, tenParamitas } from "./paramitas";
import {
  fourDhyanas,
  fourFormlessAbsorptions,
  fourImmeasurables,
  nineShamatha,
} from "./meditations";
import { fivePaths, threeRealms, sixRealms } from "./paths";
import {
  fourNobleTruths,
  eightfoldPath,
  twelveLinks,
  threeMarks,
  fiveAggregates,
  thirtySeven,
  twoObscurations,
  threeBodies,
  sixRootAfflictions,
  bodhicitta,
  tenVirtuousActions,
} from "./lists";

export const allLists = {
  "ten-bhumis": tenBhumis,
  "six-paramitas": sixParamitas,
  "ten-paramitas": tenParamitas,
  "four-dhyanas": fourDhyanas,
  "four-formless-absorptions": fourFormlessAbsorptions,
  "four-immeasurables": fourImmeasurables,
  "nine-stages-of-shamatha": nineShamatha,
  "five-paths": fivePaths,
  "three-realms": threeRealms,
  "six-realms": sixRealms,
  "four-noble-truths": fourNobleTruths,
  "eightfold-path": eightfoldPath,
  "twelve-links": twelveLinks,
  "three-marks": threeMarks,
  "five-aggregates": fiveAggregates,
  "thirty-seven-factors": thirtySeven,
  "two-obscurations": twoObscurations,
  "three-bodies": threeBodies,
  "six-root-afflictions": sixRootAfflictions,
  bodhicitta: bodhicitta,
  "ten-virtuous-actions": tenVirtuousActions,
};

// Categories for organizing lists in the UI
export const listCategories = [
  {
    name: "The Bodhisattva Path",
    description: "The stages, practices, and qualities of the path to buddhahood",
    lists: ["ten-bhumis", "five-paths", "bodhicitta", "two-obscurations"],
  },
  {
    name: "The Perfections",
    description: "The transcendent practices that carry one to the far shore",
    lists: ["six-paramitas", "ten-paramitas"],
  },
  {
    name: "Meditation & Concentration",
    description: "States of meditative absorption and the path to mental mastery",
    lists: [
      "four-dhyanas",
      "four-formless-absorptions",
      "nine-stages-of-shamatha",
      "four-immeasurables",
    ],
  },
  {
    name: "Foundational Teachings",
    description: "The core doctrines shared across all Buddhist traditions",
    lists: [
      "four-noble-truths",
      "eightfold-path",
      "twelve-links",
      "three-marks",
      "five-aggregates",
    ],
  },
  {
    name: "Ethics & Action",
    description: "The moral foundation of the path",
    lists: ["ten-virtuous-actions", "six-root-afflictions"],
  },
  {
    name: "Cosmology & Fruition",
    description: "The structure of existence and the goal of the path",
    lists: [
      "three-realms",
      "six-realms",
      "three-bodies",
      "thirty-seven-factors",
    ],
  },
];
