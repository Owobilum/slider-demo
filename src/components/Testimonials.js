import React from "react";
import { JollofSlider, SliderItem } from "react-jollof-slider";

import Testimonial from "./Testimonial";
import userImg from "../images/user1.jpg";

function Testimonials() {
  return (
    <div className="py-20 px-2 lg:px-6">
      <JollofSlider
        numberOfItems={testimonialsData.length}
        isAutoplay
        isShowArrowNav={false}
        isShowDotNav={true}
      >
        {testimonialsData.map((testimonial, i) => (
          <SliderItem key={i}>
            <Testimonial {...testimonial} />
          </SliderItem>
        ))}
      </JollofSlider>
    </div>
  );
}

export default Testimonials;

const testimonialsData = [
  {
    name: "Jenny Wilson",
    position: "VP of Marketing",
    img: userImg,
    body: "The More Campaigns We Can Put Together, The More Pages We Can Create,The Bigger We Feel.",
  },
  {
    name: "Jessica Olu",
    position: "VP of Enjoyment",
    img: userImg,
    body: "The More Campaigns We Can Put Together, The More Pages We Can Create,The Bigger We Feel, The better The Enjoyment.",
  },
  {
    name: "Jemma Samson",
    position: "VP of Marketing",
    img: userImg,
    body: "The More Campaigns We Can Put Together, The More Pages We Can Create,The Bigger We Feel.",
  },
  {
    name: "Jolene Chan",
    position: "VP of Marketing",
    img: userImg,
    body: "The More Campaigns We Can Put Together, The More Pages We Can Create,The Bigger We Feel.",
  },
  {
    name: "Jemima Osu",
    position: "VP of Marketing",
    img: userImg,
    body: "The More Campaigns We Can Put Together, The More Pages We Can Create,The Bigger We Feel.",
  },
];
