import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { collectionID, db } from "../services/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";
import Markdown from "react-markdown";

import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-clike"
import Title from "../components/Title";

function Tutorial() {
  const params = useParams() as { tutorialID: string };
  const [tutorialData, setTutorialData] = useState("");
  const [tutorialName, setTutorialName] = useState("");
  const tutorialDocumentRef = doc(db, collectionID, params.tutorialID);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTutorialData = async () => {
      try {
        const document = await getDoc(tutorialDocumentRef);
        const data = document.data();
        if (!document.exists()) {
          navigate("/not-found");
        }
        if (!data && document.exists()) {
          throw new Error("Tutorial data is empty!");
        }
        setTutorialData(data?.text);
        setTutorialName(data?.name);
      } 
      catch (err) {
        console.error(err);
      }
    };
    
    fetchTutorialData();
  }, [params]);

  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <>
      <Title title={tutorialName} />
      <div className="tutorial-content">
        <Markdown>{tutorialData}</Markdown>
      </div>
    </>
  );
}

export default Tutorial;
