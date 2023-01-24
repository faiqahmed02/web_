import React from "react";
import Banner from "../../common/Banner";
import FifthSection from "../../common/FifthSection";
import ForthSection from "../../common/ForthSection";
import SecondSection from "../../common/SecondSection";
import SixthSection from "../../common/SixthSection";
import ThirdSection from "../../common/ThirdSection";

function Website() {
  return (
    <>
      <Banner service="Website" />
      <SecondSection ssheading="Get custom web design that Maximizes Business Income" sspara1="A website is currently a key medium for connecting customers and businesses.
Therefore, 95% of the user’s first impression is directly linked to the website's design.
Thus, web design services have a significant impact on every type of organization." sspara2="We provide users with seamless web browsing with a variety of tools to boost
productivity. For our esteemed clients, Websodesign Web Solution provides custom
web design and development services. Our skilled designers research a variety of
people, comprehend their behaviours, and create user journeys that make it easy for
users to do their desired activities. Additionally, we offer our clients a fantastic web
structure that makes them stand out in the marketplace." />
      <ThirdSection tsheading="We are an award winning global studio" tspara="working with clients from all over the world and building successful brands
with empathy and creativity with our comprehensive range of services"  />
      <ForthSection />
      <FifthSection />
      <SixthSection />
    </>
  );
}

export default Website;
