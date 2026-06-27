"use client";

import type { Content } from "@/lib/types";
import { RichText } from "@/components/RichText";
import { t } from "@/lib/i18n";
import { useContentLang } from "@/components/i18n/ContentLang";
import AudioBlock from "./AudioBlock";

export default function ReadingBlock({ content }: { content: Content }) {
  const { lang } = useContentLang();
  if (content.type === "audio") return <AudioBlock content={content} />;

  const title = content.title ? t(content.title, lang) : "";

  return (
    <div className="rounded-2xl border border-line bg-cream/40 p-5">
      {(content.emoji || title) && (
        <div className="mb-2 flex items-center gap-2">
          {content.emoji && <span className="text-xl">{content.emoji}</span>}
          {title && (
            <h3 className="font-display text-xs font-bold uppercase tracking-wide text-muted">
              {title}
            </h3>
          )}
        </div>
      )}
      {content.body && (
        <div className="text-[15px] leading-relaxed text-ink">
          <RichText md={t(content.body, lang)} />
        </div>
      )}
    </div>
  );
}
