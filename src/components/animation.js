import React from "react";
import Lottie from "lottie-react-web";
import animation from "./animation.json";

const AniamtionLogo = () => (
  <Lottie
    options={{
      animationData: animation,
    }}
  />
);

export default AniamtionLogo;
