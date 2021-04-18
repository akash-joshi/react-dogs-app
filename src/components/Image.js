import React, { useState, useEffect } from "react";

import { getRandomDog } from "../adapters/dogs";
import { useDogContext } from "../contexts/DogContext";

export default function Image() {
  const { dog } = useDogContext();

  return <img className="dog_image" src={dog?.[0]?.url} />;
}
