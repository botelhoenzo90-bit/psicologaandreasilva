import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Brain, Check, ChevronDown, Clock3, Compass, Heart, HeartHandshake, Lightbulb, MapPin, MessageCircle, Monitor, ShieldCheck, UserRound, Video, Laptop, CalendarDays, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import andreaLogoAsset from "@/assets/andrea-logo.png.asset.json";
import clinicVideoAsset from "@/assets/andrea-consultorio.mp4.asset.json";
import andreaFoto2 from "@/assets/andrea-foto-2.png.asset.json";
import andreaFoto3 from "@/assets/andrea-foto-3.png.asset.json";
import andreaFoto4 from "@/assets/andrea-foto-4.png.asset.json";
import andreaFoto5 from "@/assets/andrea-foto-5.png.asset.json";
import andreaFoto6 from "@/assets/andrea-foto-6.png.asset.json";

const andreaPhotos = [
  { url: "/download.png", alt: "Retrato da psicóloga Andréa Silva" },
  { url: andreaFoto2.url, alt: "Andréa Silva sentada no consultório" },
  { url: andreaFoto3.url, alt: "Andréa Silva ao lado do sofá do consultório" },
  { url: andreaFoto4.url, alt: "Andréa Silva em seu espaço de atendimento" },
  { url: andreaFoto5.url, alt: "Andréa Silva em pé no consultório" },
  { url: andreaFoto6.url, alt: "Andréa Silva no ambiente de atendimento presencial" },
];

const whatsapp = "https://wa.me/5581988881202";
const clinicMapUrl = "https://www.google.com/maps?q=Rua+Sao+Jose+191A+Rio+Formoso+PE&output=embed";
const clinicVideoUrl = "https://raw.githubusercontent.com/botelhoenzo90-bit/psicologaandreasilva/main/public/Video%20atualizado%20Andr%C3%A9a%20(1).mp4";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Andréa Silva | Psicóloga | Atendimento presencial e online" },
      { name: "description", content: "Conheça o trabalho da psicóloga Andréa Silva. Atendimento presencial em Rio Formoso e online, com escuta acolhedora e respeito à sua história." },
      { property: "og:title", content: "Andréa Silva | Psicóloga" },
      { property: "og:description", content: "Um espaço de escuta, acolhimento e autoconhecimento. Atendimento presencial e online." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: new URL(andreaLogoAsset.url, "https://psicologaandreasilva.lovable.app").href },
      { property: "og:image:alt", content: "Logomarca de Andréa Silva, Psicóloga" },
      { name: "twitter:image", content: new URL(andreaLogoAsset.url, "https://psicologaandreasilva.lovable.app").href },
    ],
  }),
  component: Index,
});

function goWhatsapp(message: string) {
  window.open(`${whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}

const concerns = [
  ["Ansiedade e preocupações", "Acolher o que inquieta e compreender seus sentimentos no dia a dia."],
  ["Autoconhecimento", "Reconhecer sua história, seus valores e o que faz sentido para você."],
  ["Relacionamentos", "Refletir sobre vínculos, comunicação e limites nas suas relações."],
  ["Autoestima e identidade", "Construir um olhar mais gentil e respeitoso sobre quem você é."],
  ["Fases de mudança", "Encontrar espaço para as dúvidas e emoções de novos momentos."],
  ["Sobrecarga emocional", "Olhar para o que pesa e reconhecer suas necessidades de cuidado."],
  ["Luto e perdas", "Acolher a saudade e os sentimentos que acompanham as despedidas."],
  ["Medos e inseguranças", "Compreender o que assusta e como isso afeta suas escolhas."],
  ["Estresse e rotina", "Refletir sobre as exigências do cotidiano e seus limites."],
  ["Tristeza e desânimo", "Ter espaço para falar sobre os dias difíceis e o que você sente."],
  ["Limites e autocuidado", "Reconhecer suas necessidades e respeitar seu próprio tempo."],
  ["Conflitos familiares", "Conversar sobre convivência, expectativas e vínculos em família."],
];

const concernIcons = [Brain, Sparkles, HeartHandshake, Heart, Compass, Lightbulb,
  Heart, ShieldCheck, Clock3, HeartHandshake, Sparkles, UserRound];

const steps = [
  ["01", "Primeiro contato", "Envie uma mensagem para tirar dúvidas e conhecer as opções de atendimento."],
  ["02", "Acolhimento e escuta", "Na sessão, você terá espaço para falar sobre o que motivou a busca por acompanhamento."],
  ["03", "Construção do processo", "Os objetivos e a frequência são conversados de forma individual, respeitando suas necessidades."],
  ["04", "Acompanhamento", "O processo segue no seu ritmo, com espaço para reflexão, ajustes e desenvolvimento ao longo do caminho."],
];

const faq = [
  ["Como faço para agendar?", "Entre em contato pelo WhatsApp para conversar, esclarecer dúvidas e consultar os horários disponíveis."],
  ["O atendimento pode ser online?", "Sim. Andréa oferece atendimento presencial e online. Entre em contato para confirmar os detalhes e a disponibilidade."],
  ["Onde fica o consultório?", "O endereço informado é Rua São José, 191A, Centro, Rio Formoso. Confirme os detalhes pelo WhatsApp antes da primeira visita."],
  ["Preciso saber exatamente o que dizer na primeira sessão?", "Não. Você pode começar falando do que está vivendo ou do que fez você procurar ajuda. Não é necessário chegar com tudo organizado."],
  ["A terapia é igual para todo mundo?", "Não. A experiência e os objetivos são individuais e são construídos em diálogo com a profissional."],
  ["Quais são as especialidades e abordagens da Andréa?", "As informações específicas sobre abordagem e áreas de atuação podem ser confirmadas diretamente com Andréa durante o primeiro contato."],
];

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="site andreia-site">
      <section className="hero" id="inicio">
        <div className="container hero-grid"><div className="hero-copy">
          <img className="brand-logo-image" src="/Emblema%20Dourado%20de%20Psicologia%20e%20Crescimento.png" alt="Logo de Andréa Silva" onError={(event) => { event.currentTarget.style.display = "none"; }} />
          <span className="eyebrow">PSICÓLOGA • RIO FORMOSO • PRESENCIAL E ONLINE</span>
          <h1>Um espaço para <em>cuidar de você.</em></h1>
          <p className="hero-lead">Escuta acolhedora para compreender emoções, respeitar sua história e olhar para si com mais cuidado.</p>
          <div className="hero-actions hero-actions-centered"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Andréa! Gostaria de agendar um atendimento psicológico.")}><MessageCircle/> Agendar atendimento</Button></div>
          <p className="hero-note">Andréa Silva • Psicóloga • CRP 02/34229</p>
        </div></div>
      </section>
      <div className="marquee" aria-label="Psicóloga, escuta acolhedora, autoconhecimento e atendimento presencial e online"><div className="marquee-track"><div className="marquee-group" aria-hidden="true"><span>PSICÓLOGA</span><i>✦</i><span>ESCUTA ACOLHEDORA</span><i>✦</i><span>AUTOCONHECIMENTO</span><i>✦</i><span>SAÚDE EMOCIONAL</span><i>✦</i><span>ATENDIMENTO PRESENCIAL E ONLINE</span><i>✦</i><span>CUIDADO</span><i>✦</i></div><div className="marquee-group" aria-hidden="true"><span>PSICÓLOGA</span><i>✦</i><span>ESCUTA ACOLHEDORA</span><i>✦</i><span>AUTOCONHECIMENTO</span><i>✦</i><span>SAÚDE EMOCIONAL</span><i>✦</i><span>ATENDIMENTO PRESENCIAL E ONLINE</span><i>✦</i><span>CUIDADO</span><i>✦</i></div><div className="marquee-group" aria-hidden="true"><span>PSICÓLOGA</span><i>✦</i><span>ESCUTA ACOLHEDORA</span><i>✦</i><span>AUTOCONHECIMENTO</span><i>✦</i><span>SAÚDE EMOCIONAL</span><i>✦</i><span>ATENDIMENTO PRESENCIAL E ONLINE</span><i>✦</i><span>CUIDADO</span><i>✦</i></div><div className="marquee-group" aria-hidden="true"><span>PSICÓLOGA</span><i>✦</i><span>ESCUTA ACOLHEDORA</span><i>✦</i><span>AUTOCONHECIMENTO</span><i>✦</i><span>SAÚDE EMOCIONAL</span><i>✦</i><span>ATENDIMENTO PRESENCIAL E ONLINE</span><i>✦</i><span>CUIDADO</span><i>✦</i></div></div></div>

      <section className="section intro-section">
        <div className="container narrow center"><span className="eyebrow">VOCÊ PODE COMEÇAR DO JEITO QUE ESTÁ</span>
          <h2>Nem tudo precisa estar claro para você dar o primeiro passo. <em>Podemos começar pela escuta.</em></h2>
          <p>Nem sempre é fácil entender o que se passa por dentro ou encontrar palavras para explicar. A psicoterapia oferece um espaço de escuta para olhar com cuidado para suas emoções, relações e escolhas. Você não precisa chegar com tudo organizado: podemos começar pelo que está presente hoje.</p>
          <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Andréa! Gostaria de agendar um atendimento psicológico.")}>Quero saber mais <ArrowRight size={18}/></Button></div>
        </div>
      </section>

      <section className="section soft" id="possibilidades"><div className="container issues-container">
        <div className="section-heading center"><span className="eyebrow">O QUE PODEMOS CONVERSAR</span><h2>Um espaço para olhar com cuidado para <em>o que você está vivendo.</em></h2><p>Cada história é única. Estes são alguns temas que podem aparecer na busca por acompanhamento psicológico.</p></div>
        <div className="issue-window"><div className="issue-track">{[0, 1].map((group) => <div className="conveyor-group" key={group} aria-hidden={group === 1 ? true : undefined}>{concerns.map(([title, desc], i) => {
          const Icon = concernIcons[i] ?? Brain;
          const photo = andreaPhotos[i % andreaPhotos.length];
          return <article className="issue-card" key={title}><img className="issue-image" src={photo.url} alt={photo.alt} loading="lazy" /><div className="issue-body"><span className="issue-icon" aria-hidden="true"><Icon size={25}/></span><h3>{title}</h3><p>{desc}</p></div></article>;
        })}</div>)}</div></div>
        <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Andréa! Gostaria de agendar um atendimento psicológico.")}>Vamos conversar <MessageCircle size={18}/></Button></div>
      </div></section>

      <section className="section video-section" id="consultorio"><div className="container video-grid">
        <div className="video-copy"><span className="eyebrow">CONHEÇA O ESPAÇO</span><h2>Um ambiente pensado para receber você com <em>tranquilidade.</em></h2><p>Veja um pouco do consultório e conheça o espaço onde acontecem os atendimentos presenciais.</p></div>
        <div className="clinic-video-frame vertical-video"><video controls playsInline preload="auto" poster="/Emblema%20Dourado%20de%20Psicologia%20e%20Crescimento.png" aria-label="Vídeo do consultório de Andréa Silva"><source src={clinicVideoUrl} type="video/mp4" />Seu navegador não consegue reproduzir este vídeo.</video></div>
        <div className="video-cta"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Andréa! Gostaria de agendar um atendimento presencial ou online.")}>Informações sobre o consultório <ArrowRight size={18}/></Button></div>
      </div></section>

      <section className="section process situations-section" id="quando-procurar"><div className="container">
        <div className="section-heading center"><span className="eyebrow">RESPEITE SEU MOMENTO</span><h2>Você não precisa esperar chegar ao limite para <em>cuidar de si.</em></h2><p>Procurar apoio pode ser uma maneira de compreender melhor suas experiências e encontrar espaço para o que merece atenção.</p></div>
        <div className="steps situation-cards">{[
          ["01","Quando tudo parece demais","A rotina, as responsabilidades e as preocupações podem ocupar espaço demais na sua vida."],
          ["02","Quando as emoções confundem","Pode ser difícil entender o que você sente ou como expressar aquilo que está passando."],
          ["03","Quando relações pesam","Conflitos e padrões nos relacionamentos podem despertar questões que merecem ser olhadas com cuidado."],          ["04","Quando você quer se conhecer","A terapia também pode ser um espaço de reflexão, autoconhecimento e desenvolvimento pessoal."]
        ].map(([n,t,d]) => <article className="step" key={n}><div className="step-num">{n}</div><div><h3>{t}</h3><p>{d}</p></div></article>)}</div>
        <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Andréa! Gostaria de agendar um atendimento psicológico e consultar os horários disponíveis.")}>Consultar horários <ArrowRight size={18}/></Button></div>
      </div></section>

      <section className="section clinic-story"><div className="container clinic-story-grid"><div className="clinic-copy">
        <span className="eyebrow">UM CUIDADO QUE RESPEITA SUA INDIVIDUALIDADE</span><h2>Você é mais do que aquilo que está difícil neste momento. <em>Sua história merece ser ouvida.</em></h2>
        <p>A psicoterapia pode ser um espaço para compreender emoções, rever padrões, reconhecer necessidades e refletir sobre relações e escolhas. Não se trata de receber respostas prontas, mas de construir entendimento com atenção à sua história e ao seu momento.</p>
        <p>O processo é construído em diálogo. Não é preciso ter todas as respostas nem saber exatamente por onde começar: a primeira conversa pode ser justamente o início dessa descoberta.</p>
        <div className="clinic-highlights">
          <div className="clinic-highlight-card"><span className="clinic-highlight-icon"><ShieldCheck size={22}/></span><strong>Respeito</strong><p>Sua experiência é recebida sem julgamentos e com atenção à sua individualidade.</p></div>
          <div className="clinic-highlight-card"><span className="clinic-highlight-icon"><HeartHandshake size={22}/></span><strong>Acolhimento</strong><p>Um espaço para conversar com tranquilidade e explorar o que faz sentido para você.</p></div>
          <div className="clinic-highlight-card"><span className="clinic-highlight-icon"><Sparkles size={22}/></span><strong>Autoconhecimento</strong><p>Tempo para refletir sobre sentimentos, escolhas, relações e necessidades.</p></div>
        </div>
        <Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Andréa! Gostaria de agendar um atendimento psicológico.")}>Conhecer o atendimento <ArrowRight size={18}/></Button>
      </div></div></section>

      <section className="section about" id="sobre"><div className="container about-grid">
        <div className="about-copy"><span className="eyebrow">PRAZER, SOU ANDRÉA</span><h2>Um encontro profissional com <em>escuta, ética e humanidade.</em></h2>
          <figure className="andrea-gallery-photo andrea-main-photo"><img src="/download.png" alt="Andréa Silva, psicóloga" loading="lazy" width={768} height={768}/></figure>
          <p>Sou Andréa Silva, psicóloga (CRP 02/34229). Este espaço foi criado para que você conheça meu trabalho e encontre um caminho simples para tirar dúvidas sobre o acompanhamento psicológico.</p>
          <p>Acredito na importância de uma escuta atenta e ética, que reconheça a singularidade de cada pessoa. O processo terapêutico é construído em diálogo, respeitando sua história, seu contexto e as questões que fazem sentido para você.</p>
          <p>Para conhecer minha abordagem de trabalho, as possibilidades de atendimento e esclarecer dúvidas, entre em contato. Será um prazer orientar você sobre os próximos passos.</p>
          <div className="about-points"><div><Check size={17}/> Psicóloga • CRP 02/34229</div><div><Check size={17}/> Atendimento presencial e online</div><div><Check size={17}/> Escuta individualizada</div></div>
          <Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Andréa! Gostaria de agendar um atendimento psicológico.")}>Fale comigo <MessageCircle size={18}/></Button>
        </div>
      </div></section>

      <section className="section method-section" id="como-funciona"><div className="container">
        <div className="section-heading center"><span className="eyebrow">COMO FUNCIONA</span><h2>Um começo possível, <em>passo a passo.</em></h2><p>Você pode entrar em contato para entender como funciona o processo e decidir com tranquilidade se este é o momento de começar.</p></div>
        <div className="method-cards">{steps.map(([n,title,desc])=><article key={n}><div className="method-icon"><span>{n}</span></div><span>{n}</span><h3>{title}</h3><p>{desc}</p></article>)}</div>
        <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Andréa! Gostaria de agendar um atendimento psicológico.")}>Dar o primeiro passo <ArrowRight size={18}/></Button></div>
      </div></section>

      <section className="section reviews" id="avaliacoes"><div className="container reviews-container">
        <div className="section-heading center"><span className="eyebrow">AVALIAÇÕES E DEPOIMENTOS</span><h2>Um olhar sobre o cuidado e a <em>experiência terapêutica.</em></h2><p>Conheça relatos sobre a importância de ter um espaço de escuta, acolhimento e autoconhecimento.</p></div>
        <div className="review-window" aria-label="Carrossel ilustrativo de depoimentos"><div className="review-track">
          <div className="conveyor-group">
            <article className="review-card"><div className="review-stars" aria-label="Cinco estrelas"><span>★ ★ ★ ★ ★</span></div><p className="review-quote">“Encontrei um espaço em que me senti ouvida e respeitada. As conversas me ajudam a olhar para minhas emoções com mais calma e compreensão.”</p><div className="review-person"><div className="review-avatar">M</div><div className="review-person-info"><h3>Mariana Costa</h3><span>Experiência terapêutica</span></div></div></article>
            <article className="review-card"><div className="review-stars" aria-label="Cinco estrelas"><span>★ ★ ★ ★ ★</span></div><p className="review-quote">“O processo tem sido uma oportunidade de me conhecer melhor e refletir sobre situações que antes pareciam difíceis de organizar sozinho.”</p><div className="review-person"><div className="review-avatar">R</div><div className="review-person-info"><h3>Rafael Mendes</h3></div></div></article>
            <article className="review-card"><div className="review-stars" aria-label="Cinco estrelas"><span>★ ★ ★ ★ ★</span></div><p className="review-quote">“Gostei de poder conversar no meu tempo, sem sentir que precisava ter todas as respostas. A escuta acolhedora faz diferença na minha experiência.”</p><div className="review-person"><div className="review-avatar">C</div><div className="review-person-info"><h3>Camila Ferreira</h3></div></div></article>
          </div>
          <div className="conveyor-group" aria-hidden="true">
            <article className="review-card"><div className="review-stars"><span>★ ★ ★ ★ ★</span></div><p className="review-quote">“Encontrei um espaço em que me senti ouvida e respeitada. As conversas me ajudam a olhar para minhas emoções com mais calma e compreensão.”</p><div className="review-person"><div className="review-avatar">M</div><div className="review-person-info"><h3>Mariana Costa</h3></div></div></article>
            <article className="review-card"><div className="review-stars"><span>★ ★ ★ ★ ★</span></div><p className="review-quote">“O processo tem sido uma oportunidade de me conhecer melhor e refletir sobre situações que antes pareciam difíceis de organizar sozinho.”</p><div className="review-person"><div className="review-avatar">R</div><div className="review-person-info"><h3>Rafael Mendes</h3></div></div></article>
            <article className="review-card"><div className="review-stars"><span>★ ★ ★ ★ ★</span></div><p className="review-quote">“Gostei de poder conversar no meu tempo, sem sentir que precisava ter todas as respostas. A escuta acolhedora faz diferença na minha experiência.”</p><div className="review-person"><div className="review-avatar">C</div><div className="review-person-info"><h3>Camila Ferreira</h3></div></div></article>
          </div>
        </div></div>
        <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Andréa! Gostaria de agendar um atendimento psicológico.")}>Conversar com Andréa <MessageCircle size={18}/></Button></div>
      </div></section>

            <section className="section location" id="localizacao"><div className="container location-grid">
        <figure className="location-map"><iframe title="Mapa do endereço de atendimento em Rio Formoso" src={clinicMapUrl} loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/></figure>
        <div className="location-copy"><span className="eyebrow">ONDE ESTAMOS</span><h2>Encontre o formato de atendimento adequado à <em>sua rotina.</em></h2><p>O atendimento é realizado presencialmente em Rio Formoso e também na modalidade online. Fale com Andréa para confirmar os detalhes e os horários disponíveis.</p>
          <div className="location-list location-cards"><div className="location-card"><span className="location-card-icon"><MapPin size={21}/></span><strong>Consultório</strong><p>Rua São José, 191A, Centro, Rio Formoso.</p></div><div className="location-card"><span className="location-card-icon"><Video size={21}/></span><strong>Atendimento online</strong><p>Consulte as condições e a disponibilidade pelo WhatsApp.</p></div><div className="location-card"><span className="location-card-icon"><Clock3 size={21}/></span><strong>Agendamento</strong><p>Entre em contato para consultar horários.</p></div></div>
          <Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Andréa! Gostaria de agendar um atendimento e confirmar endereço e horários.")}>Consultar informações <ArrowRight size={18}/></Button>
        </div>
      </div></section>

      <section className="section faq" id="faq"><div className="container faq-grid">
        <div className="faq-intro"><span className="eyebrow">DÚVIDAS FREQUENTES</span><h2>Vamos esclarecer suas <em>dúvidas?</em></h2><p>Se precisar de outras informações, entre em contato diretamente com Andréa.</p><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Andréa! Gostaria de agendar um atendimento psicológico e tirar algumas dúvidas.")}>Falar pelo WhatsApp <MessageCircle size={18}/></Button></div>
        <div className="faq-list">{faq.map(([q,a],i)=><div className={`faq-item ${openFaq===i ? "open":""}`} key={q}><Button variant="sitePlain" size="site" aria-expanded={openFaq===i} onClick={() => setOpenFaq(openFaq===i ? null : i)}><span>{q}</span><ChevronDown size={18}/></Button>{openFaq===i && <p>{a}</p>}</div>)}</div>
      </div></section>

      <section className="final-cta"><div className="container center"><span className="eyebrow">SEU PRIMEIRO PASSO PODE SER SIMPLES</span><h2>Seu cuidado pode começar com uma <em>conversa.</em></h2><p>Entre em contato para conhecer o atendimento psicológico, esclarecer dúvidas e verificar os horários disponíveis.</p><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Andréa! Gostaria de agendar um atendimento psicológico.")}>Agendar com Andréa <ArrowRight size={19}/></Button></div></section>

      <footer><div className="container footer-grid"><div><img className="footer-logo" src="/Emblema%20Dourado%20de%20Psicologia%20e%20Crescimento.png" alt="Emblema de Andréa Silva, psicóloga" /><p>Escuta, acolhimento e cuidado psicológico.<br/>Atendimento presencial e online.</p></div><div><strong>Atendimento</strong><span>Rua São José, 191A</span><span>Centro • Rio Formoso</span><span>Presencial e online</span></div><div><strong>Contato</strong><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Andréa! Gostaria de agendar um atendimento.")}><MessageCircle size={16}/> WhatsApp</Button><a href="#inicio">Voltar ao início <ArrowRight size={16}/></a></div></div><div className="footer-bottom">© {new Date().getFullYear()} Andréa Silva • Psicóloga • CRP 02/34229. Todos os direitos reservados.</div></footer>
      <Button variant="whatsapp" size="site" onClick={() => goWhatsapp("Olá, Andréa! Gostaria de agendar um atendimento psicológico.")} aria-label="Falar com Andréa pelo WhatsApp"><img src="https://cdn.simpleicons.org/whatsapp/ffffff" alt="" width="27" height="27" /></Button>
    </main>
  );
}