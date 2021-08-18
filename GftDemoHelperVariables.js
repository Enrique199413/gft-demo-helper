import { css } from "lit";
import { unsafeCSS } from "lit-element";

export const AVAILABLE_SIZES = {
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE',
}

export const VIEWPORTS = {
  SMALL: [320, 480],
  MEDIUM: [768, 1024],
  LARGE: [1360, 800]
}

export const addPx = viewport => css`${viewport}px`

export const AVAILABLE_VIEWPORTS = {
  [AVAILABLE_SIZES.SMALL]: addPx(VIEWPORTS.SMALL[0]),
  [AVAILABLE_SIZES.MEDIUM]: addPx(VIEWPORTS.MEDIUM[0]),
  [AVAILABLE_SIZES.LARGE]: addPx(VIEWPORTS.LARGE[0]),
}

export const viewportsClasses = (small = false, medium = false, large = false) => ({
  small,
  medium,
  large
})

export const viewportsAllAvailableClasses = (availableSize, className = '') => {
  const classNameCss = css`${unsafeCSS(className)}`;
  return css`.${classNameCss} {width: ${AVAILABLE_VIEWPORTS[availableSize]}}`;
}
