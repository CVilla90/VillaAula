import React from "react";

type Variant = "default" | "prompt";

/**
 * Minimal, dependency-free inline formatter: **bold**, *italic*, `code`, and
 * `___` fill-in blanks. In the "prompt" variant a **studied term** renders as a
 * highlighted chip and a blank renders as an underlined gap, so the word being
 * taught never reads as an ordinary sentence word (and the gap reads as a gap).
 */
function renderInline(
  text: string,
  keyBase: string,
  variant: Variant = "default",
): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|_{2,})/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith("**")) {
      const inner = tok.slice(2, -2);
      nodes.push(
        variant === "prompt" ? (
          <strong
            key={`${keyBase}-b${i}`}
            className="rounded-md bg-coral/10 px-1.5 py-0.5 font-bold text-coral-deep"
          >
            {inner}
          </strong>
        ) : (
          <strong key={`${keyBase}-b${i}`} className="font-bold text-ink">
            {inner}
          </strong>
        ),
      );
    } else if (tok.startsWith("`")) {
      nodes.push(
        <code
          key={`${keyBase}-c${i}`}
          className="rounded bg-ink/5 px-1 py-0.5 font-mono text-[0.85em]"
        >
          {tok.slice(1, -1)}
        </code>,
      );
    } else if (tok.startsWith("_")) {
      nodes.push(
        <span
          key={`${keyBase}-blk${i}`}
          aria-label="blank"
          role="img"
          className="mx-1 inline-block w-10 border-b-2 border-coral/50 align-[-0.15em]"
        >
          {" "}
        </span>,
      );
    } else {
      nodes.push(<em key={`${keyBase}-i${i}`}>{tok.slice(1, -1)}</em>);
    }
    last = m.index + tok.length;
    i++;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

/**
 * Tiny markdown renderer for the subset VillaAula content uses: paragraphs,
 * "- " bullet lists, and inline bold/italic/code/blank. No HTML injection.
 */
export function RichText({
  md,
  inline = false,
  variant = "default",
}: {
  md: string;
  inline?: boolean;
  variant?: Variant;
}) {
  if (inline) return <>{renderInline(md, "inl", variant)}</>;

  const lines = md.split("\n");
  const blocks: React.ReactNode[] = [];
  let list: string[] = [];
  let key = 0;

  const flush = () => {
    if (list.length) {
      const items = [...list];
      blocks.push(
        <ul key={`ul${key++}`} className="ml-4 list-disc space-y-1">
          {items.map((it, idx) => (
            <li key={idx}>{renderInline(it, `ul${key}-${idx}`, variant)}</li>
          ))}
        </ul>,
      );
      list = [];
    }
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (line.startsWith("- ")) {
      list.push(line.slice(2));
      continue;
    }
    flush();
    if (line.trim() === "") continue;
    blocks.push(<p key={`p${key++}`}>{renderInline(line, `p${key}`, variant)}</p>);
  }
  flush();

  return <div className="space-y-2">{blocks}</div>;
}
