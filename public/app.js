// ============================================================
// DADOS DAS NOTÍCIAS (estrutura JSON)
// ============================================================
const dados = [
  {
    id: 1,
    titulo: "Prefeitura Lança Novo Plano de Mobilidade Urbana",
    descricao: "Novo plano visa melhorar o transporte público e reduzir o trânsito na cidade.",
    conteudo: "A Prefeitura apresentou nesta segunda-feira um novo plano de mobilidade urbana que inclui a criação de corredores exclusivos de ônibus, ciclovias e a requalificação de vias principais. O projeto será implementado ao longo dos próximos dois anos. Especialistas em urbanismo elogiaram a iniciativa e destacaram que a cidade precisava urgentemente de uma solução integrada para o transporte. A expectativa é que o número de carros nas vias centrais diminua em até 30% após a conclusão das obras.",
    categoria: "Cidades",
    autor: "Joana Ribeiro",
    data: "2025-03-30",
    imagem: "img/mobilidade.jpg"
  },
  {
    id: 2,
    titulo: "Tecnologia 6G Está em Desenvolvimento",
    descricao: "Pesquisadores anunciam avanços na próxima geração de redes móveis.",
    conteudo: "Universidades e empresas de telecomunicação já estão testando tecnologias que poderão compor a infraestrutura do 6G. A expectativa é que a nova geração seja 100 vezes mais rápida que o 5G e amplie a integração entre dispositivos inteligentes. Segundo os pesquisadores, o 6G poderá transformar áreas como cirurgias remotas, realidade aumentada em tempo real e cidades inteligentes. Os primeiros testes comerciais devem acontecer a partir de 2028.",
    categoria: "Tecnologia",
    autor: "Carlos Mendes",
    data: "2025-03-28",
    imagem: "img/tecnologia_6g.jpg"
  },
  {
    id: 3,
    titulo: "Festival de Música Reúne Mais de 50 Mil Pessoas",
    descricao: "Evento cultural movimentou o final de semana com atrações nacionais e internacionais.",
    conteudo: "Durante três dias de programação, o festival contou com a participação de mais de 40 artistas e promoveu atividades culturais e gastronômicas em paralelo. A prefeitura estima um impacto positivo no turismo local. O evento reuniu pessoas de vários estados do Brasil e até visitantes estrangeiros. A organização já confirmou uma nova edição para o próximo ano, com previsão de dobrar a capacidade de público.",
    categoria: "Cultura",
    autor: "Ana Clara Silva",
    data: "2025-03-27",
    imagem: "img/festival_musica.jpg"
  },
  {
    id: 4,
    titulo: "Novo Parque Ecológico é Inaugurado no Centro da Cidade",
    descricao: "Área verde de 12 hectares vai beneficiar moradores do entorno e atrair turistas.",
    conteudo: "Após dois anos de obras, o novo Parque Ecológico Municipal foi inaugurado com trilhas, lago artificial, área de piquenique e espaço para práticas esportivas. O parque conta com mais de 500 espécies de plantas nativas e um centro de educação ambiental. A entrada é gratuita todos os dias da semana. A secretaria de meio ambiente destaca que o parque também vai ajudar a melhorar a qualidade do ar na região central.",
    categoria: "Meio Ambiente",
    autor: "Rafael Souza",
    data: "2025-03-25",
    imagem: "img/parque.jpg"
  },
  {
    id: 5,
    titulo: "Escola Pública Ganha Laboratório de Robótica",
    descricao: "Projeto piloto vai atender 300 alunos do ensino fundamental com aulas de programação.",
    conteudo: "Uma escola da rede municipal recebeu um laboratório completo de robótica com kits educativos, computadores e acesso à internet de alta velocidade. O projeto é fruto de uma parceria entre a prefeitura e uma empresa de tecnologia local. As aulas de robótica e programação vão ser integradas ao currículo regular. Professores já receberam treinamento especializado para conduzir as atividades com os alunos.",
    categoria: "Educação",
    autor: "Mariana Lima",
    data: "2025-03-22",
    imagem: "img/robotica.jpg"
  },
  {
    id: 6,
    titulo: "Time Local Conquista Campeonato Regional de Futebol",
    descricao: "Equipe vence na final nos pênaltis e garante vaga na competição nacional.",
    conteudo: "Em uma partida emocionante disputada no estádio municipal lotado, o time local venceu o rival nos pênaltis por 4 a 3 e conquistou o título regional de futebol pela terceira vez na história do clube. A torcida invadiu o campo ao final da partida para celebrar com os jogadores. O técnico destacou a garra do elenco durante toda a temporada e agradeceu o apoio da comunidade.",
    categoria: "Esportes",
    autor: "Pedro Alves",
    data: "2025-03-20",
    imagem: "img/futebol.jpg"
  }
];

// ============================================================
// FUNÇÕES AUXILIARES
// ============================================================

// Formata a data de "YYYY-MM-DD" para "DD/MM/YYYY"
function formatarData(dataString) {
  const partes = dataString.split("-");
  return partes[2] + "/" + partes[1] + "/" + partes[0];
}

// Lê o parâmetro "id" da URL (query string)
// Exemplo: detalhes.html?id=2  →  retorna 2
function pegarIdDaURL() {
  const params = new URLSearchParams(window.location.search);
  return Number(params.get("id"));
}

// ============================================================
// HOME-PAGE: monta os cards de todas as notícias
// ============================================================
function montarHomePage() {
  const container = document.getElementById("lista-noticias");

  // Se o elemento não existe, não estamos na home-page
  if (!container) return;

  dados.forEach(function (noticia) {
    // Cria o elemento card
    const card = document.createElement("div");
    card.classList.add("card");

    // Preenche o HTML interno do card
    card.innerHTML = `
      <a href="detalhes.html?id=${noticia.id}">
        <img src="${noticia.imagem}" alt="${noticia.titulo}" onerror="this.src='img/placeholder.jpg'" />
      </a>
      <div class="card-body">
        <span class="card-categoria">${noticia.categoria}</span>
        <h3 class="card-titulo">
          <a href="detalhes.html?id=${noticia.id}">${noticia.titulo}</a>
        </h3>
        <p class="card-descricao">${noticia.descricao}</p>
        <div class="card-rodape">
          <span>${noticia.autor}</span>
          <span>${formatarData(noticia.data)}</span>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// ============================================================
// PÁGINA DE DETALHES: mostra uma notícia específica pelo id
// ============================================================
function montarPaginaDetalhes() {
  const container = document.getElementById("detalhe-noticia");

  // Se o elemento não existe, não estamos na página de detalhes
  if (!container) return;

  const id = pegarIdDaURL();

  // Procura a notícia com o id recebido
  const noticia = dados.find(function (item) {
    return item.id === id;
  });

  // Se não encontrou nenhuma notícia com esse id
  if (!noticia) {
    container.innerHTML = "<p class='erro'>Notícia não encontrada.</p>";
    return;
  }

  // Atualiza o título da aba do navegador
  document.title = noticia.titulo + " — Portal de Notícias";

  // Monta o HTML com todos os detalhes da notícia
  container.innerHTML = `
    <article class="detalhe">
      <span class="card-categoria">${noticia.categoria}</span>
      <h2 class="detalhe-titulo">${noticia.titulo}</h2>
      <div class="detalhe-meta">
        <span>✍️ ${noticia.autor}</span>
        <span>📅 ${formatarData(noticia.data)}</span>
      </div>
      <img
        src="${noticia.imagem}"
        alt="${noticia.titulo}"
        class="detalhe-imagem"
        onerror="this.src='img/placeholder.jpg'"
      />
      <p class="detalhe-descricao">${noticia.descricao}</p>
      <p class="detalhe-conteudo">${noticia.conteudo}</p>
    </article>
  `;
}

// ============================================================
// INICIALIZAÇÃO: roda as funções assim que a página carrega
// ============================================================
montarHomePage();
montarPaginaDetalhes();