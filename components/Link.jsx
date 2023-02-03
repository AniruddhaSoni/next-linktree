import React from "react";

export default function Link(props) {
  return (
    <li className="tooltip tooltip-primary" data-tip={props.tooltip}>
      <a
        href={props.link}
        target="blank"
        className="w-full b p-6 py-4 hover:bg-white/20 hover:ring-white ring-2 ring-transparent rounded-xl backdrop-blur-sm font-bold text-xl flex items-center gap-2 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className="text-4xl"
        >
          <path fill="white" d={props.svg} />
        </svg>
        <p className="flex-grow text-left">{props.name}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          className="text-3xl"
          viewBox="0 0 24 24"
        >
          <path fill="white" d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4Z" />
        </svg>
      </a>
    </li>
  );
}
