import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faMountain,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import Marketing from "../../../Assets/Marketing-bro (1).svg";
import { ChooseWrapper } from "../style";

const styles = {
  logo: {
    width: "100%",
    marginTop: "50px",
  },
};
function Statementpage() {
  return (
    <ChooseWrapper>
      <div className="C-wrapper">
        <div className="img-container">
          <img src={Marketing} alt="Hi" style={styles.logo} />
        </div>
        <div>
          <div className="Scontainer">
            <div className="icon-container">
              <FontAwesomeIcon className="icons" icon={faBullseye} />
            </div>
            <h1>Mission </h1>
            <p>
              To be a catalyst in the world of Agriculture by connecting farmers
              to household, to make them more productive and to reduce waste of
              farm produce.
            </p>
          </div>
          <div className="Scontainer">
            <div className="icon-container">
              <FontAwesomeIcon className="icons" icon={faMountain} />
            </div>
            <h1> Vision</h1>
            <p>
              To connect the farmers with each other and the rest of the world
              through Technology & Commerce.
            </p>
            <p>
              To become the number 1 online market and resource center of
              Nigeria's agriculture sector.
            </p>
          </div>
          <div className="Scontainer">
            <div className="icon-container">
              <FontAwesomeIcon className="icons" icon={faPen} />
            </div>
            <h1>Values</h1>
            <p>
              Why do we use it? It is a long established fact that a reader will
              be distracted by the readable content of a page when looking at
              its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </p>
          </div>
        </div>
      </div>
    </ChooseWrapper>
  );
}
export default Statementpage;
