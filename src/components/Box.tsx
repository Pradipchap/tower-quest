import { useEffect, useRef } from "react";
import Bomb from "./Bomb";
import { BoxInterface } from "../../interfaces/componentInterfaces";
import Gem from "./Gem";

const MysteryBox = ({ id, type, setGameState }: BoxInterface) => {
  const backDiv = useRef<HTMLDivElement | null>(null);
  const topDiv = useRef<HTMLDivElement | null>(null);
  const leftDiv = useRef<HTMLDivElement | null>(null);
  const rightDiv = useRef<HTMLDivElement | null>(null);
  const bombRef = useRef<HTMLDivElement | null>(null);

  function openCube() {
    console.log(id);
    if (topDiv.current) {
      topDiv.current.style.transform = "translateY(-7rem)";
    }
    if (bombRef.current) {
      bombRef.current.style.display = "block";
      setTimeout(() => {
        if (bombRef.current) {
          bombRef.current.style.opacity = "100%";
          bombRef.current.style.transform = "translateY(-10rem)";

          bombRef.current.addEventListener("transitionend", (event) => {
            //only updating state if property is transform not opacity
            if (event.propertyName === "transform") updateGameState();
          });
        }
      }, 1000);
    }
  }

  function updateGameState() {
    setGameState((state) => [type, ...state]);
  }

  //clearing eventlistener when component unmounts
  useEffect(() => {
    const refValue = bombRef.current;
    return () => {
      if (refValue) {
        refValue.removeEventListener("transitionend", updateGameState);
      }
    };
  }, []);

  return (
    <div
      id="cube"
      className={`group h-40 w-40 relative flex justify-center items-center cursor-pointer
      `}
      onClick={openCube}
    >
      <div className="hexagon absolute w-40 h-44 transform rotate-180"></div>
      <div
        ref={bombRef}
        className="h-10 absolute bottom-0 left-1/2 w-10 hidden opacity-0 transition-all"
      >
        {type === 0 ? <Bomb /> : <Gem />}
      </div>
      <div
        ref={backDiv}
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dbrwtwlwl/image/upload/v1580369339/cube/mysteryBoxBackground_2x_b2espr.png)",
        }}
        className="bg-cover bg-center z-[-1] transition-all duration-300 h-40 w-40 absolute top-0 left-0"
      ></div>
      <div
        ref={topDiv}
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dbrwtwlwl/image/upload/v1580369339/cube/mysteryBoxTopFlap_2x_f9cb8g.png)",
        }}
        className="bg-cover bg-center z-[1] transition-all duration-300 h-40 w-40 absolute top-0 left-0"
      ></div>
      <div
        ref={leftDiv}
        style={{
          backgroundImage:
            " url(https://res.cloudinary.com/dbrwtwlwl/image/upload/v1580369339/cube/mysteryBoxLeftFlap_2x_y8u4gz.png)",
        }}
        className="bg-cover bg-center z-[1] transition-all duration-300 left h-40 w-40 absolute top-0 left-0"
      ></div>
      <div
        ref={rightDiv}
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dbrwtwlwl/image/upload/v1580369339/cube/mysteryBoxRightFlap_2x_abexhh.png)",
        }}
        className="bg-cover bg-center z-[1] transition-all duration-300 h-40 w-40 absolute top-0 left-0"
      ></div>
      {/* <div
        className="powerup absolute bg-red-500 rounded-full"
        // style={{
        //   backgroundImage: `url(${powerupUrl})`,
        //   height: powerupSize.height,
        //   width: powerupSize.width,
        // }}
      ></div> */}
    </div>
  );
};

export default MysteryBox;
