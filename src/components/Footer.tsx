export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-fg-muted sm:flex-row">
        <p>© {new Date().getFullYear()} [YOUR NAME]. All rights reserved.</p>
        <p className="font-mono uppercase tracking-widest">
          Built with Next.js
        </p>
      </div>
    </footer>
  );
}
