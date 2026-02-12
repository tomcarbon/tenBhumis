export const fivePaths = {
  id: "five-paths",
  title: "The Five Paths",
  subtitle: "Pañcamārga — The Five Stages of the Path to Enlightenment",
  description:
    "The five paths describe the complete journey from the first generation of bodhicitta to the attainment of buddhahood. They provide the overarching framework into which the ten bhūmis, the accumulations, and all practices fit. The first two paths are traversed by ordinary beings; the last three by noble beings (ārya).",
  crossReferences: ["ten-bhumis", "two-accumulations", "two-obscurations", "bodhicitta"],
  items: [
    {
      number: 1,
      sanskrit: "Saṃbhāra-mārga",
      name: "Path of Accumulation",
      description:
        "Begins with the genuine generation of bodhicitta. The practitioner accumulates merit and wisdom through study, reflection, and meditation. They develop the foundations: the four applications of mindfulness, four right efforts, and four bases of supernatural power. This path may span many lifetimes.",
      bhumiRelation: "Pre-bhūmi (before the grounds)",
      practices: ["Study of dharma", "Generation of bodhicitta", "Cultivation of the four foundations", "Accumulation of merit through the six perfections"],
      crossReferences: ["bodhicitta", "four-foundations-of-mindfulness", "six-paramitas"],
    },
    {
      number: 2,
      sanskrit: "Prayoga-mārga",
      name: "Path of Preparation",
      description:
        "The practitioner develops increasingly clear conceptual understanding of emptiness through meditation. This path has four stages: heat (uṣmagata), peak (mūrdhan), patience (kṣānti), and supreme mundane dharma (laukikāgradharma). These correspond to ever-closer approximations of the direct perception of emptiness.",
      bhumiRelation: "Pre-bhūmi (immediately precedes the first ground)",
      stages: [
        { name: "Heat (Uṣmagata)", description: "First conceptual realization of emptiness; like the heat that precedes fire" },
        { name: "Peak (Mūrdhan)", description: "The highest point from which one might still fall back; wholesome roots become irreversible" },
        { name: "Patience (Kṣānti)", description: "No longer fears the profound emptiness; will never be reborn in lower realms" },
        { name: "Supreme Dharma (Laukikāgradharma)", description: "The highest mundane realization; immediately precedes the path of seeing" },
      ],
      crossReferences: ["emptiness", "two-truths"],
    },
    {
      number: 3,
      sanskrit: "Darśana-mārga",
      name: "Path of Seeing",
      description:
        "The practitioner directly perceives emptiness for the first time in non-conceptual meditation. This is the entry into the first bhūmi and the point at which the practitioner becomes a noble being (ārya). Intellectually acquired afflictions are eliminated. This is a transformative moment — the bodhisattva is now irreversibly on the path to buddhahood.",
      bhumiRelation: "First bhūmi (Pramuditā)",
      practices: ["Direct, non-conceptual meditation on emptiness", "Elimination of intellectually acquired obscurations"],
      crossReferences: ["ten-bhumis", "emptiness", "three-fetters"],
    },
    {
      number: 4,
      sanskrit: "Bhāvanā-mārga",
      name: "Path of Meditation",
      description:
        "The practitioner progressively deepens the realization of emptiness gained on the path of seeing. Innate (as opposed to intellectually acquired) afflictions are gradually eliminated through repeated meditation. This path spans the second through tenth bhūmis and constitutes the vast majority of the bodhisattva's journey.",
      bhumiRelation: "Second through tenth bhūmis",
      practices: ["Progressive deepening of emptiness realization", "Elimination of innate obscurations", "Mastery of the ten perfections"],
      crossReferences: ["ten-bhumis", "two-obscurations", "ten-paramitas"],
    },
    {
      number: 5,
      sanskrit: "Aśaikṣa-mārga",
      name: "Path of No More Learning",
      description:
        "The attainment of complete, perfect buddhahood (samyaksaṃbodhi). All obscurations — both afflictive and cognitive — are completely eliminated. The three bodies (trikāya) are fully manifest. There is nothing more to learn, realize, or abandon. The buddha spontaneously and effortlessly benefits all beings.",
      bhumiRelation: "Beyond the ten bhūmis — buddhahood",
      practices: ["Spontaneous, effortless activity for the benefit of all beings"],
      crossReferences: ["buddhahood", "three-bodies", "two-obscurations"],
    },
  ],
};

export const threeRealms = {
  id: "three-realms",
  title: "The Three Realms",
  subtitle: "Tridhātu — The Three Realms of Existence",
  description:
    "All of saṃsāric existence is contained within three realms, each representing progressively refined states of being. Beings cycle through these realms based on their karma and mental states. The goal of the Buddhist path is liberation from all three.",
  crossReferences: ["six-realms", "twelve-links", "four-dhyanas", "four-formless-absorptions"],
  items: [
    {
      number: 1,
      sanskrit: "Kāmadhātu",
      name: "Desire Realm",
      description:
        "The realm of sensory experience and desire. Includes the hell realms, hungry ghost realm, animal realm, human realm, and the six lower heavens of the desire realm gods. Beings here are driven primarily by sensory desires and the afflictions.",
      inhabitants: ["Hell beings", "Hungry ghosts (preta)", "Animals", "Humans", "Asuras (demigods)", "Desire realm gods (including the six heavens)"],
    },
    {
      number: 2,
      sanskrit: "Rūpadhātu",
      name: "Form Realm",
      description:
        "The realm of refined form, corresponding to the four dhyānas. Beings here have subtle material form but have transcended gross sensory desire. They experience states of deep meditative absorption. There are seventeen heavens within the form realm.",
      inhabitants: ["Beings of the first dhyāna heavens", "Beings of the second dhyāna heavens", "Beings of the third dhyāna heavens", "Beings of the fourth dhyāna heavens (including the pure abodes)"],
    },
    {
      number: 3,
      sanskrit: "Ārūpyadhātu",
      name: "Formless Realm",
      description:
        "The realm of pure mental existence without any material form. Corresponds to the four formless absorptions. Beings here exist as consciousness alone for vast aeons, but eventually their karma is exhausted and they are reborn in lower realms.",
      inhabitants: ["Beings of infinite space", "Beings of infinite consciousness", "Beings of nothingness", "Beings of neither perception nor non-perception"],
    },
  ],
};

export const sixRealms = {
  id: "six-realms",
  title: "The Six Realms",
  subtitle: "Ṣaḍgati — The Six Realms of Rebirth",
  description:
    "The six realms represent the possible states of rebirth within saṃsāra. Each realm is characterized by a dominant affliction and a particular quality of suffering. In Mahāyāna Buddhism, these are understood both as literal realms of rebirth and as psychological states experienced in the present moment.",
  crossReferences: ["twelve-links", "three-realms", "four-noble-truths", "karma"],
  items: [
    { number: 1, name: "Hell Realms", sanskrit: "Naraka", dominantAffliction: "Hatred and anger", description: "States of intense suffering caused by the ripening of extremely negative karma, particularly actions driven by hatred. Include hot hells, cold hells, and neighboring hells. Though terrible, these states are impermanent." },
    { number: 2, name: "Hungry Ghost Realm", sanskrit: "Preta", dominantAffliction: "Greed and craving", description: "States characterized by insatiable hunger and thirst — beings perceive food and water but cannot consume them. Caused by extreme miserliness and attachment." },
    { number: 3, name: "Animal Realm", sanskrit: "Tiryak", dominantAffliction: "Ignorance and delusion", description: "States characterized by instinctual behavior, inability to practice dharma, and domination by fear and the cycle of predator and prey." },
    { number: 4, name: "Human Realm", sanskrit: "Manuṣya", dominantAffliction: "Desire and attachment", description: "The most fortunate realm for spiritual practice. Humans experience a balanced mix of pleasure and suffering that motivates dharma practice. The 'precious human birth' is exceedingly rare and valuable." },
    { number: 5, name: "Demigod Realm", sanskrit: "Asura", dominantAffliction: "Jealousy and competitiveness", description: "Powerful beings consumed by jealousy of the gods. They wage constant war against the devas, never finding peace despite their power." },
    { number: 6, name: "God Realm", sanskrit: "Deva", dominantAffliction: "Pride and complacency", description: "States of great pleasure and long life that exhaust vast stores of positive karma. The danger lies in complacency — gods see no need for dharma practice until their merit runs out and they fall to lower realms." },
  ],
};
