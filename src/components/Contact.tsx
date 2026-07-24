export default function Contact() {
  return (
    <>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="relative">
            <div className="bg-gray-100 rounded-[60px] p-10 h-full">
              <img
                alt="Construction Site"
                className="w-full h-[500px] object-cover rounded-[50px] shadow-2xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaZz-IfmSGskt-9Hgp-cLavQE3fQ1Z8KKUQJAf7sJOQ0nzpQaON3bVMoXRfBlXeJgSmzDu1DRGr0t9lEVSGFvfxYbVmGZchAJfFOWL7FxgYlbJCkPLxrEr931eI1y2hmuTuttBlDurv0l6HDLKbOczIExIp0bqKxOa_Bcpnwrjg8rkxv2PoTlzorV-TIURmrHYFoYfTPe0NmwB1yTHA4QkNhCIMzli40wHdFb8TnZ6vuRQUzHhaZpYJ63dTbmoEJojnRS2GsY7keLU"
              />
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-center gap-4">
                  <div className="bg-primary-orange/10 p-3 rounded-full text-primary-orange">📞</div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-400">Call Us</p>
                    <p className="font-bold text-sm">+88 245 689 4568</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary-orange/10 p-3 rounded-full text-primary-orange">✉️</div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-400">Email Us</p>
                    <p className="font-bold text-sm">example@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-[2px] bg-primary-orange"></div>
              <span className="text-primary-orange font-bold uppercase tracking-widest text-xs">CONTACT US</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-dark-charcoal mb-6">Let's Work Together</h2>
            <p className="text-gray-500 mb-10">We'd love to share more with you, please complete this form and our team will get back to you shortly.</p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-primary-orange" placeholder="Name" type="text" />
                <input className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-primary-orange" placeholder="Email" type="email" />
              </div>
              <textarea className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-primary-orange" placeholder="Your Message" rows={4}></textarea>
              <button className="bg-primary-orange text-white px-10 py-4 rounded-full font-bold flex items-center gap-2 ml-auto" type="submit">
                CONTACT NOW <span className="bg-black/20 rounded-full p-1 text-xs">→</span>
              </button>
            </form>
          </div>
        </div>
      </section>


    </>
  );
}
