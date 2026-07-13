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

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Authority />
      <Pillars />
      <Structure />
      <ForWhom />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
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
        <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-lilac-soft backdrop-blur">
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
            className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-primary shadow-elegant transition hover:scale-[1.02]"
          >
            Garantir minha vaga
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
          <a href="#investimento" className="text-sm text-white/70 underline underline-offset-4 hover:text-white">
            Ver investimento
          </a>
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-6 border-t border-white/15 pt-8 text-left">
          {[
            ["+5.000", "alunos formados"],
            ["28 anos", "de trajetória da docente"],
            ["2 anos", "de acesso pela Hotmart"],
          ].map(([n, l]) => (
            <div key={n}>
              <div className="font-display text-3xl text-lilac-soft">{n}</div>
              <div className="text-xs uppercase tracking-wider text-white/60">{l}</div>
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
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent p-8 text-white">
            <div className="font-display text-2xl italic">Letícia Baccin</div>
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
              <span key={t} className="rounded-full border border-border bg-white px-4 py-1.5 text-sm text-primary">
                {t}
              </span>
            ))}
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
            <div key={m.level} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-border/60">
              <div className="text-xs uppercase tracking-wider text-accent">{m.level}</div>
              <h3 className="mt-2 font-display text-2xl text-ink">{m.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-primary p-8 text-primary-foreground shadow-elegant">
            <h3 className="font-display text-2xl">Classes Magistrais</h3>
            <ul className="mt-6 space-y-4">
              {magistrais.map((c) => (
                <li key={c.code} className="flex items-start gap-4 border-t border-white/15 pt-4 first:border-0 first:pt-0">
                  <span className="font-display text-lg text-lilac-soft">{c.code}</span>
                  <div>
                    <div className="font-medium">{c.title}</div>
                    <div className="text-xs uppercase tracking-wider text-white/60">{c.note}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-white p-8">
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
            className="inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-lg font-medium text-primary shadow-glow transition hover:scale-[1.02]"
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
    <div className={`relative rounded-3xl p-8 ${highlight ? "bg-white text-ink shadow-elegant" : "border border-white/20 bg-white/5 backdrop-blur"}`}>
      {highlight && (
        <span className="absolute -top-3 left-8 rounded-full bg-accent px-4 py-1 text-xs font-medium uppercase tracking-wider text-white">
          Mais escolhido
        </span>
      )}
      <div className={`text-xs uppercase tracking-[0.2em] ${highlight ? "text-accent" : "text-lilac-soft"}`}>
        {country}
      </div>
      <div className="mt-6 flex items-baseline gap-2">
        <span className={`text-sm line-through ${highlight ? "text-muted-foreground" : "text-white/50"}`}>
          {currency} {full}
        </span>
        <span className={`rounded-full px-2 py-0.5 text-xs ${highlight ? "bg-lilac-soft text-primary" : "bg-white/20 text-white"}`}>
          30% OFF
        </span>
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="font-display text-6xl">{currency} {special}</span>
      </div>
      <div className={`mt-2 text-sm ${highlight ? "text-muted-foreground" : "text-white/70"}`}>
        à vista · ou {installment}
      </div>

      <ul className={`mt-8 space-y-3 border-t pt-6 text-sm ${highlight ? "border-border" : "border-white/15"}`}>
        {["4 níveis completos", "Classes Magistrais (CM2 + CM3)", "Decodificação de Nomes (16h)", "Mentorias ao vivo", "2 anos de acesso Hotmart"].map((f) => (
          <li key={f} className="flex items-start gap-3">
            <span className={`mt-1 h-1.5 w-1.5 rounded-full ${highlight ? "bg-accent" : "bg-lilac"}`} />
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
