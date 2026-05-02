export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center p-5">
      <div className="flex h-full w-full items-center justify-center rounded-3xl border border-dashed border-surface-border bg-surface/60">
        <div className="max-w-md px-6 text-center">
          <p className="font-mono text-xs tracking-[0.24em] text-copy-faint uppercase">
            Shared Canvas
          </p>
          <h1 className="mt-3 font-heading text-3xl font-semibold text-copy-primary">
            Editor chrome is in the layout.
          </h1>
          <p className="mt-3 text-sm leading-6 text-copy-secondary">
            The navbar and floating project sidebar now frame the route through
            the shared app layout.
          </p>
        </div>
      </div>
    </div>
  );
}
