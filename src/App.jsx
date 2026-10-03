import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import History from "./pages/History";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Progress from "./pages/Progress";
import Today from "./pages/Today";
import useAuth from "./hooks/useAuth";

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/today" replace /> : <Login />}
        />

        <Route
          path="/today"
          element={user ? <Today /> : <Navigate to="/login" replace />}
        />

        <Route
          path="/history"
          element={user ? <History /> : <Navigate to="/login" replace />}
        />

        <Route
          path="/progress"
          element={user ? <Progress /> : <Navigate to="/login" replace />}
        />

        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/login" replace />}
        />

        <Route
          path="/"
          element={<Navigate to={user ? "/today" : "/login"} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;