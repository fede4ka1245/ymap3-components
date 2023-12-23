import {createContext} from "react";
import {YMapsComponentsState} from "../types";

export const YMapsContextState = createContext<YMapsComponentsState | {}>({});