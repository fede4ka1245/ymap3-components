import { useEffect, useLayoutEffect } from "react";

const useIsomorphicEffect =
  typeof document !== "undefined" ? useLayoutEffect : useEffect;

export default useIsomorphicEffect;
