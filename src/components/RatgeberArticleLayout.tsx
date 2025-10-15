import TableOfContents from "@/components/TableOfContents";
import KeyTakeaways from "@/components/KeyTakeaways";
import AuthorBox from "@/components/AuthorBox";
import RelatedArticles from "@/components/RelatedArticles";

type RatgeberArticleLayoutProps = {
  slug: string;
  takeaways?: string[];
  children: React.ReactNode;
};

export default function RatgeberArticleLayout({ slug, takeaways = [], children }: RatgeberArticleLayoutProps) {
  return (
    <>
      <section className="wv-section bg-cream">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[280px,1fr] gap-10 items-start max-w-6xl mx-auto">
            <div className="hidden lg:block sticky top-24">
              <TableOfContents rootSelector="main" />
            </div>
            <div className="prose prose-lg max-w-none">
              {takeaways.length > 0 && <KeyTakeaways items={takeaways} />}
              {children}
            </div>
          </div>
        </div>
      </section>

      <section className="wv-section bg-cream">
        <div className="container-wide max-w-4xl mx-auto">
          <RelatedArticles currentSlug={slug} />
          <div className="wv-spacing-xl" />
          <AuthorBox
            author={{
              name: "Founding Paws Redaktion",
              title: "Evidenzbasierter Ratgeber",
              updated: "Oktober 2025",
              links: [{ label: "LinkedIn", href: "https://www.linkedin.com/company/foundingpaws" }],
            }}
          />
        </div>
      </section>
    </>
  );
}


