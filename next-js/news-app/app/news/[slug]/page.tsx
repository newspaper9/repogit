// ------

import data from "@/data/news.json";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { categoryColors } from "@/lib/category-colors";

type ArticleDetailPageType = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export const generateStaticParams = () => {
  return data.map((article) => ({ slug: article.slug }));
};

export async function generateMetadata({ params }: ArticleDetailPageType): Promise<Metadata> {
  const { slug } = await params;
  const article = data.find((item) => item.slug === slug);
  if (!article) notFound();

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      type: "article",
      siteName: "The Daily",
      title: article.title,
      description: article.description,
      images: [{ url: article.image, alt: article.imageAlt }],
    },
  };
}

const ArticleDetailPage = async ({ params }: ArticleDetailPageType) => {
  const { slug } = await params;
  const foundArticles = data.find((article) => article.slug === slug);
  if (!foundArticles) {
    notFound();
  }

  const related = data.filter((article) => article.category === foundArticles.category && article.id !== foundArticles.id);

  const getInitials = (name: string = "Author") => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const authorName = (foundArticles as any).author || "Alex Morgan";
  const authorInitials = (foundArticles as any).authorInitials || getInitials(authorName);
  const readTime = (foundArticles as any).readTime || "1 min read";
  const categoryColor = categoryColors[foundArticles.category];

  return (
    <div id="main" className="max-w-7xl w-full mx-auto px-5 pt-6 sm:px-8 lg:px-12">
      <div className="flex gap-3 items-center">
        <Link href="/" className="text-[#22241F] text-xs font-bold hover:text-[#c44823]">
          ← All stories
        </Link>
        <div className="text-mist-200 text-xs">/</div>
        <div className="text-xs text-[#65675F]">{foundArticles.category}</div>
        <span className="flex ml-auto text-[#65675F] uppercase text-[10px]  ">The daily edit</span>
      </div>

      <div className="h-px border-b my-5 flex-1 border-[#E2E2DA]"></div>
      <div className="flex gap-[10px] flex-col px-5 md:px-8 lg:px-20">
        <div className="mb-5 flex items-center m-4 gap-3">
          <div className={`px-3 py-1 text-xs font-bold rounded-full ${categoryColor}`}>{foundArticles.category.toUpperCase()}</div>
          <span className="h-px w-10 bg-stone-300"></span>
          <div className="text-[#65675F] text-xs">THE DAILY</div>
        </div>

        <div>
          <h1 className="text-[#0C0A09] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">{foundArticles.title}</h1>
          <p className="text-[#57534E] text-xl mt-5">{foundArticles.description}</p>
          <div className="flex-1 h-px border-b my-5 border-[#E2E2DA]"></div>
        </div>

        <div className="block md:flex min-w-0 gap-3.5 items-center">
          <div className={`size-12 flex justify-center items-center rounded-2xl text-sm font-bold ${categoryColor}`}>{authorInitials}</div>
          <div className="mr-16">
            <div className="text-[#65675F] text-[10px] font-semibold tracking-wider">WRITTEN BY</div>
            <div className="text-[#22241F] text-sm font-bold">{authorName}</div>
          </div>
          <div className="flex flex-wrap text-sm sm:gap-x-8 mt-5 md:mt-0 ml-auto">
            <div>
              <div className="text-[#65675F] text-[10px] font-bold tracking-wider">PUBLISHED</div>
              <div className="text-[#22241F] text-sm">{foundArticles.date}</div>
            </div>
            <div className="ml-14 sm:pl-8 border-l border-stone-200 pl-6 sm:pl-8">
              <div className="text-[#65675F] text-[10px] font-bold tracking-wider">READING TIME</div>
              <div className="text-[#22241F] text-sm">{readTime}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-296 h-88 md:h-129 w-full mx-auto rounded-3xl overflow-hidden mt-10 relative">
        <img className="w-full h-full object-cover" src={foundArticles.image} alt={foundArticles.imageAlt} />
      </div>

      <div className="mt-3 flex flex-wrap gap-2 px-5 md:px-8 lg:px-20 text-xs">
        <div className="text-[#65675F]">{foundArticles.imageAlt}</div>
        <div className="text-[#65675F]">· Illustrative photography · Unsplash</div>
      </div>

      <div className="mx-auto w-full lg:px-70 pt-14 md:px-8 px-5">
        <div className="bg-[#FFFFFF] border border-[#E2E2DA] rounded-2xl px-6 sm:px-10">
          <div className="text-[#C44724] text-[10px] font-bold  pb-6 pt-10">━━ THE STORY</div>

          {foundArticles.content?.map((paragraph, index) => (
            <p key={index} className={`mb-6 font-serif text-lg text-stone-700 last:mb-0 sm:text-xl space-y-6 leading-[1.9] ${index === 0 && "first-letter:text-orange-700 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-6xl first-letter:font-bold  first-letter:leading-none first-letter:text-accent"}`}>
              {paragraph}
            </p>
          ))}

          <div className="text-[#C44724] text-base font-bold flex justify-center pt-6 pb-10">• • •</div>
        </div>
      </div>

      <div className="text-[#65675F] text-[11px] pt-4 flex justify-center">Fictional sample story · The Daily learning edition</div>

      <div className="lg:px-61.25 md:px-9.25 px-5">
        <div className="bg-[#FFF7ED] rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 px-6 mt-4 gap-4">
          <div className="text-[#22241F] text-lg font-semibold">
            A little more curiosity?
            <div className="text-[#65675F] text-sm font-normal">Your next good read is just around the corner.</div>
          </div>
          <Link href="/" className="bg-[#22241F] rounded-[100px] text-[#FFFFFF] text-xs flex justify-center items-center px-4 py-2.5 hover:text-[#c44823] transition-colors">
            All stories ↗
          </Link>
        </div>
      </div>

      <div className="border-t border-[#E2E2DA] mt-14 mb-10"></div>

      <div className="pb-7 px-5 md:px-8 lg:px-20">
        <div className="text-[#C44724] text-[10px] font-bold pb-2">KEEP YOUR CURIOSITY GOING</div>
        <div className="text-[#22241F] text-3xl font-bold">More to discover.</div>
      </div>

      <div className="grid grid-cols-1 gap-x-7 gap-y-10 md:px-8 lg:px-20 md:grid-cols-2 lg:grid-cols-3 mb-20">
        {related.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
};

export default ArticleDetailPage;
// ;----------
