import Image from 'next/image';
import GlassmorphismCard from './GlassmorphismCard';
import { Article } from '@/lib/articles';

type ArticleCardProps = {
  article: Article;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <GlassmorphismCard className="overflow-hidden h-full">
      <div className="relative aspect-[16/10]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute top-4 left-4">
          <span className="bg-copper text-cream px-2 py-1 rounded text-xs font-medium">
            {article.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-xs text-green/60 mb-3">
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>
        <h4 className="wv-h4 text-green wv-spacing-xs line-clamp-2">
          {article.title}
        </h4>
        <p className="wv-body text-green/70 wv-spacing-sm line-clamp-3">
          {article.excerpt}
        </p>
        <a href={article.slug} className="text-copper font-medium text-sm hover:underline">
          Weiterlesen →
        </a>
      </div>
    </GlassmorphismCard>
  );
}


