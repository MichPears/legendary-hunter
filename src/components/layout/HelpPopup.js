import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

export default function HelpPopup({ setShowHelp, showHelp }) {
  return (
    <div className={`help-popup ${showHelp && "help-animate-left"}`}>
      <div className="help-header">
        <h2>Need Help?</h2>
        <IoIosCloseCircle
          className="close-btn"
          onClick={() => setShowHelp(false)}
        />
      </div>
      <div className="help-text">
        This website was made to check the achievements, recipes, and materials
        you're missing to craft the legendary gw2 ring Coalescence.
        <br />
        Not sure what to do? Just follow the steps below!
        <ol>
          <li className="api-step">
            <div className="medium-li-num">1.</div>
            <div>
              Go to the official Guild Wars 2 website at www.guildwars2.com, and
              log in with your account.
            </div>
          </li>
          <li className="api-step">
            <div className="medium-li-num">2.</div>
            <div>
              Click on the "Applications" tab and either copy an already
              existing API key, or create a new one.
              <br />
              <span className="important-text">
                <span style={{ fontWeight: 700 }}>IMPORTANT:</span> in order for
                this website to work, please make sure your API key has the
                following permissions:
                <br />
                <span style={{ fontWeight: 700 }}>
                  progression, wallet, account, inventories, characters,
                  unlocks.
                </span>
              </span>
            </div>
          </li>
          <li className="api-step">
            <div className="medium-li-num">3.</div>
            <div>Add your API key here and we'll do the rest!</div>
          </li>
        </ol>
        <p className="important-text">
          Some limitations of this tool include:
          <br />
          It only takes into account the materials you currently have in your
          inventory, shared inventory, material storage, and bank, so any items
          you might have waiting for you in the Trading Post, or any buy orders
          currently in progress will not be taken into account for the
          calculations.
          <br /> Also, because this tool requires an external API server, it is
          possible that very recent changes made to your account will not be
          reflected until a few minutes have passed. If you are purchasing items
          while checking, you might have to refresh the page several times to
          make sure the new changes have taken effect.
        </p>
      </div>
    </div>
  );
}
