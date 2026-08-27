import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-10">
      <form className="w-full max-w-md rounded-xl bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">
          Iniciar sesión
        </h1>

        <p className="mt-2 text-slate-600">
          Ingresa para acceder a tu cuenta de Eventia.
        </p>

        <div className="mt-6 space-y-4">
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

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 p-3 font-medium text-white transition hover:bg-blue-700"
          >
            Ingresar
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-slate-600">
          ¿No tienes una cuenta?{" "}
          <Link href="/register" className="font-medium text-blue-600">
            Regístrate
          </Link>
        </p>
      </form>
    </main>
  );
}