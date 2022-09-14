import React, { useState } from "react";
import axios from "axios";
import { IoAddCircleSharp } from "react-icons/io5";
import { IoMdRefreshCircle } from "react-icons/io";

export default function APIInput({
  setAllItems,
  setAllAchievs,
  setAllRecipes,
  renderGeneral,
  setRenderGeneral,
  setRenderAchievs,
  setRenderRecipes,
  setRenderMats,
  setErrorMessage,
  setLegArmory,
}) {
  const [apiKey, setApiKey] = useState("");

  const fetchLegendaryArmory = async () => {
    try {
      const apiLegArmor = await axios.get(
        `https://api.guildwars2.com/v2/account/legendaryarmory?access_token=${apiKey}`
      );
      return apiLegArmor.data;
    } catch (e) {
      setRenderGeneral(false);
      setErrorMessage("Invalid API: cannot access legendary armory.");
      console.log("invalid api-leg armor");
    }
  };

  const fetchAchievs = async () => {
    try {
      const apiAchievs = await axios.get(
        `https://api.guildwars2.com/v2/account/achievements?access_token=${apiKey}`
      );
      return apiAchievs.data;
    } catch (e) {
      setRenderGeneral(false);
      setErrorMessage("Invalid API: cannot access achievements.");
      console.log("invalid api-achievs");
    }
  };
  const fetchRecipes = async () => {
    try {
      const apiRecipes = await axios.get(
        `https://api.guildwars2.com/v2/account/recipes?access_token=${apiKey}`
      );
      return apiRecipes.data;
    } catch (e) {
      setRenderGeneral(false);
      setErrorMessage("Invalid API: cannot access recipes.");
      console.log("invalid api-recipes");
    }
  };

  const fetchBank = async () => {
    try {
      const apiBank = await axios.get(
        `https://api.guildwars2.com/v2/account/bank?access_token=${apiKey}`
      );
      return apiBank.data;
    } catch (e) {
      setRenderGeneral(false);
      setErrorMessage("Invalid API: cannot access bank.");
      console.log("invalid api-bank");
    }
  };

  const fetchMaterialStorage = async () => {
    try {
      const apiMats = await axios.get(
        `https://api.guildwars2.com/v2/account/materials?access_token=${apiKey}`
      );
      return apiMats.data;
    } catch (e) {
      setRenderGeneral(false);
      setErrorMessage("Invalid API: cannot access material storage.");
      console.log("invalid api-mats");
    }
  };

  const fetchSharedStorage = async () => {
    try {
      const apiSharedInv = await axios.get(
        `https://api.guildwars2.com/v2/account/inventory?access_token=${apiKey}`
      );
      return apiSharedInv.data;
    } catch (e) {
      setRenderGeneral(false);
      setErrorMessage("Invalid API: cannot access shared inventory.");
      console.log("invalid api-shared");
    }
  };

  const fetchWallet = async () => {
    try {
      const apiWallet = await axios.get(
        `https://api.guildwars2.com/v2/account/wallet?access_token=${apiKey}`
      );
      return apiWallet.data;
    } catch (e) {
      setRenderGeneral(false);
      setErrorMessage("Invalid API: cannot access wallet.");
      console.log("invalid api-wallet");
    }
  };

  const fetchCharacters = async () => {
    try {
      const apiChars = await axios.get(
        `https://api.guildwars2.com/v2/characters?access_token=${apiKey}`
      );
      return apiChars.data;
    } catch (e) {
      setRenderGeneral(false);
      setErrorMessage("Invalid API: cannot access characters.");
      console.log("invalid api-characters");
    }
  };

  const fetchCharacterInventoryBags = async (character) => {
    try {
      const apiCharInvBags =
        await axios.get(`  https://api.guildwars2.com/v2/characters/${character}/inventory?access_token=${apiKey}
      `);
      return apiCharInvBags.data;
      // you get an array of bags //
    } catch {
      setRenderGeneral(false);
      setErrorMessage("Invalid API: cannot access character inventory.");
      console.log("invalid api- character inv");
    }
  };

  //this func arranges all inventories from all characters and returns one array with all total items//
  const getAllInvItems = (arrayOfBagArrays) => {
    let allBags = [];
    let arrOfInvs = [];
    let allInvSlots = [];
    arrayOfBagArrays.map((bagArr) => {
      bagArr.map((bag) => allBags.push(bag));
    });
    allBags = allBags.filter((bag) => bag !== null);
    allBags.map((bag) => arrOfInvs.push(bag.inventory));
    arrOfInvs.map((inv) => inv.map((item) => allInvSlots.push(item)));
    return allInvSlots.filter((slot) => slot !== null);
  };

  const groupCharacterBags = (
    characters,
    bankMats,
    storageMats,
    sharedMats,
    walletMats
  ) => {
    let characterInvBags = [];

    characters.map(async (character) => {
      const res = await fetchCharacterInventoryBags(character);
      characterInvBags.push(res.bags);
      if (characters.length === characterInvBags.length) {
        const allInvItems = getAllInvItems(characterInvBags);
        setAllItems([
          ...allInvItems,
          ...bankMats,
          ...storageMats,
          ...sharedMats,
          ...walletMats,
        ]);
        return allInvItems;
      }
    });
  };

  const submitAPI = async (e) => {
    e.preventDefault();
    setRenderGeneral(true);
    const apiBank = await fetchBank();
    const bankMats = apiBank.filter((slot) => slot !== null);
    const storageMats = await fetchMaterialStorage();
    const apisharedMats = await fetchSharedStorage();
    const apiwallet = await fetchWallet();
    const walletMats = apiwallet.map((currency) => {
      return { id: currency.id, count: currency.value };
    });
    const sharedMats = apisharedMats.filter((slot) => slot !== null);
    const characters = await fetchCharacters();
    await groupCharacterBags(
      characters,
      bankMats,
      storageMats,
      sharedMats,
      walletMats
    );
    const achievs = await fetchAchievs();
    setAllAchievs(achievs);
    const recipes = await fetchRecipes();
    setAllRecipes(recipes);
    const apiArmory = await fetchLegendaryArmory();
    setLegArmory(apiArmory);
  };

  const resetAPI = (e) => {
    e.preventDefault();
    setRenderGeneral(false);
    setAllAchievs([]);
    setAllRecipes([]);
    setAllItems([]);
    setRenderAchievs("loading");
    setRenderRecipes("loading");
    setRenderMats("loading");
    setErrorMessage(false);
  };

  return (
    <div className="api-container">
      <form className="api" onSubmit={(e) => submitAPI(e)}>
        <input
          className="api-input"
          type="text"
          value={apiKey}
          placeholder="Add your API for a personalized list..."
          onChange={(e) => setApiKey(e.target.value)}
          disabled={renderGeneral}
          required={true}
        />
        {!renderGeneral ? (
          <button type="submit">
            <IoAddCircleSharp className="api-btn" />
          </button>
        ) : (
          <button className="api-btn" onClick={(e) => resetAPI(e)}>
            <IoMdRefreshCircle />
          </button>
        )}
      </form>
    </div>
  );
}
