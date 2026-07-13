import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logoAsset from "@/assets/logo-liz.png.asset.json";
import leticiaAsset from "@/assets/leticia-baccin.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/5544991318081?text=" +
  encodeURIComponent(
    "Olá! Quero garantir minha vaga na Formação Psicogenealogia LIZ 2026 — Turma 2.",
  );

const pillars = [
  { title: "Psicogenealogia", desc: "Heranças invisíveis da árvore familiar." },
  { title: "Neurociência", desc: "Como o cérebro registra e libera padrões." },
  { title: "Parapsicologia", desc: "Campos sutis e memórias transgeracionais." },
  { title: "Nova Medicina Germânica", desc: "A raiz emocional dos sintomas." },
  { title: "Decodificação Dental", desc: "O que os dentes contam da sua história." },
  { title: "Cabalá", desc: "Sabedoria ancestral aplicada ao propósito de alma." },
];

const modules = [
  { level: "Nível 1", title: "Fundamentos", desc: "Bases da Psicogenealogia Viva e leitura da árvore." },
  { level: "Nível 2", title: "Aprofundamento", desc: "Padrões transgeracionais, lealdades invisíveis e síndromes." },
  { level: "Nível 3", title: "Aplicação clínica", desc: "Ferramentas terapêuticas, atendimento e conduta." },
  { level: "Nível 4", title: "Maestria", desc: "Integração, supervisão e projetos autorais." },
];

const magistrais = [
  { code: "CM1", title: "Árvore Sensitiva", note: "Presencial · Opcional" },
  { code: "CM2", title: "Decodificação de Tatuagens e Marcas Pessoais", note: "Ao vivo" },
  { code: "CM3", title: "Grafologia Científica Aplicada", note: "Ao vivo" },
];

const audiences = [
  { title: "Autoconhecimento", desc: "Para quem busca compreender a raiz dos próprios conflitos." },
  { title: "Terapeutas", desc: "Um novo repertório clínico integrativo e transformador." },
  { title: "RH & Organizacional", desc: "Leitura de padrões, mediação e cultura de equipes." },
  { title: "Educadores", desc: "Compreensão profunda do vínculo aluno-família-escola." },
  { title: "Conciliadores", desc: "Mediação de conflitos e missões de paz." },
];

const faqs = [
  { q: "Preciso de formação prévia para participar?", a: "Não. A formação é aberta a qualquer pessoa em busca de autoconhecimento — não há pré-requisitos técnicos." },
  { q: "As aulas são ao vivo ou gravadas?", a: "As aulas são 100% online e ao vivo, com gravações disponíveis por 2 anos na plataforma Hotmart." },
  { q: "Quando começa a Turma 2?", a: "O início oficial é 17/07/2026, com encontros semanais em horário divulgado no ato da inscrição." },
  { q: "Recebo certificado ao final?", a: "Sim. Ao concluir os níveis, você recebe certificação da Escola LIZ como Terapeuta em Psicogenealogia Viva." },
  { q: "Existe suporte durante o curso?", a: "Sim. Além das aulas, há mentorias ao vivo com a Letícia e equipe pedagógica." },
  { q: "Posso parcelar o investimento?", a: "Sim, em até 20x. Consulte a tabela de investimento e fale com nossa equipe pelo WhatsApp." },
  { q: "As Classes Magistrais são obrigatórias?", a: "A CM1 (Árvore Sensitiva) é opcional e presencial. CM2 e CM3 integram a formação ao vivo." },
  { q: "Como funciona a Decodificação de Nomes?", a: "Você tem acesso à Aula Básica (8h gravada) e à Avançada (8h presencial/ao vivo)." },
  { q: "Sou de fora do Brasil, posso participar?", a: "Sim. Temos tabela de investimento em euros e alunos formados em diversos países." },
];

const testimonials = [
  {
    name: "Marina Alves",
    role: "Psicóloga · SP",
    text: "A Formação da Letícia reorganizou minha escuta clínica. A Árvore Sensitiva me deu uma leitura que nenhuma outra abordagem havia oferecido — meus pacientes chegam mais rápido na raiz.",
  },
  {
    name: "Rafael Monteiro",
    role: "Terapeuta Integrativo · RJ",
    text: "As Chaves Clínicas são um divisor de águas. Saí da formação com um repertório terapêutico profundo, ético e absolutamente único. Impacto imediato no meu consultório.",
  },
  {
    name: "Cláudia Ferreira",
    role: "Aluna Turma 1 · PT",
    text: "Mais do que um curso, é uma travessia. A Letícia conduz com uma presença rara — comecei buscando autoconhecimento e terminei encontrando o meu propósito de alma.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <VideoSection />
      <Authority />
      <Pillars />
      <Structure />
      <ForWhom />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-elegant transition-all duration-300 hover:scale-110 hover:shadow-glow"
      style={{ backgroundColor: "#25D366" }}
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M16.003 3C9.373 3 4 8.373 4 15c0 2.383.696 4.6 1.892 6.47L4 29l7.735-1.86A11.94 11.94 0 0 0 16.003 27C22.633 27 28 21.627 28 15S22.633 3 16.003 3zm0 21.6c-1.86 0-3.596-.51-5.084-1.393l-.363-.216-4.59 1.103 1.122-4.474-.236-.376A9.55 9.55 0 0 1 6.4 15c0-5.293 4.31-9.6 9.603-9.6 5.293 0 9.6 4.307 9.6 9.6 0 5.293-4.307 9.6-9.6 9.6zm5.523-7.19c-.303-.152-1.79-.883-2.067-.983-.277-.101-.478-.152-.68.152-.202.303-.782.983-.958 1.185-.176.202-.353.227-.656.076-.303-.152-1.278-.47-2.434-1.5-.9-.802-1.507-1.79-1.683-2.094-.176-.303-.019-.467.133-.618.137-.136.303-.353.454-.53.152-.176.202-.303.303-.505.101-.202.05-.379-.025-.53-.076-.152-.68-1.638-.933-2.243-.246-.59-.497-.51-.68-.52l-.58-.01c-.202 0-.53.076-.807.379-.277.303-1.058 1.034-1.058 2.52 0 1.487 1.083 2.924 1.234 3.126.152.202 2.132 3.256 5.166 4.567.723.312 1.286.498 1.725.638.724.23 1.383.198 1.904.12.581-.086 1.79-.732 2.043-1.44.252-.706.252-1.312.176-1.44-.076-.126-.277-.202-.58-.353z"/>
      </svg>
    </a>
  );
}

function VideoSection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-accent">Uma palavra da docente</span>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            Assista ao <em>convite</em> da Letícia
          </h2>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-3xl border border-border shadow-elegant">
          <iframe
            src="https://www.youtube.com/embed/jez_-ZYfygE?si=vP8Z4E7p9L3rW1T2&controls=1"
            title="Convite Formação Psicogenealogia LIZ 2026"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-gradient-soft py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-accent">Prova Social</span>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            Vozes de quem <em>atravessou</em>
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-2xl border border-border bg-card p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <span
                aria-hidden="true"
                className="absolute -top-6 left-6 font-display text-7xl leading-none text-primary"
              >
                &ldquo;
              </span>
              <blockquote className="mt-4 italic leading-relaxed text-muted-foreground">
                {t.text}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-display text-lg text-foreground">{t.name}</div>
                <div className="text-xs uppercase tracking-wider text-accent">{t.role}</div>
              </figcaption>
              <span
                aria-hidden="true"
                className="absolute bottom-2 right-6 font-display text-7xl leading-none text-primary"
              >
                &rdquo;
              </span>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full glass px-6 py-3">
        <a href="#top" className="flex items-center gap-2.5 font-display text-xl tracking-tight text-primary">
          <img src={logoAsset.url} alt="Escola LIZ" className="h-9 w-9 object-contain" />
          Escola <span className="-ml-1 italic">LIZ</span>
        </a>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#autoridade" className="hover:text-primary">Docente</a>
          <a href="#bases" className="hover:text-primary">Metodologia</a>
          <a href="#estrutura" className="hover:text-primary">Formação</a>
          <a href="#investimento" className="hover:text-primary">Investimento</a>
          <a href="#faq" className="hover:text-primary">FAQ</a>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary-glow"
        >
          Inscrever-se
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero pb-32 pt-40 text-white">
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-lilac/30 blur-3xl animate-float" />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-primary-glow/40 blur-3xl animate-float" />

      <div className="relative mx-auto max-w-5xl px-6 text-center animate-fade-up">
        <img
          src={logoAsset.url}
          alt="Escola LIZ"
          className="mx-auto mb-8 h-20 w-20 object-contain drop-shadow-[0_8px_30px_rgba(212,175,55,0.4)] animate-float"
        />
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary-glow backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-lilac animate-pulse" />
          Turma 2 · Início 17 · 07 · 2026
        </span>

        <h1 className="mt-8 font-display text-5xl leading-[1.05] md:text-7xl">
          Formação <em className="text-lilac-soft">Psicogenealogia</em>
          <br /> Viva 2026
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
          Uma jornada de autoconhecimento profundo, 100% online e ao vivo, para
          compreender as raízes invisíveis dos seus relacionamentos, sintomas e
          propósito de alma.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground shadow-elegant transition hover:scale-[1.02] hover:bg-primary-glow"
          >
            Garantir minha vaga
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
          <a href="#investimento" className="text-sm text-white/70 underline underline-offset-4 hover:text-white">
            Ver investimento
          </a>
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            ["+5.000", "alunos formados"],
            ["28 anos", "de trajetória da docente"],
            ["2 anos", "de acesso pela Hotmart"],
          ].map(([n, l]) => (
            <div
              key={n}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-white/10 hover:shadow-glow"
            >
              <div className="font-display text-3xl text-primary-glow">{n}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-white/60">{l}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function Authority() {
  return (
    <section id="autoridade" className="bg-gradient-soft py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-[minmax(0,1fr)_1.2fr]">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-3xl shadow-elegant">
          <img
            src={leticiaAsset.url}
            alt="Letícia Kuchockowolec Baccin, fundadora da Escola LIZ"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent p-8 text-white">
            <div className="font-display text-2xl italic text-primary-glow">Letícia Baccin</div>
            <div className="text-sm text-white/80">Fundadora · Escola LIZ</div>
          </div>
        </div>

        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-accent">A Docente</span>
          <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
            Letícia Kuchockowolec Baccin
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Advogada há <strong className="text-foreground">28 anos</strong>, ex-sócia do
            5º maior escritório do Brasil, liderando equipes de 650 pessoas. Foi a
            <strong className="text-foreground"> primeira brasileira</strong> a promover
            formação de Psicogenealogia no país e é a criadora da Escola LIZ.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Palestrante <strong className="text-foreground">TEDx</strong>, autora de livros
            e entrevistada por Você S/A, O Globo, Viva Saúde e outras grandes mídias.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {["TEDx", "Autora", "Você S/A", "O Globo", "Viva Saúde", "+5.000 alunos"].map((t) => (
              <span key={t} className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-primary">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-10 border-t border-border pt-8">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Como visto em</div>
            <div className="mt-5 flex flex-wrap items-center gap-x-10 gap-y-4">
              <span className="font-display text-2xl italic text-muted-foreground grayscale transition hover:text-primary hover:grayscale-0">
                Você <span className="not-italic">S/A</span>
              </span>
              <span className="font-display text-2xl uppercase tracking-widest text-muted-foreground grayscale transition hover:text-primary hover:grayscale-0">
                TED<span className="text-primary">x</span>
              </span>
              <span className="font-display text-2xl italic text-muted-foreground grayscale transition hover:text-primary hover:grayscale-0">
                O Globo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section id="bases" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-accent">Bases & Metodologia</span>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            As <em>colunas mestras</em> da Psicogenealogia Viva
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="font-display text-4xl text-lilac transition group-hover:text-primary-glow">
                0{i + 1}
              </div>
              <h3 className="mt-4 font-display text-2xl text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-lilac-soft opacity-0 blur-2xl transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Structure() {
  return (
    <section id="estrutura" className="bg-lilac-soft/40 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-accent">Estrutura da Formação</span>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            Uma jornada em <em>4 níveis</em>
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {modules.map((m) => (
            <div key={m.level} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:border-primary/40 hover:bg-white/10">
              <div className="text-xs uppercase tracking-wider text-accent">{m.level}</div>
              <h3 className="mt-2 font-display text-2xl text-ink">{m.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-gradient-accent p-8 text-[#1A1A1A] shadow-elegant">
            <h3 className="font-display text-2xl">Classes Magistrais</h3>
            <ul className="mt-6 space-y-4">
              {magistrais.map((c) => (
                <li key={c.code} className="flex items-start gap-4 border-t border-[#1A1A1A]/20 pt-4 first:border-0 first:pt-0">
                  <span className="font-display text-lg text-[#1A1A1A]/70">{c.code}</span>
                  <div>
                    <div className="font-medium">{c.title}</div>
                    <div className="text-xs uppercase tracking-wider text-[#1A1A1A]/70">{c.note}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <h3 className="font-display text-2xl text-ink">Decodificação de Nomes</h3>
            <p className="mt-3 text-muted-foreground">
              Compreenda o poder simbólico e vibracional dos nomes próprios.
            </p>
            <div className="mt-6 space-y-4">
              <div className="rounded-xl bg-lilac-soft/60 p-4">
                <div className="text-sm font-medium text-primary">Aula Básica · 8h gravada</div>
                <div className="text-xs text-muted-foreground">Acesso imediato na plataforma</div>
              </div>
              <div className="rounded-xl bg-lilac-soft/60 p-4">
                <div className="text-sm font-medium text-primary">Aula Avançada · 8h ao vivo</div>
                <div className="text-xs text-muted-foreground">Presencial / online ao vivo</div>
              </div>
            </div>
            <div className="mt-6 border-t border-border pt-6">
              <div className="text-xs uppercase tracking-wider text-accent">Também inclui</div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>· Mentorias ao vivo com Letícia Baccin</li>
                <li>· 2 anos de acesso via Hotmart</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ForWhom() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-accent">Para quem é</span>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            Para quem está pronto para <em>se ver</em>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a, i) => (
            <div key={a.title} className="rounded-2xl border border-border p-8 transition hover:border-accent hover:bg-lilac-soft/30">
              <div className="font-display text-3xl text-lilac">0{i + 1}</div>
              <h3 className="mt-4 font-display text-xl text-ink">{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="investimento" className="bg-gradient-hero py-28 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-lilac-soft">Investimento & Inscrição</span>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            Escolha a sua <em>condição especial</em>
          </h2>
          <p className="mt-4 text-white/70">
            Valores promocionais válidos até <strong>10/07/2026</strong>. O
            preenchimento não efetiva a inscrição — a confirmação é feita via WhatsApp.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <PriceCard
            country="Brasil"
            currency="R$"
            full="6.900,00"
            special="4.830,00"
            installment="20x R$ 345,00"
            highlight
          />
          <PriceCard
            country="Exterior"
            currency="€"
            full="1.150"
            special="805"
            installment="20x € 41"
          />
        </div>

        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-lg font-medium text-primary-foreground shadow-glow transition hover:scale-[1.02] hover:bg-primary-glow"
          >
            Falar com a equipe no WhatsApp
            <span>→</span>
          </a>
          <p className="mt-4 text-sm text-white/60">(44) 99131-8081 · atendimento humanizado</p>
        </div>
      </div>
    </section>
  );
}

function PriceCard({
  country, currency, full, special, installment, highlight = false,
}: {
  country: string; currency: string; full: string; special: string; installment: string; highlight?: boolean;
}) {
  return (
    <div className={`relative rounded-3xl p-8 ${highlight ? "bg-gradient-accent text-[#1A1A1A] shadow-elegant" : "border border-white/15 bg-white/5 backdrop-blur text-white"}`}>
      {highlight && (
        <span className="absolute -top-3 left-8 rounded-full bg-[#1A1A1A] px-4 py-1 text-xs font-medium uppercase tracking-wider text-primary-glow">
          Mais escolhido
        </span>
      )}
      <div className={`text-xs uppercase tracking-[0.2em] ${highlight ? "text-[#1A1A1A]/70" : "text-primary-glow"}`}>
        {country}
      </div>
      <div className="mt-6 flex items-baseline gap-2">
        <span className={`text-sm line-through ${highlight ? "text-[#1A1A1A]/60" : "text-white/60"}`}>
          {currency} {full}
        </span>
        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${highlight ? "bg-[#1A1A1A] text-primary-glow" : "bg-primary/20 text-primary-glow"}`}>
          30% OFF
        </span>
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="font-display text-6xl">{currency} {special}</span>
      </div>
      <div className={`mt-2 text-sm ${highlight ? "text-[#1A1A1A]/80" : "text-white/80"}`}>
        à vista · ou {installment}
      </div>

      <ul className={`mt-8 space-y-3 border-t pt-6 text-sm ${highlight ? "border-[#1A1A1A]/20" : "border-white/15"}`}>
        {["4 níveis completos", "Classes Magistrais (CM2 + CM3)", "Decodificação de Nomes (16h)", "Mentorias ao vivo", "2 anos de acesso Hotmart"].map((f) => (
          <li key={f} className="flex items-start gap-3">
            <span className={`mt-1 h-1.5 w-1.5 rounded-full ${highlight ? "bg-[#1A1A1A]" : "bg-primary"}`} />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-accent">Dúvidas Frequentes</span>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            Perguntas <em>respondidas</em>
          </h2>
        </div>

        <div className="mt-14 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-card">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition hover:bg-lilac-soft/40"
                >
                  <span className="font-medium text-ink">{f.q}</span>
                  <span className={`text-2xl text-accent transition ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-muted-foreground animate-fade-up">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-ink py-14 text-white/70">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl text-white">Escola <span className="italic">LIZ</span></div>
          <p className="mt-3 text-sm">Formação Psicogenealogia Viva 2026 — Turma 2</p>
        </div>
        <div className="text-sm">
          <div className="text-white">Contato</div>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-2 block hover:text-lilac">
            WhatsApp (44) 99131-8081
          </a>
        </div>
        <div className="text-sm">
          <div className="text-white">Docente</div>
          <p className="mt-2">Letícia Kuchockowolec Baccin</p>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 px-6 pt-6 text-xs text-white/40">
        © 2026 Escola LIZ · Todos os direitos reservados
      </div>
    </footer>
  );
}
