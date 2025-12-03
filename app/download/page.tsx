import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Download do App",
  description:
    "Baixe o aplicativo AquaSense para Android e monitore seu sistema de aquaponia em tempo real.",
  openGraph: {
    title: "Download do App AquaSense",
    description:
      "Baixe o aplicativo AquaSense para Android e monitore seu sistema de aquaponia.",
  },
};

export default function Download() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-dark to-primary flex flex-col">
      {/* Header */}
      <header className="w-full">
        <nav className="container mx-auto flex items-center justify-between py-4 px-4">
          <Link href="/">
            <Image
              src="/imgs/image-logo-bar.svg"
              alt="Logo-Aquasense"
              width={150}
              height={40}
              priority
            />
          </Link>
          <Link href="/">
            <button className="bg-white text-primary-dark font-medium py-2 px-6 rounded hover:bg-gray-100 transition-colors cursor-pointer">
              Voltar ao Início
            </button>
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-2xl w-full text-center">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/imgs/image-logo.svg"
              alt="Aquasense Logo"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>

          {/* Título */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Baixe o App AquaSense
          </h1>

          {/* Descrição */}
          <p className="text-gray-600 text-lg mb-8">
            Tenha o controle total do seu sistema de aquaponia na palma da sua
            mão. Monitore em tempo real, receba alertas e gerencie suas plantas
            e peixes de qualquer lugar.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-light rounded-lg p-4">
              <div className="text-primary mb-2 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
              <p className="text-sm text-gray-700 font-medium">
                Monitoramento em tempo real
              </p>
            </div>
            <div className="bg-gray-light rounded-lg p-4">
              <div className="text-primary mb-2 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </div>
              <p className="text-sm text-gray-700 font-medium">
                Alertas instantâneos
              </p>
            </div>
            <div className="bg-gray-light rounded-lg p-4">
              <div className="text-primary mb-2 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
              </div>
              <p className="text-sm text-gray-700 font-medium">
                Interface intuitiva
              </p>
            </div>
          </div>

          {/* Botão de Download */}
          <a
            href="/apk/Aquasense.apk"
            download="Aquasense.apk"
            className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-8 rounded-xl text-lg transition-colors w-full md:w-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Baixar para Android
          </a>

          {/* Informações adicionais */}
          <p className="text-gray-500 text-sm mt-6">
            Versão 1.0 • Android 8.0 ou superior
          </p>
        </div>
      </main>

      {/* Footer simples */}
      <footer className="py-6 text-center text-white/70 text-sm">
        <p>
          © 2024 Technote. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
