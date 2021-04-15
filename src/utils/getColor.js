const COLORS = [
  {
    "type": "Grass",
    "color": "#49D0AF",
  },
  {
    "type": "Fire",
    "color": "#fc7f7e",
  },
  {
    "type": "Water",
    "color": "#76bdfd",
  },
  {
    "type": "Electric",
    "color": "#ffd86f",
  },
  {
    "type": "Ghost",
    "color": "#8b6ecd",
  },
  {
    "type": "Bug",
    "color": "#1ba605",
  },
  {
    "type": "Normal",
    "color": "#d7d8b2",
  },
  {
    "type": "Ground",
    "color": "#c3a67b",
  },
];


const getColor = (type) => {
    let bgColor = COLORS.find(color => color.type === type);
    if (bgColor) {
      return bgColor.color;
    }
    return "#f5bcc3"
  }
  export default getColor; 