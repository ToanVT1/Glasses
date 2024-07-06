import React, { useState } from "react";
import style from "./index.module.css";
import { dataGlasses } from "./dataGlasses";

export function Glasses() {
  const [selectedGlass, setSelectedGlass] = useState(null);

  const handleGlassClick = (glass) => {
    setSelectedGlass(glass);
  };

  return (
    <>
      <div className={style.container}>
        <img src="src/img/background.jpg" alt="Background" />
        <div className={style.content}>
          <div className={style.model}>
            <img src="src/img/model.jpg" />
            <img src="src/img/model.jpg" />
          </div>
          <div>
            {selectedGlass ? (
              <div>
                <img
                  className={style.selectedImage}
                  src={selectedGlass.url}
                  alt={selectedGlass.name}
                />
            <div className={style.info}>
            <h2>{selectedGlass.name}</h2>
                <p>Giá: ${selectedGlass.price}</p>
                <p>{selectedGlass.desc}</p>
            </div>
              </div>
            ) : (
              <img src="" alt="Model" />
            )}
          </div>
          <div className={style.glassesContainer}>
            {dataGlasses.map((glass) => (
              <div
                key={glass.id}
                className={style.glassItem}
                onClick={() => handleGlassClick(glass)}
              >
                <img className={style.image} src={glass.url} alt={glass.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
