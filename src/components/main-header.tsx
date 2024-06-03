import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { Anek_Kannada } from "next/font/google";

const navLinksInit = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "About", href: "/" },
  { id: 3, title: "Services", href: "/" },
  { id: 4, title: "Payments", href: "/" },
  { id: 5, title: "Careers", href: "/" },
  { id: 6, title: "Blogs & Resources", href: "/" },
  { id: 7, title: "Contact", href: "/" },
  { id: 8, title: "Billing", href: "/" },
];

const anek_kannada = Anek_Kannada({ subsets: ["kannada"] });

export default function MainHeader() {
  return (
    <header className={`bg-[#fff] mb-[15px] anek-kannada-bold ${anek_kannada.className}`}>
      <section className="max-w-[1440px] mx-auto pl-5 md:pl-10 xl:pl-[91px] pr-5 md:pr-10 xl:pr-[54px] py-[11.5px]">
        <div className="flex items-center justify-between">
          <Image src="/images/defaults/logo-blue.webp" alt="DLW logo" className="object-contain" width={60} height={35} />
          <ul className="flex items-center gap-[34px]">
            {navLinksInit.slice(0, 6).map((navLink, index) => (
              <li key={navLink.id}>
                <Link href={navLink.href} className="capitalize text-[0.75rem] text-[var(--primary-blue)] hover:border-b-[1px] border-[var(--primary-blue)]">
                  {navLink.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-[34px]">
            <button type="button" aria-label="Open search">
              <Search className="text-[var(--primary-blue)] w-5 h-5" />
            </button>
            <ul className="flex items-center gap-[34px]">
              {navLinksInit.slice(6).map((navLink, index) => (
                <li key={navLink.id}>
                  <Link href={navLink.href} className="capitalize text-[0.75rem] text-[var(--primary-blue)] font-bold hover:border-b-[1px] border-[var(--primary-blue)]">
                    {navLink.title}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              type="button"
              aria-label="Login"
              className="text-[#fff] bg-[var(--primary-red)] text-[0.75rem] rounded-[22px] w-[113px] h-[34px] flex items-center justify-center font-bold hover:contrast-75 focus:contrast-75 active:contrast-100"
            >
              Login
            </button>
          </div>
        </div>
      </section>
    </header>
  );
}
