// Hadi Ra7 Yeb9a Yesma3 idha le user Rah MConnecté Wela lala au lieu mandirouh f App Ndirouh Custom Hook
import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useAuthListner() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("authUser")));

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listner = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser); // The main reason : Habin userName Partout ou Habin profile Ta3ou name ou photo ... etc
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    return () => listner();
  }, []);

  return { user };
}
