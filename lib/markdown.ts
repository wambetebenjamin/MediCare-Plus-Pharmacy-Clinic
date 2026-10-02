import React, { type ReactNode } from "react";

/**
 * Minimal, safe markdown → React renderer for our own health blog content.
 * Supports: ## h2, ### h3, - unordered lists, > blockquote, paragraphs and
 * **bold** / *italic* inline marks. Everything is rendered as React nodes, so
 * there is no HTML injection surface.
 */

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return React.createElement(
        "strong",
        { key: `${keyPrefix}-${i}` },
        part.slice(2, -2)
      );
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return React.createElement(
        "em",
        { key: `${keyPrefix}-${i}` },
        part.slice(1, -1)
      );
    }
    return React.createElement(React.Fragment, { key: `${keyPrefix}-${i}` }, part);
  });
}

export function renderMarkdown(md: string): ReactNode[] {
  const lines = md.split("\n");
  const nodes: ReactNode[] = [];
  let listBuffer: string[] = [];
  let paraBuffer: string[] = [];
  let key = 0;

  const flushPara = () => {
    if (paraBuffer.length) {
      const text = paraBuffer.join(" ");
      nodes.push(
        React.createElement("p", { key: `p-${key++}` }, renderInline(text, `pi-${key}`))
      );
      paraBuffer = [];
    }
  };
  const flushList = () => {
    if (listBuffer.length) {
      const items = listBuffer.map((item, i) =>
        React.createElement("li", { key: `li-${key}-${i}` }, renderInline(item, `lii-${key}-${i}`))
      );
      nodes.push(React.createElement("ul", { key: `ul-${key++}` }, items));
      listBuffer = [];
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flushPara();
      flushList();
      continue;
    }
    if (line.startsWith("### ")) {
      flushPara();
      flushList();
      nodes.push(
        React.createElement("h3", { key: `h3-${key++}` }, renderInline(line.slice(4), `h3i-${key}`))
      );
    } else if (line.startsWith("## ")) {
      flushPara();
      flushList();
      nodes.push(
        React.createElement("h2", { key: `h2-${key++}` }, renderInline(line.slice(3), `h2i-${key}`))
      );
    } else if (line.startsWith("> ")) {
      flushPara();
      flushList();
      nodes.push(
        React.createElement(
          "blockquote",
          { key: `q-${key++}` },
          renderInline(line.slice(2), `qi-${key}`)
        )
      );
    } else if (line.startsWith("- ")) {
      flushPara();
      listBuffer.push(line.slice(2));
    } else if (/^\d+\.\s/.test(line)) {
      flushPara();
      const text = line.replace(/^\d+\.\s/, "");
      listBuffer.push(text);
    } else {
      flushList();
      paraBuffer.push(line);
    }
  }
  flushPara();
  flushList();
  return nodes;
}

/** YAML-ish frontmatter parser for our controlled content files. */
export function parseFrontmatter<T extends Record<string, string>>(
  raw: string
): { data: T; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { data: {} as T, content: raw };
  const data: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const k = line.slice(0, idx).trim();
    let v = line.slice(idx + 1).trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    ) {
      v = v.slice(1, -1);
    }
    data[k] = v;
  }
  return { data: data as T, content: match[2].trim() };
}

/** Rough reading-time calculation, minimum 2 minutes. */
export function readingTime(text: string): string {
  const words = text.split(/\s+/).filter(Boolean).length;
  const mins = Math.max(2, Math.round(words / 200));
  return `${mins} min read`;
}
