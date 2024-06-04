import { ArrowUpRight, Phone } from "lucide-react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BLOGS, COMMONLY_FACE_ISSUES, EXPLORE_ARTICLE_CARDS, EXPLORE_OPTIONS, OUR_SERVICES } from "@/data/home";

export default function Home() {
  return (
    <main className="">
      <div className="max-w-[1440px] mx-auto">
        <section className="mx-[10px] sm:mx-[30px] bg-[var(--primary-blue)] rounded-[52px] px-[30px] xl:px-[60px] pt-[26px] pb-[45px] grid xl:grid-cols-2 gap-[30px]">
          <article className="">
            <h1 className="text-[2.06rem] md:text-[3.12rem] lg:text-[4rem] font-medium text-[#fff] mb-[13px] tracking-[3px] pt-[26px]">
              Fast, friendly <br /> and <span className="bg-[var(--primary-red)] px-2 py-1 rounded-[22px]">affordable</span> <br />{" "}
              <span className="bg-[var(--primary-red)] px-2 py-1 rounded-[22px]">testing</span>
              <span className="relative z-[5] inline-flex w-fit group cursor-pointer w-[150px] max-w-[150px]">
                <button
                  type="button"
                  aria-label="Know more"
                  className="relative z-[0] bg-[var(--primary-blue)] group-hover:bg-[#fff] ml-5 text-[1.13rem] rounded-[100px] border-[1px] border-[#fff] w-[100px] group-hover:w-[150px] transition-[width] p-1"
                >
                  <ArrowUpRight className="w-10 h-10 group-hover:rotate-[45deg] transition-all group-hover:text-[var(--primary-blue)]" />
                </button>
                <div className="relative z-[-1] -ml-[80px] rounded-[120px] border-[1px] border-[#fff] h-12 w-[100px] group-hover:-ml-[100px]"></div>
                <div className="relative z-[-2] -ml-[80px] rounded-[140px] border-[1px] border-[#fff] h-12 w-[100px] group-hover:-ml-[100px]"></div>
              </span>
            </h1>
            <p className="mb-0 text-[#DADADA] lg:text-[1.13rem] mb-[35px]">We work with cutting edge testing technology and offer a fast turnaround time to keep your experience hassle-free.</p>
            <div className="text-[var(--primary-blue)] bg-[#cecece] lg:bg-transparent lg:bg-[url('/images/home/article-card-bg.webp')] rounded-[22px] bg-no-repeat bg-contain lg:w-[543px] lg:h-[258px] px-[24px] pt-[49px] pb-[29px] relative z-[1]">
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
          </article>
          <article className="">
            <Carousel className="mb-[18px]">
              <CarouselContent>
                <CarouselItem className="basis-full">
                  <Image
                    src="/images/home/accordion-card.webp"
                    width={659}
                    height={479}
                    alt="Comprehensive and affordible service"
                    className="w-full h-auto lg:w-[659px] lg:h-[479px] object-contain"
                  />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
            <div className="flex flex-col sm:flex-row md:items-center gap-[25px]">
              <div className="flex-1 bg-[#DADADA] text-[var(--primary-blue)] p-[24px] rounded-[40px]">
                <p className="mb-0 text-[2.06rem] lg:text-[3.5rem]">2M +</p>
                <p className="mb-0 text-[1rem] lg:text-[1.13rem]">Tests completed—trust us to move forward with confidence.</p>
              </div>
              <div className="relative flex-1 shrink-0 rounded-[40px] overflow-hidden">
                <Image src="/images/home/customer-rating-card.webp" alt="Ratings provided by customers" width={321} height={178} className="w-full lg:w-[321px] h-auto object-contain" />
              </div>
            </div>
          </article>
        </section>
        <section className="flex flex-col sm:flex-row sm:items-center justify-between sm:px-[40px] xl:px-[80px] mt-[50px] gap-[30px] xl:gap-[70px]">
          <p className="mb-0 text-[0.88rem] font-bold text-[#000000] shrink-0 pl-[20px] sm:pl-0">Commonly faced issues</p>
          <Carousel className="flex-1 overflow-hidden">
            <CarouselContent className="gap-[30px]">
              {COMMONLY_FACE_ISSUES.map((item, index) => (
                <CarouselItem key={item.id} className="basis-auto first:pl-[40px]">
                  <div className="flex items-center gap-[16px]">
                    <Image src={item.src} width={24} height={24} alt={item.title} className="" />
                    <p className="mb-0 text-[0.88rem] shrink-0">{item.title}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>
        <section className="mt-[63px]">
          <h2 className="text-[1.13rem] text-[var(--primary-blue)] font-bold text-center mb-[16px]">Our Services</h2>
          <div className="bg-[#F2F2F2] pt-[38px] pb-[58px] px-[10px] sm:px-0 mx-[15px] md:mx-[30px] rounded-[22px]">
            <ul className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-[155px_155px_155px_155px_155px] place-content-center gap-[68px]">
              {OUR_SERVICES.map((item, index) => (
                <li key={item.id} className="flex flex-col items-center justify-center">
                  <Image src={item.src} alt={item.title} width={111} height={111} className={`w-[80px] h-[80px] lg:w-[111px] lg:h-[111px] object-contain mb-[30px] ${item.id === 2 ? "p-2" : ""}`} />
                  <p className="mb-0 text-center break-words text-[0.75rem] sm:text-[0.88rem]">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      <section className="bg-[#F2F2F2] pt-[30px] pb-[43px] mt-[33px] overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-center gap-[50px] lg:gap-[16px] max-[1440px]:max-w-[1440px] mx-auto">
          <div className="max-w-[515px] lg:basis-[515px] shrink-0 text-[#101010] ml-[20px] md:ml-[72px]">
            <h3 className="text-[2.06rem] md:text-[3.12rem] lg:text-[4rem] mb-[16px] font-bold leading-[1.2]">
              <span className="bg-[#BCFCDC] px-2 rounded-[20px]">Explore</span> the <br /> latest from DLW
            </h3>
            <div className="flex flex-wrap gap-[16px]">
              {EXPLORE_OPTIONS.map((option, index) => (
                <p key={option.id} className="py-[12px] px-[24px] text-[0.88rem] md:text-[1rem] border-[1px] border-[#101010] rounded-full">
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
        <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[65px]">
          <div className="bg-[#F2F2F2] mt-[18px] lg:p-[80px] lg:pb-5 rounded-[22px] grid xl:grid-cols-[429px_1fr]">
            <Card className="main-card border-0 bg-transparent shadow-none">
              <CardHeader>
                <Image src="/images/home/main-blog.webp" alt="A women holding oxygen mask while inhaling oxygen from it." width={429} height={297} className="mb-[23px]" />
                <CardTitle className="">Everything You Should Know About Recurrent Respiratory Infections</CardTitle>
              </CardHeader>
              <CardFooter>
                <p className="tag text-[0.88rem] py-1 px-3 rounded-full border-[#121A44] border-[1px]">Article</p>
              </CardFooter>
            </Card>

            <div className="other-cards">
              {BLOGS.map((card, index) => (
                <Card key={card.id} className="main-card border-0 bg-transparent shadow-none">
                  <CardHeader className="flex flex-col md:flex-row md:gap-[30px] items-start">
                    <Image src={card.src} alt="A women holding oxygen mask while inhaling oxygen from it." width={229} height={171} className="w-full md:w-[229px] mb-[23px]" />
                    <div className="max-w-[423px]">
                      <CardTitle className="mb-0 text-[1.5rem] text-[var(--primary-blue)]">{card.title}</CardTitle>
                      <CardDescription className="text-[0.88rem] text-[#82869B] mt-[14px]">{card.description}</CardDescription>
                      <p className="tag text-[0.88rem] py-1 px-3 rounded-full border-[#121A44] border-[1px] w-fit mt-[14px]">{card.tag}</p>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1440px] mx-auto mt-[80px]">
        <div className="relative bg-[#cecece] md:bg-transparent w-full sm:h-[468px] pt-[80px]">
          <Image src="/images/home/careers-bg.webp" alt="Careers background" fill sizes="100%" className="hidden md:inline-block object-contain" />
          <h2 className="relative text-[2.06rem] md:text-[3.12rem] xl:text-[4rem] text-[#101010] font-medium leading-[1.3] mb-[20px] sm:mb-[68px] pl-[30px] sm:pl-[60px]">
            Be at the Forefront of <br />
            Devansh lab werks
          </h2>
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-[30px] md:gap-0 px-[30px] sm:px-[60px]">
            <p className="mb-0 max-w-[460px]">Devansh Lab Werks, Inc. has multiple openings at multiple levels, open careers page for more information.</p>
            <div className="action-btns flex items-center gap-[16px] mb-10 sm:mb-0">
              <button type="button" className="py-[12px] px-[16px] sm:py-[18px] sm:px-[32px] bg-[var(--primary-blue)] rounded-full">
                <div className="flex items-center gap-2">
                  <span className="text-[#fff] text-[0.88rem] sm:text-[1rem]">Careers</span>
                  <ArrowUpRight className="w-7 h-7 text-[#fff]" />
                </div>
              </button>
              <button type="button" className="py-[12px] px-[16px] sm:py-[18px] sm:px-[32px] border-[var(--primary-blue)] border-[1px] rounded-full">
                <div className="flex items-center gap-2">
                  <span className="text-[var(--primary-blue)] text-[0.88rem] sm:text-[1rem]">Careers</span>
                  <Phone className="w-7 h-7 text-[var(--primary-blue)]" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
