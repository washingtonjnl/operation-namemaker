import { useState } from "react";
import { selectAnimal } from "../services/selectAnimal";
import { selectColor } from "../services/selectColor";

export default function Home() {
  const [operationName, setOperationName] = useState("Tap to generate");
  const [initialGeneration, setInitialGeneration] = useState(true);
  const [color, setColor] = useState("");

  function generateOperationName() {
    const color = selectColor();
    setColor(color.hex);
    const animal = selectAnimal();

    const newOperationName = `${color.name} ${animal.name}`;
    setOperationName(newOperationName);
    setInitialGeneration(false);
  }

  return (
    <main className="p-8 bg-slate-100 w-screen h-screen flex flex-col flex-wrap place-content-center">
      <h1 className="pb-4 text-center font-bold text-3xl text-gray-800">
        Operation Namemaker
      </h1>
      <h2 className="pb-8 text-center text-gray-400">
        Tap the{" "}
        <span className="text-indigo-700 font-medium">refresh button</span> to
        generate a new operation name
      </h2>
      <div className="p-6 pl-8 gap-6 w-full max-w-xl bg-gray-50 rounded-lg flex items-center justify-between">
        <p
          className={`grow m-auto  text-xl text-gray-400 ${
            initialGeneration ? "italic" : "font-semibold"
          }`}
          style={{ color: !initialGeneration && color }}
        >
          {operationName}
        </p>
        <button
          onClick={generateOperationName}
          className="rounded-full transition duration-150 hover:bg-indigo-50 hover:scale-105 active:scale-90 active:bg-indigo-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 p-2 stroke-gray-400 transition duration-150 hover:stroke-indigo-700"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </button>
      </div>
    </main>
  );
}
