import Header from "../components/Header";
import editorImg from "../assets/editor.png"
import tilemapImg from "../assets/tmeditor.png"
import gameImg from "../assets/2D.png"
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";

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
            <h5 className="title__subheading text-2xl">Simple 2D and 3D C++ Game Engine</h5>
            <button className="w-40 mx-auto mt-5" onClick={handleGetStartedClick}>Get Started</button>
          </div>
        </section>
        <section className="screenshots">
          <div className="screenshot">
            <div className="container flex-row">
              <p className="screenshot__text">Scene editor supporting 3D models, 2D sprites, particles and lighting</p>
              <img src={editorImg} alt="editor screenshot" className="screenshot__img" />
            </div>
          </div>
          <div className="screenshot bg-slate-300">
            <div className="container flex-row-reverse text-right">
              <p className="screenshot__text">2D game rendering and animation capabilities</p>
              <img src={gameImg} alt="2d game screenshot" className="screenshot__img" />
            </div>
          </div>
          <div className="screenshot">
            <div className="container flex-row">
              <p className="screenshot__text">2D tilemap editor for quick level building</p>
              <img src={tilemapImg} alt="tilemap editor screenshot" className="screenshot__img" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
