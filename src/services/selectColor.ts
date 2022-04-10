import colors from "../../public/common-colors.json";

export function selectColor() {
  const randomPosition = Math.floor(Math.random() * colors.length);

  return {
    name: colors[randomPosition].name,
    hex: colors[randomPosition]["hex (24 bit)"],
  };
}
