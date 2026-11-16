"use client";
import { useState } from "react";
import { ArticleCard } from "@/components/ArticleCard";

const CATEGORIES = ["All stories", "World", "Technology", "Culture", "Travel", "Design", "Science", "Business"];

export const NewsList = ({ articles }: { articles: any[] }) => {
  const [active, setActive] = useState("All stories");

  const filtered = active === "All stories" ? articles : articles.filter((a) => a.category === active);

  return (
    <>
      <div className="border-y border-stone-200 py-4">
        <div className="flex flex-wrap gap-1">
          {CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => setActive(cat)} className={`rounded px-3 py-2.5 text-xs ${active === cat ? "bg-stone-900 text-white" : "text-stone-500 hover:bg-stone-100"}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="my-5 text-xs text-stone-500">{filtered.length} stories to explore</div>

      <div className="grid grid-cols-1 gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </>
  );
};
