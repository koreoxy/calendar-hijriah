import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <main className="">
        <div className="">{children}</div>
      </main>

      <Footer />
    </div>
  );
};
