import React from "react";
import QuestionWrapper from "./style";
import Thinking from "../../Assets/Consulting-rafiki.svg";

const styles = {
  logo: {
    width: "30%",
  },
};
function Question() {
  return (
    <QuestionWrapper>
      <div className="Qwrapper">
        <h1 className="title1">
          How can we help you? Check topic to find answers to your questions.
        </h1>
        <div className="img-container">
          <img src={Thinking} alt="Hi" style={styles.logo} />
        </div>
        <div className="titles">
          <h1>
            How do I avoid fraudulent individuals posing as genuine sellers?
          </h1>
          <p className="body">
            We take various actions to keep fraudulent individuals out of our
            community including requiring sellers to undergo verification before
            listing products, but you can avoid negative fraud-related
            experiences by <strong>pre-paying</strong> and{" "}
            <strong>
              not paying into seller accounts before delivery if you choose to
              Pay on Delivery (POD)
            </strong>
            . If a seller requests that you pay into his/her account before your
            order is delivered or If you feel that a seller is potentially
            fraudulent, please contact by calling our service-line or send us
            mail to verify
          </p>
        </div>
        <div className="titles">
          <h1>
            If You Have Outstanding Questions Or Concerns, Message The Seller
            Before You Buy
          </h1>
          <p className="body">
            If you have questions/concerns about a product,{" "}
            <strong>Ace Farm-market</strong>
            makes it easy to contact the seller before you buy -- just click the
            'Message Seller' button.
          </p>
        </div>
        <div className="titles">
          <h1>
            How does <strong>Ace Farm-market</strong>
            protect me from fake or wrong advert?
          </h1>
          <p className="body">
            We have several processes in place to make sure sellers are safe and
            worthy of your trust and our team continuously monitors items
            offered for sale. Sellers who are found to violate the policy may be
            banned from selling on <strong>Ace Farm-market</strong>. If you
            suspect an item displayed on the website is not authentic, please
            contact by calling our service-line or send us mail
          </p>
        </div>
        <div>
          <div className="">
            <h1>Community Reporting </h1>
            <p className="body">
              We encourage our buyer community to report inappropriate or
              suspicious activity. To file a report please contact by calling
              our service-line or send us mail
            </p>
          </div>
        </div>
        <div>
          <div className="">
            <h1>Why is my advert declined? </h1>
            <p className="body">
              No worries, it can be fixed! Our moderators could decline your ad
              for several reasons:
              <ol>
                <li value={1}>
                  You've tried to post a few items within one ad. Please post
                  each item separately. We have a rule: 1 ad = 1 product.
                </li>
                <li>
                  You've posted{" "}
                  <b>nudity pictures or images containing contact details</b> ,
                  watermarks, etc. Please, remove them and add real photos of
                  the item you intend to sell.
                </li>
                <li>
                  You've set an irrelevant price. Make sure to carry out some
                  investigation of market value and input a fair price for your
                  product.
                </li>
                <li>
                  Make the required edits and click on the "Post ad" button. If
                  everything is fine, your ad will be live within an hour or
                  two.
                </li>
              </ol>
            </p>
          </div>
        </div>
        <div>
          <div className="">
            <h1>
              How long will my ads stay on <b>Ace farm-market</b>?{" "}
            </h1>
            <p className="body">
              Your ads remain on the site for 1-3 months (since the date of the
              last renewal) before they are automatically deleted or until you
              decide to deactivate them. Please note that you can always update
              your ad if you haven't sold your item.
            </p>
          </div>
        </div>
        <div>
          <div className="">
            <h1>Our Marketplace Rules </h1>
            <p className="body">
              Here is a non-exhaustive list of goods and services promotion of
              which is prohibited on <b>Ace farm-market</b> in Nigeria:
              <ol>
                <li value={1}> Adult products or services.</li>
                <li>Alcohol.</li>
                <li>Digital media and electronic devices.</li>
                <li>Event tickets.</li>
                <li>Gift Cards.</li>
                <li>Healthcare items (thermometers, first-aid kits, etc.).</li>
                <li>Illegal, prescription or recreational drugs.</li>
                <li>Tobacco products or tobacco paraphernalia.</li>
                <li>Unsafe supplements.</li>
                <li>Weapons, ammunition, or explosives.</li>
              </ol>
            </p>
            <p>The description of the item must match the image.</p>
            <p>
              Before-and-after pictures are prohibited. Also images taken by you
              without any contact information or watermarks.
            </p>
            <p>
              Make sure you choose an appropriate category for your ad. If not,
              we may reject your ad.
            </p>
            <p>All posted products and services must be located in Nigeria</p>
            <p>
              Publish all items for sale separately. There is a rule:{" "}
              <b>“1 ad = 1 item”</b> ;
            </p>
            <p>
              Create <b>different adverts</b> . If the ads are identical we
              consider them duplicates and may reject them.
            </p>
            <p>
              Food, processed food, water, soft drinks, spirit drinks, medical
              devices, drugs, drug products, cosmetics, chemicals,
              agrochemicals, pesticides, veterinary drugs, or other goods if
              they have not been registered with the National Agency for Food &
              Drug Administration and Control (the “NAFDAC”) or other relevant
              authority of Nigeria;
            </p>
          </div>
        </div>
        <div>
          <div className="">
            <h1>How do I contact Support Team?</h1>
            <p>
              Live chat is the fastest way to get a response from us. As soon as
              you send us a message there, one of the Managers who are online
              will react shortly. We recommend using it for urgent cases.
            </p>
            <div className="body">
              To start a chat, follow these simple steps:
              <ol>
                <li value={1}>Go to your Profile page;</li>
                <li>
                  Click on the Support Team icon in the lower right corner;
                </li>
                <li>Click on the green icon of Live Chat;</li>
                <li>Click on the "Send us a message" button;</li>
                <li>
                  Type in your question. Describe your issue as detailed as
                  possible. It will save us the time we could spend asking
                  clarifying questions and allow us to find a solution way
                  faster.
                </li>
              </ol>
              <p>
                If your case is not urgent, we recommend you send an email to
                support@acefarm-market.ng
              </p>
              <p>
                Here are some tips on how to prepare an efficient email and get
                assistance faster based on the type of issue you've faced:
              </p>
              <ul>
                <li>
                  <b>Something is not working correctly on the platform</b>. If
                  you're using the desktop version, specify what operating
                  system and browser you use. If the issue is about our app, let
                  us know what operating system and app version you use. If
                  possible, take screenshots that show what kind of issue
                  appears;
                </li>
                <li>
                  <b>Issues with payments for Premium Services</b>. Describe
                  what kind of issue you've faced. Specify important details:
                  what package you bought, what payment method you used, sum,
                  date of the payment, depositor's name. It's best to attach a
                  payment receipt copy or debit alert proof. This will help us a
                  lot to assist you faster.
                </li>
                <li>
                  <b>Scam case</b>. If you've faced a scam or you have
                  suspicions that one of the users may deceive people, please
                  tell us about it in your email. Share a link to the profile of
                  such a user, and describe all the details you have. If
                  possible, attach screenshots of your conversations and other
                  pictures or materials that can prove your words. The more
                  information we have, the higher chances we can take all the
                  necessary steps faster.
                </li>
              </ul>
              <p>
                <b>Why don't we provide phone support?</b>. With all the
                screenshots and details we need to assist you, it's clear that
                we're able to do that in a more efficient manner through chat
                and email. These methods for support also help us keep detailed
                records of all your requests and be on the same page with you at
                all times.
              </p>
              <p>
                <b>Note</b>: If you need phone support for Premium Service
                enquiry, you may always request a call back with the"Manager's
                call" button in your Profile.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="">
            <h1>How to leave feedback about the seller? </h1>
            <p>
              The feature of leaving feedback becomes available if you have had
              any interaction with the seller. After you made or failed to make
              a deal, share your experience by following the instruction below:
            </p>
            <ol>
              <li value={1}>
                Click on the button <b>"Leave feedback"</b>. You can find it on
                the advert page or on the seller's profile;
              </li>
              <li>
                <b>Rate your experience</b>. Select one of the smileys to
                specify how satisfied you are with the experience you have had;
              </li>
              <li>
                <b>Provide detailed feedback about the seller</b>. For example,
                tell more about how your communication went: were you treated
                with respect or are you left with a bad feeling? Ensure you also
                specify if you're satisfied with the product and how the
                delivery went;
              </li>
              <li>
                Click on <b>"Send feedback"</b>.
              </li>
            </ol>
            <p>
              We review all feedback to ensure they are relevant and in line
              with our rules. It will become available online and visible to all{" "}
              <b>Ace farm-market</b> users as soon as it's reviewed.
            </p>
          </div>
        </div>
        <div>
          <div className="">
            <h1>Accounts and Passwords </h1>
            <p className="body" />
          </div>
        </div>
      </div>
    </QuestionWrapper>
  );
}

export default Question;
