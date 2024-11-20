import { lazy, Suspense } from "react";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminDashboard from "./Pages/AdminDashboard";

function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <AdminDashboard />
      </Suspense>
    </>
  );
}

export default App;
