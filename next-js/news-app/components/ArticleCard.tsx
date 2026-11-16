// import Link from "next/link";
// import { categoryColors } from "@/lib/category-colors";

// type ArticleCardType = {
//   id: number;
//   slug: string;
//   title: string;
//   description: string;
//   category: string;
//   image: string;
//   imageAlt: string;
//   author: string;
//   date: string;
//   content: string[];
// };

// const getReadTime = (content: string[]) => {
//   const words = content.join(" ").split(/\s+/).filter(Boolean).length;
//   return Math.max(1, Math.ceil(words / 200));
// };

// export const ArticleCard = (props: ArticleCardType) => {
//    const { title, description, category, content, author, date, image, imageAlt, slug } = props;

//    const initials = author
//     .split(" ")
//     .map((n) => n[0])
//     .join("");

//   const categoryColor = categoryColors[category];

//   return (
//     <Link href={`/news/${slug}`} className="group flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-950/5 focus-visible:border-orange-300 motion-reduce:transform-none motion-reduce:transition-none">
//       <div className="relative w-full h-55 overflow-hidden">
//         <img src={image} alt={imageAlt} className="w-full h-full object-cover" />

//         <span className="relative top-4 left-4  text-xs text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">{category}</span>

//         <div className="absolute bottom-4 left-4 text-white text-xs font-medium flex items-center gap-1.5">
//           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
//             <circle cx="12" cy="12" r="9" />
//             <path d="M12 7v5l3 2" />
//           </svg>
//           {getReadTime(content)} min read
//         </div>
//       </div>

//       <div className="flex flex-col gap-2 px-7">
//         <h3 className="text-xl font-bold text-[#1C1917] leading-snug pb-3 line-clamp-2 ">{title}</h3>
//         <p className="text-sm text-[#57534E] font-normal line-clamp-3">{description}</p>
//       </div>

//       <div className="mx-7 mb-6 pt-5 flex items-center justify-between border-t border-gray-100">
//         <div className="flex items-center gap-3">
//           <div className={`w-11 h-11 rounded-full  flex items-center justify-center font-bold text-sm">{initials}</div>
//           <div>
//             <h4 className="text-sm font-semibold text-[#292524]">{author}</h4>
//             <p className="text-xs text-[#78716C]">{date}</p>
//           </div>
//         </div>

//         <div className="w-11 h-11 rounded-full bg-[#FFF7ED] text-[#C44724] flex items-center justify-center hover:bg-red-100 transition-colors">
//           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//             <path d="M7 17L17 7M8 7h9v9" />
//           </svg>
//         </div>
//       </div>
//     </Link>;
//   ),
// }

// import Link from "next/link";
// import { categoryColors } from "@/lib/category-colors";

// type ArticleCardType = {
//   id: number;
//   slug: string;
//   title: string;
//   description: string;
//   category: string;
//   image: string;
//   imageAlt: string;
//   author: string;
//   date: string;
//   content: string[];
// };

// const getReadTime = (content: string[]) => {
//   const words = content.join(" ").split(/\s+/).filter(Boolean).length;
//   return Math.max(1, Math.ceil(words / 200));
// };

// export const ArticleCard = (props: ArticleCardType) => {
//   const { title, description, category, content, author, date, image, imageAlt, slug } = props;

//   const initials = author
//     .split(" ")
//     .map((n) => n[0])
//     .join("");

//   const categoryColor = categoryColors[category] || "bg-stone-100 text-stone-800";

//   return (
//     <Link href={`/news/${slug}`} className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-950/5 focus-visible:border-orange-300 motion-reduce:transform-none motion-reduce:transition-none">
//       <div className="relative w-full h-56 overflow-hidden">
//         <img src={image} alt={imageAlt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

//         <span className={`absolute top-4 left-4 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider ${categoryColor}`}>{category}</span>

//         <div className="absolute bottom-4 left-4 text-white text-xs font-medium flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-md backdrop-blur-sm">
//           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
//             <circle cx="12" cy="12" r="9" />
//             <path d="M12 7v5l3 2" />
//           </svg>
//           {getReadTime(content)} min read
//         </div>
//       </div>

//       <div className="flex flex-col gap-2 px-7 pt-6">
//         <h3 className="text-xl font-bold text-[#1C1917] leading-snug pb-3 line-clamp-2">{title}</h3>
//         <p className="text-sm text-[#57534E] font-normal line-clamp-3">{description}</p>
//       </div>

//       <div className="mx-7 mb-6 pt-5 mt-auto flex items-center justify-between border-t border-gray-100">
//         <div className="flex items-center gap-3">
//           <div className="w-11 h-11 rounded-full bg-stone-100 text-stone-700 flex items-center justify-center font-bold text-sm">{initials}</div>
//           <div>
//             <h4 className="text-sm font-semibold text-[#292524]">{author}</h4>
//             <p className="text-xs text-[#78716C]">{date}</p>
//           </div>
//         </div>

//         <div className="w-11 h-11 rounded-full bg-[#FFF7ED] text-[#C44724] flex items-center justify-center group-hover:bg-orange-100 transition-colors">
//           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//             <path d="M7 17L17 7M8 7h9v9" />
//           </svg>
//         </div>
//       </div>
//     </Link>
//   );
// };

import Link from "next/link";
import { categoryColors } from "@/lib/category-colors";

type ArticleCardType = {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  author: string;
  date: string;
  content: string[];
};

const getReadTime = (content: string[]) => {
  const words = content.join(" ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
};

export const ArticleCard = (props: ArticleCardType) => {
  const { title, description, category, content, author, date, image, imageAlt, slug } = props;

  const initials = author
    .split(" ")
    .map((n) => n[0])
    .join("");

  const categoryColor = categoryColors[category] || "bg-stone-100 text-stone-800";

  return (
    <Link href={`/news/${slug}`} className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-950/5 focus-visible:border-orange-300 motion-reduce:transform-none motion-reduce:transition-none">
      <div className="relative w-full h-60 overflow-hidden">
        <img src={image} alt={imageAlt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <span className={`absolute top-5 left-5 text-[10px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm ring-1 ring-inset ${categoryColor}`}>{category}</span>t
        <div className="absolute bottom-4 left-4 text-white text-xs font-medium flex items-center gap-1.5">
          {" "}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />{" "}
          </svg>
          {getReadTime(content)} min read{" "}
        </div>{" "}
      </div>

      <div className="flex flex-col gap-3 p-7 pb-4">
        <h3 className="text-xl font-bold text-[#1C1917] leading-snug line-clamp-2">{title}</h3>
        <p className="text-sm text-[#57534E] font-normal leading-relaxed line-clamp-3">{description}</p>
      </div>

      <div className="p-7 pt-4 mt-auto flex items-center justify-between border-t border-gray-100">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-full bg-stone-100 text-stone-700 flex items-center justify-center font-bold text-sm">{initials}</div>
          <div>
            <h4 className="text-sm font-semibold text-[#292524]">{author}</h4>
            <p className="text-xs text-[#78716C] mt-0.5">{date}</p>
          </div>
        </div>

        <div className="w-11 h-11 rounded-full bg-[#FFF7ED] text-[#C44724] flex items-center justify-center group-hover:bg-orange-100 transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 17L17 7M8 7h9v9" />
          </svg>
        </div>
      </div>
    </Link>
  );
};
