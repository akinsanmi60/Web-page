import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";
import { ContactWrapper, TextArea, Wrapper } from "./style";

function Label(props: { [x: string]: any; htmlFor: any }) {
  const { htmlFor, ...otherProps } = props;

  return <label htmlFor={htmlFor} {...otherProps} />;
}

function Touch() {
  const userRef = useRef<HTMLInputElement>(null!);
  const [contactUser, setContactuser] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  return (
    <ContactWrapper>
      <div className="greybox">
        <div className="box">
          <h1>
            Ace <span>Farm-Market</span>
          </h1>
          <div className="contact-location">
            <div className="contact-address">
              <p>9c Environmental Crescent Lagos state</p>
              <p>9c Environmental Crescent Lagos state</p>
            </div>
            <div className="contact-telephone">
              <p>08164279799</p>
              <p>09065964571</p>
              <p>acefarmmarket@gmail.com</p>
            </div>
            <FontAwesomeIcon className="icons" icon={faLocationDot} />
          </div>
        </div>
      </div>

      <Wrapper>
        <div className="columnA">
          <div className="columnA-mode">
            <form>
              <div>
                <Label htmlFor="firstname">Your Name (required)</Label>
                <input
                  type="text"
                  id="First Name"
                  autoComplete="off"
                  required
                  ref={userRef}
                  onChange={e => setContactuser(e.target.value)}
                  value={contactUser}
                />
              </div>
              <div>
                <Label htmlFor="phonenumber">Your Number (required)</Label>
                <input
                  type="text"
                  id="Phone Number"
                  autoComplete="off"
                  required
                  onChange={e => {
                    setContactNumber(e.target.value);
                  }}
                  value={contactNumber}
                />
              </div>
              <div>
                <Label htmlFor="email">Your Email (required)</Label>
                <input
                  type="text"
                  id="email"
                  autoComplete="off"
                  required
                  onChange={e => setContactEmail(e.target.value)}
                  value={contactEmail}
                  formNoValidate
                />
              </div>
              <div>
                <Label htmlFor="text"> Message</Label>
                <TextArea />
              </div>
              <Button
                size="small"
                variant="contained"
                sx={{
                  backgroundColor: " #e8491d",
                  marginTop: "10px",
                }}
              >
                Send
              </Button>
            </form>
          </div>
        </div>
        <div className="columnB">Im here</div>
      </Wrapper>
    </ContactWrapper>
  );
}

export default Touch;
