import React from "react";

import { useDogContext } from "../contexts/DogContext";

export default function Data() {
  const { dog, loading } = useDogContext();

  return (
    <div>
      Name:{" "}
      {loading ? "Loading" : dog?.[0]?.breeds?.[0]?.name || "No Name Provided"}
    </div>
  );
}
