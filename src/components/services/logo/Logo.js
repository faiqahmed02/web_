import React from "react";
import Banner from "../../common/Banner";
import EightSection from "../../common/EightSection";
import FifthSection from "../../common/FifthSection";
import ForthSection from "../../common/ForthSection";
import NineSection from "../../common/NineSection";
import SecondSection from "../../common/SecondSection";
import SevenSection from "../../common/SevenSection";
import SixthSection from "../../common/SixthSection";
import ThirdSection from "../../common/ThirdSection";

function Logo() {
  return (
    <>
      <Banner service="Logo" />
      <SecondSection ssheading="Logo branding online" sspara1="The logo visual explains your brand identity so there is no need
              to explain what you do just show who you are with strong visuals.
              Online logo branding ideas will help you get creative logo designs
              since we keep your brand vibe in mind so you can get the ideas for
              your own logo, whether you run a construction company or a
              basement brand our professionals will create your logo in a short
              period of time with uniqueness." sspara2="We believe that a brand is an idea, an association, and the basis
              for all of your marketing initiatives. A powerful message is sent
              to the right audience by an effective brand experience, inspiring
              people to act." />
      <ThirdSection tsheading="We are an award winning global studio" tspara="working with clients from all over the world and building
              successful brands with empathy and creativity with our
              comprehensive range of services" />
      <ForthSection />
      <FifthSection />
      <SixthSection />
      <SevenSection />
      <EightSection />
      <NineSection />
    </>
  );
}

export default Logo;
