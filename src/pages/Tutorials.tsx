import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { collectionID, db } from "../services/firebaseConfig";
import { getDocs, collection, query, orderBy } from "firebase/firestore";

function Tutorials() {
  const params = useParams<{ tutorialID: string }>();
  const [tutorials, setTutorials] = useState<{ id: string; name: string }[]>([]);
  const tutorialsCollectionRef = collection(db, collectionID);
  const navigate = useNavigate();

  const [activeTutorialID, setActiveTutorialID] = useState(() => {
    const saved = localStorage.getItem("active-id");
    return saved !== null ? JSON.parse(saved) : "";
  });

  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const sortQuery = query(tutorialsCollectionRef, orderBy("createTime", "asc"));
        const docs = await getDocs(sortQuery);
        const data = docs.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }));

        setTutorials(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTutorials();
  }, []);

  useEffect(() => {
    if (!params.tutorialID && activeTutorialID) {
      navigate(`/tutorials/${activeTutorialID}`);
    } else if (!params.tutorialID) {
      navigate("/tutorials/getting-started");
    }
  }, [params.tutorialID]);

  const handleNavLinkClick = (tutorialID: string) => {
    setActiveTutorialID(tutorialID);
    localStorage.setItem("active-id", JSON.stringify(tutorialID));
  };

  return (
    <div className="wrapper">
      <Header />
      <main className="tutorials">
        <div className="bg-gray-300 sidebar">
          {tutorials.map((tutorial) => (
            <NavLink
              key={tutorial.id}
              to={`/tutorials/${tutorial.id}`}
              className={({ isActive }) =>
                isActive
                  ? "hover:text-inherit active-tutorial"
                  : "hover:text-inherit"
              }
              onClick={() => handleNavLinkClick(tutorial.id)}
            >
              <p className="px-4 py-0.5 hover:bg-gray-400">{tutorial.name}</p>
            </NavLink>
          ))}
        </div>
        <Outlet />
      </main>
    </div>
  );
}

export default Tutorials;