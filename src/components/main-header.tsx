import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { Anek_Kannada } from "next/font/google";
import { Menu } from "lucide-react";

const navLinksInit = [
  { id: 1, title: "About", href: "/" },
  { id: 2, title: "Payments", href: "/" },
  { id: 3, title: "Careers", href: "/" },
  { id: 4, title: "Billing", href: "/" },
];

const anek_kannada = Anek_Kannada({ subsets: ["kannada"] });

export default function MainHeader() {
  return (
    <header className={`bg-[#fff] mb-[15px] anek-kannada-bold ${anek_kannada.className}`}>
      <section className="max-w-[1440px] mx-auto px-[15px] md:px-[35px] py-[20px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <button type="button" className="w-6 h-6 shrink-0">
              <Menu className="w-6 h-6 text-[#BE0F25]" />
            </button>
            <Image src="/images/defaults/logo-blue.webp" alt="DLW logo" className="object-contain" width={60} height={35} />
          </div>
          <div className="flex items-center gap-[34px]">
            <ul className="hidden lg:flex items-center gap-[34px]">
              {navLinksInit.slice(0, 3).map((navLink, index) => (
                <li key={navLink.id}>
                  <Link href={navLink.href} className="capitalize text-[0.88rem] text-[var(--primary-blue)] hover:border-b-[1px] border-[var(--primary-blue)]">
                    {navLink.title}
                  </Link>
                </li>
              ))}
            </ul>
            <button type="button" aria-label="Search">
              <Search className="text-[var(--primary-blue)] w-5 h-5" />
            </button>
            <ul className="hidden lg:flex items-center gap-[34px]">
              {navLinksInit.slice(3).map((navLink, index) => (
                <li key={navLink.id}>
                  <Link href={navLink.href} className="capitalize text-[0.88rem] text-[var(--primary-blue)] font-bold hover:border-b-[1px] border-[var(--primary-blue)]">
                    {navLink.title}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              type="button"
              aria-label="Login"
              className="text-[#fff] bg-[var(--primary-red)] text-[0.88rem] rounded-[22px] w-[80px] md:w-[113px] h-[34px] flex items-center justify-center font-bold hover:contrast-75 focus:contrast-75 active:contrast-100"
            >
              Login
            </button>
          </div>
        </div>
      </section>
    </header>
  );
}
