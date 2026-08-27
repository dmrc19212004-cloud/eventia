import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-10">
      <form className="w-full max-w-md rounded-xl bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">
          Crear cuenta
        </h1>

        <p className="mt-2 text-slate-600">
          Regístrate como participante u organizador.
        </p>

        <div className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Nombre completo"
            className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-blue-600"
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-blue-600"
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-blue-600"
          />

          <select className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-blue-600">
            <option value="">Selecciona tu rol</option>
            <option value="participante">Participante</option>
            <option value="organizador">Organizador</option>
          </select>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 p-3 font-medium text-white transition hover:bg-blue-700"
          >
            Crear cuenta
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-slate-600">
          ¿Ya tienes una cuenta?{" "}
          <Link href="/login" className="font-medium text-blue-600">
            Inicia sesión
          </Link>
        </p>
      </form>
    </main>
  );
}