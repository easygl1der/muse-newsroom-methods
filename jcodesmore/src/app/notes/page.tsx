import { readFileSync } from "node:fs";
import path from "node:path";

export default function NotesPage() {
  const notes = readFileSync(
    path.join(process.cwd(), "NOTES.md"),
    "utf8",
  );
  return (
    <main style={{ maxWidth: 800, margin: "40px auto", padding: 24 }}>
      <pre style={{ whiteSpace: "pre-wrap", fontFamily: "ui-monospace, monospace" }}>
        {notes}
      </pre>
    </main>
  );
}
