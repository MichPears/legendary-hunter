import { mysticTribute, mysticTributeRecipes } from "./mysticTribute";
import {
  giftOfDesertMastery,
  giftOfDesertMasteryBaseMats,
} from "./giftOfDesertMastery";
import {
  ballOfDarkEnergy,
  bloodstoneShard,
  funeraryIncense,
  giftOfComplexEmotions,
  giftOfPatience,
  giftOfTheDesolation,
  giftOfTheHighlands,
  giftOfTheOasis,
  giftOfTheRiverlands,
  hatefulSworl,
  legendaryInsight,
  mysticClover,
  mysticCoin,
  spiritOfTheJackal,
  spiritOfTheRaptor,
  spiritOfTheSkimmer,
  spiritOfTheSpringer,
  t3trophies,
  t4trophies,
  t5trophies,
  t6trophies,
} from "./rawMaterials";

// ACHIEVS //

export const coalescenceAchievs = [
  {
    name: "Coalescence I: Unbridled",
    id: 4035,
    link: "https://wiki.guildwars2.com/wiki/Coalescence_I:_Unbridled",
    image: "legendary-achiev",
    notes:
      "Gather specific items from raid bosses, fuse them in the Mystic Forge and travel across the Crystal Desert in search for places to meditate.",
  },
  {
    name: "Coalescence II: The Gift",
    id: 4412,
    link: "https://wiki.guildwars2.com/wiki/Coalescence_II:_The_Gift",
    image: "legendary-achiev",
    notes:
      "Purchase an Alembic Apparatus from Glenna after defeating any raid boss in Mythwright Gambit, and travel across the world to complete the collection. 'Empty' steps must be completed before their respective 'Filled' steps.",
  },
  {
    name: "Coalescence III: Culmination",
    id: 4805,
    link: "https://wiki.guildwars2.com/wiki/Coalescence_III:_Culmination",
    image: "legendary-achiev",
    notes:
      "Defeat all bosses in the Key of Ahdashim raid, recover your Meditation Logbook and Travel to the Sunspear Sanctuary to interact with the Stange Energy.",
  },
];
// RECIPES //
export const coalescenceRecipes = [...mysticTributeRecipes];

//RAW MATS//
//array of ids

export const giftOfCompassionBaseMats = [
  ...giftOfDesertMasteryBaseMats,
  71994,
  88909,
  70,
];

export const coalescenceMats = [
  //MYSTIC TRIBUTE
  //bloods//
  {
    id: t3trophies.blood.id,
    name: t3trophies.blood.name,
    rarity: t3trophies.blood.rarity,
    image: t3trophies.blood.image,
    link: t3trophies.blood.link,
    quantity: 100,
  },
  {
    id: t4trophies.blood.id,
    name: t4trophies.blood.name,
    rarity: t4trophies.blood.rarity,
    image: t4trophies.blood.image,
    link: t4trophies.blood.link,
    quantity: 100,
  },
  {
    id: t5trophies.blood.id,
    name: t5trophies.blood.name,
    rarity: t5trophies.blood.rarity,
    image: t5trophies.blood.image,
    link: t5trophies.blood.link,
    quantity: 500,
  },
  {
    id: t6trophies.blood.id,
    name: t6trophies.blood.name,
    rarity: t6trophies.blood.rarity,
    image: t6trophies.blood.image,
    link: t6trophies.blood.link,
    quantity: 200,
  },
  //venoms//
  {
    id: t3trophies.venom.id,
    name: t3trophies.venom.name,
    rarity: t3trophies.venom.rarity,
    image: t3trophies.venom.image,
    link: t3trophies.venom.link,
    quantity: 100,
  },
  {
    id: t4trophies.venom.id,
    name: t4trophies.venom.name,
    rarity: t4trophies.venom.rarity,
    image: t4trophies.venom.image,
    link: t4trophies.venom.link,
    quantity: 100,
  },
  {
    id: t5trophies.venom.id,
    name: t5trophies.venom.name,
    rarity: t5trophies.venom.rarity,
    image: t5trophies.venom.image,
    link: t5trophies.venom.link,
    quantity: 500,
  },
  {
    id: t6trophies.venom.id,
    name: t6trophies.venom.name,
    rarity: t6trophies.venom.rarity,
    image: t6trophies.venom.image,
    link: t6trophies.venom.link,
    quantity: 200,
  },
  //totems//
  {
    id: t3trophies.totem.id,
    name: t3trophies.totem.name,
    rarity: t3trophies.totem.rarity,
    image: t3trophies.totem.image,
    link: t3trophies.totem.link,
    quantity: 100,
  },
  {
    id: t4trophies.totem.id,
    name: t4trophies.totem.name,
    rarity: t4trophies.totem.rarity,
    image: t4trophies.totem.image,
    link: t4trophies.totem.link,
    quantity: 100,
  },
  {
    id: t5trophies.totem.id,
    name: t5trophies.totem.name,
    rarity: t5trophies.totem.rarity,
    image: t5trophies.totem.image,
    link: t5trophies.totem.link,
    quantity: 500,
  },
  {
    id: t6trophies.totem.id,
    name: t6trophies.totem.name,
    rarity: t6trophies.totem.rarity,
    image: t6trophies.totem.image,
    link: t6trophies.totem.link,
    quantity: 200,
  },
  //dusts//
  {
    id: t3trophies.dust.id,
    name: t3trophies.dust.name,
    rarity: t3trophies.dust.rarity,
    image: t3trophies.dust.image,
    link: t3trophies.dust.link,
    quantity: 100,
  },
  {
    id: t4trophies.dust.id,
    name: t4trophies.dust.name,
    rarity: t4trophies.dust.rarity,
    image: t4trophies.dust.image,
    link: t4trophies.dust.link,
    quantity: 100,
  },
  {
    id: t5trophies.dust.id,
    name: t5trophies.dust.name,
    rarity: t5trophies.dust.rarity,
    image: t5trophies.dust.image,
    link: t5trophies.dust.link,
    quantity: 500,
  },
  {
    id: t6trophies.dust.id,
    name: t6trophies.dust.name,
    rarity: t6trophies.dust.rarity,
    image: t6trophies.dust.image,
    link: t6trophies.dust.link,
    quantity: 200,
  },
  //claws//
  {
    id: t3trophies.claw.id,
    name: t3trophies.claw.name,
    rarity: t3trophies.claw.rarity,
    image: t3trophies.claw.image,
    link: t3trophies.claw.link,
    quantity: 100,
  },
  {
    id: t4trophies.claw.id,
    name: t4trophies.claw.name,
    rarity: t4trophies.claw.rarity,
    image: t4trophies.claw.image,
    link: t4trophies.claw.link,
    quantity: 100,
  },
  {
    id: t5trophies.claw.id,
    name: t5trophies.claw.name,
    rarity: t5trophies.claw.rarity,
    image: t5trophies.claw.image,
    link: t5trophies.claw.link,
    quantity: 500,
  },
  {
    id: t6trophies.claw.id,
    name: t6trophies.claw.name,
    rarity: t6trophies.claw.rarity,
    image: t6trophies.claw.image,
    link: t6trophies.claw.link,
    quantity: 200,
  },
  //scales//
  {
    id: t3trophies.scale.id,
    name: t3trophies.scale.name,
    rarity: t3trophies.scale.rarity,
    image: t3trophies.scale.image,
    link: t3trophies.scale.link,
    quantity: 100,
  },
  {
    id: t4trophies.scale.id,
    name: t4trophies.scale.name,
    rarity: t4trophies.scale.rarity,
    image: t4trophies.scale.image,
    link: t4trophies.scale.link,
    quantity: 100,
  },
  {
    id: t5trophies.scale.id,
    name: t5trophies.scale.name,
    rarity: t5trophies.scale.rarity,
    image: t5trophies.scale.image,
    link: t5trophies.scale.link,
    quantity: 500,
  },
  {
    id: t6trophies.scale.id,
    name: t6trophies.scale.name,
    rarity: t6trophies.scale.rarity,
    image: t6trophies.scale.image,
    link: t6trophies.scale.link,
    quantity: 200,
  },
  //bones//
  {
    id: t3trophies.bone.id,
    name: t3trophies.bone.name,
    rarity: t3trophies.bone.rarity,
    image: t3trophies.bone.image,
    link: t3trophies.bone.link,
    quantity: 100,
  },
  {
    id: t4trophies.bone.id,
    name: t4trophies.bone.name,
    rarity: t4trophies.bone.rarity,
    image: t4trophies.bone.image,
    link: t4trophies.bone.link,
    quantity: 100,
  },
  {
    id: t5trophies.bone.id,
    name: t5trophies.bone.name,
    rarity: t5trophies.bone.rarity,
    image: t5trophies.bone.image,
    link: t5trophies.bone.link,
    quantity: 500,
  },
  {
    id: t6trophies.bone.id,
    name: t6trophies.bone.name,
    rarity: t6trophies.bone.rarity,
    image: t6trophies.bone.image,
    link: t6trophies.bone.link,
    quantity: 200,
  },
  //fang//
  {
    id: t3trophies.fang.id,
    name: t3trophies.fang.name,
    rarity: t3trophies.fang.rarity,
    image: t3trophies.fang.image,
    link: t3trophies.fang.link,
    quantity: 100,
  },
  {
    id: t4trophies.fang.id,
    name: t4trophies.fang.name,
    rarity: t4trophies.fang.rarity,
    image: t4trophies.fang.image,
    link: t4trophies.fang.link,
    quantity: 100,
  },
  {
    id: t5trophies.fang.id,
    name: t5trophies.fang.name,
    rarity: t5trophies.fang.rarity,
    image: t5trophies.fang.image,
    link: t5trophies.fang.link,
    quantity: 500,
  },
  {
    id: t6trophies.fang.id,
    name: t6trophies.fang.name,
    rarity: t6trophies.fang.rarity,
    image: t6trophies.fang.image,
    link: t6trophies.fang.link,
    quantity: 200,
  },
  //mystic clovers
  {
    id: mysticClover.id,
    name: mysticClover.name,
    rarity: mysticClover.rarity,
    image: mysticClover.image,
    link: mysticClover.link,
    quantity: 77,
  },
  //mystic coins
  {
    id: mysticCoin.id,
    name: mysticCoin.name,
    rarity: mysticCoin.rarity,
    image: mysticCoin.image,
    link: mysticCoin.link,
    quantity: 250,
  },
  //GIFT OF COMPASSION
  //gift of the desert
  {
    id: giftOfTheOasis.id,
    name: giftOfTheOasis.name,
    rarity: giftOfTheOasis.rarity,
    image: giftOfTheOasis.image,
    link: giftOfTheOasis.link,
    quantity: 1,
  },
  {
    id: giftOfTheHighlands.id,
    name: giftOfTheHighlands.name,
    rarity: giftOfTheHighlands.rarity,
    image: giftOfTheHighlands.image,
    link: giftOfTheHighlands.link,
    quantity: 1,
  },
  {
    id: giftOfTheRiverlands.id,
    name: giftOfTheRiverlands.name,
    rarity: giftOfTheRiverlands.rarity,
    image: giftOfTheRiverlands.image,
    link: giftOfTheRiverlands.link,
    quantity: 1,
  },
  {
    id: giftOfTheDesolation.id,
    name: giftOfTheDesolation.name,
    rarity: giftOfTheDesolation.rarity,
    image: giftOfTheDesolation.image,
    link: giftOfTheDesolation.link,
    quantity: 1,
  },
  //gift of the rider
  {
    id: spiritOfTheRaptor.id,
    name: spiritOfTheRaptor.name,
    rarity: spiritOfTheRaptor.rarity,
    image: spiritOfTheRaptor.image,
    link: spiritOfTheRaptor.link,
    quantity: 1,
  },
  {
    id: spiritOfTheSpringer.id,
    name: spiritOfTheSpringer.name,
    rarity: spiritOfTheSpringer.rarity,
    image: spiritOfTheSpringer.image,
    link: spiritOfTheSpringer.link,
    quantity: 1,
  },
  {
    id: spiritOfTheSkimmer.id,
    name: spiritOfTheSkimmer.name,
    rarity: spiritOfTheSkimmer.rarity,
    image: spiritOfTheSkimmer.image,
    link: spiritOfTheSkimmer.link,
    quantity: 1,
  },
  {
    id: spiritOfTheJackal.id,
    name: spiritOfTheJackal.name,
    rarity: spiritOfTheJackal.rarity,
    image: spiritOfTheJackal.image,
    link: spiritOfTheJackal.link,
    quantity: 1,
  },
  //
  {
    id: bloodstoneShard.id,
    name: bloodstoneShard.name,
    rarity: bloodstoneShard.rarity,
    image: bloodstoneShard.image,
    link: bloodstoneShard.link,
    quantity: 1,
  },
  {
    id: funeraryIncense.id,
    name: funeraryIncense.name,
    rarity: funeraryIncense.rarity,
    image: funeraryIncense.image,
    link: funeraryIncense.link,
    quantity: 250,
  },
  {
    id: ballOfDarkEnergy.id,
    name: ballOfDarkEnergy.name,
    rarity: ballOfDarkEnergy.rarity,
    image: ballOfDarkEnergy.image,
    link: ballOfDarkEnergy.link,
    quantity: 6,
  },
  {
    id: giftOfComplexEmotions.id,
    name: giftOfComplexEmotions.name,
    rarity: giftOfComplexEmotions.rarity,
    image: giftOfComplexEmotions.image,
    link: giftOfComplexEmotions.link,
    quantity: 1,
  },
  {
    id: legendaryInsight.id,
    name: legendaryInsight.name,
    rarity: legendaryInsight.rarity,
    image: legendaryInsight.image,
    link: legendaryInsight.link,
    quantity: 150,
  },
  //
  {
    id: giftOfPatience.id,
    name: giftOfPatience.name,
    rarity: giftOfPatience.rarity,
    image: giftOfPatience.image,
    link: giftOfPatience.link,
    quantity: 1,
  },
  {
    id: hatefulSworl.id,
    name: hatefulSworl.name,
    rarity: hatefulSworl.rarity,
    image: hatefulSworl.image,
    link: hatefulSworl.link,
    quantity: 1,
  },
];

// COMPONENTS-DISPLAY //
const giftOfCompassion = {
  name: "Gift of Compassion",
  image: "gift-of-sentience",
  rarity: "legendary",
  quantity: 1,
  obtained: "~ Created at Mystic Forge",
  expand: true,
  components: [
    giftOfDesertMastery,
    {
      name: ballOfDarkEnergy.name,
      image: ballOfDarkEnergy.image,
      rarity: ballOfDarkEnergy.rarity,
      quantity: 6,
      obtained: ballOfDarkEnergy.obtained,
      expand: false,
    },
    {
      name: giftOfComplexEmotions.name,
      image: giftOfComplexEmotions.image,
      rarity: giftOfComplexEmotions.rarity,
      quantity: 1,
      obtained: giftOfComplexEmotions.obtained,
      expand: false,
    },
    {
      name: legendaryInsight.name,
      image: legendaryInsight.image,
      rarity: legendaryInsight.rarity,
      obtained: legendaryInsight.obtained,
      quantity: 150,
      expand: false,
    },
  ],
};
//DISPLAY
const coalescenceComponents = [
  mysticTribute,
  giftOfCompassion,
  giftOfPatience,
  hatefulSworl,
];
const coalescence = {
  name: "Coalescence",
  requiredAchievs: coalescenceAchievs,
  requiredRecipes: coalescenceRecipes,
  components: coalescenceComponents,
};

export default coalescence;
