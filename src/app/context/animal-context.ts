import { createContext } from "react";
import { Animal } from "../types/animal.model";

export const AnimalContext = createContext<{
  animals: Animal[];
  setAnimals: (animaux: Animal[]) => void;
}>({
  animals: [],
  setAnimals: () => {},
});
