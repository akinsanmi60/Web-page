import * as React from "react";
import moment from "moment";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import ItemWrapper from "./style";

const productItem = {
  id: 1,
  title: "Soya-beans",
  description:
    "We have good variety of thi,lsf jhvgsdjhvsdj bas ug auv hfhfvjfbkhj nsd bygc vjsfs  produce.Whyamvgsdgdgsdgsd do we usehfbfbfbs ffifhfihihfhffhosgyxsyxyyfsaaaaaaaaaaait? It  is a long established fact that a reader will ",
  category: "Grains",
  quantity: "50 bags",
  img: "https://independent.ng/wp-content/uploads/2018/05/Soya-beans.jpg",
  location: "Lagos State",
  price: "₦30000",
  status: "promoted",
  created: "2021-11-23T18:49:51.307Z",
  technicalname: "herbicide",
  phonenumber: "08164279799",
  seller: {
    name: "Akinsanmi Junior",
    img: "https://www.facebook.com/photo/?fbid=5209431995736360&set=a.152997558046521",
    joined: "2015-01-23T18:49:51.307Z",
  },
  view: 18,
};

function Itemcard() {
  return (
    <ItemWrapper>
      <div className="box-item">
        <div className="productcard">
          <div className="product-box">
            <div className="box">
              <div className="productimage">
                <img src={productItem.img} alt="hello" />
              </div>
              <div className="productdetails">
                <div className="advert">
                  <h1>{productItem.title}</h1>
                  <div className="unitprice">
                    <p>{productItem.price}</p>
                  </div>
                  <div className="advertview">
                    <p>
                      <FontAwesomeIcon className="icons" icon={faEye} />
                      {productItem.view} views
                    </p>
                  </div>
                </div>
                <div className="priceinfo">
                  <div className="advertinfo">
                    <p>{productItem.status}</p>
                  </div>

                  <div className="itempost">
                    <p>
                      Posted
                      <span>{moment(productItem.created).format("LL")}</span>
                      <span>{moment(productItem.created).format("LT")}</span>
                    </p>
                  </div>
                  <div className="locationcontainer">
                    <p>
                      Listed in <span>{productItem.location}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="productdescription">
              <h1>Description</h1>
              <p>{productItem.description}</p>
              <div className="productdcontact">
                <p>Click here to show seller's phone number</p>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    backgroundColor: " #e8491d",
                    marginTop: "3px",
                    height: "37px",
                    fontSize: "10px",
                    "&:hover": {
                      backgroundColor: "#e8491d",
                      borderColor: "#0062cc",
                      boxShadow: "none",
                    },
                    "&:active": {
                      boxShadow: "none",
                      backgroundColor: "green",
                    },
                  }}
                >
                  Show Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="feedbackcard">
          <p>fvhcdhchbcdhbchbchhvhvhvsdfhv</p>
        </div>
      </div>
    </ItemWrapper>
  );
}

export default Itemcard;
