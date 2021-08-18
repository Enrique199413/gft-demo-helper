import {css} from 'lit';
import { viewportsAllAvailableClasses } from "./GftDemoHelperVariables";




export const GftDemoHelperStyles = () => (css`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

  * {
    font-family: 'Montserrat', sans-serif;
  }

  :host {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: radial-gradient(#213E7F 15%, transparent 0%) 0px 0px / 9px 9px, rgb(238, 238, 238);
  }

  .viewports {
    height: 26px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .bar {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(208, 209, 212);
    color: rgb(255, 255, 255);
    box-sizing: content-box;
    font-size: 0.625rem;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    margin: auto;
    border: 2px solid white;
    overflow: auto;
  }

  .selected {
    background-color: #1255E1;
  }

  .selected ~ .bar {
    background-color: transparent;
  }

  .selected ~ .bar:hover {
    background-color: #1255E1;
  }


  .bar:hover {
    background-color: #1255E1;
  }

  .bar:hover ~ .bar {
    background-color: transparent;
  }


  .bar:hover .label {
    visibility: visible;
    position: relative;
    background-color: #1255E1;
  }

  .bar:hover ~ .bar .label {
    visibility: hidden;
  }

  .label {
    text-transform: uppercase;
    visibility: hidden;
    background-color: #1255E1;
  }

  .selected .label {
    visibility: visible;
    background-color: #1255E1;
  }


  .viewports > button {
    background: #1255E1;
    color: white;
    height: 48px;
    width: 372px;
    border: none;
    border-radius: 4px;
  }

  .corners {
    will-change: width, height;
    contain: size;
    background-color: #fff;
    box-sizing: content-box;
    position: relative;
    margin: 0 auto;
    transition: width 0.2s ease-out 0s, height 0.2s ease-out 0s;
    border: rgba(52, 59, 74, 0.2) .5rem solid;
    border-radius: 5px;
    background-clip: padding-box;
  }

  .corners ::slotted(iframe) {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #fff;
    z-index: 1;
    border: none;
  }

  .header {
    display: flex;
    position: relative;
    padding: 1.5em;
    background-color: rgb(29, 71, 134);
    border-bottom: 1px solid rgb(198, 200, 207);
    justify-content: space-between;
    align-items: center;
  }

  .header > div > p {
    font-size: 18pt;
    color: white;
    margin: 0;
  }

  .header > div > p:nth-child(2) {
    font-size: 15pt;
    color: #b6b6b6;
    margin: 0;
  }

  ${viewportsAllAvailableClasses('SMALL', 'small')}
  ${viewportsAllAvailableClasses('MEDIUM', 'medium')}
  ${viewportsAllAvailableClasses('LARGE', 'large')}
`);