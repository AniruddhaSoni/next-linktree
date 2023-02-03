import React from "react";

export default function Header() {
  return (
    <header className="w-11/12  md:w-8/12 lg:w-1/3 flex mx-auto items-center justify-between bg-white/20 p-6 py-4 rounded-xl backdrop-blur-sm mt-8">
      <div className="text-left">
        <p className="text-3xl font-bold">Anirudh Soni</p>
        <p>
          <strong>MERN</strong> and <strong>LAMP</strong> stack Web{" "}
          <strong>Develoeper</strong> and <strong>Designer</strong>.
        </p>
      </div>
      <div className="avatar">
        <div className="w-24 rounded-xl bg-white">
          <img
            src="/assets/images/avatar.jpeg
          "
          />
        </div>
      </div>
    </header>
  );
}
