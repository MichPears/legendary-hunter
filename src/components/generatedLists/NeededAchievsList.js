import React, { useEffect, useState } from "react";
import { coalescenceAchievs } from "../../library/itemInfo/coalescence";
import { v4 as uuidv4 } from "uuid";
import SmallLiLink from "../lis/SmallLiLink";
import Loading from "../generalComponents/Loading";

export default function NeededAchievsList({
  allAchievs,
  renderAchievs,
  setRenderAchievs,
}) {
  const [neededAchievs, setNeededAchievs] = useState([]);

  //useEffect makes sure achievs display state is not set until allAchievs is changed (it is changed in the APIinput component) - setRenderAchievs was added as dependancy to avoid warnings
  useEffect(() => {
    //this is a check to make sure code doesnt run if achievs are empty (essentially before API is set and fetches are completed)
    if (allAchievs.length !== 0) {
      const coalescenceI = allAchievs.find((achiev) => achiev.id === 4035);
      const coalescenceII = allAchievs.find((achiev) => achiev.id === 4412);
      const coalescenceIII = allAchievs.find((achiev) => achiev.id === 4805);
      //loops through the achievements needed for coalescence and if player has it, returns null so it wont display as "needed" - sets list on display
      setNeededAchievs(
        coalescenceAchievs.map((achiev) => {
          if (coalescenceI) {
            if (achiev.id === 4035) {
              return null;
            }
          }
          if (coalescenceII) {
            if (achiev.id === 4412) {
              return null;
            }
          }
          if (coalescenceIII) {
            if (achiev.id === 4805) {
              return null;
            }
          }
          return achiev;
        })
      );
      setRenderAchievs("display");
    }
  }, [allAchievs, setRenderAchievs]);

  //filters out null achievements for display
  const neededAchievsDisplay = neededAchievs.filter(
    (achiev) => achiev !== null
  );

  return (
    <ul>
      {renderAchievs === "loading" ? (
        <Loading />
      ) : (
        <>
          {neededAchievsDisplay.length === 0 ? (
            <li>Congratulations! You have all required achievements!</li>
          ) : (
            neededAchievsDisplay.map((achiev) => (
              <SmallLiLink
                key={uuidv4()}
                currentComponent={achiev}
                image={achiev.image}
                name={achiev.name}
                link={achiev.link}
              />
            ))
          )}
        </>
      )}
    </ul>
  );
}
