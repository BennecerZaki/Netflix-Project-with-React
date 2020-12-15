import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection(target)
      .onSnapshot((snapshot) => {
        setContent(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
    return () => unsubscribe();
  }, []);

  return { [target]: content };
}
