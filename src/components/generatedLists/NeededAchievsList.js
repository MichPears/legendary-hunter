import React, { useEffect, useState } from "react";
import { coalescenceAchievs } from "../../library/itemInfo/coalescence";
import { v4 as uuidv4 } from "uuid";
import SimpleLiLink from "../lis/SimpleLiLink";
import Loading from "../generalComponents/Loading";

export default function NeededAchievsList({
  allAchievs,
  renderAchievs,
  setRenderAchievs,
}) {
  const [neededAchievs, setNeededAchievs] = useState([]);

  useEffect(() => {
    if (allAchievs.length !== 0) {
      const coalescenceI = allAchievs.find((achiev) => achiev.id === 4035);
      const coalescenceII = allAchievs.find((achiev) => achiev.id === 4412);
      const coalescenceIII = allAchievs.find((achiev) => achiev.id === 4805);
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

  const neededAchievsDisplay = neededAchievs.filter(
    (achiev) => achiev !== null
  );

  //   console.log(neededAchievs);
  return (
    <ul className="simple-list">
      {renderAchievs === "loading" ? (
        <Loading />
      ) : (
        <>
          {neededAchievsDisplay.length === 0 ? (
            <li>Congratulations! You have all required achievements!</li>
          ) : (
            neededAchievsDisplay.map((achiev) => (
              <SimpleLiLink
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

      {/* {materialsList.map((material) => (
            <MediumLi key={uuidv4()} currentComponent={material} />
          ))} */}
    </ul>
  );
}
