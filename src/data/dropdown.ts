import { userInputData } from "./userInput";

export const dotStyles = [
  { id: 1, value: "squares" },
  { id: 2, value: "dots" },
];

export const fileTypes = [
  { id: 1, value: "png", label: "png" },
  { id: 2, value: "jpeg", label: "jpeg" },
  { id: 3, value: "svg", label: "svg" },
];

export const resolutions = [
  { id: 1, value: userInputData.resolution * 0.5, label: "0.5x" },
  { id: 2, value: userInputData.resolution * 0.75, label: "0.75x" },
  { id: 3, value: userInputData.resolution * 1, label: "1x" },
  { id: 4, value: userInputData.resolution * 1.5, label: "1.5x" },
  // { id: 5, value: userInputData.resolution * 2, label: "2x" },
  // { id: 6, value: userInputData.resolution * 3, label: "3x" },
  // { id: 7, value: userInputData.resolution * 4, label: "4x" },
];

export const errorLevels = [
  { id: 1, value: "L", label: "Low" },
  { id: 2, value: "M", label: "Medium" },
  { id: 3, value: "Q", label: "High" },
  { id: 4, value: "H", label: "Highest" },
];
