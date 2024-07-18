import { ArrowUpRight, Phone } from "lucide-react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BLOGS, COMMONLY_FACE_ISSUES, EXPLORE_ARTICLE_CARDS, EXPLORE_OPTIONS, OUR_SERVICES } from "@/data/home";

const CONTAINER_STYLES = "max-w-[1440px] mx-auto px-[30px] lg:px-[65px]";

function V3Home() {
  return (
    <>
      <section className="pt-[33px] bg-[#fff]">
        <div className={`${CONTAINER_STYLES}`}>
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
      <section className={`${CONTAINER_STYLES} mt-5`}>
        <div className="wrapper bg-[#121116] py-[33px] px-[1rem] sm:px-[3rem] rounded-[22px]">
          <div className="flex flex-wrap gap-10 items-center justify-between max-w-[1100px] mx-auto">
            <div className="flex flex-col gap-[16px] text-[#fff] max-w-[725px]">
              <p className="mb-0 text-[22px] sm:text-[33px] font-bold">Explore Exciting Opportunities.</p>
              <p className="mb-0 text-[14px] sm:text-[18px] font-light">Didn't find what you're looking for? Join our Talent Network for updates on new openings. Sign Up Now</p>
            </div>
            <button
              type="button"
              className="capitalize text-[22px] font-bold px-[19.5px] py-[7.5px] border-[1px] border-[#fff] text-[#fff] rounded-[33px] hover:bg-[#fff] focus:bg-[#fff] hover:text-[#000000] focus:text-[#000000] transition-all"
            >
              Sign up now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default V3Home;
