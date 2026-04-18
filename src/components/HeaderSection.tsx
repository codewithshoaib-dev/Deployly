

export default function Header({setModal}: {setModal : (value: boolean) => void}) {

    return (
      <header className="fixed top-0 w-full z-50 backdrop-blur border-b border-neutral-800 py-4 px-6 flex justify-between items-center">
        <div className="text-xl text-neutral-900 font-bold">Deployly</div>
        <nav className="hidden sm:flex space-x-6 text-sm">
          <a href="#features" className="hover:text-foreground-hover">
            Features
          </a>
          <a href="#pricing" className="hover:text-foreground-hover">
            Pricing
          </a>
          <a href="#" className="hover:text-foreground-hover">
            Docs
          </a>
          <button
            onClick={() => setModal(true)}
            className="ml-4 bg-primary px-4 py-2 rounded-xl text-sm font-semibold text-white shadow hover:scale-105 transition-[scale]"
          >
            See how it works
          </button>
        </nav>
        <button
          onClick={() => setModal(true)}
          className="block sm:hidden ml-4 bg-primary px-4 py-2 rounded-xl text-sm font-semibold text-white shadow hover:scale-105 transition-[scale]"
        >
          See how it works
        </button>
      </header>
    );
}