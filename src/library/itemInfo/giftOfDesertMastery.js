import {
  bloodstoneShard,
  funeraryIncense,
  giftOfTheDesolation,
  giftOfTheHighlands,
  giftOfTheOasis,
  giftOfTheRiverlands,
  spiritOfTheJackal,
  spiritOfTheRaptor,
  spiritOfTheSkimmer,
  spiritOfTheSpringer,
} from "./rawMaterials";

export const giftOfTheDesertBaseMats = [
  giftOfTheOasis.id,
  giftOfTheHighlands.id,
  giftOfTheRiverlands.id,
  giftOfTheDesolation.id,
];

export const giftOfTheRiderBaseMats = [
  spiritOfTheRaptor.id,
  spiritOfTheSpringer.id,
  spiritOfTheSkimmer.id,
  spiritOfTheJackal.id,
];

export const giftOfDesertMasteryBaseMats = [
  ...giftOfTheDesertBaseMats,
  ...giftOfTheRiderBaseMats,
  bloodstoneShard.id,
  funeraryIncense.id,
];

export const giftOfDesertMastery = {
  name: "Gift of Desert Mastery",
  image: "gift-of-desert-mastery",
  rarity: "legendary",
  obtained: "Created at Mystic Forge",
  quantity: 1,
  expand: true,
  components: [
    {
      name: "Gift of the Desert",
      image: "gift-of-the-desert",
      rarity: "legendary",
      obtained: "Created at Mystic Forge",
      quantity: 1,
      expand: true,
      components: [
        {
          name: giftOfTheOasis.name,
          image: giftOfTheOasis.image,
          rarity: giftOfTheOasis.rarity,
          obtained: giftOfTheOasis.obtained,
          quantity: 1,
          expand: giftOfTheOasis.expand,
        },
        {
          name: giftOfTheHighlands.name,
          image: giftOfTheHighlands.image,
          rarity: giftOfTheHighlands.rarity,
          obtained: giftOfTheHighlands.obtained,
          quantity: 1,
          expand: giftOfTheHighlands.expand,
        },
        {
          name: giftOfTheRiverlands.name,
          image: giftOfTheRiverlands.image,
          rarity: giftOfTheRiverlands.rarity,
          obtained: giftOfTheRiverlands.obtained,
          quantity: 1,
          expand: giftOfTheRiverlands.expand,
        },
        {
          name: giftOfTheDesolation.name,
          image: giftOfTheDesolation.image,
          rarity: giftOfTheDesolation.rarity,
          obtained: giftOfTheDesolation.obtained,
          quantity: 1,
          expand: giftOfTheDesolation.expand,
        },
      ],
    },
    {
      name: "Gift of the Rider",
      image: "gift-of-the-rider",
      rarity: "exotic",
      obtained: "Created at Mystic Forge",
      quantity: 1,
      expand: true,
      components: [
        {
          name: spiritOfTheRaptor.name,
          image: spiritOfTheRaptor.image,
          rarity: spiritOfTheRaptor.rarity,
          obtained: spiritOfTheRaptor.obtained,
          quantity: 1,
          expand: spiritOfTheRaptor.expand,
        },
        {
          name: spiritOfTheSpringer.name,
          image: spiritOfTheSpringer.image,
          rarity: spiritOfTheSpringer.rarity,
          obtained: spiritOfTheSpringer.obtained,
          quantity: 1,
          expand: spiritOfTheSpringer.expand,
        },
        {
          name: spiritOfTheSkimmer.name,
          image: spiritOfTheSkimmer.image,
          rarity: spiritOfTheSkimmer.rarity,
          obtained: spiritOfTheSkimmer.obtained,
          quantity: 1,
          expand: spiritOfTheSkimmer.expand,
        },
        {
          name: spiritOfTheJackal.name,
          image: spiritOfTheJackal.image,
          rarity: spiritOfTheJackal.rarity,
          obtained: spiritOfTheJackal.obtained,
          quantity: 1,
          expand: spiritOfTheJackal.expand,
        },
      ],
    },
    {
      name: bloodstoneShard.name,
      image: bloodstoneShard.image,
      rarity: bloodstoneShard.rarity,
      obtained: bloodstoneShard.obtained,
      quantity: 1,
      expand: bloodstoneShard.expand,
    },
    {
      name: funeraryIncense.name,
      image: funeraryIncense.image,
      rarity: funeraryIncense.rarity,
      obtained: funeraryIncense.obtained,
      baseMats: funeraryIncense.baseMats,
      quantity: 250,
      expand: funeraryIncense.expand,
    },
  ],
};
