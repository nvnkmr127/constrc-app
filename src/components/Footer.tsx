import Link from "next/link";

export default function Footer() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 -mb-24 relative z-20 mt-12">
        <div className="bg-dark-charcoal rounded-[50px] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <h3 className="text-white text-3xl md:text-5xl font-extrabold leading-tight">
            Subscribe Newsletter<br />
            <span className="text-gray-500 text-sm font-normal">Sign up today to get the latest inspiration &amp; insights</span>
          </h3>
          <div className="relative w-full md:w-auto flex items-center bg-white/10 p-2 rounded-full">
            <input className="bg-transparent border-none text-white focus:ring-0 px-6 w-full md:w-64" placeholder="Enter Your Email Address" type="email" />
            <button className="bg-primary-orange text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 whitespace-nowrap">
              SUBSCRIBE <span className="bg-black/20 rounded-full p-1 text-[10px]">→</span>
            </button>
          </div>
        </div>
      </section>
      <footer className="bg-[#111] pt-48 pb-10 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-8">
              <img
                alt="Logo"
                className="w-10 h-10"
                src="https://placehold.co/150x50/FFF?text=Screw+Wood/AB6AXuAyATOmV04EMffUQbLZlgC41FsydAcxtAzlaXFjnT61DDh1H9BN89Pv-Nik1aoBa9UARYQiFvdig9hq4c0gxUAyMudtQMQ0pjUPsFthr5O9v6m2r7iyp0Xcce8Exl1nua0ROzH-Ehv_YbHER3yff_Qa9P9lfOh06FL8uaB_5j-j4e5O0EAlKTLUF9eSnsJ4Sf3uV9Na488TX2KfdlBYLXo2Ot-9skfFeUcz6zIwRNU0Ed3-B3pFQxK5lhNUKLd4NhQpIotmjTu1wTSA"
              />
              <span className="text-white text-2xl font-bold tracking-tight">Screw Wood</span>
            </div>
            <p className="mb-8 leading-relaxed">Our clients trust us for delivering innovative solutions, exceptional service, and a commitment to excellence.</p>
            <div className="flex space-x-4">
              <Link href="#" className="bg-white/5 p-2 rounded-full hover:bg-primary-orange transition">FB</Link>
              <Link href="#" className="bg-white/5 p-2 rounded-full hover:bg-primary-orange transition">TW</Link>
              <Link href="#" className="bg-white/5 p-2 rounded-full hover:bg-primary-orange transition">IN</Link>
              <Link href="#" className="bg-white/5 p-2 rounded-full hover:bg-primary-orange transition">YT</Link>
            </div>
          </div>
          <div>
            <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Solutions</h5>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-primary-orange">Pricing</Link></li>
              <li><Link href="#" className="text-primary-orange">Meet Our Team</Link></li>
              <li><Link href="#" className="hover:text-primary-orange">Blog</Link></li>
              <li><Link href="#" className="hover:text-primary-orange">HR Guides</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Company</h5>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-primary-orange">Testimonials</Link></li>
              <li><Link href="#" className="hover:text-primary-orange">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary-orange">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Services</h5>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-primary-orange">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary-orange">Our Services</Link></li>
              <li><Link href="#" className="hover:text-primary-orange">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase font-bold tracking-widest">
          <p>Copyright 2024 - All Rights Reserved By Screw Wood</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">Support Center</Link>
            <Link href="#" className="hover:text-white">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
      </footer>
    </>
  );
}
