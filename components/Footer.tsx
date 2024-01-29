"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex items-center gap-10 py-16">
      <Link
        className="text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
        href="https://cheatswala.com"
      >
        Our Website &nbsp;&#129109;
      </Link>
      <Link
        href="https://github.com/DevD00T"
        className="flex items-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
      >
        <span className="pr-2">Made By</span>
        
        <span className="pl-1 font-medium text-slate-200">DevD00T</span>
      </Link>
      <Link
        href="https://github.com/DevD00T/Code2Image"
        className="flex items-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
      >
        Source Code Here &nbsp;&#129109;
      </Link>
    </div>
  );
}

export default Footer;