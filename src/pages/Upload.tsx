import { useEffect, useRef, useState } from "react";
import { db, collectionID } from "../services/firebaseConfig";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import Header from "../components/Header";
import Title from "../components/Title";

function Upload() {
  const [content, setContent] = useState("");
  const [newTutorialName, setNewTutorialName] = useState("");
  const [newTutorialID, setNewTutorialID] = useState("");
  const [statusText, setStatusText] = useState("");
  const timeoutIDRef = useRef<NodeJS.Timeout>();

  useEffect(() => () => clearTimeout(timeoutIDRef.current), []);

  const handleContentSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await setDoc(doc(db, collectionID, newTutorialID), {
        name: newTutorialName,
        text: content,
        createTime: serverTimestamp(),
      });
      setStatusText("Successfully updated a tutorial.");

      if (timeoutIDRef.current) {
        clearTimeout(timeoutIDRef.current);
      }

      timeoutIDRef.current = setTimeout(() => {
        setStatusText("");
      }, 2000);
    } 
    catch (err) {
      setStatusText("Error occured, please check the console.");
      console.error(err);
    }
  };

  return (
    <>
      <Title title="Upload a Tutorial" />
      <Header />
      <main className="upload-content">
        <h6 className="text-center text-xl mt-5">Upload new or change an existing tutorial</h6>
        <form onSubmit={handleContentSubmit} className="admin-form">
          <input
            onChange={(event) => setNewTutorialName(event.target.value)}
            type="text"
            placeholder="Tutorial Name"
          />
          <input
            onChange={(event) => setNewTutorialID(event.target.value)}
            type="text"
            placeholder="Tutorial ID"
          />
          <textarea
            onChange={(event) => setContent(event.target.value)}
            name="tutorial-content"
            id="tutorial-content"
            placeholder="Markdown Contnent"
          ></textarea>
          <button type="submit">Submit</button>
          <p>{statusText}</p>
        </form>
      </main>
    </>
  );
}

export default Upload;
