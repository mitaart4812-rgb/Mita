import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  AudioLines,
  Clock3,
  Compass,
  Layers3,
  MapPin,
  Menu,
  PenTool,
  Phone,
  Quote,
  Share2,
  Sparkles,
  Star,
  X,
} from 'lucide-react';

const phone = '0319 4287482';
const tel = 'tel:+923194287482';
const directions =
  'https://www.google.com/maps/search/?api=1&query=Bismillah+Chowk%2C+Satellite%2C+near+Madni+Mosque%2C+Chishtian+Sharif%2C+62350';
const nav = [
  ['Services', '#services'],
  ['Our approach', '#approach'],
  ['Reviews', '#reviews'],
  ['Find us', '#find-us'],
];

const services = [
  {
    index: '01',
    title: 'Digital marketing',
    detail: 'A clearer direction for the people you want to reach.',
    icon: <AudioLines aria-hidden="true" />,
    color: 'orange',
  },
  {
    index: '02',
    title: 'Content writing',
    detail: 'Words with a point of view, written to sound like you.',
    icon: <PenTool aria-hidden="true" />,
    color: 'cream',
  },
  {
    index: '03',
    title: 'Social media marketing',
    detail: 'Thoughtful, consistent communication for your channels.',
    icon: <Share2 aria-hidden="true" />,
    color: 'yellow',
  },
  {
    index: '04',
    title: 'Advertising',
    detail: 'Creative that gives your message somewhere to go.',
    icon: <ArrowUpRight aria-hidden="true" />,
    color: 'blue',
  },
];

const reviews = [
  {
    quote:
      'Debu Zone provided excellent branding and logo design services. They understood our vision and turned it into a professional design.',
    kind: 'Branding & logo design',
  },
  {
    quote:
      'Had a very good experience with Debu Zone. Their team is professional, creative, and understands client requirements.',
    kind: 'Client experience',
  },
  {
    quote:
      'Excellent website development service. The final website was clean, responsive, and professionally designed. Really satisfied!',
    kind: 'Website development',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="absolute z-20 w-full text-[#f5f0e5]">
        <div className="wrap flex h-[76px] items-center justify-between border-b border-white/20">
          <a href="#top" className="flex items-center gap-3" aria-label="Debu Zone home" data-testid="link-home">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-[#f5f0e5]/60 text-[#f3b44e]">
              <Asterisk size={23} strokeWidth={1.7} />
            </span>
            <span className="display text-[18px] font-bold tracking-[-.06em]">debu zone</span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="menu-link text-[12px] font-medium text-[#e4dfd4]" data-testid={`link-nav-${label.toLowerCase().replaceAll(' ', '-')}`}>
                {label}
              </a>
            ))}
            <a href={tel} className="inline-flex items-center gap-2 border border-[#f5f0e5]/45 px-4 py-2 text-[12px] font-semibold hover:border-[#f3b44e] hover:text-[#f3b44e]" data-testid="link-header-call">
              <Phone size={13} /> Call us
            </a>
          </nav>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center border border-white/30 md:hidden"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            data-testid="button-mobile-menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="absolute left-0 right-0 top-[76px] grid gap-0 border-b border-white/15 bg-[#222641] px-6 md:hidden" aria-label="Mobile navigation">
            {nav.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="border-b border-white/10 py-4 text-sm" data-testid={`link-mobile-${label.toLowerCase().replaceAll(' ', '-')}`}>
                {label}
              </a>
            ))}
            <a href={tel} className="flex items-center gap-2 py-4 text-sm text-[#f3b44e]" data-testid="link-mobile-call"><Phone size={15} /> {phone}</a>
          </nav>
        )}
      </header>

      <main>
        <section id="top" className="grain relative flex min-h-[750px] items-center overflow-hidden bg-[#252943] pb-16 pt-28 text-[#f5f0e5] md:min-h-[790px]">
          <div className="hero-orbit absolute -right-28 top-28 h-[520px] w-[520px] rounded-full border border-white/10 md:right-[7%] md:top-32">
            <div className="absolute inset-8 rounded-full border border-white/10" />
            <div className="absolute inset-[72px] rounded-full border border-white/10" />
            <div className="absolute inset-[112px] rounded-full bg-[#ed613e]">
              <div className="absolute inset-0 grid place-items-center">
                <div className="relative h-44 w-44 rotate-[-12deg] border border-[#252943]/50 md:h-56 md:w-56">
                  <div className="absolute -left-5 -top-5 h-full w-full border border-[#252943]/50" />
                  <div className="absolute inset-0 grid place-items-center text-center text-[#252943]">
                    <span className="eyebrow mb-2">make it</span>
                    <span className="display text-5xl font-bold leading-[.82] md:text-7xl">matter<span className="block">here.</span></span>
                    <span className="eyebrow mt-4">creative, local, yours</span>
                  </div>
                  <span className="absolute -right-7 -top-7 grid h-12 w-12 place-items-center rounded-full bg-[#f3b44e] text-[#252943]"><Sparkles size={21} /></span>
                </div>
              </div>
            </div>
            <span className="hero-orbit-star absolute -left-3 top-[42%] grid h-12 w-12 place-items-center rounded-full bg-[#f3b44e] text-[#252943] orbit-spin"><Asterisk size={29} /></span>
            <span className="eyebrow absolute -right-1 bottom-8 rotate-90 text-white/50">CHISHTIAN SHARIF · PAKISTAN</span>
          </div>
          <div className="wrap relative z-10">
            <div className="max-w-[650px]">
              <p className="eyebrow reveal mb-7 flex items-center gap-3 text-[#f3b44e]"><span className="h-px w-8 bg-[#f3b44e]" />Independent creative & digital services</p>
              <h1 className="display reveal reveal-delay max-w-[700px] text-[clamp(3.15rem,10.5vw,8.8rem)] font-bold leading-[.84]">
                Good ideas.<br /><span className="text-[#f3b44e]">Made visible.</span>
              </h1>
              <p className="reveal reveal-delay-2 mt-8 max-w-[405px] text-[15px] leading-7 text-[#d2d0d2] md:text-[17px]">
                Creative thinking and digital services, rooted right here in Chishtian Sharif.
              </p>
              <div className="reveal reveal-delay-2 mt-9 flex flex-wrap gap-3">
                <a href="#services" className="inline-flex min-h-[52px] items-center gap-6 bg-[#ed613e] px-5 text-sm font-semibold text-[#fff8ec] transition hover:bg-[#f17651]" data-testid="link-explore-services">
                  Explore services <ArrowDownRight size={17} />
                </a>
                <a href={directions} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[52px] items-center gap-2 border border-white/35 px-5 text-sm font-medium transition hover:border-[#f3b44e] hover:text-[#f3b44e]" data-testid="link-hero-directions">
                  <MapPin size={16} /> Find us nearby
                </a>
              </div>
              <div className="mt-14 flex items-center gap-4 border-t border-white/20 pt-5 md:mt-20">
                <div className="flex text-[#f3b44e]" aria-label="5 out of 5 stars"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
                <span className="text-xs text-[#e1ded7]"><strong className="text-white">5.0</strong> from 39 Google reviews</span>
                <span className="ml-auto hidden items-center gap-2 text-[11px] text-[#e1ded7] sm:flex"><span className="h-2 w-2 rounded-full bg-[#f3b44e]" /> Open 24 hours</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[6px] bg-[#ed613e]" />
        </section>

        <div className="overflow-hidden border-b border-[#252943]/15 bg-[#f3b44e] py-4">
          <div className="ticker flex w-max items-center gap-8 whitespace-nowrap text-[#252943]">
            {[0, 1].map((copy) => (
              <div className="flex items-center gap-8" key={copy}>
                {['Local know-how', 'Digital marketing', 'Words with purpose', 'Design that feels right', 'Made in Chishtian'].map((item) => (
                  <span key={item} className="display flex items-center gap-8 text-[17px] font-semibold tracking-tight"><span>{item}</span><Asterisk size={18} /></span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section className="bg-[#f5f0e5] py-24 md:py-32">
          <div className="wrap grid gap-12 md:grid-cols-[.85fr_1.15fr] md:items-end">
            <div>
              <p className="eyebrow mb-6 text-[#ed613e]">01 / A little about us</p>
              <h2 className="display max-w-[480px] text-[clamp(2.8rem,6vw,5.8rem)] font-bold leading-[.9]">Big city thinking.<br /><span className="outline-word">Local roots.</span></h2>
            </div>
            <div className="max-w-[570px] md:justify-self-end">
              <p className="text-lg leading-8 text-[#30334a] md:text-[21px]">The best creative work starts with listening. Debu Zone brings a practical, personal approach to digital and creative services for people and businesses in Chishtian Sharif.</p>
              <p className="mt-5 max-w-[480px] text-sm leading-7 text-[#666674]">From the first line of copy to a complete brand identity, we help shape how your work shows up in the world — clearly, thoughtfully, and with care.</p>
              <a href="#approach" className="mt-8 inline-flex items-center gap-3 border-b border-[#252943] pb-2 text-sm font-semibold" data-testid="link-approach">A thoughtful way to work <ArrowRight size={15} /></a>
            </div>
          </div>
        </section>

        <section id="services" className="bg-[#e9e2d3] py-24 md:py-32">
          <div className="wrap">
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <div>
                <p className="eyebrow mb-5 text-[#ed613e]">02 / What we do</p>
                <h2 className="display text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[.86]">A good idea<br />needs a <span className="text-[#ed613e]">good plan.</span></h2>
              </div>
              <p className="max-w-[300px] text-sm leading-6 text-[#555766]">A focused set of creative services to help your message find its people.</p>
            </div>
            <div className="mt-14 grid border-l border-t border-[#252943]/20 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <article key={service.index} className="service-tile relative min-h-[260px] border-b border-r border-[#252943]/20 p-6 md:min-h-[300px] md:p-7" data-testid={`card-service-${service.index}`}>
                  <div className="flex items-start justify-between">
                    <span className="eyebrow text-[#666674]">{service.index} / 04</span>
                    <span className={`grid h-12 w-12 place-items-center ${service.color === 'orange' ? 'bg-[#ed613e] text-white' : service.color === 'yellow' ? 'bg-[#f3b44e]' : service.color === 'blue' ? 'bg-[#252943] text-[#f5f0e5]' : 'border border-[#252943]/25'}`}>{service.icon}</span>
                  </div>
                  <h3 className="display mt-14 text-[27px] font-semibold leading-[1.03] tracking-[-.045em]">{service.title}</h3>
                  <p className="mt-3 max-w-[225px] text-sm leading-6 text-[#626372]">{service.detail}</p>
                  <ArrowUpRight size={17} className="absolute bottom-6 right-6 text-[#ed613e]" />
                </article>
              ))}
            </div>
            <p className="mt-7 text-xs leading-5 text-[#666674]">Also mentioned by customers: branding and logo design, and website development.</p>
          </div>
        </section>

        <section id="approach" className="relative overflow-hidden bg-[#252943] py-24 text-[#f5f0e5] md:py-32">
          <div className="absolute -right-16 top-0 h-full w-[38%] border-l border-white/10 opacity-50">
            <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15" />
            <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15" />
            <div className="absolute left-1/2 top-1/2 h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f3b44e]" />
          </div>
          <div className="wrap relative z-10">
            <p className="eyebrow mb-5 text-[#f3b44e]">03 / How we work</p>
            <div className="grid gap-12 md:grid-cols-[1fr_.72fr] md:items-end">
              <h2 className="display max-w-[680px] text-[clamp(3.3rem,8vw,7.5rem)] font-bold leading-[.84]">Good work<br />starts with<br /><span className="text-[#f3b44e]">a conversation.</span></h2>
              <div className="max-w-[390px]">
                <p className="text-base leading-7 text-[#d4d2d6]">No noise. No one-size-fits-all answers. Just a clear conversation about what you do, who you do it for, and what you need next.</p>
                <div className="mt-8 grid gap-4 border-t border-white/20 pt-6">
                  {[
                    ['Listen first', 'Understand what matters to you.'],
                    ['Make it clear', 'Find the right words and visual direction.'],
                    ['Keep it useful', 'Create work that makes sense for your next step.'],
                  ].map(([title, desc], i) => (
                    <div className="flex gap-4" key={title}>
                      <span className="eyebrow pt-1 text-[#f3b44e]">0{i + 1}</span>
                      <div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm text-[#bcbcc8]">{desc}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-[#f5f0e5] py-24 md:py-32">
          <div className="wrap">
            <div className="grid gap-10 md:grid-cols-[.72fr_1.28fr]">
              <div>
                <p className="eyebrow mb-5 text-[#ed613e]">04 / Kind words</p>
                <h2 className="display text-[clamp(3rem,6.5vw,6rem)] font-bold leading-[.86]">Said by<br />our <span className="text-[#ed613e]">people.</span></h2>
                <div className="mt-8 flex items-center gap-4">
                  <div className="display text-6xl font-bold tracking-[-.08em]">5.0</div>
                  <div>
                    <div className="flex gap-1 text-[#ed613e]"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
                    <p className="mt-1 text-xs text-[#666674]">39 Google reviews</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-0 border-t border-[#252943]/20">
                {reviews.map((review, i) => (
                  <figure className="grid gap-4 border-b border-[#252943]/20 py-6 md:grid-cols-[40px_1fr]" key={review.kind} data-testid={`review-quote-${i + 1}`}>
                    <Quote size={22} className="mt-1 text-[#ed613e]" />
                    <div>
                      <blockquote className="display max-w-[700px] text-[21px] font-medium leading-[1.35] tracking-[-.035em] md:text-[25px]">“{review.quote}”</blockquote>
                      <figcaption className="eyebrow mt-4 text-[#767681]">{review.kind} · Google review</figcaption>
                    </div>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#ed613e] py-16 text-[#fff7e8] md:py-20">
          <div className="wrap grid gap-9 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="eyebrow mb-5 text-[#ffdfae]">05 / Here when you need us</p>
              <h2 className="display max-w-[750px] text-[clamp(3.1rem,7vw,6.8rem)] font-bold leading-[.84]">Open around<br />the clock.</h2>
              <p className="mt-5 text-sm text-[#ffe1d5]">Debu Zone is open 24 hours.</p>
            </div>
            <div className="flex flex-col items-start gap-4 md:items-end">
              <a href={tel} className="display text-[clamp(1.7rem,4vw,3rem)] font-semibold tracking-[-.05em] hover:text-[#f3b44e]" data-testid="link-call-phone">{phone}</a>
              <a href={tel} className="inline-flex min-h-12 items-center gap-3 bg-[#252943] px-5 text-sm font-semibold text-[#f5f0e5] transition hover:bg-[#333956]" data-testid="button-call-now"><Phone size={16} /> Call Debu Zone <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        <section id="find-us" className="bg-[#e9e2d3] py-24 md:py-32">
          <div className="wrap grid gap-12 md:grid-cols-[.9fr_1.1fr] md:items-center">
            <div>
              <p className="eyebrow mb-5 text-[#ed613e]">06 / Around the corner</p>
              <h2 className="display max-w-[530px] text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[.85]">Right here<br />in <span className="text-[#ed613e]">Chishtian.</span></h2>
              <p className="mt-7 max-w-[390px] text-sm leading-7 text-[#555766]">Find Debu Zone at Bismillah Chowk, Satellite, near Madni Mosque, Chishtian Sharif, 62350.</p>
              <a href={directions} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-[50px] items-center gap-4 border border-[#252943] px-5 text-sm font-semibold transition hover:bg-[#252943] hover:text-[#f5f0e5]" data-testid="link-directions">
                Get directions <Compass size={17} />
              </a>
            </div>
            <a href={directions} target="_blank" rel="noopener noreferrer" aria-label="Open directions to Debu Zone in Google Maps" className="map-grid relative block min-h-[360px] overflow-hidden border border-[#252943]/15 md:min-h-[420px]" data-testid="link-map-directions">
              <div className="absolute inset-0">
                <div className="absolute left-[10%] top-[16%] h-[72%] w-[68%] rotate-[18deg] border-x border-[#252943]/15" />
                <div className="absolute left-[42%] top-[-5%] h-[110%] w-[1px] rotate-[32deg] bg-[#252943]/20" />
                <div className="absolute left-[-10%] top-[50%] h-[1px] w-[120%] rotate-[-12deg] bg-[#252943]/20" />
                <div className="absolute left-[58%] top-[38%] grid h-[72px] w-[72px] place-items-center rounded-full bg-[#ed613e] text-[#fff7e8] shadow-[0_0_0_12px_rgba(237,97,62,.16)]"><MapPin size={29} fill="currentColor" /></div>
                <span className="eyebrow absolute left-[14%] top-[24%] rotate-[-12deg] text-[#67697a]">SATELLITE</span>
                <span className="eyebrow absolute bottom-[21%] left-[25%] rotate-[-12deg] text-[#67697a]">BISMILLAH CHOWK</span>
                <span className="eyebrow absolute right-[8%] top-[17%] rotate-90 text-[#67697a]">MADNI MOSQUE</span>
                <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-[#f5f0e5] px-4 py-3 shadow-md">
                  <Layers3 size={17} className="text-[#ed613e]" />
                  <span className="text-xs font-semibold">Debu Zone <span className="font-normal text-[#666674]">· Chishtian Sharif</span></span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-[#252943] py-9 text-[#f5f0e5]">
        <div className="wrap flex flex-col gap-7 border-t border-white/15 pt-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <a href="#top" className="display text-[25px] font-bold tracking-[-.06em]" data-testid="link-footer-home">debu zone<span className="text-[#f3b44e]">.</span></a>
            <p className="mt-2 text-xs text-[#bebdca]">Creative & digital services · Chishtian Sharif, Pakistan</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-[#dedbe1]">
            <a href={tel} className="hover:text-[#f3b44e]" data-testid="link-footer-phone">Call {phone}</a>
            <a href={directions} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-[#f3b44e]" data-testid="link-footer-directions">Directions <ArrowUpRight size={12} /></a>
            <span className="inline-flex items-center gap-1"><Clock3 size={13} /> Open 24 hours</span>
          </div>
        </div>
        <div className="wrap mt-8 flex justify-between border-t border-white/10 pt-4 text-[10px] tracking-wide text-[#9394a3]"><span>DEBU ZONE · CHISHTIAN SHARIF</span><span>Good ideas belong everywhere.</span></div>
      </footer>
      <a href={tel} className="fixed bottom-4 right-4 z-30 grid h-14 w-14 place-items-center rounded-full bg-[#ed613e] text-[#fff8ec] shadow-[0_8px_24px_rgba(35,38,58,.25)] md:hidden" aria-label="Call Debu Zone" data-testid="button-floating-call"><Phone size={21} /></a>
    </div>
  );
}

export default App;