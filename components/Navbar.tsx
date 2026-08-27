import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Eventia
        </Link>

        <div className="flex items-center gap-4 text-sm font-medium">
          <Link
            href="/eventos"
            className="text-slate-600 transition hover:text-blue-600"
          >
            Eventos
          </Link>

          <Link
            href="/login"
            className="text-slate-600 transition hover:text-blue-600"
          >
            Ingresar
          </Link>

          <Link
            href="/register"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
          >
            Registrarme
          </Link>
        </div>
      </nav>
    </header>
  );
}