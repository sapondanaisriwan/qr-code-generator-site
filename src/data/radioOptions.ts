export const bodyShapeOptions = [
  {
    id: 1,
    value: "squares",
    imageUrl: "/asset/squareBody.svg",
    label: "squares",
  },
  {
    id: 2,
    value: "dots",
    imageUrl: "/asset/dotBody.svg",
    label: "dots",
  },
];

export const eyeShapeStyle = [
  {
    id: 1,
    value: "squareEye",
    imageUrl: "/asset/squareEye.svg",
    label: "squareEye",
  },
  {
    id: 2,
    value: "squareCircleEye",
    imageUrl: "/asset/squareCircleEye.svg",
    label: "squareCircleEye",
  },
  {
    id: 3,
    value: "roundedMediumEye",
    imageUrl: "/asset/roundedMediumEye.svg",
    label: "roundedMediumEye",
  },
  {
    id: 4,
    value: "roundedEye",
    imageUrl: "/asset/roundedEye.svg",
    label: "roundedEye",
  },
  {
    id: 5,
    value: "flowerEye",
    imageUrl: "/asset/flowerEye.svg",
    label: "flowerEye",
  },
  {
    id: 6,
    value: "jungleEye",
    imageUrl: "/asset/jungleEye.svg",
    label: "jungleEye",
  },
];

export const eyeShapeRadius: EyeShapeRadius = {
  flowerEye: {
    outer1: [0, 50, 0, 50],
    outer2: [50, 0, 50, 0],
    outer3: [50, 0, 50, 0],
    inner1: [50, 50, 50, 50],
    inner2: [50, 50, 50, 50],
    inner3: [50, 50, 50, 50],
  },
  roundedMediumEye: {
    outer1: [25, 25, 25, 25],
    outer2: [25, 25, 25, 25],
    outer3: [25, 25, 25, 25],
    inner1: [50, 50, 50, 50],
    inner2: [50, 50, 50, 50],
    inner3: [50, 50, 50, 50],
  },
  roundedEye: {
    outer1: [50, 50, 50, 50],
    outer2: [50, 50, 50, 50],
    outer3: [50, 50, 50, 50],
    inner1: [50, 50, 50, 50],
    inner2: [50, 50, 50, 50],
    inner3: [50, 50, 50, 50],
  },
  squareCircleEye: {
    outer1: [0, 0, 0, 0],
    outer2: [0, 0, 0, 0],
    outer3: [0, 0, 0, 0],
    inner1: [50, 50, 50, 50],
    inner2: [50, 50, 50, 50],
    inner3: [50, 50, 50, 50],
  },
  squareEye: {
    outer1: [0, 0, 0, 0],
    outer2: [0, 0, 0, 0],
    outer3: [0, 0, 0, 0],
    inner1: [0, 0, 0, 0],
    inner2: [0, 0, 0, 0],
    inner3: [0, 0, 0, 0],
  },
  jungleEye: {
    outer1: [0, 25, 0, 25],
    outer2: [25, 0, 25, 0],
    outer3: [25, 0, 25, 0],
    inner1: [0, 25, 0, 25],
    inner2: [25, 0, 25, 0],
    inner3: [25, 0, 25, 0],
  },
};
