import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Pages/Root";
import Coba from "./Pages/Coba";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="about" element={<Coba />}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
