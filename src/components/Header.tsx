import Link from 'next/link';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 px-4 py-6">
      <nav className="max-w-7xl mx-auto flex justify-between items-center bg-white/10 backdrop-blur-md rounded-full px-8 py-4 border border-white/20">
        <div className="flex items-center space-x-2">
          <img
            alt="Logo"
            className="w-10 h-10"
            src="https://placehold.co/150x50/FFF?text=Screw+Wood/AB6AXuAB2rZApaVuAYKLKP6S8Wb1UDfX8e17U900MxFflhJlW_fe27dsx3SKg795jgxT8bm-UHjHWhMOWO-gB20IUDMfSVBjY1gmOqJt_Bctb8W0nP_Xb8AYip16i84Qgr5mY6eTmoFv_kmCEbpjeqbDuSme5RJLu5oFVoQFfyD-iw3CKL-_YqfXZ0Ck-GrCUTocMbIHVYDLpVOxQ5ojHD7bsF2XGGrwPfHxPIASiEtNMQ3JL0Ni8buce82tEl7tKOOrX97RZrD8araOklCD"
          />
          <span className="text-white text-2xl font-bold tracking-tight">Screw Wood</span>
        </div>
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li><Link href="#" className="hover:text-primary-orange">Home</Link></li>
          <li><Link href="#" className="hover:text-primary-orange">Services</Link></li>
          <li><Link href="#" className="hover:text-primary-orange">Projects</Link></li>
          <li><Link href="#" className="hover:text-primary-orange">News</Link></li>
          <li><Link href="#" className="hover:text-primary-orange">Contact</Link></li>
        </ul>
        <div className="flex items-center space-x-2 md:space-x-4">
          <button className="hidden md:block text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
          <Link href="#" className="hidden md:flex bg-primary-orange text-white px-6 py-2 rounded-full font-bold items-center gap-2">
            GET A QUOTE <span className="bg-black/20 rounded-full p-1 text-xs">→</span>
          </Link>
          <button className="text-white">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
