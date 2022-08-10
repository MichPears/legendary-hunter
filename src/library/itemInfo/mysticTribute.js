import { t3trophies, t4trophies, t5trophies, t6trophies } from "./rawMaterials";

const giftOfBlood = {
  name: "Gift of Blood",
  image: "gift-of-blood",
  quantity: 1,
  expand: true,
  components: [
    {
      name: t3trophies.blood.name,
      image: t3trophies.blood.image,
      quantity: 50,
      expand: t3trophies.blood.expand,
    },
    {
      name: t4trophies.blood.name,
      image: t4trophies.blood.image,
      quantity: 50,
      expand: t4trophies.blood.expand,
    },
    {
      name: t5trophies.blood.name,
      image: t5trophies.blood.image,
      quantity: 250,
      expand: t5trophies.blood.expand,
    },
    {
      name: t6trophies.blood.name,
      image: t6trophies.blood.image,
      quantity: 100,
      expand: t6trophies.blood.expand,
    },
  ],
};

// mystic tribute //
export const mysticTribute = {
  name: "Mystic Tribute",
  image: "gift-of-fortune",
  quantity: 1,
  expand: true,
  components: [
    {
      name: "Gift of Condensed Magic",
      image: "gift-of-condensed-magic",
      quantity: 2,
      expand: true,
      components: [
        giftOfBlood,
        {
          name: "Gift of Venom",
          image: "gift-of-venom",
          quantity: 2,
          expand: false,
        },
        {
          name: "Gift of Totems",
          image: "gift-of-totems",
          quantity: 2,
          expand: false,
        },
        {
          name: "Gift of Dust",
          image: "gift-of-dust",
          quantity: 2,
          expand: false,
        },
      ],
    },
    {
      name: "Gift of Condensed Might",
      image: "gift-of-condensed-might",
      quantity: 2,
      expand: true,
      components: [
        {
          name: "Gift of Claws",
          image: "gift-of-claws",
          quantity: 2,
          expand: false,
        },
        {
          name: "Gift of Scales",
          image: "gift-of-scales",
          quantity: 2,
          expand: false,
        },
        {
          name: "Gift of Bones",
          image: "gift-of-bones",
          quantity: 2,
          expand: false,
        },
        {
          name: "Gift of Fangs",
          image: "gift-of-fangs",
          quantity: 2,
          expand: false,
        },
      ],
    },
    {
      name: "Mystic Clover",
      image: "mystic-clover",
      quantity: 77,
      expand: false,
    },
    { name: "Mystic Coin", image: "mystic-coin", expand: false },
  ],
};

//recipes//
export const mysticTributeRecipes = [
  {
    name: "Gift of Blood",
    vendor: "Miyani at Lion's Arch",
    cost: "10g",
    image: "legendary-recipe",
  },
  {
    name: "Gift of Venom",
    vendor: "Miyani at Lion's Arch",
    cost: "10g",
    image: "legendary-recipe",
  },
  {
    name: "Gift of Totems",
    vendor: "Miyani at Lion's Arch",
    cost: "10g",
    image: "legendary-recipe",
  },
  {
    name: "Gift of Dust",
    vendor: "Miyani at Lion's Arch",
    cost: "10g",
    image: "legendary-recipe",
  },
  {
    name: "Gift of Claws",
    vendor: "Miyani at Lion's Arch",
    cost: "10g",
    image: "legendary-recipe",
  },
  {
    name: "Gift of Scales",
    vendor: "Miyani at Lion's Arch",
    cost: "10g",
    image: "legendary-recipe",
  },
  {
    name: "Gift of Bones",
    vendor: "Miyani at Lion's Arch",
    cost: "10g",
    image: "legendary-recipe",
  },
  {
    name: "Gift of Fangs",
    vendor: "Miyani at Lion's Arch",
    cost: "10g",
    image: "legendary-recipe",
  },
];
