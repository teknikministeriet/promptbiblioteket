/**
 * Gruppera prompts per tagg. Taggsidorna byggs ur denna karta, så en tagg
 * har en sida under /tagg/ bara om den finns här (exakt stavning).
 */
export function groupPromptsByTag<T extends { data: { tags?: string[] } }>(prompts: T[]): Map<string, T[]> {
  const tagMap = new Map<string, T[]>();
  for (const p of prompts) {
    for (const tag of p.data.tags || []) {
      if (!tagMap.has(tag)) tagMap.set(tag, []);
      tagMap.get(tag)!.push(p);
    }
  }
  return tagMap;
}

/**
 * Extract the raw prompt text from a markdown body.
 * Prompts are wrapped in ```txt blocks.
 */
export function extractPromptText(body: string): string {
  const match = body.match(/```(?:txt|text)\n([\s\S]*?)```/);
  return match ? match[1].trim() : '';
}

/**
 * Highlight # headings inside prompt text for display.
 * Returns HTML with spans for styling.
 */
export function highlightPromptHeadings(text: string): string {
  return text
    .split('\n')
    .map(line => {
      if (/^#\s/.test(line)) {
        return `<span class="prompt-heading">${escapeHtml(line)}</span>`;
      }
      return escapeHtml(line);
    })
    .join('\n');
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
