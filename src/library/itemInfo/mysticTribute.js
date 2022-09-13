import {
  mysticClover,
  mysticCoin,
  t3trophies,
  t4trophies,
  t5trophies,
  t6trophies,
} from "./rawMaterials";

//arrays of ids//
export const giftOfBloodBaseMats = [
  t3trophies.blood.id,
  t4trophies.blood.id,
  t5trophies.blood.id,
  t6trophies.blood.id,
];
export const giftOfVenomBaseMats = [
  t3trophies.venom.id,
  t4trophies.venom.id,
  t5trophies.venom.id,
  t6trophies.venom.id,
];
export const giftOfTotemsBaseMats = [
  t3trophies.totem.id,
  t4trophies.totem.id,
  t5trophies.totem.id,
  t6trophies.totem.id,
];
export const giftOfDustBaseMats = [
  t3trophies.dust.id,
  t4trophies.dust.id,
  t5trophies.dust.id,
  t6trophies.dust.id,
];

export const giftOfCondensedMagicBaseMats = [
  ...giftOfBloodBaseMats,
  ...giftOfVenomBaseMats,
  ...giftOfTotemsBaseMats,
  ...giftOfDustBaseMats,
];

export const giftOfClawsBaseMats = [
  t3trophies.claw.id,
  t4trophies.claw.id,
  t5trophies.claw.id,
  t6trophies.claw.id,
];
export const giftOfScalesBaseMats = [
  t3trophies.scale.id,
  t4trophies.scale.id,
  t5trophies.scale.id,
  t6trophies.scale.id,
];
export const giftOfBonesBaseMats = [
  t3trophies.bone.id,
  t4trophies.bone.id,
  t5trophies.bone.id,
  t6trophies.bone.id,
];
export const giftOfFangsBaseMats = [
  t3trophies.fang.id,
  t4trophies.fang.id,
  t5trophies.fang.id,
  t6trophies.fang.id,
];

export const giftOfCondensedMightBaseMats = [
  ...giftOfClawsBaseMats,
  ...giftOfScalesBaseMats,
  ...giftOfBonesBaseMats,
  ...giftOfFangsBaseMats,
];
export const mysticTributeBaseMats = [
  ...giftOfCondensedMagicBaseMats,
  ...giftOfCondensedMightBaseMats,
  19675,
  19976,
];

//blood//
const giftOfBlood = {
  name: "Gift of Blood",
  image: "gift-of-blood",
  rarity: "exotic",
  quantity: 1,
  expand: true,
  obtained: "~ Crafted with Artificer, Huntsman, or Weaponsmith",
  components: [
    {
      name: t3trophies.blood.name,
      image: t3trophies.blood.image,
      rarity: t3trophies.blood.rarity,
      quantity: 50,
      expand: t3trophies.blood.expand,
    },
    {
      name: t4trophies.blood.name,
      image: t4trophies.blood.image,
      rarity: t4trophies.blood.rarity,
      quantity: 50,
      expand: t4trophies.blood.expand,
    },
    {
      name: t5trophies.blood.name,
      image: t5trophies.blood.image,
      rarity: t5trophies.blood.rarity,
      quantity: 250,
      expand: t5trophies.blood.expand,
    },
    {
      name: t6trophies.blood.name,
      image: t6trophies.blood.image,
      rarity: t6trophies.blood.rarity,
      quantity: 100,
      expand: t6trophies.blood.expand,
    },
  ],
};
//venom//
const giftOfVenom = {
  name: "Gift of Venom",
  image: "gift-of-venom",
  rarity: "exotic",
  obtained: "~ Crafted with Artificer, Huntsman, or Weaponsmith",
  quantity: 1,
  expand: true,
  components: [
    {
      name: t3trophies.venom.name,
      image: t3trophies.venom.image,
      rarity: t3trophies.venom.rarity,
      quantity: 50,
      expand: t3trophies.venom.expand,
    },
    {
      name: t4trophies.venom.name,
      image: t4trophies.venom.image,
      rarity: t4trophies.venom.rarity,
      quantity: 50,
      expand: t4trophies.venom.expand,
    },
    {
      name: t5trophies.venom.name,
      image: t5trophies.venom.image,
      rarity: t5trophies.venom.rarity,
      quantity: 250,
      expand: t5trophies.venom.expand,
    },
    {
      name: t6trophies.venom.name,
      image: t6trophies.venom.image,
      rarity: t6trophies.venom.rarity,
      quantity: 100,
      expand: t6trophies.venom.expand,
    },
  ],
};
//totems//
const giftOfTotems = {
  name: "Gift of Totems",
  image: "gift-of-totems",
  rarity: "exotic",
  obtained: "~ Crafted with Artificer, Huntsman, or Weaponsmith",
  quantity: 1,
  expand: true,
  components: [
    {
      name: t3trophies.totem.name,
      image: t3trophies.totem.image,
      rarity: t3trophies.totem.rarity,
      quantity: 50,
      expand: t3trophies.totem.expand,
    },
    {
      name: t4trophies.totem.name,
      image: t4trophies.totem.image,
      rarity: t3trophies.totem.rarity,
      quantity: 50,
      expand: t4trophies.totem.expand,
    },
    {
      name: t5trophies.totem.name,
      image: t5trophies.totem.image,
      rarity: t5trophies.totem.rarity,
      quantity: 250,
      expand: t5trophies.totem.expand,
    },
    {
      name: t6trophies.totem.name,
      image: t6trophies.totem.image,
      rarity: t6trophies.totem.rarity,
      quantity: 100,
      expand: t6trophies.totem.expand,
    },
  ],
};
//dust//
const giftOfDust = {
  name: "Gift of Dust",
  image: "gift-of-dust",
  rarity: "exotic",
  obtained: "~ Crafted with Artificer, Huntsman, or Weaponsmith",
  quantity: 1,
  expand: true,
  components: [
    {
      name: t3trophies.dust.name,
      image: t3trophies.dust.image,
      rarity: t3trophies.dust.rarity,
      quantity: 50,
      expand: t3trophies.dust.expand,
    },
    {
      name: t4trophies.dust.name,
      image: t4trophies.dust.image,
      rarity: t4trophies.dust.rarity,
      quantity: 50,
      expand: t4trophies.dust.expand,
    },
    {
      name: t5trophies.dust.name,
      image: t5trophies.dust.image,
      rarity: t5trophies.dust.rarity,
      quantity: 250,
      expand: t5trophies.dust.expand,
    },
    {
      name: t6trophies.dust.name,
      image: t6trophies.dust.image,
      rarity: t6trophies.dust.rarity,
      quantity: 100,
      expand: t6trophies.dust.expand,
    },
  ],
};
//claws//
const giftOfClaws = {
  name: "Gift of Claws",
  image: "gift-of-claws",
  rarity: "exotic",
  obtained: "~ Crafted with Artificer, Huntsman, or Weaponsmith",
  quantity: 1,
  expand: true,
  components: [
    {
      name: t3trophies.claw.name,
      image: t3trophies.claw.image,
      rarity: t3trophies.claw.rarity,
      quantity: 50,
      expand: t3trophies.claw.expand,
    },
    {
      name: t4trophies.claw.name,
      image: t4trophies.claw.image,
      rarity: t4trophies.claw.rarity,
      quantity: 50,
      expand: t4trophies.claw.expand,
    },
    {
      name: t5trophies.claw.name,
      image: t5trophies.claw.image,
      rarity: t5trophies.claw.rarity,
      quantity: 250,
      expand: t5trophies.claw.expand,
    },
    {
      name: t6trophies.claw.name,
      image: t6trophies.claw.image,
      rarity: t6trophies.claw.rarity,
      quantity: 100,
      expand: t6trophies.claw.expand,
    },
  ],
};
//scales//
const giftOfScales = {
  name: "Gift of Scales",
  image: "gift-of-scales",
  rarity: "exotic",
  obtained: "~ Crafted with Artificer, Huntsman, or Weaponsmith",
  quantity: 1,
  expand: true,
  components: [
    {
      name: t3trophies.scale.name,
      image: t3trophies.scale.image,
      rarity: t3trophies.scale.rarity,
      quantity: 50,
      expand: t3trophies.scale.expand,
    },
    {
      name: t4trophies.scale.name,
      image: t4trophies.scale.image,
      rarity: t4trophies.scale.rarity,
      quantity: 50,
      expand: t4trophies.scale.expand,
    },
    {
      name: t5trophies.scale.name,
      image: t5trophies.scale.image,
      rarity: t5trophies.scale.rarity,
      quantity: 250,
      expand: t5trophies.scale.expand,
    },
    {
      name: t6trophies.scale.name,
      image: t6trophies.scale.image,
      rarity: t6trophies.scale.rarity,
      quantity: 100,
      expand: t6trophies.scale.expand,
    },
  ],
};
//bones//
const giftOfBones = {
  name: "Gift of Bones",
  image: "gift-of-bones",
  rarity: "exotic",
  obtained: "~ Crafted with Artificer, Huntsman, or Weaponsmith",
  quantity: 1,
  expand: true,
  components: [
    {
      name: t3trophies.bone.name,
      image: t3trophies.bone.image,
      rarity: t3trophies.bone.rarity,
      quantity: 50,
      expand: t3trophies.bone.expand,
    },
    {
      name: t4trophies.bone.name,
      image: t4trophies.bone.image,
      rarity: t4trophies.bone.rarity,
      quantity: 50,
      expand: t4trophies.bone.expand,
    },
    {
      name: t5trophies.bone.name,
      image: t5trophies.bone.image,
      rarity: t5trophies.bone.rarity,
      quantity: 250,
      expand: t5trophies.bone.expand,
    },
    {
      name: t6trophies.bone.name,
      image: t6trophies.bone.image,
      rarity: t6trophies.bone.rarity,
      quantity: 100,
      expand: t6trophies.bone.expand,
    },
  ],
};
//fangs//
const giftOfFangs = {
  name: "Gift of Fangs",
  image: "gift-of-fangs",
  rarity: "exotic",
  obtained: "~ Crafted with Artificer, Huntsman, or Weaponsmith",
  quantity: 1,
  expand: true,
  components: [
    {
      name: t3trophies.fang.name,
      image: t3trophies.fang.image,
      rarity: t3trophies.fang.rarity,
      quantity: 50,
      expand: t3trophies.fang.expand,
    },
    {
      name: t4trophies.fang.name,
      image: t4trophies.fang.image,
      rarity: t4trophies.fang.rarity,
      quantity: 50,
      expand: t4trophies.fang.expand,
    },
    {
      name: t5trophies.fang.name,
      image: t5trophies.fang.image,
      rarity: t5trophies.fang.rarity,
      quantity: 250,
      expand: t5trophies.fang.expand,
    },
    {
      name: t6trophies.fang.name,
      image: t6trophies.fang.image,
      rarity: t6trophies.fang.rarity,
      quantity: 100,
      expand: t6trophies.fang.expand,
    },
  ],
};
// mystic tribute //
export const mysticTribute = {
  name: "Mystic Tribute",
  image: "gift-of-fortune",
  rarity: "legendary",
  obtained: "~ Created at Mystic Forge",
  quantity: 1,
  expand: true,
  components: [
    {
      name: "Gift of Condensed Magic",
      image: "gift-of-condensed-magic",
      rarity: "exotic",
      obtained: "~ Created at Mystic Forge",
      quantity: 2,
      expand: true,
      components: [giftOfBlood, giftOfVenom, giftOfTotems, giftOfDust],
    },
    {
      name: "Gift of Condensed Might",
      image: "gift-of-condensed-might",
      rarity: "exotic",
      obtained: "~ Created at Mystic Forge",
      quantity: 2,
      expand: true,
      components: [giftOfClaws, giftOfScales, giftOfBones, giftOfFangs],
    },
    {
      name: mysticClover.name,
      image: mysticClover.image,
      rarity: mysticClover.rarity,
      obtained: mysticClover.obtained,
      quantity: 77,
      expand: mysticClover.expand,
    },
    {
      name: mysticCoin.name,
      image: mysticCoin.image,
      rarity: mysticCoin.rarity,
      obtained: mysticCoin.obtained,
      quantity: 250,
      expand: mysticCoin.expand,
    },
  ],
};

//recipes//
export const mysticTributeRecipes = [
  {
    name: "Gift of Blood",
    id: 11736,
    vendor: "Miyani at Lion's Arch",
    cost: "10g",
    image: "legendary-recipe",
    notes: "Purchased from Miyani at Lion's Arch for 10",
    link: "https://wiki.guildwars2.com/wiki/Recipe:_Gift_of_Blood",
  },
  {
    name: "Gift of Venom",
    id: 11735,
    vendor: "Miyani at Lion's Arch",
    cost: "10g",
    image: "legendary-recipe",
    notes: "Purchased from Miyani at Lion's Arch for 10",
    link: "https://wiki.guildwars2.com/wiki/Recipe:_Gift_of_Venom",
  },
  {
    name: "Gift of Totems",
    id: 11742,
    vendor: "Miyani at Lion's Arch",
    cost: "10g",
    image: "legendary-recipe",
    notes: "Purchased from Miyani at Lion's Arch for 10",
    link: "https://wiki.guildwars2.com/wiki/Recipe:_Gift_of_Totems",
  },
  {
    name: "Gift of Dust",
    id: 11741,
    vendor: "Miyani at Lion's Arch",
    cost: "10g",
    image: "legendary-recipe",
    notes: "Purchased from Miyani at Lion's Arch for 10",
    link: "https://wiki.guildwars2.com/wiki/Recipe:_Gift_of_Dust",
  },
  {
    name: "Gift of Claws",
    id: 11744,
    vendor: "Miyani at Lion's Arch",
    cost: "10g",
    image: "legendary-recipe",
    notes: "Purchased from Miyani at Lion's Arch for 10",
    link: "https://wiki.guildwars2.com/wiki/Recipe:_Gift_of_Claws",
  },
  {
    name: "Gift of Scales",
    id: 11743,
    vendor: "Miyani at Lion's Arch",
    cost: "10g",
    image: "legendary-recipe",
    notes: "Purchased from Miyani at Lion's Arch for 10",
    link: "https://wiki.guildwars2.com/wiki/Recipe:_Gift_of_Scales",
  },
  {
    name: "Gift of Bones",
    id: 11739,
    vendor: "Miyani at Lion's Arch",
    cost: "10g",
    image: "legendary-recipe",
    notes: "Purchased from Miyani at Lion's Arch for 10",
    link: "https://wiki.guildwars2.com/wiki/Recipe:_Gift_of_Bones",
  },
  {
    name: "Gift of Fangs",
    id: 11737,
    vendor: "Miyani at Lion's Arch",
    cost: "10g",
    image: "legendary-recipe",
    notes: "Purchased from Miyani at Lion's Arch for 10",
    link: "https://wiki.guildwars2.com/wiki/Recipe:_Gift_of_Fangs",
  },
];
