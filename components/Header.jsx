import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="w-11/12  md:w-8/12 lg:w-1/3 flex mx-auto items-center justify-between bg-gray-500/30 p-6 py-4 rounded-xl backdrop-blur-[2px] mt-8">
      <div className="text-left">
        <p className="text-3xl font-bold">Anirudh Soni</p>
        <p>
          <strong>MERN</strong> and <strong>LAMP</strong> stack Web{" "}
          <strong>Developer</strong> and <strong>Designer</strong>.
        </p>
      </div>
      <div className="avatar">
        <div className="w-24 rounded-xl bg-white">
          <Image
            height={256}
            width={256}
            alt="avatar"
            src="/assets/images/avatar.jpeg"
            loading="lazy"
            quality={30}
          />
        </div>
      </div>
    </header>
  );
}
