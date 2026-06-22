import type { Content } from "@/lib/types";
import { RichText } from "@/components/RichText";

export default function ReadingBlock({ content }: { content: Content }) {
  return (
    <div className="rounded-2xl border border-line bg-cream/40 p-5">
      {(content.emoji || content.title) && (
        <div className="mb-2 flex items-center gap-2">
          {content.emoji && <span className="text-xl">{content.emoji}</span>}
          {content.title && (
            <h3 className="font-display text-xs font-bold uppercase tracking-wide text-muted">
              {content.title}
            </h3>
          )}
        </div>
      )}
      {content.body && (
        <div className="text-[15px] leading-relaxed text-ink">
          <RichText md={content.body} />
        </div>
      )}
    </div>
  );
}
