import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerNavLinks, footerSocialLinks } from "@/data/main-footer";

export default function MainFooter() {
  return (
    <footer className="max-w-[1440px] mx-auto sm:px-[32px] sm:mb-[43px] mt-[33px]">
      <div className="bg-[var(--primary-blue)] text-[#fff] sm:rounded-[22px] px-5 md:px-10 xl:px-[48px] pt-[80px] pb-[56px]">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 pb-[80px] border-b-[1px] border-[#606060]">
          <section className="order-1 md:order-0 inter flex items-start flex-wrap gap-[75px]">
            {footerNavLinks.map((item, index) => (
              <article key={item.id}>
                <p className="mb-0 capitalize text-[1.5rem] font-semibold mb-[24px]">{item.title}</p>
                <ul>
                  {item.links.map((link, index) => (
                    <li key={link.id} className="mb-[16px] last:mb-0">
                      <Link href={link.href} className="text-[1.13rem] text-[#FAFAFA] font-normal ">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
          <section className="order-0 md:order-1">
            <Image src="/images/defaults/logo-white.webp" alt="DLW logo" className="" width={153} height={88} />
            <p className="mb-0 mt-[28px] max-w-[513px]">We work with cutting edge testing technology and offer a fast turnaround time to keep your experience hassle-free.</p>
          </section>
        </div>
        <section className="mt-[56px]">
          <ul className="flex items-center flex-wrap gap-[16px]">
            {footerSocialLinks.map((item, index) => (
              <li key={item.id}>
                <button
                  type="button"
                  aria-label={item.title}
                  className="rounded-[100px] py-[10px] px-[16px] text-[1rem] border-[1px] border-[#fff] hover:text-[var(--primary-blue)] hover:bg-[#fff] focus:text-[var(--primary-blue)] focus:bg-[#fff]"
                >
                  {item.title}
                </button>
              </li>
            ))}
            <li className="flex-1 basis-[100%] md:basis-auto">
              <div className="cursor-default w-full rounded-[100px] py-[10px] px-[16px] text-[1rem] border-[1px] border-[#fff] flex items-center justify-center">
                <div className="flex items-center gap-[8px]">
                  <Image src="/images/defaults/logo-white.webp" alt="DLW logo" className="" width={38} height={22} />
                  <span className="">Dewansh lab werks all Rights Reserved</span>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
}
