import { createContext, useContext } from "react";

export type CvContext = any;

export const initialValue = null;

export const cvContext = createContext<CvContext>(initialValue);

export const useCv = () => useContext(cvContext);
