import "../components/DestinationStyles.css";
import img1 from "../assets/images//9.jpg";
import img2 from "../assets/images//6.jpg";
import img3 from "../assets/images//10.jpg";
import img4 from "../assets/images//4.jpg";

import React from "react";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Desired destinations </h1>
      <p>Travelling makes you explore the world</p>
      <DestinationData
        cName="first-des"
        heading="Queen Elizabeth National Park"
        desciption="The park is known for its abundant wildlife, including African elephant, African buffalo, Ugandan kob, hippopotamus, topi, waterbuck, warthog, giant forest hog, Nile crocodile, leopard, spotted hyena, chimpanzee and lion. Overall, the park is home to 95 mammal species and over 600 bird species."
        img1={img1}
        img2={img2}
      />
      <DestinationData
        cName="first-des revese"
        heading="Murchison Falls"
        desciption="Murchison Falls National Park is best known, though, for the most powerful waterfall in the world. Every second, the equivalent of 200 bathtubs full of water is forced through a gorge less than seven paces wide. The pressure is so great that the ground trembles around it."
        img1={img3}
        img2={img4}
      />
    </div>
  );
};

export default Destination;
