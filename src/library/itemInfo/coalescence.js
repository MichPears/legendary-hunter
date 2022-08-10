import { mysticTribute, mysticTributeRecipes } from "./mysticTribute";
// ACHIEVS //
const coalescenceAchievs = [
  {
    name: "Coalescence I: Unbridled",
    link: "https://wiki.guildwars2.com/wiki/Coalescence_I:_Unbridled",
  },
  {
    name: "Coalescence II: The Gift",
    link: "https://wiki.guildwars2.com/wiki/Coalescence_II:_The_Gift",
  },
  {
    name: "Coalescence III: Culmination",
    link: "https://wiki.guildwars2.com/wiki/Coalescence_III:_Culmination",
  },
];
// RECIPES //
const coalescenceRecipes = [...mysticTributeRecipes];

// COMPONENTS //
const giftOfCompassion = {
  name: "Gift of Compassion",
  image: "gift-of-sentience",
  quantity: 1,
  expand: true,
  components: [
    {
      name: "Gift of Desert Mastery",
      image: "gift-of-desert-mastery",
      quantity: 1,
      expand: true,
      components: [
        {
          name: "Gift of the Desert",
          image: "gift-of-the-desert",
          quantity: 1,
          expand: true,
          components: [
            {
              name: "Gift of the Oasis",
              image: "gift-of-the-oasis",
              quantity: 1,
              expand: false,
            },
            {
              name: "Gift of the Highlands",
              image: "gift-of-the-highlands",
              quantity: 1,
              expand: false,
            },
            {
              name: "Gift of the Riverlands",
              image: "gift-of-the-riverlands",
              quantity: 1,
              expand: false,
            },
            {
              name: "Gift of the Desolation",
              image: "gift-of-the-desolation",
              quantity: 1,
              expand: false,
            },
          ],
        },
      ],
    },
  ],
};
const giftOfPatience = {
  name: "Gift of Patience",
  image: "gift-of-patience",
  expand: false,
};
const hatefulSworl = {
  name: "Hateful Sworl",
  image: "hateful-sworl",
  expand: false,
};

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
