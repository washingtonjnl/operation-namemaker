import animals from "../../public/common-animals.json";

export function selectAnimal() {
  const randomPosition = Math.floor(Math.random() * animals.length);

  return { name: animals[randomPosition] };
}
