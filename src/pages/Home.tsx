import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import Card from "../components/Card";

import editorImg from "../assets/editor.png";
import tilemapImg from "../assets/tmeditor.png";
import gameImg from "../assets/2D.png";
import codeImg from "../assets/code.png"
import gamePreviewImg from "../assets/game.png"
import sceneImg from "../assets/scene.png"

function Home() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/tutorials/");
  };

  return (
    <>
      <Title title="Home" />
      <Header />
      <main className="home">
        <section className="title text-center">
          <div className="container flex-col py-32">
            <h1 className="title__heading mb-16 text-8xl">RVL Engine</h1>
            <h5 className="title__subheading text-2xl">
              Simple 2D and 3D C++ Game Engine
            </h5>
            <button
              className="w-40 mx-auto mt-5"
              onClick={handleGetStartedClick}
            >
              Get Started
            </button>
          </div>
        </section>
        <section className="screenshots">
          <div className="screenshot">
            <div className="container flex-row">
              <p className="screenshot__text">
                Scene editor supporting 3D models, 2D sprites, particles and
                lighting
              </p>
              <img
                src={editorImg}
                alt="editor screenshot"
                className="screenshot__img"
              />
            </div>
          </div>
          <div className="screenshot bg-slate-300">
            <div className="container flex-row-reverse text-right">
              <p className="screenshot__text">
                2D game rendering and animation capabilities
              </p>
              <img
                src={gameImg}
                alt="2d game screenshot"
                className="screenshot__img"
              />
            </div>
          </div>
          <div className="screenshot">
            <div className="container flex-row">
              <p className="screenshot__text">
                2D tilemap editor for quick level building
              </p>
              <img
                src={tilemapImg}
                alt="tilemap editor screenshot"
                className="screenshot__img"
              />
            </div>
          </div>
        </section>
        <section className="cards my-20">
          <h2 className="text-center m-16 text-6xl">Some Features</h2>
          <div className="container">
            <Card
              title="API"
              text="Simple, high-level API for game developement"
              image={{
                src: codeImg,
                alt: "code block",
              }}
            />
            <Card
              title="Flexible Editor"
              text="Insert editor panels right in your game for faster developement"
              image={{
                src: gamePreviewImg,
                alt: "game & editor",
              }}
            />
            <Card
              title="Scenes"
              text="Save and load scene files for control of your game"
              image={{
                src: sceneImg,
                alt: "game & editor",
              }}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
