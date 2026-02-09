"use client";

const UNITS = [
  { id: "vh", label: "vh", height: "100vh", bg: "#e85d4c" },
  { id: "lvh", label: "lvh", height: "100lvh", bg: "#5c6bc0" },
  { id: "svh", label: "svh", height: "100svh", bg: "#66bb6a" },
  { id: "dvh", label: "dvh", height: "100dvh", bg: "#ec407a" },
] as const;

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.";

export default function Home() {
  return (
    <div className="w-full">
      <div className="sticky top-0 z-10 flex w-full items-start">
        {UNITS.map(({ id, label, height, bg }) => (
          <div
            key={id}
            className="flex flex-1 flex-col overflow-hidden"
            style={{ height }}
          >
            <div
              className="shrink-0 px-4 py-3 font-bold text-black"
              style={{ backgroundColor: bg }}
            >
              {label}
            </div>
            <div
              className="flex-1 overflow-hidden px-4 py-3 text-black"
              style={{ backgroundColor: bg }}
            >
              <p className="text-sm leading-relaxed">{LOREM}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="min-h-[100vh] bg-stone-900 px-4 py-12 text-stone-400">
        <p className="mx-auto max-w-2xl text-center text-sm">
          Scroll the page — one scrollbar for the whole page. On mobile, as the
          address bar shows or hides, the dvh column height updates.
        </p>
      </div>
    </div>
  );
}
