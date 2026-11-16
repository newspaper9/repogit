import data from "@/data/news.json";
import { NewsList } from "@/components/NewsList";
import { Metadata } from "next";

const firstArticle = data[0];

export const metadata: Metadata = {
  openGraph: {
    type: "website",
    siteName: "The Daily",
    title: "The Daily — A fresh perspective",
    description: "A little curiosity goes a long way. Explore 20 sample stories about design, technology, culture, and the world around us.",
    images: firstArticle ? [{ url: firstArticle.image, alt: firstArticle.imageAlt }] : [],
  },
};

const Home = () => {
  return (
    <main id="main" className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
      <section className="py-10 pb-16">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-orange-700">STAY CURIOUS</div>
            <h1 className="mt-2 text-3xl font-semibold  tracking-tight sm:text-4xl">
              The latest stories<span className="text-orange-700">.</span>
            </h1>
          </div>
          <p className="hidden pb-1 text-xs text-muted  text-[#65675f] justify-items-end  md:block">Big ideas. Fresh voices. Worth your time.</p>
        </div>

        <NewsList articles={data} />
      </section>
    </main>
  );
};

export default Home;
