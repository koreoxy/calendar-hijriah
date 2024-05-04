import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Beranda } from "./routes/Beranda";
import { Sejarah } from "./routes/Sejarah";
import { Tim } from "./routes/Tim";
import { FAQ } from "./routes/FAQ";
import { NotFound } from "./routes/NotFound";
import { Layout } from "./components/site/Layout";

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
        <Route index={true} element={<Beranda />} />
        <Route path="sejarah" element={<Sejarah />} />
        <Route path="tim" element={<Tim />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
