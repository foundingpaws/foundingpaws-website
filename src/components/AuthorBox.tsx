type Author = {
  name: string;
  title?: string;
  bio?: string;
  avatarUrl?: string;
  reviewer?: { name: string; title?: string };
  updated?: string; // ISO or human-readable
  links?: { label: string; href: string }[];
};

type AuthorBoxProps = {
  author: Author;
};

export default function AuthorBox({ author }: AuthorBoxProps) {
  return (
    <aside className="wv-card p-6 border border-green/10 bg-white">
      <div className="flex items-start gap-4">
        {author.avatarUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={author.avatarUrl} alt={author.name} className="w-14 h-14 rounded-full object-cover" />
        )}
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div>
              <div className="wv-subhead text-green">{author.name}</div>
              {author.title && <div className="wv-caption text-green/70">{author.title}</div>}
            </div>
            {author.updated && (
              <div className="wv-caption text-green/60">Zuletzt aktualisiert: {author.updated}</div>
            )}
          </div>
          {author.bio && <p className="wv-body text-green/75 mt-3">{author.bio}</p>}
          {author.reviewer && (
            <div className="wv-caption text-green/70 mt-2">Fachlich geprüft von {author.reviewer.name}{author.reviewer.title ? `, ${author.reviewer.title}` : ''}</div>
          )}
          {author.links && author.links.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-3">
              {author.links.map((l, i) => (
                <a key={i} href={l.href} className="text-copper text-sm font-medium hover:underline">{l.label}</a>
              ))}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}


