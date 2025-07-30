import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex items-center justify-center min-h-screen py-10 px-4">
      <section className="border-slate-700 border shadow-md py-10 px-4  sm:min-w-[520px] bg-black rounded-[10px] sm:px-8">
        <div className="flex items-center justify-between gap-2">
          <h1 className="text-[24px] text-white">
            Join <span className="font-extrabold">WORKCITY</span>
          </h1>
        </div>
        {children}
      </section>
    </main>
  );
};

export default AuthLayout;
