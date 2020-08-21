import { createContext, useContext } from "react";
import { CV } from "./types";

export type CvContext = CV | null;

export const initialValue = null;

export const cvContext = createContext<CvContext>(initialValue);

export const useCv = () => useContext(cvContext);
