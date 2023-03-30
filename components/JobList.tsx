import Link from "next/link";
import React from "react";
import { JobItem } from "../config/types";

export default function JobList({ title, company, location, link }: JobItem) {
  return (
    <Link
      href={`https://boards.greenhouse.io${link}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between w-full px-4 py-6 mx-4 my-2 font-medium text-black bg-white rounded-sm md:h-14 hover:text-blue-800 drop-shadow-md hover:drop-shadow-lg"
    >
      <div className="flex justify-between flex-1 gap-3">
        <h2 className="md:text-base">{title} - {company}</h2>
        <small className="flex gap-1 text-xs flex-nowrap text-slate-700"><span>🌍</span> {location}</small>
      </div>
    </Link>
  );
}
