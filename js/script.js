/* LL Beauty — protótipo. Tudo que depende de dado fica aqui, para o bento, os
   depoimentos e o FAQ terem uma fonte só.
   Regra do projeto: nenhum valor em reais aparece no site. A contagem de
   procedimentos e a descrição vêm do catálogo do clini.site; o preço fica lá. */

const DESTINO = 'agendar.html';

const CATEGORIAS = [
  { id:'unhas',        nome:'Unhas',       n:12, foto:'serv-unhas',        desc:'Alongamento, banho de gel, blindagem, manicure e pedicure.', destaque:true },
  { id:'cilios',       nome:'Cílios',      n:4,  foto:'serv-cilios',       desc:'Fio a fio, volume brasileiro, volume luxo, efeito fox e lash lift.' },
  { id:'micro',        nome:'Micro e nano',n:6,  foto:'serv-micro',        desc:'Sobrancelhas, labial, delineado e capilar. A avaliação vem antes.' },
  { id:'sobrancelhas', nome:'Sobrancelhas',n:4,  foto:'serv-sobrancelhas', desc:'Design, coloração, henna e brow lamination.' },
  { id:'maquiagem',    nome:'Maquiagem',   n:1,  foto:'serv-maquiagem',    desc:'Para o seu rosto e para a sua ocasião.' },
  { id:'depilacao',    nome:'Depilação',   n:3,  foto:'serv-depilacao',    desc:'Buço, queixo e facial completa.' },
];

/* bloco 4 — um pilar por vez, com a foto trocando ao lado */
const PILARES = [
  { id:'especialista', rotulo:'A especialista certa',
    titulo:'Cada uma faz uma coisa só',
    texto:'Aqui ninguém faz um pouco de tudo. A Laize cuida de sobrancelhas e micropigmentação. A Stefanny cuida das unhas. A Rachel cuida dos cílios. Cada uma repete a mesma técnica o dia inteiro, e é isso que afina a mão.',
    foto:'img/serv-sobrancelhas.jpg',
    alt:'Profissional trabalhando no desenho de sobrancelhas' },
  { id:'desenho', rotulo:'O desenho começa em você',
    titulo:'Nada sai de um molde',
    texto:'Antes do procedimento, a gente olha os seus traços, as suas proporções e a sua expressão. Na micropigmentação isso tem horário próprio: a avaliação, de 40 minutos, antes de encostar a agulha.',
    foto:'img/serv-micro.jpg',
    alt:'Detalhe de uma sobrancelha sendo desenhada' },
  { id:'mesmo-dia', rotulo:'Tudo no mesmo dia',
    titulo:'Uma tarde, não três sábados',
    texto:'As três agendas conversam entre si. Você resolve unha, cílio e sobrancelha numa tarde, sem sair da mesma poltrona para outro bairro.',
    foto:'img/espaco-espera.jpg',
    alt:'Sala de espera do studio com poltronas de veludo' },
];

const DEPOIMENTOS = [
  { nome:'Gabrielle Andrade', meta:'Local Guide · 29 avaliações',
    texto:'Melhor micropigmentadora de Bragança. Recomendo muito. Faz a sobrancelha como ninguém.' },
  { nome:'Rafaela Manni', meta:'Avaliação no Google',
    texto:'Laize é impecável em tudo que faz. Tem uma habilidade, um carinho e um conhecimento absurdo. O espaço reflete totalmente em quem ela é.' },
  { nome:'Valeria Moraes', meta:'Avaliação no Google',
    texto:'Já faz mais de um ano que fiz a micropigmentação na sobrancelha e até agora está perfeita.' },
  { nome:'Giulia Ferreira', meta:'Local Guide · 23 avaliações',
    texto:'O espaço além de lindo é muito bem localizado, super confortável, a recepção é maravilhosa.' },
  { nome:'Ana Paula', meta:'Local Guide · 19 avaliações',
    texto:'Ótimo espaço, muito aconchegante. Confio no trabalho dela de olhos fechados.' },
  { nome:'Regina Santiago', meta:'Local Guide · 122 avaliações',
    texto:'Gostei muito, atenciosas, competentes, boa apresentação com uniformes.' },
];

const DUVIDAS = [
  ['Qual a diferença entre blindagem, banho de gel e alongamento?',
   'A blindagem cria uma camada de proteção sobre a sua unha natural, para ela não quebrar nem descamar. O banho de gel faz o mesmo, com mais resistência e mais durabilidade, sem mudar o comprimento. O alongamento acrescenta comprimento e formato. Se você quer proteger, blindagem. Se quer durar mais, banho de gel. Se quer unha maior, alongamento.'],
  ['Micro e nano são a mesma coisa?',
   'São técnicas da mesma família, com profundidade e acabamento diferentes. Qual delas cabe no seu caso quem define é a avaliação, olhando a sua pele e o seu desenho. Por isso ela vem antes.'],
  ['Quanto tempo dura a micropigmentação?',
   'A labial dura, em média, de um a três anos, variando conforme o organismo e os cuidados de cada pessoa. Nas sobrancelhas, o retoque anual mantém a cor e a definição.'],
  ['Vai ficar artificial?',
   'O desenho é construído no seu rosto, respeitando os seus traços e as suas proporções. A gente trabalha para que ninguém perceba que foi feito, e sim que você está diferente.'],
  ['Quanto tempo eu fico aí?',
   'Depende do procedimento, e você vê a duração antes de confirmar o horário. Vai de 5 minutos, num buço, a 3 horas, num alongamento.'],
  ['De quanto em quanto tempo preciso voltar?',
   'Banho de gel, alongamento e extensão de cílios pedem manutenção a cada 15 a 20 dias. Micropigmentação, retoque uma vez por ano.'],
  ['Onde fica e como faço para chegar?',
   'Rua José Guilherme, 342, Ponto Rosa, Centro, Bragança Paulista. Atendemos de terça a sábado.'],
];

const iniciais = n => n.split(' ').filter(Boolean).slice(0, 2).map(p => p[0]).join('').toUpperCase();

/* ---------- bloco 8: bento das categorias ---------- */
/* O caminho da foto vai absoluto: URL relativa dentro de custom property é
   resolvida contra o arquivo CSS que a usa, não contra a página. */
function montarBento() {
  const alvo = document.getElementById('bento');
  if (!alvo) return;
  alvo.innerHTML = CATEGORIAS.map(c => `
    <a class="bento__bloco${c.destaque ? ' bento__bloco--grande' : ''}" href="${DESTINO}"
       data-cta="bento-${c.id}" style="--foto:url('${new URL('img/' + c.foto + '.jpg', location.href).href}')">
      <span class="bento__conta">${c.n} ${c.n === 1 ? 'procedimento' : 'procedimentos'}</span>
      <h3>${c.nome}</h3>
      <p>${c.desc}</p>
      <span class="bento__acao">Agendar</span>
    </a>`).join('');
}

/* ---------- bloco 4: pilares, um por vez, com foto ao lado ---------- */
function montarPilares() {
  const alvo = document.getElementById('pilares');
  if (!alvo) return;
  alvo.innerHTML = `
    <div class="pilares__lista" role="tablist" aria-label="Os três pilares do método">
      ${PILARES.map((p, i) => `
        <button class="pilares__aba" role="tab" id="aba-${p.id}" aria-controls="painel-${p.id}"
                aria-selected="${i === 0}" data-pilar="${p.id}">
          <span>0${i + 1}</span>${p.rotulo}
        </button>`).join('')}
    </div>
    <div class="pilares__palco">
      ${PILARES.map((p, i) => `
        <div class="pilares__painel${i === 0 ? ' ativo' : ''}" id="painel-${p.id}"
             role="tabpanel" aria-labelledby="aba-${p.id}" data-painel="${p.id}">
          <div class="pilares__texto">
            <h3>${p.titulo}</h3>
            <p>${p.texto}</p>
          </div>
          <figure class="pilares__foto">
            <img src="${p.foto}" alt="${p.alt}" loading="lazy" width="900" height="1000">
          </figure>
        </div>`).join('')}
    </div>`;

  const abas = [...alvo.querySelectorAll('.pilares__aba')];
  abas.forEach(aba => {
    aba.addEventListener('click', () => {
      abas.forEach(a => a.setAttribute('aria-selected', String(a === aba)));
      alvo.querySelectorAll('.pilares__painel').forEach(p => {
        p.classList.toggle('ativo', p.dataset.painel === aba.dataset.pilar);
      });
    });
  });
}

/* ---------- bloco 9: depoimentos ---------- */
function montarDepoimentos() {
  const alvo = document.getElementById('depoimentos');
  if (!alvo) return;
  const estrelas = '<span class="estrelas" aria-label="5 de 5 estrelas">★★★★★</span>';
  alvo.innerHTML = DEPOIMENTOS.map(d => `
    <li class="depo">
      <div class="depo__topo">
        <span class="depo__avatar" aria-hidden="true">${iniciais(d.nome)}</span>
        <span class="depo__quem">
          <b>${d.nome}</b>
          <i>${d.meta}</i>
        </span>
      </div>
      ${estrelas}
      <p>${d.texto}</p>
    </li>`).join('');
}

/* ---------- FAQ ---------- */
function montarFaq() {
  const alvo = document.getElementById('faq');
  if (!alvo) return;
  alvo.innerHTML = DUVIDAS.map(([p, r], i) => `
    <div class="faq__item">
      <button class="faq__botao" type="button" aria-expanded="false" aria-controls="r-${i}">${p}</button>
      <div class="faq__resposta" id="r-${i}">${r}</div>
    </div>`).join('');

  alvo.querySelectorAll('.faq__botao').forEach(b => {
    b.addEventListener('click', () => {
      const item = b.closest('.faq__item');
      const abrindo = !item.classList.contains('aberto');
      item.classList.toggle('aberto', abrindo);
      b.setAttribute('aria-expanded', String(abrindo));
    });
  });
}

/* ---------- entrada na rolagem ----------
   O observer nunca solta o elemento: quem sai de cena volta a entrar quando a
   pessoa rola de volta, descendo ou subindo. Os irmãos de um mesmo grupo entram
   em cascata, com atraso proporcional à posição. */
const GRUPOS = [
  '.secao > .chapeu', '.secao > .titulo', '.secao > .linha', '.secao > .tagline',
  '.studio__texto > *', '.equipe__intro > *',
  '.ancora', '.fecho', '.pilares', '.onde',
  '.mosaico li', '.bento__bloco', '.depo', '.compromissos li',
  '.galeria figure', '.painel', '.marcos li', '.faq__item', '.semana li',
  '.secao > .btn', '.faq__acoes', '.link-discreto', '.nota-placeholder',
];

function revelar() {
  const menos = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const alvos = [];
  GRUPOS.forEach(sel => {
    const itens = [...document.querySelectorAll(sel)];
    itens.forEach((el, i) => {
      if (el.classList.contains('revela')) return;
      el.classList.add('revela');
      // a cascata reinicia a cada grupo de irmãos, para não acumular atraso
      const irmaos = itens.filter(o => o.parentElement === el.parentElement);
      const pos = Math.min(irmaos.indexOf(el), 5);
      if (pos > 0) el.style.transitionDelay = (pos * 70) + 'ms';
      alvos.push(el);
    });
  });
  if (!alvos.length) return;

  if (menos) {
    alvos.forEach(el => el.classList.add('visivel'));
    return;
  }

  // Cálculo direto na rolagem, em vez de IntersectionObserver: o toggle precisa
  // acontecer nos dois sentidos, e o observer não entrega atualização em todo
  // contexto de preview. Uma medição por quadro, só quando a página rola.
  let agendado = false;
  function checar() {
    agendado = false;
    const altura = window.innerHeight || document.documentElement.clientHeight;
    const topo = altura * 0.04;
    const base = altura * 0.92;
    alvos.forEach(el => {
      const r = el.getBoundingClientRect();
      el.classList.toggle('visivel', r.top < base && r.bottom > topo);
    });
  }
  function pedir() {
    if (agendado) return;
    agendado = true;
    // rede de segurança: onde o requestAnimationFrame não roda (aba em segundo
    // plano, painel de preview), o timeout destrava a próxima medição
    const reserva = setTimeout(checar, 120);
    requestAnimationFrame(() => { clearTimeout(reserva); checar(); });
  }
  addEventListener('scroll', pedir, { passive: true });
  addEventListener('resize', pedir);
  addEventListener('load', pedir);
  checar();
}

/* ---------- trilhos laterais: preenchem conforme a página rola ---------- */
function ligarTrilhos() {
  if (!document.querySelector('.trilho')) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let agendado = false;
  function medir() {
    agendado = false;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
    document.documentElement.style.setProperty(
      '--percorrido', Math.min(100, Math.max(0, pct)).toFixed(2) + '%');
  }
  function pedir() {
    if (agendado) return;
    agendado = true;
    const reserva = setTimeout(medir, 120);
    requestAnimationFrame(() => { clearTimeout(reserva); medir(); });
  }
  addEventListener('scroll', pedir, { passive: true });
  addEventListener('resize', pedir);
  addEventListener('load', pedir);
  medir();
}

/* ---------- UTM por bloco, para saber qual seção traz agendamento ---------- */
function marcarCtas() {
  document.querySelectorAll('a[data-cta]').forEach(a => {
    const u = new URL(a.getAttribute('href'), location.href);
    u.searchParams.set('origem', a.dataset.cta);
    a.setAttribute('href', u.pathname.split('/').pop() + u.search);
  });
}

/* ---------- alternador de arte da hero ----------
   Ferramenta de apresentação: mostra as duas versões da hero, a da Laize e a
   do espaço, para o cliente escolher. A escolha fica no navegador de quem está
   vendo, então a página reabre na mesma versão. Sai antes de publicar. */
function ligarAlternador() {
  const hero = document.querySelector('.hero');
  const botao = document.querySelector('[data-alternar]');
  if (!hero || !botao) return;

  const ROTULOS = { laize: 'Ver o espaço', studio: 'Ver a Laize' };

  function aplicar(qual) {
    hero.dataset.variante = qual;
    botao.textContent = ROTULOS[qual];
    botao.setAttribute('aria-label', 'Trocar a arte da hero: ' + ROTULOS[qual]);
  }

  let escolha = 'studio';
  try { if (localStorage.getItem('ll-hero') === 'laize') escolha = 'laize'; } catch (e) {}
  aplicar(escolha);

  botao.addEventListener('click', () => {
    const proxima = hero.dataset.variante === 'studio' ? 'laize' : 'studio';
    aplicar(proxima);
    try { localStorage.setItem('ll-hero', proxima); } catch (e) {}
  });
}

montarBento();
montarPilares();
montarDepoimentos();
montarFaq();
marcarCtas();
revelar();
ligarTrilhos();
ligarAlternador();
