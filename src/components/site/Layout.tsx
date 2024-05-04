export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <div>NAVBAR</div>
      <main className="">
        <div className="">{children}</div>
      </main>
    </div>
  );
};
