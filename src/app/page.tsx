import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const COMMONLY_FACE_ISSUES = [
  { id: 1, title: "Chest pain", src: "/images/home/issue-1.webp" },
  { id: 2, title: "Cardiovascular issues", src: "/images/home/issue-2.webp" },
  { id: 3, title: "Rapid weight loss or gain", src: "/images/home/issue-3.webp" },
  { id: 4, title: "Irregular Menstrual Cycle", src: "/images/home/issue-4.webp" },
  { id: 5, title: "Poor sleep", src: "/images/home/issue-5.webp" },
];

const OUR_SERVICES = [
  { id: 1, title: "Respiratory Pathogens", src: "/images/home/service-1.webp" },
  { id: 2, title: "Urinary tract infection", src: "/images/home/service-2.webp" },
  { id: 3, title: "Pharmacogenomics (PGX)", src: "/images/home/service-3.webp" },
  { id: 4, title: "Wound Pathogens", src: "/images/home/service-4.webp" },
  { id: 5, title: "Blood Chemistry", src: "/images/home/service-5.webp" },
];

const EXPLORE_OPTIONS = [
  { id: 1, title: "Respiratory" },
  { id: 2, title: "Blood Chemistry" },
  { id: 3, title: "Lifestyle" },
  { id: 4, title: "Pharmacogenomics" },
  { id: 5, title: "UTI" },
  { id: 6, title: "See all" },
];

const EXPLORE_ARTICLE_CARDS = [
  { id: 1, title: "Leading with Lab Data", description: "Our lab data has the answers to empower Doctors", href: "/", src: "/images/home/explore-1.webp" },
  { id: 2, title: "Delivering insights ", description: "Find talent and interact with candidates in an innovative way", href: "/", src: "/images/home/explore-2.webp" },
  { id: 3, title: "Stop wondering. Go test yourself.", description: "Explore over 50 self-ordered lab tests get answers about your health.", href: "/", src: "/images/home/explore-1.webp" },
];

export default function Home() {
  return (
    <main className="">
      <div className="max-w-[1440px] mx-auto">
        <section className="mx-[30px] bg-[var(--primary-blue)] rounded-[52px] px-[60px] pt-[26px] pb-[45px] grid grid-cols-2 gap-[30px]">
          <div className="">
            <h1 className="text-[4rem] font-medium text-[#fff] mb-[13px] tracking-[3px] pt-[26px]">
              Fast, friendly <br /> and <span className="bg-[var(--primary-red)] px-2 py-1 rounded-[22px]">affordable</span> <br />{" "}
              <span className="bg-[var(--primary-red)] px-2 py-1 rounded-[22px]">testing</span>
              <span className="relative inline-flex w-fit group cursor-pointer w-[150px]">
                <button
                  type="button"
                  aria-label="Know more"
                  className="relative z-[3] bg-[var(--primary-blue)] group-hover:bg-[#fff] ml-5 text-[1.13rem] rounded-[100px] border-[1px] border-[#fff] w-[100px] group-hover:w-[140px] transition-[width] p-1"
                >
                  <ArrowUpRight className="w-10 h-10 group-hover:rotate-[45deg] transition-all group-hover:text-[var(--primary-blue)]" />
                </button>
                <div className="relative z-[2] -ml-[80px] rounded-[120px] border-[1px] border-[#fff] h-12 w-[100px] group-hover:-ml-[100px]"></div>
                <div className="relative z-[1] -ml-[80px] rounded-[140px] border-[1px] border-[#fff] h-12 w-[100px] group-hover:-ml-[100px]"></div>
              </span>
            </h1>
            <p className="mb-0 text-[#DADADA] text-[1.13rem] mb-[35px]">We work with cutting edge testing technology and offer a fast turnaround time to keep your experience hassle-free.</p>
            <div className="text-[var(--primary-blue)] bg-[url('/images/home/article-card-bg.webp')] bg-no-repeat bg-contain w-[543px] h-[258px] pl-[24px] pt-[49px] pb-[29px] relative z-[1] w-[400px]">
              <div className="text-block relative z-[3]">
                <p className="mb-0 text-[1.5rem] leading-[1.3] mb-[8px]">
                  Comprehensive testing <br />
                  Services for employers
                </p>
                <p className="mb-0 text-[1.13rem] mb-[32px]">
                  Comprehensive test packages for employers. <br /> Move forward with confidence.
                </p>
                <button type="button" className="flex items-center gap-[10px] capitalize text-[1rem] font-bold">
                  <span className="">Read more</span>
                  <span className="">-&gt;</span>
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <Carousel className="mb-[18px]">
              <CarouselContent>
                <CarouselItem>
                  <Image src="/images/home/accordion-card.webp" width={659} height={479} alt="Comprehensive and affordible service" className="object-contain" />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
            <div className="flex items-center gap-[25px]">
              <div className="flex-1 bg-[#DADADA] text-[var(--primary-blue)] p-[24px] rounded-[40px]">
                <p className="mb-0 text-[3.5rem]">2M +</p>
                <p className="mb-0 text-[1.13rem]">Tests completed—trust us to move forward with confidence.</p>
              </div>
              <div className="relative flex-1 shrink-0 w-[321px] h-[178px] rounded-[40px] overflow-hidden">
                <Image src="/images/home/customer-rating-card.webp" alt="" fill sizes="100%" className="object-contain" />
              </div>
            </div>
          </div>
        </section>
        <section className="flex items-center justify-between px-[80px] mt-[50px]">
          <p className="mb-0 text-[0.88rem] font-bold text-[#000000]">Commonly faced issues</p>
          <ul className="flex items-center gap-[54px]">
            {COMMONLY_FACE_ISSUES.map((item, index) => (
              <li key={item.id} className="flex items-center gap-[16px]">
                <Image src={item.src} width={24} height={24} alt={item.title} className="" />
                <p className="mb-0 text-[0.88rem]">{item.title}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="mt-[63px]">
          <h2 className="text-[1.13rem] text-[var(--primary-blue)] font-bold text-center mb-[16px]">Our Services</h2>
          <div className="bg-[#F2F2F2] pt-[38px] pb-[58px] rounded-[22px]">
            <ul className="grid grid-cols-[155px_155px_155px_155px_155px] place-content-center gap-[68px]">
              {OUR_SERVICES.map((item, index) => (
                <li key={item.id} className="flex flex-col items-center justify-center">
                  <Image src={item.src} alt={item.title} width={111} height={111} className={`object-contain mb-[30px] ${item.id === 2 ? "p-2" : ""}`} />
                  <p className="mb-0 text-center">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      <section className="bg-[#F2F2F2] pt-[30px] pb-[43px] mt-[33px]">
        <div className="flex items-center justify-center gap-[16px] max-[1440px]:max-w-[1440px] mx-auto">
          <div className="max-w-[515px] basis-[515px] shrink-0 text-[#101010] ml-[72px]">
            <h3 className="text-[4rem] mb-[16px] font-bold leading-[1.2]">
              <span className="bg-[#BCFCDC] px-2 rounded-[20px]">Explore</span> the <br /> latest from DLW
            </h3>
            <div className="flex flex-wrap gap-[16px]">
              {EXPLORE_OPTIONS.map((option, index) => (
                <p key={option.id} className="py-[12px] px-[24px] text-[1rem] border-[1px] border-[#101010] rounded-full">
                  {option.title}
                </p>
              ))}
            </div>
          </div>
          <div className="carousel-block">
            <Carousel>
              <CarouselContent>
                {EXPLORE_ARTICLE_CARDS.map((item, index) => (
                  <CarouselItem key={item.id} className="basis-[350px]">
                    <div className="rounded-[40px] bg-[#fff] p-[24px]">
                      <Image src={item.src} alt={item.title} width={296} height={300} className="mb-[24px]" />
                      <p className="mb-0 font-bold text-[#1D1D21] mb-[4px]">{item.title}</p>
                      <p className="mb-0 text-[#606060] mb-[16px]">{item.description}</p>
                      <button
                        type="button"
                        aria-label="Read more"
                        className="rounded-full w-full py-[12px] flex items-center justify-center gap-[10px] text-[#fff] text-[1rem] bg-[var(--primary-blue)]"
                      >
                        <span className="">Read more</span>
                        <ArrowUpRight className="w-7 h-7" />
                      </button>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>
      <section className="pt-[33px] bg-[#fff]">
        <h2 className="text-[1.13rem] text-[var(--primary-blue)] font-bold text-center mb-[16px]">Blogs & Resources</h2>
        <div className="max-w-[1440px] mx-auto px-[65px]">
          <div className="bg-[#F2F2F2] mt-[18px] lg:p-[80px] rounded-[22px]"></div>
        </div>
      </section>
    </main>
  );
}
