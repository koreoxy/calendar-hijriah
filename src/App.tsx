import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { NotFound } from "./routes/NotFound";
import { Layout } from "./components/site/Layout";
import { CalenderHijriahPage } from "./routes/CalenderHijriahPage";

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Outlet />
          </Layout>
        }
      >
        <Route index={true} element={<CalenderHijriahPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
