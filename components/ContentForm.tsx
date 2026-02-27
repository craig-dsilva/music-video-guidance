// Not used at the moment.
// This is for the content field of the addmusic form.
"use client";
import { useState } from "react";

const ContentForm = () => {
  const [sceneInput, setSceneInput] = useState("");
  const [scenes, setScenes] = useState<string[]>([]);

  const appendInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!sceneInput) return;
    console.log(sceneInput);
    setScenes([...scenes, sceneInput]);
  };

  return (
    <>
      <p>Add sensitive scenes</p>
      {scenes.map((scene: string, index: number) => {
        return (
          <div key={index}>
            <p>{scene}</p>
            <button>X</button>
          </div>
        );
      })}
      <input
        type="text"
        value={sceneInput}
        onChange={(e) => setSceneInput(e.target.value)}
      />
      <button onClick={appendInput}>+</button>
    </>
  );
};

export default ContentForm;
