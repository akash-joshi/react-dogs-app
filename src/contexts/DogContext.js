import React, { createContext, useContext, useState, useEffect } from "react";
import { getRandomDog } from "../adapters/dogs";

const DogContext = createContext({});
const { Provider, Consumer } = DogContext;

const DogProvider = ({ children, ...props }) => {
  const [dog, setDog] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRandomDog().then((data) => {
      setDog(data);
      setLoading(false);
    });
  }, []);

  return (
    <Provider value={{ dog, loading }} {...props}>
      {children}
    </Provider>
  );
};

const useDogContext = () => {
  const state = useContext(DogContext);
  if (state === undefined) {
    throw new Error("useDogContext must be called within DogProvider");
  }

  return {
    ...state,
  };
};

export { DogProvider, Consumer as DogConsumer, useDogContext };

export default DogContext;
