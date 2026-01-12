import { useLocation } from "wouter";
import { useEffect } from "react";

function Home() {
  return (
    <div className="min-h-screen w-full max-w-[680px] mx-auto px-6 md:px-12 selection:bg-foreground/10 selection:text-foreground">
      {/* Header / Above the Fold */}
          <header className="hero min-h-[85vh] flex flex-col justify-start pt-28 pb-12">
        <div className="w-full max-w-[680px] px-6 md:px-12">
          <h1 className="text-5xl md:text-6xl font-medium mb-3 tracking-tight leading-[1.05] text-foreground">
            Spandan
          </h1>
          <p className="text-lg md:text-2xl leading-[1.2] text-balance mb-6 font-medium text-foreground">
            Story & IP Studio
          </p>
            <div className="hero-copy mt-2">
            <p className="hero-primary">
              We design narratives brands can own and build on —
            </p>
            <p className="hero-secondary">
              so each time they speak, more is heard.
            </p>
          </div>
            
        </div>
      </header>

      {/* 1. What Spandan Is */}
      <section className="border-t border-foreground/10 pt-32 pb-16 md:pb-24">
        <h2 className="text-xs font-normal uppercase tracking-widest text-muted-foreground mb-8">
          01 — What Spandan Is
        </h2>
        <div className="prose prose-lg prose-stone prose-p:text-foreground/90 prose-p:font-serif prose-headings:font-serif prose-headings:font-normal">
          <p className="text-xl md:text-2xl leading-relaxed">
            Spandan is a focused practice built around story, meaning, and
            audience pulse.
          </p>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            In a world driven by volume, we choose precision. We design
            narratives and IP that help brands connect clearly and stay
            memorable.
          </p>
        </div>
      </section>

      {/* 2. What We Work On */}
      <section className="section-spacing border-t border-foreground/10">
        <h2 className="text-xs font-normal uppercase tracking-widest text-muted-foreground mb-8">
          02 — What We Work On
        </h2>
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-medium mb-3">IP Development</h3>
            <p className="text-muted-foreground leading-relaxed max-w-prose">
              Creating narrative worlds, characters, and systems that your brand
              can build on long-term.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-3">Narrative Strategy</h3>
            <p className="text-muted-foreground leading-relaxed max-w-prose">
              Defining the core story and guidelines that shape your brand's
              identity and voice.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-3">Creative Direction</h3>
            <p className="text-muted-foreground leading-relaxed max-w-prose">
              Guiding creative choices across ideas, formats, and execution.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Who We Work With */}
      <section className="section-spacing border-t border-foreground/10">
        <h2 className="text-xs font-normal uppercase tracking-widest text-muted-foreground mb-8">
          03 — Who We Work With
        </h2>
        <div className="text-lg md:text-xl leading-relaxed space-y-6">
          <p>
            We work with founders, platforms, and teams who treat storytelling
            as a core part of how they build and grow.
          </p>
          <p className="text-muted-foreground">
            They are either refining an existing narrative or shaping one for
            the first time, and value clarity and long-term thinking over
            volume.
          </p>
        </div>
      </section>

      {/* 4. About the Lead */}
      <section className="section-spacing border-t border-foreground/10">
        <h2 className="text-xs font-normal uppercase tracking-widest text-muted-foreground mb-8">
          04 — About the Lead
        </h2>
        <div className="flex flex-col gap-8">
          <div className="space-y-6">
            <p className="text-xl md:text-2xl leading-relaxed">
              Anuj Anil Jain is a writer and strategist with a background in
              storytelling and corporate communications. He specializes in
              adding emotion to the product-market-fit.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Alongside media and brand work, he continues to work on
              scriptwriting and narrative development through his personal
              practice.
            </p>
            <p className="text-lg">
              <a
                href="https://rare-antimatter-b84.notion.site/Anuj-Anil-Jain-2cf6d78b86d680d3ba04ca16b2e9798d"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-muted-foreground transition-colors border-b border-foreground/30 hover:border-foreground"
              >
                View portfolio
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* 5. Contact */}
      <section className="section-spacing border-t border-foreground/10">
        <h2 className="text-xs font-normal uppercase tracking-widest text-muted-foreground mb-8">
          05 — Contact
        </h2>
        <div className="space-y-6">
          <p className="text-xl leading-relaxed">
            We take on a limited number of engagements each year to ensure
            focused attention.
          </p>
          <p className="text-xl leading-relaxed">
            If you're exploring a story, IP, or narrative challenge worth
            solving, write to us.
          </p>
          <div className="mt-8">
            <a
              href="mailto:anuj@creativespandan.com"
              className="text-xl md:text-2xl hover:text-muted-foreground transition-colors border-b border-foreground/30 hover:border-foreground pb-1"
            >
              anuj@creativespandan.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-foreground/10 text-sm text-muted-foreground/60 flex flex-col md:flex-row justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} Spandan Creative Solutions</p>
        <p>Sole proprietorship registered in India</p>
      </footer>
    </div>
  );
}

function App() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <Home />;
}

export default App;
