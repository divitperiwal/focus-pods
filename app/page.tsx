import FeatureCarousel from "@/components/FeatureCarousel";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <main>
      <section className="flex flex-col lg:flex-row items-center justify-between w-[90%] m-auto mt-12 gap-8 px-4">
        <div className="flex flex-col items-start justify-center gap-8 w-full lg:w-[60%]">
          <div className="tracking-wider font-semibold text-5xl sm:text-5xl lg:text-7xl font-roboto-condensed leading-14 sm:leading-tight ">
            <h1 className="sm:word-spacing-wide">Enter the Flow State.</h1>
            <h1 className="sm:word-spacing-wide"> Every Time.</h1>
          </div>

          <span className="text-gray-700 text-sm sm:text-base">
            AI-generated focus music, personalized for your flow
          </span>

          <div className="flex flex-wrap gap-4 mt-4">
            <Link href={"/web-player"} className="w-full sm:w-auto">
              <Button className="cursor-pointer bg-gradient-to-r from-[#00e0ff] via-[#3b82f6] to-[#6366f1] text-base h-14 sm:h-16 w-full sm:w-56 rounded-full select-none">
                Generate Focus Music
              </Button>
            </Link>
            <Button className="bg-white text-black hover:bg-white cursor-pointer hover:shadow-md text-base h-14 sm:h-16 w-full sm:w-56 rounded-full select-none">
              Try Demo Session
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden lg:block w-full lg:w-[40%]"></div>
      </section>

      <section className="w-[90%] mx-auto mt-18 px-4">
        <FeatureCarousel />
      </section>
    </main>
  );
};

export default Home;
