import React from "react";
import Ads from "../../../Assets/Online ads-amico.svg";
import { OverviewWrapper } from "../style";

const styles = {
  logo: {
    width: "100%",
  },
};

function Companyoverviewpage() {
  return (
    <OverviewWrapper>
      <div className="wrapper">
        <div>
          <p>
            Ace Farm-Market aims to be Nigeria’s largest and leading online
            marketplace store for agriculture needs. It is all-in-one store for
            farmers and dealers where they can purchase products from any
            categories like Seeds, Crop protection Pesticides, fertilizers,
            Pumps, Agriculture equipments etc. for agricultural, residential or
            commercial purposes. We intend to build a powerful and innovative
            technology which can revolutionize the agriculture sector in Nigeria
            and also help Nigerians farmers immensely.
          </p>
          <p>
            Ace Farm-Market has built an application and a website which has
            easy to use interface with local language support. The farmers can
            purchase their needs with ease in their own language in just a few
            steps. Even other agro and non-agro traders can purchase the items
            in bulk with a discounted deal.
          </p>
          <p>
            Headquartered in Lagos state. The company founders have a long
            experience in Agriculture field. Ace Farm-Market is a confluence of
            the knowledge and experience of both agriculture and IT field.
          </p>
          <p>
            Ace Farm-Market aim partner with manufacturers and other suppliers
            to make the products available to consumers quickly and in
            reasonable rates.
          </p>
        </div>
        <div className="img-container">
          <img src={Ads} alt="Hi" style={styles.logo} />
        </div>
      </div>
    </OverviewWrapper>
  );
}
export default Companyoverviewpage;
