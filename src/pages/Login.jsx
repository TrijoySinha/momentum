import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase";  

export default function Login() {
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login failed: ", error);
    }
  };

  return (
    <div>
        <h1>Momentum</h1>

        <button onClick={handleGoogleLogin}>
            Continue with Google
        </button>
    </div>
  )
}
