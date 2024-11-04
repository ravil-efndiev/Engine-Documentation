import Header from "../components/Header";
import Title from "../components/Title";

function NotFound() {
  return (
    <>
      <Title title="Not Found" />
      <Header />
      <main>
        <h1 className="text-center text-4xl mt-20">Page you are looking for doesn't exist D:</h1>
      </main>
    </>
  )
}

export default NotFound;
