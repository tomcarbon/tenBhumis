export const sixParamitas = {
  id: "six-paramitas",
  title: "The Six Pāramitās",
  subtitle: "Ṣaṭ Pāramitā — The Six Perfections",
  description:
    "The six perfections are the core practices of the bodhisattva path. Each paramita is 'perfected' when practiced with the wisdom of emptiness and the motivation of bodhicitta. The first five paramitas correspond to the accumulation of merit, while the sixth — wisdom — corresponds to the accumulation of wisdom. Together they form the complete path to buddhahood.",
  crossReferences: ["ten-bhumis", "ten-paramitas", "bodhicitta", "two-accumulations"],
  items: [
    {
      number: 1,
      sanskrit: "Dāna",
      name: "Generosity",
      description:
        "The practice of giving freely without attachment. Includes giving of material goods, giving of dharma teachings, and giving of fearlessness (protection from danger). True dāna transcends the giver, gift, and receiver — practiced with the wisdom of emptiness.",
      subtypes: [
        { name: "Material Giving (āmiṣa-dāna)", description: "Giving food, clothing, shelter, medicine, and material resources" },
        { name: "Dharma Giving (dharma-dāna)", description: "Sharing teachings, wisdom, and spiritual guidance" },
        { name: "Giving of Fearlessness (abhaya-dāna)", description: "Protecting beings from fear, danger, and harm" },
      ],
      bhumi: 1,
      crossReferences: ["ten-bhumis"],
    },
    {
      number: 2,
      sanskrit: "Śīla",
      name: "Moral Discipline",
      description:
        "The practice of ethical conduct based on vows and precepts. For bodhisattvas, this includes not only restraining from harm but also actively accumulating virtue and working for the benefit of all beings. It is the foundation upon which all other perfections rest.",
      subtypes: [
        { name: "Restraint (saṃvara-śīla)", description: "Refraining from the ten non-virtuous actions" },
        { name: "Accumulating Virtue (kuśala-dharma-saṃgrāhaka-śīla)", description: "Actively cultivating wholesome qualities" },
        { name: "Benefiting Beings (sattvārtha-kriyā-śīla)", description: "Acting for the welfare of all sentient beings" },
      ],
      bhumi: 2,
      crossReferences: ["ten-virtuous-actions", "ten-bhumis"],
    },
    {
      number: 3,
      sanskrit: "Kṣānti",
      name: "Patience",
      description:
        "The practice of patient forbearance in the face of suffering, provocation, and the profundity of dharma. Patience is the antidote to anger, the most destructive of the afflictions. A single moment of anger can destroy aeons of merit.",
      subtypes: [
        { name: "Patience with Harm (parāpakāra-sahiṣṇutā)", description: "Enduring harm from others without retaliation or resentment" },
        { name: "Patience with Suffering (duḥkha-adhivāsanā)", description: "Willingly accepting hardship on the path" },
        { name: "Patience with Dharma (dharma-nidhyāna-kṣānti)", description: "Accepting the profound and sometimes unsettling truths of reality" },
      ],
      bhumi: 3,
      crossReferences: ["ten-bhumis", "six-root-afflictions"],
    },
    {
      number: 4,
      sanskrit: "Vīrya",
      name: "Diligence",
      description:
        "Joyous effort and enthusiastic perseverance in virtuous activity. Vīrya is the antidote to laziness in all its forms — the laziness of procrastination, of attachment to worldly pleasures, and of discouragement. It is the fuel that drives all other perfections.",
      subtypes: [
        { name: "Armor-Like Diligence (saṃnāha-vīrya)", description: "Courageous commitment to practice for however long it takes" },
        { name: "Diligence of Application (prayoga-vīrya)", description: "Actually engaging in virtuous activity" },
        { name: "Insatiable Diligence (aparituṣṭi-vīrya)", description: "Never feeling complacent, always deepening practice" },
      ],
      bhumi: 4,
      crossReferences: ["ten-bhumis", "four-right-efforts"],
    },
    {
      number: 5,
      sanskrit: "Dhyāna",
      name: "Meditative Concentration",
      description:
        "The practice of single-pointed and analytical meditation leading to mental stability, clarity, and insight. Dhyāna encompasses both śamatha (calm abiding) and vipaśyanā (insight), and their union. It provides the stable basis from which wisdom can arise.",
      subtypes: [
        { name: "Śamatha (Calm Abiding)", description: "Single-pointed concentration that stabilizes the mind" },
        { name: "Vipaśyanā (Insight)", description: "Analytical meditation that penetrates the nature of reality" },
        { name: "Union (Yuganaddha)", description: "The inseparable union of calm abiding and insight" },
      ],
      bhumi: 5,
      crossReferences: ["four-dhyanas", "four-formless-absorptions", "nine-stages-of-shamatha", "ten-bhumis"],
    },
    {
      number: 6,
      sanskrit: "Prajñā",
      name: "Wisdom",
      description:
        "The perfection of wisdom that directly perceives the ultimate nature of reality — emptiness (śūnyatā). Prajñā is the 'mother of all buddhas' — without it, the other five perfections remain mundane. It is wisdom that transforms ordinary virtues into transcendent perfections.",
      subtypes: [
        { name: "Mundane Wisdom (sāṃvṛtika-prajñā)", description: "Understanding of conventional arts, sciences, and worldly knowledge" },
        { name: "Supramundane Wisdom (lokottara-prajñā)", description: "Insight into the Four Noble Truths and path of liberation" },
        { name: "Ultimate Wisdom (paramārtha-prajñā)", description: "Direct non-conceptual perception of emptiness" },
      ],
      bhumi: 6,
      crossReferences: ["emptiness", "two-truths", "ten-bhumis", "heart-sutra"],
    },
  ],
};

export const tenParamitas = {
  id: "ten-paramitas",
  title: "The Ten Pāramitās",
  subtitle: "Daśa Pāramitā — The Ten Perfections",
  description:
    "In many Mahāyāna sources, particularly those discussing the ten bhūmis, the six perfections are expanded to ten by adding four more. These additional four are sometimes considered aspects or extensions of the sixth perfection (wisdom). Each of the ten paramitas corresponds directly to one of the ten bhūmis.",
  crossReferences: ["six-paramitas", "ten-bhumis"],
  items: [
    { number: 1, sanskrit: "Dāna", name: "Generosity", bhumi: 1 },
    { number: 2, sanskrit: "Śīla", name: "Moral Discipline", bhumi: 2 },
    { number: 3, sanskrit: "Kṣānti", name: "Patience", bhumi: 3 },
    { number: 4, sanskrit: "Vīrya", name: "Diligence", bhumi: 4 },
    { number: 5, sanskrit: "Dhyāna", name: "Meditation", bhumi: 5 },
    { number: 6, sanskrit: "Prajñā", name: "Wisdom", bhumi: 6 },
    { number: 7, sanskrit: "Upāya", name: "Skillful Means", bhumi: 7, description: "The ability to adapt teachings and methods to suit the capacities, inclinations, and circumstances of individual beings. Upāya arises from deep compassion united with wisdom." },
    { number: 8, sanskrit: "Praṇidhāna", name: "Aspiration/Vow", bhumi: 8, description: "The power of vast aspirations and vows to benefit all beings. The bodhisattva's vows shape the direction of their activity across lifetimes, functioning as the unwavering compass of their path." },
    { number: 9, sanskrit: "Bala", name: "Spiritual Power", bhumi: 9, description: "The ten powers and strengths that enable the bodhisattva to accomplish their aims. Includes the power of faith, diligence, mindfulness, concentration, and wisdom in their perfected forms." },
    { number: 10, sanskrit: "Jñāna", name: "Primordial Wisdom", bhumi: 10, description: "The ultimate wisdom that directly knows all phenomena. This transcends the analytical wisdom of prajñā and represents the omniscient awareness of buddhahood itself." },
  ],
};
