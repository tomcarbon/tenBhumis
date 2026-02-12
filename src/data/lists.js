export const fourNobleTruths = {
  id: "four-noble-truths",
  title: "The Four Noble Truths",
  subtitle: "Catvāri Āryasatyāni — The Foundation of All Buddhist Teaching",
  description:
    "The Four Noble Truths are the Buddha's first teaching, given in the Deer Park at Sarnath. They diagnose the condition of sentient beings (suffering), identify the cause (origin), point to the possibility of cure (cessation), and prescribe the treatment (path). Every Buddhist teaching can be understood as an elaboration of these four truths.",
  crossReferences: ["eightfold-path", "twelve-links", "three-marks", "ten-bhumis"],
  items: [
    { number: 1, sanskrit: "Duḥkha", name: "The Truth of Suffering", description: "All conditioned existence is pervaded by suffering. This includes the suffering of suffering (pain), the suffering of change (impermanence of pleasure), and all-pervasive conditioned suffering (the unsatisfactory nature of saṃsāric existence)." },
    { number: 2, sanskrit: "Samudaya", name: "The Truth of the Origin of Suffering", description: "Suffering arises from craving (tṛṣṇā) rooted in fundamental ignorance (avidyā). The twelve links of dependent origination detail how this process unfolds." },
    { number: 3, sanskrit: "Nirodha", name: "The Truth of Cessation", description: "It is possible to completely cease suffering by eliminating its causes. This is nirvāṇa — the peace beyond all suffering, beyond birth and death." },
    { number: 4, sanskrit: "Mārga", name: "The Truth of the Path", description: "The Noble Eightfold Path is the way to the cessation of suffering. In Mahāyāna, this is expanded into the bodhisattva path of the six perfections and ten bhūmis." },
  ],
};

export const eightfoldPath = {
  id: "eightfold-path",
  title: "The Noble Eightfold Path",
  subtitle: "Āryāṣṭāṅgamārga — The Path to Liberation",
  description:
    "The Noble Eightfold Path is the fourth Noble Truth — the practical path leading to the cessation of suffering. Its eight factors are divided into three trainings: wisdom (prajñā), ethical conduct (śīla), and mental discipline (samādhi). These are practiced simultaneously, not sequentially.",
  crossReferences: ["four-noble-truths", "three-trainings", "six-paramitas"],
  items: [
    { number: 1, name: "Right View", sanskrit: "Samyag-dṛṣṭi", training: "Wisdom", description: "Understanding the Four Noble Truths, karma, dependent origination, and the nature of reality." },
    { number: 2, name: "Right Intention", sanskrit: "Samyak-saṃkalpa", training: "Wisdom", description: "Intentions of renunciation, goodwill, and harmlessness — the mental orientation toward liberation and the welfare of all beings." },
    { number: 3, name: "Right Speech", sanskrit: "Samyag-vāc", training: "Ethical Conduct", description: "Abstaining from lying, divisive speech, harsh speech, and idle chatter. Speaking truthfully, harmoniously, gently, and meaningfully." },
    { number: 4, name: "Right Action", sanskrit: "Samyak-karmānta", training: "Ethical Conduct", description: "Abstaining from killing, stealing, and sexual misconduct. Acting with integrity, respect for life, and care for others." },
    { number: 5, name: "Right Livelihood", sanskrit: "Samyag-ājīva", training: "Ethical Conduct", description: "Earning a living without causing harm — avoiding trades in weapons, living beings, meat, intoxicants, and poisons." },
    { number: 6, name: "Right Effort", sanskrit: "Samyag-vyāyāma", training: "Mental Discipline", description: "The four right efforts: preventing unwholesome states from arising, abandoning those that have arisen, cultivating wholesome states, and maintaining those already present." },
    { number: 7, name: "Right Mindfulness", sanskrit: "Samyak-smṛti", training: "Mental Discipline", description: "The four foundations of mindfulness: mindfulness of body, feelings, mind, and mental phenomena (dharmas)." },
    { number: 8, name: "Right Concentration", sanskrit: "Samyak-samādhi", training: "Mental Discipline", description: "Development of the four dhyānas and the ability to place the mind single-pointedly on a chosen object." },
  ],
};

export const twelveLinks = {
  id: "twelve-links",
  title: "The Twelve Links of Dependent Origination",
  subtitle: "Dvādaśāṅga Pratītyasamutpāda — The Chain of Conditioned Arising",
  description:
    "The twelve links describe how beings cycle through saṃsāra in a chain of causation driven by ignorance. Understanding these links in both forward order (how suffering arises) and reverse order (how suffering ceases) is mastered on the sixth bhūmi. Breaking any link in the chain liberates one from cyclic existence.",
  crossReferences: ["four-noble-truths", "ten-bhumis", "three-realms", "emptiness"],
  items: [
    { number: 1, sanskrit: "Avidyā", name: "Ignorance", description: "Fundamental misapprehension of reality — not seeing things as they are. The root cause of all suffering and the first link in the chain." },
    { number: 2, sanskrit: "Saṃskāra", name: "Volitional Formations", description: "Karmic impulses and mental formations conditioned by ignorance. These shape the consciousness that enters the next life." },
    { number: 3, sanskrit: "Vijñāna", name: "Consciousness", description: "The consciousness that links one life to the next, carrying the karmic imprints of volitional formations." },
    { number: 4, sanskrit: "Nāmarūpa", name: "Name and Form", description: "The psycho-physical organism that develops — the five aggregates in their nascent form." },
    { number: 5, sanskrit: "Ṣaḍāyatana", name: "Six Sense Bases", description: "The six sense faculties (eye, ear, nose, tongue, body, mind) that develop as the organism matures." },
    { number: 6, sanskrit: "Sparśa", name: "Contact", description: "The meeting of sense faculty, sense object, and consciousness — the basis for experience." },
    { number: 7, sanskrit: "Vedanā", name: "Feeling", description: "The pleasant, unpleasant, or neutral tone that accompanies every moment of contact. This is the crucial link where craving can be interrupted." },
    { number: 8, sanskrit: "Tṛṣṇā", name: "Craving", description: "The thirst that arises in response to feeling — craving for pleasure, craving for existence, craving for non-existence." },
    { number: 9, sanskrit: "Upādāna", name: "Clinging", description: "Intensified craving that grasps at sensory pleasures, views, rules and rituals, and the doctrine of self." },
    { number: 10, sanskrit: "Bhava", name: "Becoming", description: "The karmic process of becoming that propels one toward rebirth — the active shaping of future existence." },
    { number: 11, sanskrit: "Jāti", name: "Birth", description: "Rebirth in one of the six realms, conditioned by the karma of becoming." },
    { number: 12, sanskrit: "Jarāmaraṇa", name: "Aging and Death", description: "The inevitable deterioration and death that follows birth — along with sorrow, lamentation, pain, grief, and despair. And so the cycle continues." },
  ],
};

export const threeMarks = {
  id: "three-marks",
  title: "The Three Marks of Existence",
  subtitle: "Trilakṣaṇa — The Three Characteristics of All Conditioned Phenomena",
  description:
    "The three marks are universal characteristics of all conditioned phenomena. They are not beliefs to be accepted but truths to be directly seen through meditation. Deep insight into the three marks leads to disenchantment with saṃsāra and, ultimately, liberation.",
  crossReferences: ["four-noble-truths", "emptiness", "vipassana"],
  items: [
    { number: 1, sanskrit: "Anitya", name: "Impermanence", description: "All conditioned phenomena are impermanent — arising, changing, and passing away moment by moment. Nothing in saṃsāra remains static for even an instant." },
    { number: 2, sanskrit: "Duḥkha", name: "Suffering/Unsatisfactoriness", description: "All conditioned phenomena are ultimately unsatisfactory. Because everything is impermanent and lacks a stable self, no conditioned experience can provide lasting fulfillment." },
    { number: 3, sanskrit: "Anātman", name: "Non-Self", description: "No conditioned phenomenon possesses an independent, permanent, unitary self. In Mahāyāna, this is extended to all phenomena (dharma-nairātmya) — the emptiness of both persons and phenomena." },
  ],
};

export const fiveAggregates = {
  id: "five-aggregates",
  title: "The Five Aggregates",
  subtitle: "Pañcaskandha — The Five Components of Experience",
  description:
    "The five aggregates are the components that make up the conventional person. What we call 'I' or 'self' is nothing more than these five constantly changing streams. By analyzing experience into these components, the practitioner directly sees the absence of a permanent self.",
  crossReferences: ["three-marks", "emptiness", "heart-sutra", "twelve-links"],
  items: [
    { number: 1, sanskrit: "Rūpa", name: "Form", description: "Material or physical form — the body, the sense organs, and their objects. Includes the four great elements (earth, water, fire, wind) and all derived form." },
    { number: 2, sanskrit: "Vedanā", name: "Feeling", description: "The hedonic tone of experience — pleasant, unpleasant, or neutral. Not emotion, but the bare quality of pleasantness or unpleasantness that accompanies every moment of consciousness." },
    { number: 3, sanskrit: "Saṃjñā", name: "Perception/Discrimination", description: "The faculty that recognizes and labels — identifying objects, distinguishing one thing from another. It apprehends the distinguishing characteristics of objects." },
    { number: 4, sanskrit: "Saṃskāra", name: "Mental Formations", description: "All other mental factors — volition, attention, desire, aversion, faith, mindfulness, wisdom, and many others. This is the largest aggregate, encompassing 51 mental factors in Yogācāra analysis." },
    { number: 5, sanskrit: "Vijñāna", name: "Consciousness", description: "Awareness of an object — the basic knowing quality of mind. Includes the six types of consciousness corresponding to the six sense bases (five physical senses plus mind)." },
  ],
};

export const thirtySeven = {
  id: "thirty-seven-factors",
  title: "The 37 Factors of Enlightenment",
  subtitle: "Saptatriṃśad Bodhipakṣya Dharma — Wings of Awakening",
  description:
    "The thirty-seven factors of enlightenment are the essential practices leading to awakening, organized into seven groups. They are mastered by the bodhisattva on the fourth bhūmi. These factors encompass the entire path of practice and are the 'wings' that carry one to nirvāṇa.",
  crossReferences: ["ten-bhumis", "eightfold-path", "four-noble-truths"],
  items: [
    {
      groupName: "Four Foundations of Mindfulness",
      sanskrit: "Catvāri Smṛtyupasthānāni",
      count: 4,
      members: ["Mindfulness of body", "Mindfulness of feelings", "Mindfulness of mind", "Mindfulness of dharmas"],
    },
    {
      groupName: "Four Right Efforts",
      sanskrit: "Catvāri Samyakpradhānāni",
      count: 4,
      members: ["Prevent unarisen unwholesome states", "Abandon arisen unwholesome states", "Develop unarisen wholesome states", "Maintain arisen wholesome states"],
    },
    {
      groupName: "Four Bases of Supernatural Power",
      sanskrit: "Catvāri Ṛddhipādāḥ",
      count: 4,
      members: ["Desire (chanda)", "Effort (vīrya)", "Mind/intention (citta)", "Investigation (mīmāṃsā)"],
    },
    {
      groupName: "Five Faculties",
      sanskrit: "Pañcendriyāṇi",
      count: 5,
      members: ["Faith (śraddhā)", "Effort (vīrya)", "Mindfulness (smṛti)", "Concentration (samādhi)", "Wisdom (prajñā)"],
    },
    {
      groupName: "Five Powers",
      sanskrit: "Pañca Balāni",
      count: 5,
      members: ["Power of faith", "Power of effort", "Power of mindfulness", "Power of concentration", "Power of wisdom"],
    },
    {
      groupName: "Seven Factors of Awakening",
      sanskrit: "Sapta Bodhyaṅgāni",
      count: 7,
      members: ["Mindfulness", "Investigation of dharmas", "Effort", "Joy", "Tranquility", "Concentration", "Equanimity"],
    },
    {
      groupName: "Noble Eightfold Path",
      sanskrit: "Āryāṣṭāṅgamārga",
      count: 8,
      members: ["Right view", "Right intention", "Right speech", "Right action", "Right livelihood", "Right effort", "Right mindfulness", "Right concentration"],
    },
  ],
};

export const twoObscurations = {
  id: "two-obscurations",
  title: "The Two Obscurations",
  subtitle: "Dvāvaraṇa — The Two Veils Preventing Enlightenment",
  description:
    "The two obscurations are the obstacles that must be removed to attain buddhahood. Removing the afflictive obscurations alone leads to arhatship; removing both leads to complete buddhahood. The bodhisattva progressively eliminates both throughout the ten bhūmis.",
  crossReferences: ["ten-bhumis", "five-paths", "six-root-afflictions", "buddhahood"],
  items: [
    { number: 1, sanskrit: "Kleśāvaraṇa", name: "Afflictive Obscurations", description: "The mental afflictions (kleśa) that cause suffering and drive rebirth in saṃsāra: attachment, aversion, ignorance, pride, jealousy, and their derivatives. Intellectually acquired afflictions are removed on the path of seeing; innate afflictions are progressively removed on the path of meditation." },
    { number: 2, sanskrit: "Jñeyāvaraṇa", name: "Cognitive Obscurations", description: "The subtle imprints of afflictions that prevent omniscience. Even after afflictive obscurations are removed, these subtle 'stains' remain, preventing the direct knowledge of all phenomena. They are the final barrier to complete buddhahood and are only fully removed at the culmination of the tenth bhūmi." },
  ],
};

export const threeBodies = {
  id: "three-bodies",
  title: "The Three Bodies of a Buddha",
  subtitle: "Trikāya — The Three Dimensions of Buddhahood",
  description:
    "The trikāya doctrine describes the three 'bodies' or dimensions of a buddha's existence. These are not three separate entities but three aspects of a single enlightened reality. The dharmakāya is buddhahood 'for itself'; the rūpakāya (form bodies) are buddhahood 'for others.'",
  crossReferences: ["ten-bhumis", "buddhahood", "five-paths", "emptiness"],
  items: [
    { number: 1, sanskrit: "Dharmakāya", name: "Truth Body", description: "The ultimate dimension — the buddha's realization of emptiness, the nature of mind itself. It is formless, beyond concept, and identical with the true nature of all phenomena. It corresponds to the abandonment of the two obscurations." },
    { number: 2, sanskrit: "Saṃbhogakāya", name: "Enjoyment Body", description: "The luminous, blissful form in which buddhas appear to advanced bodhisattvas in pure lands. Adorned with the 32 major and 80 minor marks, it teaches the Mahāyāna dharma continuously. Only visible to ārya bodhisattvas." },
    { number: 3, sanskrit: "Nirmāṇakāya", name: "Emanation Body", description: "The physical form in which buddhas appear in the world to teach ordinary beings. Śākyamuni Buddha is the nirmāṇakāya that appeared in our world. Buddhas can emanate countless such forms simultaneously." },
  ],
};

export const sixRootAfflictions = {
  id: "six-root-afflictions",
  title: "The Six Root Afflictions",
  subtitle: "Ṣaṭ Mūla Kleśa — The Primary Mental Poisons",
  description:
    "The six root afflictions are the primary mental states that bind beings to saṃsāra. All suffering ultimately stems from these afflictions, which are rooted in fundamental ignorance. The bodhisattva's path involves the progressive elimination of both their manifest forms and their subtlest imprints.",
  crossReferences: ["two-obscurations", "twelve-links", "three-poisons", "ten-bhumis"],
  items: [
    { number: 1, sanskrit: "Rāga", name: "Attachment/Desire", description: "Grasping at objects, people, or experiences perceived as pleasant. It exaggerates the good qualities of its object and creates clinging and craving." },
    { number: 2, sanskrit: "Pratigha", name: "Aversion/Anger", description: "Hostility toward objects, people, or situations perceived as unpleasant. It exaggerates negative qualities and generates the wish to harm or avoid." },
    { number: 3, sanskrit: "Avidyā", name: "Ignorance/Delusion", description: "The fundamental misapprehension of reality — not seeing things as they are. The root of all other afflictions and the first link of dependent origination." },
    { number: 4, sanskrit: "Māna", name: "Pride/Conceit", description: "The inflated sense of self that compares oneself favorably to others. Includes seven types: pride over inferiors, pride of equality, pride over superiors, pride of self, false pride, modest pride, and perverted pride." },
    { number: 5, sanskrit: "Vicikitsā", name: "Doubt", description: "Afflictive doubt that wavers regarding the path, the teachings, and the Three Jewels. Not the healthy questioning that leads to investigation, but the paralytic doubt that prevents practice." },
    { number: 6, sanskrit: "Dṛṣṭi", name: "Wrong Views", description: "The five afflictive views: view of the transitory collection (satkāyadṛṣṭi), extreme views (antagrāhadṛṣṭi), wrong views (mithyādṛṣṭi), holding views as supreme (dṛṣṭiparāmarśa), and holding ethics/rituals as supreme (śīlavrataparāmarśa)." },
  ],
};

export const bodhicitta = {
  id: "bodhicitta",
  title: "Bodhicitta",
  subtitle: "The Awakening Mind — Heart of the Mahāyāna",
  description:
    "Bodhicitta is the mind that aspires to attain complete buddhahood for the benefit of all sentient beings. It is the defining characteristic of the Mahāyāna path and the single most important factor in the bodhisattva's journey. Without bodhicitta, no amount of practice leads to buddhahood.",
  crossReferences: ["four-immeasurables", "ten-bhumis", "six-paramitas", "five-paths"],
  items: [
    { number: 1, name: "Aspiring Bodhicitta", sanskrit: "Praṇidhāna-citta", description: "The wish to attain buddhahood for the benefit of all beings — like the desire to go on a journey. It is generated through contemplation of the suffering of beings and the capacity of buddhahood to help them." },
    { number: 2, name: "Engaging Bodhicitta", sanskrit: "Prasthāna-citta", description: "Actually entering the bodhisattva path by taking the bodhisattva vow and practicing the six perfections — like actually setting out on the journey. This is sustained through the entire path." },
    { number: 3, name: "Ultimate Bodhicitta", sanskrit: "Paramārtha-bodhicitta", description: "The direct, non-conceptual realization of emptiness united with compassion. This arises on the first bhūmi and deepens throughout the ten grounds. It is bodhicitta that has transcended conceptual elaboration." },
  ],
};

export const tenVirtuousActions = {
  id: "ten-virtuous-actions",
  title: "The Ten Virtuous Actions",
  subtitle: "Daśa Kuśala Karmapatha — Ten Wholesome Courses of Action",
  description:
    "The ten virtuous actions are the basis of ethical conduct in Buddhism. They are the positive counterparts of the ten non-virtuous actions. Perfecting these is the primary practice of the second bhūmi.",
  crossReferences: ["ten-bhumis", "eightfold-path", "karma"],
  items: [
    { number: 1, category: "Body", name: "Protecting Life", opposite: "Killing", description: "Refraining from taking life; protecting and saving the lives of others." },
    { number: 2, category: "Body", name: "Practicing Generosity", opposite: "Stealing", description: "Refraining from taking what is not given; practicing material generosity." },
    { number: 3, category: "Body", name: "Maintaining Sexual Ethics", opposite: "Sexual Misconduct", description: "Practicing responsible and ethical sexual conduct." },
    { number: 4, category: "Speech", name: "Speaking Truthfully", opposite: "Lying", description: "Communicating honestly and accurately." },
    { number: 5, category: "Speech", name: "Speaking Harmoniously", opposite: "Divisive Speech", description: "Using speech to bring people together rather than divide them." },
    { number: 6, category: "Speech", name: "Speaking Gently", opposite: "Harsh Speech", description: "Using kind, pleasant, and appropriate language." },
    { number: 7, category: "Speech", name: "Speaking Meaningfully", opposite: "Idle Chatter", description: "Speaking purposefully, at the right time, about beneficial topics." },
    { number: 8, category: "Mind", name: "Cultivating Contentment", opposite: "Covetousness", description: "Being satisfied with what one has; rejoicing in others' good fortune." },
    { number: 9, category: "Mind", name: "Cultivating Goodwill", opposite: "Malice", description: "Wishing for the welfare and happiness of all beings." },
    { number: 10, category: "Mind", name: "Cultivating Right View", opposite: "Wrong View", description: "Understanding karma, the Four Noble Truths, and the nature of reality correctly." },
  ],
};
