export default function Page() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-semibold">FAIRy — Local, Open, Fast</h1>
      <p className="mt-2 text-zinc-700">Home page placeholder.</p>
      <ul className="mt-4 list-disc list-inside">
        <li><a className="underline" href="/geo-precheck">/geo-precheck</a></li>
        <li><a className="underline" href="/zenodo-precheck">/zenodo-precheck</a></li>
        <li><a className="underline" href="/export-pack">/export-pack</a></li>
        <li><a className="underline" href="/early-access">/early-access</a></li>
      </ul>
    </main>
  );
}
