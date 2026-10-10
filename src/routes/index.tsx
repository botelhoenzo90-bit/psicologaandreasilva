import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Brain, Check, ChevronDown, Clock3, HeartHandshake, MapPin, MessageCircle, Monitor, ShieldCheck, UserRound, Video, Laptop, CalendarDays, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const whatsapp = "https://wa.me/5581988881202";
const clinicMapUrl = "https://www.google.com/maps?q=Rua+Sao+Jose+191A+Rio+Formoso+PE&output=embed";
const clinicVideoUrl = "";

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
    ],
  }),
  component: Index,
});

function goWhatsapp(message: string) {
  window.open(`${whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}

const concerns = [
  ["Ansiedade e preocupações", "Quando a mente não desacelera e as preocupações ocupam espaço demais, a terapia pode ajudar você a compreender o que sente e encontrar novas formas de lidar com o cotidiano."],
  ["Autoconhecimento", "Olhar para sua história com curiosidade e acolhimento, reconhecendo necessidades, valores, limites e padrões que influenciam suas escolhas."],
  ["Relacionamentos", "Compreender sentimentos e dinâmicas que surgem nos vínculos, refletindo sobre comunicação, limites e relações mais conscientes."],
  ["Autoestima e identidade", "Investigar a forma como você se enxerga e construir uma relação consigo que tenha mais consciência, respeito e gentileza."],
  ["Fases de mudança", "Atravessar decisões e transições com espaço para reconhecer dúvidas, emoções e possibilidades, sem exigir de si respostas imediatas."],
  ["Sobrecarga emocional", "Dar nome ao que pesa, compreender suas necessidades e olhar para as experiências que têm exigido tanto de você."],
];

const steps = [
  ["01", "Primeiro contato", "Envie uma mensagem para tirar dúvidas e conhecer as opções de atendimento."],
  ["02", "Acolhimento e escuta", "Na sessão, você terá espaço para falar sobre o que motivou a busca por acompanhamento."],
  ["03", "Construção do processo", "Os objetivos e a frequência são conversados de forma individual, respeitando suas necessidades."],
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
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="andrea-wordmark"><span className="wordmark-symbol">Ψ</span><span>ANDRÉA SILVA<small>PSICÓLOGA • CRP 02/34229</small></span></div>
            <span className="eyebrow">UM ESPAÇO DE ESCUTA E ACOLHIMENTO</span>
            <h1>Você não precisa dar conta de tudo <em>sozinha.</em></h1>
            <p className="hero-statement">Cuidar da saúde emocional também é uma forma de cuidar de você.</p>
            <p className="hero-lead">Um acompanhamento psicológico que respeita sua história, acolhe suas emoções e oferece espaço para compreender o que você vive — sem pressa, sem julgamentos e no seu ritmo.</p>
            <div className="hero-credentials"><span><ShieldCheck size={17}/> Escuta com respeito e privacidade</span><span><Monitor size={17}/> Atendimento presencial e online</span></div>
            <div className="hero-actions hero-actions-centered"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Andréa! Gostaria de informações sobre o atendimento psicológico e horários disponíveis.")}><MessageCircle/> Agendar atendimento</Button></div>
            <p className="hero-note">Rio Formoso • Pernambuco</p>
          </div>
        </div>
      </section>

      <div className="marquee"><div className="marquee-track"><div className="marquee-group" aria-hidden="true"><span>PSICOLOGIA</span><i>✦</i><span>ESCUTA</span><i>✦</i><span>AUTOCONHECIMENTO</span><i>✦</i><span>SAÚDE EMOCIONAL</span><i>✦</i><span>ACOLHIMENTO</span><i>✦</i><span>CUIDADO</span><i>✦</i></div><div className="marquee-group" aria-hidden="true"><span>PSICOLOGIA</span><i>✦</i><span>ESCUTA</span><i>✦</i><span>AUTOCONHECIMENTO</span><i>✦</i><span>SAÚDE EMOCIONAL</span><i>✦</i><span>ACOLHIMENTO</span><i>✦</i><span>CUIDADO</span><i>✦</i></div></div></div>

      <section className="section intro-section">
        <div className="container narrow center"><span className="eyebrow">VOCÊ PODE COMEÇAR DO JEITO QUE ESTÁ</span>
          <h2>Nem tudo precisa estar claro para você dar o primeiro passo. <em>Podemos começar pela escuta.</em></h2>
          <p>Nem sempre é fácil entender o que se passa por dentro ou encontrar palavras para explicar. A psicoterapia oferece um espaço de escuta para olhar com cuidado para suas emoções, relações e escolhas. Você não precisa chegar com tudo organizado: podemos começar pelo que está presente hoje.</p>
          <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Andréa! Gostaria de saber mais sobre o acompanhamento psicológico.")}>Quero saber mais <ArrowRight size={18}/></Button></div>
        </div>
      </section>

      <section className="section soft" id="possibilidades"><div className="container issues-container">
        <div className="section-heading center"><span className="eyebrow">O QUE PODEMOS CONVERSAR</span><h2>Um espaço para olhar com cuidado para <em>o que você está vivendo.</em></h2><p>Cada história é única. Estes são alguns temas que podem aparecer na busca por acompanhamento psicológico.</p></div>
        <div className="issue-window"><div className="issue-track"><div className="conveyor-group">{concerns.map(([title, desc], i) => <article className="issue-card" key={title}><div className="issue-image issue-photo"><img src={["https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85","https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85","https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=85","https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=900&q=85","https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85","https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=85"][i]} alt="" loading="lazy" /></div><div className="issue-body"><h3>{title}</h3><p>{desc}</p></div></article>)}</div><div className="conveyor-group" aria-hidden="true">{concerns.map(([title, desc], i) => <article className="issue-card" key={title}><div className="issue-image issue-photo"><img src={["https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85","https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85","https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=85","https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=900&q=85","https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85","https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=85"][i]} alt="" loading="lazy" /></div><div className="issue-body"><h3>{title}</h3><p>{desc}</p></div></article>)}</div></div></div>
        <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Andréa! Gostaria de conversar sobre atendimento psicológico.")}>Vamos conversar <MessageCircle size={18}/></Button></div>
      </div></section>

      <section className="section process situations-section" id="quando-procurar"><div className="container">
        <div className="section-heading center"><span className="eyebrow">RESPEITE SEU MOMENTO</span><h2>Você não precisa esperar chegar ao limite para <em>cuidar de si.</em></h2><p>Procurar apoio pode ser uma maneira de compreender melhor suas experiências e encontrar espaço para o que merece atenção.</p></div>
        <div className="steps situation-cards">{[
          ["01","Quando tudo parece demais","A rotina, as responsabilidades e as preocupações podem ocupar espaço demais na sua vida."],
          ["02","Quando as emoções confundem","Pode ser difícil entender o que você sente ou como expressar aquilo que está passando."],
          ["03","Quando relações pesam","Conflitos e padrões nos relacionamentos podem despertar questões que merecem ser olhadas com cuidado."],
          ["04","Quando você quer se conhecer","A terapia também pode ser um espaço de reflexão, autoconhecimento e desenvolvimento pessoal."]
        ].map(([n,t,d]) => <article className="step" key={n}><div className="step-num">{n}</div><div><h3>{t}</h3><p>{d}</p></div></article>)}</div>
        <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Andréa! Gostaria de consultar os horários disponíveis.")}>Consultar horários <ArrowRight size={18}/></Button></div>
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
        <Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Andréa! Quero saber como funciona o acompanhamento psicológico.")}>Conhecer o atendimento <ArrowRight size={18}/></Button>
      </div></div></section>

      <section className="section about" id="sobre"><div className="container about-grid">
        <div className="about-photo about-photo-placeholder"><div className="about-placeholder-content"><UserRound size={44}/><strong>Andréa Silva</strong><span>Psicóloga • CRP 02/34229</span></div></div>
        <div className="about-copy"><span className="eyebrow">PRAZER, SOU ANDRÉA</span><h2>Um encontro profissional com <em>escuta, ética e humanidade.</em></h2>
          <p>Sou Andréa Silva, psicóloga (CRP 02/34229). Este espaço foi criado para que você conheça meu trabalho e encontre um caminho simples para tirar dúvidas sobre o acompanhamento psicológico.</p>
          <p>Acredito na importância de uma escuta atenta e ética, que reconheça a singularidade de cada pessoa. O processo terapêutico é construído em diálogo, respeitando sua história, seu contexto e as questões que fazem sentido para você.</p>
          <p>Para conhecer minha abordagem de trabalho, as possibilidades de atendimento e esclarecer dúvidas, entre em contato. Será um prazer orientar você sobre os próximos passos.</p>
          <div className="about-points"><div><Check size={17}/> Psicóloga • CRP 02/34229</div><div><Check size={17}/> Atendimento presencial e online</div><div><Check size={17}/> Escuta individualizada</div></div>
          <Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Andréa! Gostaria de conhecer melhor seu trabalho.")}>Fale comigo <MessageCircle size={18}/></Button>
        </div>
      </div></section>

      <section className="section method-section" id="como-funciona"><div className="container">
        <div className="section-heading center"><span className="eyebrow">COMO FUNCIONA</span><h2>Um começo possível, <em>passo a passo.</em></h2><p>Você pode entrar em contato para entender como funciona o processo e decidir com tranquilidade se este é o momento de começar.</p></div>
        <div className="method-cards">{steps.map(([n,title,desc])=><article key={n}><div className="method-icon"><span>{n}</span></div><span>{n}</span><h3>{title}</h3><p>{desc}</p></article>)}</div>
        <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Andréa! Gostaria de iniciar uma conversa sobre atendimento psicológico.")}>Dar o primeiro passo <ArrowRight size={18}/></Button></div>
      </div></section>

      <section className="section specialty"><div className="container specialty-grid">
        <div><span className="eyebrow">PRESENCIAL E ONLINE</span><h2>O cuidado pode começar com uma <em>conversa.</em></h2><p>Entre em contato para confirmar a modalidade, conhecer os detalhes do atendimento e consultar os horários disponíveis. A escolha deve considerar suas necessidades e as condições adequadas para o acompanhamento.</p><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Andréa! Gostaria de saber sobre atendimento presencial e online.")}>Consultar modalidades <ArrowRight size={18}/></Button></div>
        <div className="specialty-quote"><HeartHandshake size={32}/><p>“Respeitar seu tempo também faz parte do cuidado.”</p></div>
      </div></section>

      <section className="section video-section" id="consultorio"><div className="container video-grid">
        <div className="video-copy"><span className="eyebrow">CONHEÇA O ESPAÇO</span><h2>Um ambiente pensado para receber você com <em>tranquilidade.</em></h2><p>Veja um pouco do consultório e conheça o espaço onde acontecem os atendimentos presenciais. O vídeo poderá ser atualizado com a gravação enviada pela Andréa.</p><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Andréa! Gostaria de saber mais sobre o consultório e o atendimento presencial.")}>Informações sobre o consultório <ArrowRight size={18}/></Button></div>
        <div className="clinic-video-frame">{clinicVideoUrl ? <iframe src={clinicVideoUrl} title="Vídeo do consultório de Andréa Silva" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/> : <div className="video-placeholder"><span className="video-play"><Video size={34}/></span><strong>Vídeo do consultório</strong><p>Espaço reservado para inserir o vídeo da Andréa</p></div>}</div>
      </div></section>

      <section className="section reviews"><div className="container reviews-container">
        <div className="section-heading center"><span className="eyebrow">UM ESPAÇO DE CONFIANÇA</span><h2>Seu processo é único. <em>Seu cuidado também.</em></h2><p>Não existe uma trajetória igual à outra. O acompanhamento é construído respeitando a individualidade, os limites e os objetivos de cada pessoa.</p></div>
        <div className="review-window"><div className="review-track"><div className="conveyor-group"><article className="review-card"><div className="review-person"><div className="review-avatar"><ShieldCheck size={24}/></div><div className="review-person-info"><h3>Escuta respeitosa</h3><span>Um espaço sem julgamentos</span></div></div><p className="review-quote">A conversa acontece com respeito à sua história, à sua privacidade e ao seu tempo.</p></article><article className="review-card"><div className="review-person"><div className="review-avatar"><HeartHandshake size={24}/></div><div className="review-person-info"><h3>Acompanhamento individual</h3><span>Construído em diálogo</span></div></div><p className="review-quote">As necessidades e os objetivos são conversados de forma individualizada.</p></article><article className="review-card"><div className="review-person"><div className="review-avatar"><Brain size={24}/></div><div className="review-person-info"><h3>Autoconhecimento</h3><span>Tempo para refletir</span></div></div><p className="review-quote">Um convite para olhar para emoções, escolhas e relações com mais consciência.</p></article></div></div></div>
        <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Andréa! Gostaria de saber mais sobre o atendimento psicológico.")}>Conversar com Andréa <MessageCircle size={18}/></Button></div>
      </div></section>

      <section className="section location" id="localizacao"><div className="container location-grid">
        <figure className="location-map"><iframe title="Mapa do endereço de atendimento em Rio Formoso" src={clinicMapUrl} loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/></figure>
        <div className="location-copy"><span className="eyebrow">ONDE ESTAMOS</span><h2>Encontre o formato de atendimento adequado à <em>sua rotina.</em></h2><p>O atendimento é realizado presencialmente em Rio Formoso e também na modalidade online. Fale com Andréa para confirmar os detalhes e os horários disponíveis.</p>
          <div className="location-list location-cards"><div className="location-card"><span className="location-card-icon"><MapPin size={21}/></span><strong>Consultório</strong><p>Rua São José, 191A, Centro, Rio Formoso.</p></div><div className="location-card"><span className="location-card-icon"><Video size={21}/></span><strong>Atendimento online</strong><p>Consulte as condições e a disponibilidade pelo WhatsApp.</p></div><div className="location-card"><span className="location-card-icon"><Clock3 size={21}/></span><strong>Agendamento</strong><p>Entre em contato para consultar horários.</p></div></div>
          <Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Andréa! Gostaria de consultar endereço e horários de atendimento.")}>Consultar informações <ArrowRight size={18}/></Button>
        </div>
      </div></section>

      <section className="section faq" id="faq"><div className="container faq-grid">
        <div className="faq-intro"><span className="eyebrow">DÚVIDAS FREQUENTES</span><h2>Vamos esclarecer suas <em>dúvidas?</em></h2><p>Se precisar de outras informações, entre em contato diretamente com Andréa.</p><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Andréa! Tenho algumas dúvidas sobre o atendimento psicológico.")}>Falar pelo WhatsApp <MessageCircle size={18}/></Button></div>
        <div className="faq-list">{faq.map(([q,a],i)=><div className={`faq-item ${openFaq===i ? "open":""}`} key={q}><Button variant="sitePlain" size="site" aria-expanded={openFaq===i} onClick={() => setOpenFaq(openFaq===i ? null : i)}><span>{q}</span><ChevronDown size={18}/></Button>{openFaq===i && <p>{a}</p>}</div>)}</div>
      </div></section>

      <section className="final-cta"><div className="container center"><span className="eyebrow">SEU PRIMEIRO PASSO PODE SER SIMPLES</span><h2>Seu cuidado pode começar com uma <em>conversa.</em></h2><p>Entre em contato para conhecer o atendimento psicológico, esclarecer dúvidas e verificar os horários disponíveis.</p><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Andréa! Gostaria de agendar um atendimento psicológico.")}>Agendar com Andréa <ArrowRight size={19}/></Button></div></section>

      <footer><div className="container footer-grid"><div><div className="andrea-wordmark footer-wordmark"><span className="wordmark-symbol">Ψ</span><span>ANDRÉA SILVA<small>PSICÓLOGA • CRP 02/34229</small></span></div><p>Escuta, acolhimento e cuidado psicológico.<br/>Atendimento presencial e online.</p></div><div><strong>Atendimento</strong><span>Rua São José, 191A</span><span>Centro • Rio Formoso</span><span>Presencial e online</span></div><div><strong>Contato</strong><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Andréa! Gostaria de agendar um atendimento.")}><MessageCircle size={16}/> WhatsApp</Button><a href="#inicio">Voltar ao início <ArrowRight size={16}/></a></div></div><div className="footer-bottom">© {new Date().getFullYear()} Andréa Silva • Psicóloga • CRP 02/34229. Todos os direitos reservados.</div></footer>
      <Button variant="whatsapp" size="site" onClick={() => goWhatsapp("Olá, Andréa! Gostaria de informações sobre atendimento psicológico.")} aria-label="Falar com Andréa pelo WhatsApp"><MessageCircle size={24}/></Button>
    </main>
  );
}
