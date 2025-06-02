import { createContext } from "react";
import { Person } from "../types/person.model";

export const PersonContext = createContext<{
  persons: Person[];
  setPersons: (persons: Person[]) => void;
}>({
  persons: [],
  setPersons: () => {},
});
