const STORAGE_KEY = "studyflow-tasks-v1";
const STORAGE_KEY_SCHEDULES = "studyflow-schedules-v1";
const STORAGE_KEY_EBOOK = "studyflow-ebook-unlocked";
const THEME_KEY = "studyflow-theme";
const ACTIVE_TAB_KEY = "studyflow-active-tab";

// Chave Pix solicitada
const PIX_PHONE_KEY = "14997549129";

// Dias da semana
const DAYS_OF_WEEK = [
  { key: "segunda", name: "Segunda-feira", short: "Seg", dayIndex: 1 },
  { key: "terca", name: "Terça-feira", short: "Ter", dayIndex: 2 },
  { key: "quarta", name: "Quarta-feira", short: "Qua", dayIndex: 3 },
  { key: "quinta", name: "Quinta-feira", short: "Qui", dayIndex: 4 },
  { key: "sexta", name: "Sexta-feira", short: "Sex", dayIndex: 5 },
  { key: "sabado", name: "Sábado", short: "Sáb", dayIndex: 6 },
  { key: "domingo", name: "Domingo", short: "Dom", dayIndex: 0 }
];

// Banco de Questões do Quiz por Matéria
const QUIZ_DATABASE = {
  "Matemática": [
    {
      statement: "Se a função f(x) = 2x + 6 tem raiz em x = k, qual é o valor de k?",
      options: ["k = -3", "k = 3", "k = -6", "k = 0"],
      correct: 0,
      explanation: "Para encontrar a raiz da função, faz-se f(x) = 0: 2x + 6 = 0 -> 2x = -6 -> x = -3.",
      conceptHint: "A raiz de uma função afim f(x) = ax + b é o valor de x que zera a equação, ou seja, -b/a.",
      eliminationHint: "Como o termo constante (+6) é positivo, o termo com x precisa ser negativo para somar zero. Elimine as opções positivas."
    },
    {
      statement: "Em um triângulo retângulo, a hipotenusa mede 10 cm e um dos catetos mede 6 cm. Qual é a medida do outro cateto?",
      options: ["7 cm", "8 cm", "9 cm", "12 cm"],
      correct: 1,
      explanation: "Pelo Teorema de Pitágoras: a² + b² = c² -> 6² + b² = 10² -> 36 + b² = 100 -> b² = 64 -> b = 8 cm.",
      conceptHint: "Lembre-se do Teorema de Pitágoras e do clássico triângulo pitagórico 3-4-5 multiplicado por 2.",
      eliminationHint: "O cateto nunca pode ser maior que a hipotenusa (10 cm). Elimine 12 cm de imediato."
    },
    {
      statement: "Um produto que custava R$ 200,00 teve um aumento de 15%. Qual é o novo preço do produto?",
      options: ["R$ 215,00", "R$ 220,00", "R$ 230,00", "R$ 235,00"],
      correct: 2,
      explanation: "15% de 200 é (15/100) * 200 = 30. Logo, 200 + 30 = R$ 230,00.",
      conceptHint: "Calcular 15% de 200 equivale a calcular 10% (R$ 20) somado a metade desse valor (5% = R$ 10).",
      eliminationHint: "Aumentar 15% em 200 é diferente de somar R$ 15,00 diretamente. Elimine R$ 215,00."
    },
    {
      statement: "Qual é o valor de x na equação exponencial 2^(x + 1) = 32?",
      options: ["x = 3", "x = 4", "x = 5", "x = 6"],
      correct: 1,
      explanation: "Fatorando 32 na base 2: 32 = 2^5. Logo, x + 1 = 5 -> x = 4.",
      conceptHint: "Em equações exponenciais com bases iguais, basta igualar os expoentes.",
      eliminationHint: "2^5 = 32. Como o expoente é x + 1, pergunte-se: qual número somado a 1 resulta em 5?"
    },
    {
      statement: "Qual é a probabilidade de lançar um dado comum de 6 faces e obter um número primo?",
      options: ["1/6", "1/3", "1/2", "2/3"],
      correct: 2,
      explanation: "Os números primos entre 1 e 6 são {2, 3, 5} (3 casos favoráveis em 6 possíveis -> 3/6 = 1/2).",
      conceptHint: "Lembre-se de que o número 1 NÃO é primo, pois possui apenas um divisor.",
      eliminationHint: "Liste os números primos possíveis no dado de 1 a 6 e divida pelo total de 6 faces."
    }
  ],
  "Português": [
    {
      statement: "Assinale a alternativa em que o uso do acento indicativo de crase está CORRETO:",
      options: [
        "Fui à pé até o colégio.",
        "Entregou o documento à uma mulher desconhecida.",
        "Refiro-me à professora de matemática.",
        "Começou à estudar para a prova."
      ],
      correct: 2,
      explanation: "Ocorre crase diante de palavras femininas determinadas ('a professora') regidas por preposição 'a' (quem se refere, refere-se a algo). Não há crase antes de palavras masculinas, verbos ou artigo indefinido.",
      conceptHint: "A crase é a fusão da preposição 'a' com o artigo feminino 'a'. Nunca ocorre antes de verbo, palavra masculina ou pronome indefinido.",
      eliminationHint: "'Pé' é masculino; 'estudar' é verbo; 'uma' é artigo indefinido. Três alternativas caem por regras básicas."
    },
    {
      statement: "Na oração 'O tempo é um rio que corre veloz', que figura de linguagem predomina?",
      options: ["Metonímia", "Metáfora", "Pleonasmo", "Hipérbole"],
      correct: 1,
      explanation: "Trata-se de uma metáfora: uma comparação implícita direta sem conectivo comparativo (como 'como' ou 'tal qual').",
      conceptHint: "A metáfora atribui características de um elemento a outro de forma figurada direta.",
      eliminationHint: "Não há exagero intencional (hipérbole) nem repetição redundante (pleonasmo)."
    },
    {
      statement: "Assinale a frase que respeita as regras de concordância verbal da norma-padrão:",
      options: [
        "Fazem dois anos que não visito minha cidade.",
        "Houveram muitos problemas no projeto.",
        "Fazia cinco anos que ela não viajava.",
        "Devem haver outras opções disponíveis."
      ],
      correct: 2,
      explanation: "Os verbos 'haver' (no sentido de existir/ocorrer) e 'fazer' (indicando tempo decorrido) são impessoais e devem permanecer no singular.",
      conceptHint: "Verbos que indicam tempo decorrido (fazer/haver) não flexionam no plural.",
      eliminationHint: "'Fazem anos' e 'houveram problemas' são erros clássicos da língua falada. Descarte-os."
    },
    {
      statement: "Em 'Embora estivesse cansado, continuou estudando', a conjunção 'embora' introduz uma oração subordinada com sentido de:",
      options: ["Causa", "Concessão", "Condição", "Consequência"],
      correct: 1,
      explanation: "'Embora' é uma conjunção subordinativa concessiva, indicando uma ideia de oposição ou ressalva que não impede a ação principal.",
      conceptHint: "Concessão expressa um obstáculo que não anula a ação da oração principal.",
      eliminationHint: "Não há relação de causalidade direta nem de condição (como 'se')."
    },
    {
      statement: "Qual das palavras abaixo segue a mesma regra de acentuação gráfica de 'história'?",
      options: ["Árvore", "Relógio", "Café", "Lâmpada"],
      correct: 1,
      explanation: "'História' é uma palavra paroxítona terminada em ditongo crescente, exatamente como 'relógio'.",
      conceptHint: "Analise a posição da sílaba tônica (penúltima) e o encontro vocálico final.",
      eliminationHint: "'Árvore' e 'lâmpada' são proparoxítonas; 'café' é oxítona."
    }
  ],
  "História": [
    {
      statement: "Qual evento histórico ocorrido em 1789 é tradicionalmente considerado o marco inicial da Idade Contemporânea?",
      options: [
        "A Queda da Bastilha na Revolução Francesa",
        "A Proclamação da Independência dos EUA",
        "A Chegada da Família Real ao Brasil",
        "A Publicação do Manifesto Comunista"
      ],
      correct: 0,
      explanation: "A Tomada da Bastilha em 14 de julho de 1789, símbolo do absolutismo francês, marca o início da Revolução Francesa e a transição para a Idade Contemporânea.",
      conceptHint: "Pense na grande revolução europeia que proclamou 'Liberdade, Igualdade e Fraternidade'.",
      eliminationHint: "A Independência dos EUA ocorreu em 1776 e a Família Real chegou em 1808."
    },
    {
      statement: "Durante o período colonial brasileiro, o chamado 'Tratado de Tordesilhas' (1494) dividia as terras descobertas entre quais reinos?",
      options: ["Portugal e Inglaterra", "Espanha e França", "Portugal e Espanha", "Holanda e Portugal"],
      correct: 2,
      explanation: "O Tratado de Tordesilhas foi assinado entre as coroas de Portugal e Castela (Espanha) com a mediação papal para dividir as terras do Novo Mundo.",
      conceptHint: "Lembre-se das duas potências pioneiras nas Grandes Navegações do século XV.",
      eliminationHint: "Inglaterra e Holanda entraram tardiamente na corrida colonial ultramarina."
    },
    {
      statement: "A 'Era Vargas' no Brasil (1930–1945) foi marcada por profundas transformações socioeconômicas. Qual importante avanço trabalhista foi promulgado em 1943?",
      options: [
        "A Criação do FGTS",
        "A Consolidação das Leis do Trabalho (CLT)",
        "O Voto Feminino Obrigatório",
        "A Lei Áurea"
      ],
      correct: 1,
      explanation: "A CLT (Decreto-Lei nº 5.452) foi sancionada por Getúlio Vargas em 1º de maio de 1943, unificando a legislação trabalhista no Brasil.",
      conceptHint: "Sigla de três letras que regulamenta carteira de trabalho, férias remuneradas e jornada máxima.",
      eliminationHint: "O FGTS foi criado na década de 1960 durante a ditadura militar."
    }
  ],
  "Geografia": [
    {
      statement: "Qual bioma brasileiro é considerado a savana com maior biodiversidade do planeta e abriga nascentes de importantes bacias hidrográficas?",
      options: ["Caatinga", "Cerrado", "Pampa", "Pantanal"],
      correct: 1,
      explanation: "O Cerrado é a savana mais biodiversa do mundo, conhecido como o 'berço das águas' por conter nascentes das bacias Amazônica, Platina e do São Francisco.",
      conceptHint: "Vegetação com árvores de troncos retorcidos, cascas grossas e solo com alta concentração de alumínio no Planalto Central.",
      eliminationHint: "A Caatinga é semiárida exclusiva do Nordeste; o Pampa fica restrito ao extremo sul do país."
    },
    {
      statement: "O movimento de placas tectônicas convergentes no assoalho oceânico e continental é responsável pela formação de:",
      options: [
        "Fossas submarinas e cadeias montanhosas (orogênese)",
        "Rifts e expansão do fundo oceânico",
        "Falhas transformantes sem atividade sísmica",
        "Erosão eólica acelerada"
      ],
      correct: 0,
      explanation: "Zonas de convergência de placas tectônicas originam dobramentos modernos (montanhas como os Andes e o Himalaia) e fossas oceânicas devido à subducção.",
      conceptHint: "Convergência significa placas se chocando de encontro uma à outra.",
      eliminationHint: "Expansão de fundo oceânico ocorre em placas divergentes (afastamento)."
    }
  ],
  "Ciências": [
    {
      statement: "Na célula eucarionte, qual organela celular é responsável pela respiração celular aeróbica e produção de ATP?",
      options: ["Complexo de Golgi", "Ribossomo", "Mitocôndria", "Retículo Endoplasmático"],
      correct: 2,
      explanation: "A mitocôndria é a organela responsável pela respiração celular aeróbica, ciclo de Krebs e fosforilação oxidativa, gerando a maior parte do ATP celular.",
      conceptHint: "Conhecida como a 'usina de energia' da célula, possui DNA próprio e dupla membrana.",
      eliminationHint: "Ribossomos sintetizam proteínas e o Complexo de Golgi secreta substâncias."
    },
    {
      statement: "Na fotossíntese realizada pelos vegetais clorofilados, qual gás é absorvido da atmosfera e qual é liberado como subproduto, respectivamente?",
      options: [
        "Absorve Oxigênio e libera Dióxido de Carbono",
        "Absorve Dióxido de Carbono e libera Oxigênio",
        "Absorve Nitrogênio e libera Oxigênio",
        "Absorve Hélio e libera Metano"
      ],
      correct: 1,
      explanation: "A fotossíntese fixa dióxido de carbono (CO2) na fase escura (Ciclo de Calvin) e quebra moléculas de água pela luz (fotólise), liberando gás oxigênio (O2).",
      conceptHint: "Lembre-se de que as plantas fixam o carbono para produzir glicose e liberam o oxigênio que respiramos.",
      eliminationHint: "Inverter a ordem confundiria com a respiração convencional dos seres vivos."
    }
  ],
  "Física": [
    {
      statement: "De acordo com a Primeira Lei de Newton (Lei da Inércia), um corpo em movimento retilíneo uniforme tenderá a:",
      options: [
        "Parar imediatamente após o término da força motriz",
        "Acelerar constantemente em direção ao centro da Terra",
        "Permanecer em movimento retilíneo uniforme caso a resultante das forças seja nula",
        "Curvar sua trajetória devido à gravidade do vácuo"
      ],
      correct: 2,
      explanation: "A Primeira Lei de Newton afirma que um corpo permanece em repouso ou em movimento retilíneo uniforme a menos que seja compelido a mudar seu estado por forças resultantes externas.",
      conceptHint: "A inércia é a resistência natural que a matéria oferece à alteração do seu estado de movimento.",
      eliminationHint: "Para mudar a velocidade ou direção é necessária a ação de uma força resultante não nula."
    }
  ],
  "Química": [
    {
      statement: "A ligação química formada pela transferência definitiva de elétrons entre um metal e um ametal é denominada:",
      options: ["Ligação Covalente", "Ligação Iônica", "Ligação Metálica", "Ligação de Hidrogênio"],
      correct: 1,
      explanation: "A ligação iônica ocorre por atração eletrostática entre íons de cargas opostas (cátions e ânions), formados pela perda e ganho de elétrons.",
      conceptHint: "Pense no sal de cozinha (NaCl): o sódio metálico doa um elétron para o cloro ametal.",
      eliminationHint: "Ligação covalente envolve o compartilhamento de pares eletrônicos."
    }
  ],
  "Inglês": [
    {
      statement: "Choose the correct sentence using the Present Perfect tense in English:",
      options: [
        "I have lived in Brazil since 2020.",
        "I lived in Brazil since 2020 yesterday.",
        "I am living in Brazil for two days ago.",
        "I has lived in Brazil since 2020."
      ],
      correct: 0,
      explanation: "O Present Perfect (have/has + particípio passado) é usado com 'since' para indicar uma ação iniciada no passado que continua no presente. O pronome 'I' concorda com 'have', não 'has'.",
      conceptHint: "Present Perfect combina o verbo auxiliar 'have/has' com o particípio do verbo principal.",
      eliminationHint: "O pronome 'I' nunca usa o auxiliar 'has'."
    }
  ],
  "Filosofia": [
    {
      statement: "O método de questionamento socrático, fundamentado no diálogo e no parto de ideias, é conhecido como:",
      options: ["Dialética Marxista", "Maiêutica", "Escolástica", "Positivismo"],
      correct: 1,
      explanation: "A maiêutica socrática (termo derivado da arte do parto das parteiras) consiste em fazer perguntas sucessivas até que o interlocutor dê à luz seu próprio conhecimento.",
      conceptHint: "Sócrates comparava seu método ao trabalho de sua mãe Fenarete, que era parteira.",
      eliminationHint: "Escolástica é medieval; positivismo e marxismo são correntes dos séculos XIX e XX."
    }
  ],
  "Programação": [
    {
      statement: "Em JavaScript, qual estrutura é usada para executar um bloco de código repetidamente enquanto uma condição for verdadeira?",
      options: ["if / else", "while", "switch / case", "return"],
      correct: 1,
      explanation: "O laço 'while' avalia uma condição booleana e executa seu bloco repetidas vezes enquanto a condição retornar verdadeira.",
      conceptHint: "Pense em loops e laços de repetição, não em estruturas de decisão condicional.",
      eliminationHint: "'if/else' e 'switch' tomam decisões uma única vez, não realizam repetições."
    }
  ]
};

// Capítulos do E-book
const EBOOK_CHAPTERS = {
  1: {
    title: "Capítulo 1: A Ciência da Absorção Rápida",
    content: `
      <p>Estudos recentes em neurociência cognitiva comprovam que o cérebro humano opera sob dois modos de pensamento: o <strong>Modo Focado</strong> e o <strong>Modo Difuso</strong>.</p>
      <div class="reader-highlight-box">
        <strong>Conceito Fundamental:</strong> O modo focado é ativado quando você se concentra deliberadamente em uma equação ou texto. Já o modo difuso ocorre quando você relaxa ou toma um banho, permitindo que o cérebro faça conexões neurais inesperadas entre áreas distantes.
      </div>
      <p>A maior armadilha dos estudantes é tentar permanecer no modo focado por 4 ou 5 horas ininterruptas. Após cerca de 40 minutos, a saturação dos neurotransmissores diminui a capacidade de retenção.</p>
      <p>Para aprender de forma acelerada, alterne sessões de foco intenso (como os blocos de 25 a 30 minutos programados no seu StudyFlow) com pequenos momentos difusos de descanso físico.</p>
    `
  },
  2: {
    title: "Capítulo 2: Montagem da Grade Semanal Invencível",
    content: `
      <p>Um cronograma de estudos de alta performance não é aquele que ocupa todas as horas vagas do dia, mas sim o que é <strong>sustentável a longo prazo</strong>.</p>
      <div class="reader-highlight-box">
        <strong>A Regra das Matérias Concorrentes:</strong> Nunca estude disciplinas de mesma natureza em sequência. Se acabou de estudar 1h30 de Matemática (lógica analítica), a próxima matéria deve ser História, Geografia ou Literatura (linguagem e contexto).
      </div>
      <p>Ao alternar entre ciências exatas e humanas na sua grade semanal, você descansa os circuitos neuronais especializados de uma área enquanto exercita outra, prevenindo o esgotamento mental precoce.</p>
      <p>Deixe sempre pelo menos um turno na semana reservado exclusivamente para o descanso ou imprevistos, evitando que um atraso pontual desmonte todo o seu planejamento.</p>
    `
  },
  3: {
    title: "Capítulo 3: Técnicas de Memorização Permanente",
    content: `
      <p>Grifar apostilas com canetas coloridas e reler resumos prontos são as técnicas mais populares, porém estão comprovadamente entre as menos eficazes segundo pesquisas educacionais.</p>
      <div class="reader-highlight-box">
        <strong>A Tríade da Memória Blindada:</strong>
        <ol style="margin: 8px 0 0 16px; padding: 0;">
          <li><strong>Active Recall (Evocação Ativa):</strong> Teste sua mente fechando o livro e escrevendo tudo o que lembra em uma folha em branco.</li>
          <li><strong>Técnica de Feynman:</strong> Explique o tópico em voz alta em termos tão simples que uma criança de 10 anos compreenderia.</li>
          <li><strong>Repetição Espaçada:</strong> Revise com intervalos programados de 1 dia, 3 dias, 7 dias e 15 dias.</li>
        </ol>
      </div>
      <p>Quando seu cérebro é forçado a recuperar uma informação da memória em vez de apenas reconhecê-la no papel, a via neural se fortalece de forma irreversível.</p>
    `
  },
  4: {
    title: "Capítulo 4: Blindagem Anti-Procrastinação",
    content: `
      <p>A procrastinação não é preguiça ou falta de caráter; é uma reação biológica do sistema límbico tentando evitar o desconforto ou o medo de falhar em uma tarefa que parece difícil demais.</p>
      <div class="reader-highlight-box">
        <strong>A Regra dos 5 Minutos:</strong> Comprometa-se a sentar e estudar por apenas cinco minutos cronometrados no relógio. Diga a si mesmo que, se quiser parar após esses 5 minutos, você terá permissão total. Em 90% dos casos, vencer a barreira inicial de inércia é o suficiente para continuar estudando naturalmente.
      </div>
      <p>Elimine o atrito: antes de dormir, deixe o material e a página aberta na mesa. Ao acordar, a energia necessária para começar a estudar será mínima.</p>
    `
  },
  5: {
    title: "Capítulo 5: Estratégias Definitivas para o Dia da Prova",
    content: `
      <p>A preparação final para vestibulares, exames e provas escolares exige estratégia psicológica e controle de energia.</p>
      <div class="reader-highlight-box">
        <strong>Técnica de Varredura de Prova:</strong> Nunca resolva a prova na ordem cega em que as questões aparecem. Faça 3 passagens:
        <ul style="margin: 8px 0 0 16px; padding: 0;">
          <li><strong>Passagem 1:</strong> Resolva todas as questões fáceis e rápidas garantindo pontos seguros.</li>
          <li><strong>Passagem 2:</strong> Enfrente as questões de dificuldade média que demandam cálculos ou textos maiores.</li>
          <li><strong>Passagem 3:</strong> Dedique o tempo restante às questões difíceis e complexas.</li>
        </ul>
      </div>
      <p>Lembre-se: respire fundo, hidrate-se e confie na rotina que você construiu no StudyFlow. Bons estudos e excelente desempenho!</p>
    `
  }
};

// --- SELETORES DO DOM ---
// Abas
const tabTasks = document.querySelector("#tab-tasks");
const tabSchedule = document.querySelector("#tab-schedule");
const tabQuiz = document.querySelector("#tab-quiz");
const tabTips = document.querySelector("#tab-tips");
const tabEbook = document.querySelector("#tab-ebook");
const tabEbookTitle = document.querySelector("#tab-ebook-title");

const tasksView = document.querySelector("#tasks-view");
const scheduleView = document.querySelector("#schedule-view");
const quizView = document.querySelector("#quiz-view");
const tipsView = document.querySelector("#tips-view");
const ebookView = document.querySelector("#ebook-view");

const tabTasksCount = document.querySelector("#tab-tasks-count");
const tabScheduleCount = document.querySelector("#tab-schedule-count");
const todayScheduleBanner = document.querySelector("#today-schedule-banner");
const todayBannerText = document.querySelector("#today-banner-text");
const todayBannerBtn = document.querySelector("#today-banner-btn");

// Formulário de Tarefas
const form = document.querySelector("#task-form");
const titleInput = document.querySelector("#task-title");
const titleCounter = document.querySelector("#title-counter");
const subjectInput = document.querySelector("#task-subject");
const priorityInput = document.querySelector("#task-priority");
const dateInput = document.querySelector("#task-date");
const formHeadingText = document.querySelector("#form-heading-text");
const formEyebrow = document.querySelector("#form-eyebrow");
const submitBtnText = document.querySelector("#submit-btn-text");
const btnIcon = document.querySelector("#btn-icon");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const formMessage = document.querySelector("#form-message");

const taskList = document.querySelector("#task-list");
const emptyState = document.querySelector("#empty-state");
const emptyTitle = document.querySelector("#empty-title");
const emptyDesc = document.querySelector("#empty-desc");
const searchInput = document.querySelector("#search-input");
const filterSelect = document.querySelector("#filter-select");
const filterSubject = document.querySelector("#filter-subject");
const clearDoneBtn = document.querySelector("#clear-done");

const progressBar = document.querySelector("#progress-bar");
const progressLabel = document.querySelector("#progress-label");
const totalCountEl = document.querySelector("#total-count");
const pendingCountEl = document.querySelector("#pending-count");
const doneCountEl = document.querySelector("#done-count");
const taskCountBadge = document.querySelector("#task-count-badge");
const listSummary = document.querySelector("#list-summary");
const todayDateEl = document.querySelector("#today-date");

const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector("#theme-icon");
const themeText = document.querySelector("#theme-text");
const toastContainer = document.querySelector("#toast-container");

const statCardTotal = document.querySelector("#stat-card-total");
const statCardPending = document.querySelector("#stat-card-pending");
const statCardDone = document.querySelector("#stat-card-done");

// Horários (Schedule)
const schedForm = document.querySelector("#schedule-form");
const schedSubject = document.querySelector("#sched-subject");
const schedDay = document.querySelector("#sched-day");
const schedStart = document.querySelector("#sched-start");
const schedEnd = document.querySelector("#sched-end");
const schedNotes = document.querySelector("#sched-notes");
const schedSubmitText = document.querySelector("#sched-submit-text");
const schedBtnIcon = document.querySelector("#sched-btn-icon");
const cancelSchedEditBtn = document.querySelector("#cancel-sched-edit-btn");
const schedFormHeading = document.querySelector("#sched-form-heading");
const schedFormEyebrow = document.querySelector("#sched-form-eyebrow");
const schedFormMessage = document.querySelector("#sched-form-message");

const schedList = document.querySelector("#schedule-list");
const schedEmptyState = document.querySelector("#sched-empty-state");
const schedEmptyTitle = document.querySelector("#sched-empty-title");
const schedEmptyDesc = document.querySelector("#sched-empty-desc");
const schedBadge = document.querySelector("#sched-badge");
const schedTotalHours = document.querySelector("#sched-total-hours");
const schedActiveDays = document.querySelector("#sched-active-days");
const schedActiveSubjects = document.querySelector("#sched-active-subjects");
const schedCurrentStatus = document.querySelector("#sched-current-status");
const clearAllSchedBtn = document.querySelector("#clear-all-sched");
const dayChips = document.querySelectorAll(".day-chip");

// Elementos do Quiz
const quizSetupScreen = document.querySelector("#quiz-setup-screen");
const quizStartForm = document.querySelector("#quiz-start-form");
const quizSubjectSelect = document.querySelector("#quiz-subject-select");
const customSubjectRow = document.querySelector("#custom-subject-row");
const customSubjectInput = document.querySelector("#custom-subject-input");
const quizEducationLevel = document.querySelector("#quiz-education-level");
const quizTopicInput = document.querySelector("#quiz-topic-input");
const topicSuggestionsList = document.querySelector("#topic-suggestions");
const quizGoalSelect = document.querySelector("#quiz-goal-select");
const customGoalRow = document.querySelector("#custom-goal-row");
const customGoalInput = document.querySelector("#custom-goal-input");
const quizReasonSelect = document.querySelector("#quiz-reason-select");
const customReasonRow = document.querySelector("#custom-reason-row");
const customReasonInput = document.querySelector("#custom-reason-input");
const quizQuestionsCount = document.querySelector("#quiz-questions-count");

const quizActiveScreen = document.querySelector("#quiz-active-screen");
const quizActiveSubject = document.querySelector("#quiz-active-subject");
const quizActiveLevel = document.querySelector("#quiz-active-level");
const quizActiveTopic = document.querySelector("#quiz-active-topic");
const quizProgressText = document.querySelector("#quiz-progress-text");
const quizScoreBadge = document.querySelector("#quiz-score-badge");
const quizProgressBarFill = document.querySelector("#quiz-progress-bar-fill");
const questionStatement = document.querySelector("#question-statement");
const questionOptions = document.querySelector("#question-options");
const questionFeedbackBox = document.querySelector("#question-feedback-box");
const feedbackIconTitle = document.querySelector("#feedback-icon-title");
const feedbackExplanation = document.querySelector("#feedback-explanation");
const nextQuestionBtn = document.querySelector("#next-question-btn");

const tutorChatMessages = document.querySelector("#tutor-chat-messages");
const tutorChipBtns = document.querySelectorAll(".tutor-chip-btn");
const tutorAskForm = document.querySelector("#tutor-ask-form");
const tutorUserInput = document.querySelector("#tutor-user-input");

const quizResultsScreen = document.querySelector("#quiz-results-screen");
const resultsScorePhrase = document.querySelector("#results-score-phrase");
const resProfileSubject = document.querySelector("#res-profile-subject");
const resProfileTopic = document.querySelector("#res-profile-topic");
const resProfileLevel = document.querySelector("#res-profile-level");
const resProfileGoal = document.querySelector("#res-profile-goal");
const rCorrectCount = document.querySelector("#r-correct-count");
const rWrongCount = document.querySelector("#r-wrong-count");
const rPctCount = document.querySelector("#r-pct-count");
const resultsFeedbackMsg = document.querySelector("#results-feedback-msg");
const restartSameQuizBtn = document.querySelector("#restart-same-quiz-btn");
const newQuizBtn = document.querySelector("#new-quiz-btn");

// Dicas e E-book
const promoBuyBtn = document.querySelector("#promo-buy-btn");
const openCheckoutBtn = document.querySelector("#open-checkout-btn");
const checkoutModal = document.querySelector("#checkout-modal");
const closeCheckoutBtn = document.querySelector("#close-checkout-btn");

const payTabPix = document.querySelector("#pay-tab-pix");
const payTabCard = document.querySelector("#pay-tab-card");
const payTabBoleto = document.querySelector("#pay-tab-boleto");
const payPanelPix = document.querySelector("#pay-panel-pix");
const payPanelCard = document.querySelector("#pay-panel-card");
const payPanelBoleto = document.querySelector("#pay-panel-boleto");

const copySinglePixKey = document.querySelector("#copy-single-pix-key");
const copyPixBtn = document.querySelector("#copy-pix-btn");
const pixCopyInput = document.querySelector("#pix-copy-input");
const confirmPixBtn = document.querySelector("#confirm-pix-btn");

const cardPaymentForm = document.querySelector("#card-payment-form");
const cardNum = document.querySelector("#card-num");
const cardName = document.querySelector("#card-name");
const cardExp = document.querySelector("#card-exp");
const cardCvv = document.querySelector("#card-cvv");
const cardErrorMsg = document.querySelector("#card-error-msg");
const vcardBrand = document.querySelector("#vcard-brand");
const vcardNumber = document.querySelector("#vcard-number");
const vcardHolder = document.querySelector("#vcard-holder");
const vcardExp = document.querySelector("#vcard-exp");

const copyBoletoBtn = document.querySelector("#copy-boleto-btn");
const boletoCodeInput = document.querySelector("#boleto-code-input");
const confirmBoletoBtn = document.querySelector("#confirm-boleto-btn");

const ebookShowcase = document.querySelector("#ebook-showcase");
const ebookReader = document.querySelector("#ebook-reader");
const readerContent = document.querySelector("#reader-content");
const printEbookBtn = document.querySelector("#print-ebook-btn");
const resetPurchaseBtn = document.querySelector("#reset-purchase-btn");
const tipFilterBtns = document.querySelectorAll(".tip-filter-btn");

// --- ESTADO ---
let tasks = loadTasks();
let schedules = loadSchedules();
let isEbookUnlocked = localStorage.getItem(STORAGE_KEY_EBOOK) === "true";
let activeChapter = 1;

let editingTaskId = null;
let editingScheduleId = null;
let selectedDayFilter = "todos";
let messageTimeout = null;
let schedMessageTimeout = null;

// Estado do Quiz
let quizState = {
  subject: "Matemática",
  topic: "Funções e Gráficos",
  educationLevel: "medio",
  educationLevelText: "Ensino Médio / ENEM",
  goal: "prova_escolar",
  goalText: "Prova escolar ou bimestral",
  reason: "dificuldade",
  reasonText: "Superar dúvidas e destravar o raciocínio",
  questions: [],
  currentIndex: 0,
  score: 0,
  answered: false
};

// --- UTILITÁRIOS ---
function stripAccents(str) {
  return String(str || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function timeToMinutes(t) {
  if (!t || typeof t !== "string") return 0;
  const [h, m] = t.split(":").map(Number);
  return (h || 0) * 60 + (m || 0);
}

function formatDuration(mins) {
  if (mins <= 0) return "0m";
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  if (h === 0) return `${m}m`;
  if (m === 0) return `${h}h`;
  return `${h}h ${String(m).padStart(2, "0")}m`;
}

function getTodayKey() {
  const daysMap = { 0: "domingo", 1: "segunda", 2: "terca", 3: "quarta", 4: "quinta", 5: "sexta", 6: "sabado" };
  return daysMap[new Date().getDay()];
}

function isCurrentlyActive(dayKey, startTime, endTime) {
  if (dayKey !== getTodayKey()) return false;
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const start = timeToMinutes(startTime);
  const end = timeToMinutes(endTime);
  return currentMinutes >= start && currentMinutes <= end;
}

function makeId(prefix = "id") {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return `${prefix}-${crypto.randomUUID()}`;
  }
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function localDateString(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDate(value) {
  if (!value || typeof value !== "string") return "";
  const parts = value.split("-").map(Number);
  if (parts.length !== 3 || parts.some(isNaN)) return "";
  const [year, month, day] = parts;
  const dateObj = new Date(year, month - 1, day);
  return isNaN(dateObj.getTime()) ? "" : dateObj.toLocaleDateString("pt-BR");
}

function getDueDateInfo(dateStr, isCompleted) {
  if (!dateStr) return null;
  const todayStr = localDateString();

  if (isCompleted) {
    return { label: formatDate(dateStr), className: "completed" };
  }
  if (dateStr < todayStr) {
    return { label: `⚠ Atrasada · ${formatDate(dateStr)}`, className: "overdue" };
  }
  if (dateStr === todayStr) {
    return { label: `⚡ Entrega hoje`, className: "today" };
  }

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  if (dateStr === localDateString(tomorrow)) {
    return { label: `⏳ Entrega amanhã`, className: "tomorrow" };
  }

  return { label: `📅 ${formatDate(dateStr)}`, className: "upcoming" };
}

// --- LOCAL STORAGE ---
function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return [];
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) return [];

    return parsed
      .filter(task => task && typeof task === "object" && typeof task.title === "string" && task.title.trim().length > 0)
      .map(task => ({
        id: typeof task.id === "string" && task.id ? task.id : makeId("task"),
        title: task.title.trim(),
        subject: typeof task.subject === "string" && task.subject ? task.subject : "Outra",
        priority: ["alta", "normal", "baixa"].includes(task.priority) ? task.priority : "normal",
        date: typeof task.date === "string" ? task.date : "",
        completed: Boolean(task.completed),
        createdAt: typeof task.createdAt === "string" ? task.createdAt : new Date().toISOString()
      }));
  } catch (error) {
    console.warn("Erro ao carregar tarefas:", error);
    return [];
  }
}

function saveTasks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    return true;
  } catch (error) {
    console.error("Erro ao salvar tarefas:", error);
    showMessage("Não foi possível salvar os dados neste navegador.", true);
    return false;
  }
}

function loadSchedules() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_SCHEDULES);
    if (!saved) return [];
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) return [];

    return parsed
      .filter(entry => entry && typeof entry === "object" && entry.subject && entry.day && entry.startTime && entry.endTime)
      .map(entry => ({
        id: typeof entry.id === "string" && entry.id ? entry.id : makeId("sched"),
        subject: String(entry.subject).trim(),
        day: String(entry.day).trim().toLowerCase(),
        startTime: String(entry.startTime).trim(),
        endTime: String(entry.endTime).trim(),
        notes: typeof entry.notes === "string" ? entry.notes.trim() : ""
      }));
  } catch (error) {
    console.warn("Erro ao carregar horários:", error);
    return [];
  }
}

function saveSchedules() {
  try {
    localStorage.setItem(STORAGE_KEY_SCHEDULES, JSON.stringify(schedules));
    return true;
  } catch (error) {
    console.error("Erro ao salvar horários:", error);
    showSchedMessage("Erro ao salvar os horários.", true);
    return false;
  }
}

// --- TEMA: MODO ESCURO POR PADRÃO (DARK MODE DEFAULT) ---
function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  // Se não houver tema salvo, define 'dark' como padrão solicitado pelo usuário
  const activeTheme = savedTheme || "dark";
  applyTheme(activeTheme);
}

function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    if (themeIcon) themeIcon.textContent = "☀️";
    if (themeText) themeText.textContent = "Modo Claro";
  } else {
    document.documentElement.removeAttribute("data-theme");
    if (themeIcon) themeIcon.textContent = "🌙";
    if (themeText) themeText.textContent = "Modo Escuro";
  }
  localStorage.setItem(THEME_KEY, theme);
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    applyTheme(currentTheme === "dark" ? "light" : "dark");
  });
}

// --- CONTROLE DE ABAS ---
function switchTab(tabKey) {
  const allTabs = [
    { btn: tabTasks, view: tasksView, key: "tasks" },
    { btn: tabSchedule, view: scheduleView, key: "schedule" },
    { btn: tabQuiz, view: quizView, key: "quiz" },
    { btn: tabTips, view: tipsView, key: "tips" },
    { btn: tabEbook, view: ebookView, key: "ebook" }
  ];

  allTabs.forEach(item => {
    if (item.key === tabKey) {
      item.btn.classList.add("active");
      item.btn.setAttribute("aria-selected", "true");
      item.view.style.display = "block";
      item.view.classList.add("active");
    } else {
      item.btn.classList.remove("active");
      item.btn.setAttribute("aria-selected", "false");
      item.view.style.display = "none";
      item.view.classList.remove("active");
    }
  });

  if (tabKey === "tasks") render();
  if (tabKey === "schedule") renderSchedules();
  if (tabKey === "ebook") renderEbookView();

  localStorage.setItem(ACTIVE_TAB_KEY, tabKey);
}

tabTasks.addEventListener("click", () => switchTab("tasks"));
tabSchedule.addEventListener("click", () => switchTab("schedule"));
tabQuiz.addEventListener("click", () => switchTab("quiz"));
tabTips.addEventListener("click", () => switchTab("tips"));
tabEbook.addEventListener("click", () => switchTab("ebook"));

if (todayBannerBtn) {
  todayBannerBtn.addEventListener("click", () => {
    switchTab("schedule");
    setDayFilter(getTodayKey());
  });
}

// --- NOTIFICAÇÕES (TOAST) ---
function showToast(message, onUndo = null) {
  if (!toastContainer) return;

  const toast = document.createElement("div");
  toast.className = "toast";

  const content = document.createElement("div");
  content.className = "toast-content";
  content.textContent = message;
  toast.append(content);

  if (onUndo) {
    const undoBtn = document.createElement("button");
    undoBtn.type = "button";
    undoBtn.className = "toast-undo-btn";
    undoBtn.textContent = "Desfazer";
    undoBtn.addEventListener("click", () => {
      onUndo();
      toast.classList.add("hiding");
      setTimeout(() => toast.remove(), 200);
    });
    toast.append(undoBtn);
  }

  toastContainer.append(toast);

  setTimeout(() => {
    if (toast.isConnected) {
      toast.classList.add("hiding");
      setTimeout(() => toast.remove(), 200);
    }
  }, 4500);
}

function showMessage(message, isError = false) {
  if (messageTimeout) clearTimeout(messageTimeout);
  formMessage.textContent = message;
  formMessage.classList.toggle("error", isError);

  if (message && !isError) {
    messageTimeout = setTimeout(() => {
      formMessage.textContent = "";
      formMessage.classList.remove("error");
    }, 4000);
  }
}

function clearValidationErrors() {
  titleInput.removeAttribute("aria-invalid");
  subjectInput.removeAttribute("aria-invalid");
  dateInput.removeAttribute("aria-invalid");
  if (formMessage.classList.contains("error")) showMessage("");
}

function showSchedMessage(message, isError = false) {
  if (schedMessageTimeout) clearTimeout(schedMessageTimeout);
  schedFormMessage.textContent = message;
  schedFormMessage.classList.toggle("error", isError);

  if (message && !isError) {
    schedMessageTimeout = setTimeout(() => {
      schedFormMessage.textContent = "";
      schedFormMessage.classList.remove("error");
    }, 4000);
  }
}

function clearSchedValidationErrors() {
  schedSubject.removeAttribute("aria-invalid");
  schedDay.removeAttribute("aria-invalid");
  schedStart.removeAttribute("aria-invalid");
  schedEnd.removeAttribute("aria-invalid");
  if (schedFormMessage.classList.contains("error")) showSchedMessage("");
}

function updateTodayBanner() {
  const todayKey = getTodayKey();
  const todaySchedules = schedules.filter(s => s.day === todayKey);

  if (todaySchedules.length > 0) {
    let totalMins = 0;
    todaySchedules.forEach(s => {
      totalMins += Math.max(0, timeToMinutes(s.endTime) - timeToMinutes(s.startTime));
    });

    const blockLabel = todaySchedules.length === 1 ? "1 bloco de estudo" : `${todaySchedules.length} blocos de estudo`;
    todayBannerText.textContent = `Hoje você tem ${blockLabel} planejado (${formatDuration(totalMins)}).`;
    todayScheduleBanner.style.display = "flex";
  } else {
    todayScheduleBanner.style.display = "none";
  }
}

// --- QUIZ INTERATIVO COM IA TUTORA SOCRÁTICA ---
const TOPIC_SUGGESTIONS = {
  "Matemática": [
    "Funções e Gráficos",
    "Equações do 2º Grau",
    "Trigonometria e Triângulos",
    "Geometria Plana e Espacial",
    "Probabilidade e Estatística",
    "Porcentagem e Juros"
  ],
  "Português": [
    "Sintaxe e Termos da Oração",
    "Concordância Verbal e Nominal",
    "Interpretação e Compreensão Textual",
    "Crase e Regência Verbal",
    "Figuras de Linguagem",
    "Coesão e Coerência"
  ],
  "História": [
    "Revolução Francesa e Iluminismo",
    "Brasil Colônia e Ciclo do Ouro",
    "Segunda Guerra Mundial",
    "Era Vargas e Ditadura Militar",
    "Guerra Fria e Nova Ordem",
    "Antiguidade Clássica (Grécia e Roma)"
  ],
  "Geografia": [
    "Climatologia e Mudanças Climáticas",
    "Geopolítica Mundial e Conflitos",
    "Urbanização e Demografia",
    "Biomas Brasileiros e Sustentabilidade",
    "Cartografia e Escalas",
    "Globalização e Blocos Econômicos"
  ],
  "Ciências": [
    "Células Procariontes e Eucariontes",
    "Genética Mendeliana e DNA",
    "Ecologia e Cadeias Alimentares",
    "Evolução e Seleção Natural",
    "Sistemas do Corpo Humano",
    "Microbiologia e Imunologia"
  ],
  "Física": [
    "Cinemática (Velocidade e Aceleração)",
    "Leis de Newton e Dinâmica",
    "Trabalho, Potência e Energia",
    "Termodinâmica e Calorimetria",
    "Eletricidade e Circuitos Elétricos",
    "Óptica Geométrica e Ondas"
  ],
  "Química": [
    "Tabela Periódica e Propriedades",
    "Ligações Químicas e Geometria",
    "Estequiometria e Massa Molar",
    "Soluções e Concentrações",
    "Termoquímica e Cinética",
    "Química Orgânica e Funções"
  ],
  "Inglês": [
    "Reading Comprehension",
    "Simple Past vs Present Perfect",
    "Modal Verbs and Deductions",
    "Conditionals (If-clauses)",
    "False Friends and Vocabulary",
    "Passive Voice"
  ],
  "Filosofia": [
    "Filosofia Antiga (Sócrates, Platão, Aristóteles)",
    "Iluminismo e Contratualismo Político",
    "Ética, Moral e Liberdade",
    "Existencialismo (Sartre e Nietzsche)",
    "Sociologia: Durkheim, Marx e Weber",
    "Cidadania e Direitos Humanos"
  ],
  "Programação": [
    "Lógica de Programação e Condicionais",
    "Estruturas de Repetição (Loops)",
    "Funções, Parâmetros e Escopo",
    "Arrays e Manipulação de Dados",
    "DOM e Eventos em JavaScript",
    "HTML5 Semântico e CSS Flexbox"
  ]
};

function updateTopicDatalist(subject) {
  if (!topicSuggestionsList) return;
  const suggestions = TOPIC_SUGGESTIONS[subject] || [
    "Conceitos Fundamentais",
    "Aplicações Práticas",
    "Análise Crítica e Resolução de Problemas",
    "Teoria e Modelos Estruturantes"
  ];
  topicSuggestionsList.innerHTML = suggestions
    .map(topic => `<option value="${topic}"></option>`)
    .join("");

  if (quizTopicInput && suggestions.length > 0) {
    quizTopicInput.placeholder = `Ex.: ${suggestions[0]}, ${suggestions[1]}...`;
  }
}

// Alternância do campo de matéria personalizada e atualização de sugestões
if (quizSubjectSelect) {
  quizSubjectSelect.addEventListener("change", () => {
    if (quizSubjectSelect.value === "personalizada") {
      customSubjectRow.style.display = "block";
      customSubjectInput.focus();
      if (quizTopicInput) quizTopicInput.placeholder = "Ex.: Tópico específico desta matéria...";
    } else {
      customSubjectRow.style.display = "none";
      updateTopicDatalist(quizSubjectSelect.value);
    }
  });
}

// Alternância de campos para Objetivo e Motivo personalizados
if (quizGoalSelect) {
  quizGoalSelect.addEventListener("change", () => {
    if (quizGoalSelect.value === "outro") {
      customGoalRow.style.display = "block";
      customGoalInput.focus();
    } else {
      customGoalRow.style.display = "none";
    }
  });
}

if (quizReasonSelect) {
  quizReasonSelect.addEventListener("change", () => {
    if (quizReasonSelect.value === "outro") {
      customReasonRow.style.display = "block";
      customReasonInput.focus();
    } else {
      customReasonRow.style.display = "none";
    }
  });
}

// Início do Quiz
if (quizStartForm) {
  quizStartForm.addEventListener("submit", event => {
    event.preventDefault();

    let subject = quizSubjectSelect.value;
    if (subject === "personalizada") {
      const customName = customSubjectInput.value.trim();
      if (!customName) {
        showToast("Digite o nome da matéria personalizada!");
        customSubjectInput.focus();
        return;
      }
      subject = customName;
    }

    const educationLevel = quizEducationLevel ? quizEducationLevel.value : "medio";
    const educationMap = {
      "fundamental": "Ensino Fundamental (6º ao 9º ano)",
      "medio": "Ensino Médio / ENEM / Pré-Vestibular",
      "superior": "Ensino Superior / Graduação",
      "concurso": "Concurso Público / Nível Avançado"
    };
    const educationLevelText = educationMap[educationLevel] || "Ensino Médio";

    let topic = quizTopicInput ? quizTopicInput.value.trim() : "";
    if (!topic) {
      topic = `${subject} (Geral)`;
    }

    const goal = quizGoalSelect ? quizGoalSelect.value : "prova_escolar";
    let goalText = "";
    if (goal === "outro") {
      goalText = customGoalInput.value.trim() || "Objetivo personalizado";
    } else {
      const goalMap = {
        "prova_escolar": "Prova escolar ou bimestral",
        "enem_vestibular": "ENEM ou Vestibular",
        "concurso": "Concurso Público / Seleção",
        "faculdade": "Prova da Faculdade / Exame Universitário",
        "reforco": "Superar dificuldade e reforçar a base",
        "curiosidade": "Curiosidade e aprendizado livre"
      };
      goalText = goalMap[goal] || "Estudo acadêmico";
    }

    const reason = quizReasonSelect ? quizReasonSelect.value : "dificuldade";
    let reasonText = "";
    if (reason === "outro") {
      reasonText = customReasonInput.value.trim() || "Motivação pessoal de estudos";
    } else {
      const reasonMap = {
        "dificuldade": "Tenho dúvida nesse tema e quero destravar o raciocínio",
        "peso_prova": "Conteúdo de alto peso na avaliação e preciso gabaritar",
        "revisao": "Já vi a teoria e quero testar a fixação prática",
        "pratica": "Treinar interpretação e evitar pegadinhas de prova",
        "prerequisito": "Pré-requisito essencial para avançar no cronograma"
      };
      reasonText = reasonMap[reason] || "Aprofundar a compreensão";
    }

    const count = Number(quizQuestionsCount.value) || 5;

    startQuiz(subject, topic, educationLevel, educationLevelText, goal, goalText, reason, reasonText, count);
  });
}

function generateDynamicQuestions(subject, topic = "", educationLevel = "medio", educationLevelText = "Ensino Médio / ENEM", goalText = "Prova escolar", reasonText = "Reforçar a base", count = 5) {
  // Tratamento de retrocompatibilidade de assinatura caso chamada antiga ocorra
  if (typeof topic === "number") {
    count = topic;
    topic = subject;
    educationLevel = "medio";
    educationLevelText = "Ensino Médio / ENEM";
    goalText = "Estudos gerais";
    reasonText = "Reforço e fixação";
  }

  const cleanTopic = topic || subject;
  const isCustomTopic = cleanTopic && cleanTopic.toLowerCase() !== subject.toLowerCase();

  // Se a matéria existe no banco padrão e o usuário não especificou um subtópico muito divergente
  const pool = QUIZ_DATABASE[subject] || [];
  let baseQuestions = [];

  if (!isCustomTopic && pool.length > 0) {
    baseQuestions = [...pool].sort(() => 0.5 - Math.random());
  }

  // Gera questões estruturadas dinâmicas adaptadas aos 4 parâmetros informados:
  // 1. Assunto, 2. Escolaridade, 3. Objetivo (para o que é), 4. Motivo (porque do assunto)
  const dynamicTemplates = [
    {
      statement: educationLevel === "fundamental"
        ? `No estudo de ${cleanTopic} (${subject}), qual das opções descreve corretamente o conceito fundamental que você deve sempre ter em mente?`
        : educationLevel === "concurso"
        ? `No âmbito de ${subject}, relativamente à disciplina e aplicação teórica de ${cleanTopic}, assinale a alternativa juridicamente e tecnicamente correta:`
        : educationLevel === "superior"
        ? `Considerando os modelos teóricos e a literatura estruturante de ${subject}, como se fundamenta o princípio essencial de ${cleanTopic}?`
        : `Em uma questão contextualizada de ${goalText} sobre ${cleanTopic} (${subject}), qual relação conceitual entre as premissas deve ser considerada válida?`,
      options: [
        `Compreender as relações causais e aplicar os princípios fundamentais de ${cleanTopic} na resolução analítica`,
        `Assumir que ${cleanTopic} independe de premissas teóricas prévias e baseia-se puramente em memorização mecânica`,
        `Considerar que as variáveis em ${cleanTopic} comportam-se sempre de maneira idêntica sob quaisquer condições extremas`,
        `Desconsiderar as regras gerais de ${subject} ao analisar especificamente este tópico`
      ],
      correct: 0,
      explanation: `Em ${subject}, o domínio de ${cleanTopic} no nível ${educationLevelText} exige articulação conceitual e aplicação ativa, e não a mera memorização de regras descontextualizadas.`,
      conceptHint: `Lembre-se dos pilares teóricos de ${cleanTopic} no nível ${educationLevelText}: identifique a alternativa que valoriza a compreensão fundamentada.`,
      eliminationHint: "Descarte alternativas que usem termos restritivos ou absolutos como 'puramente memorização' ou 'quaisquer condições extremas'."
    },
    {
      statement: educationLevel === "concurso"
        ? `Em uma prova de ${goalText}, ao resolver uma questão prática sobre ${cleanTopic}, qual procedimento metodológico evita as pegadinhas mais recorrentes de bancas examinadoras?`
        : educationLevel === "fundamental"
        ? `Imagine uma situação prática em que precisamos aplicar ${cleanTopic}. Qual é o primeiro passo correto para encontrar a solução?`
        : `Diante de um problema prático voltado para ${goalText} envolvendo ${cleanTopic}, qual estratégia de resolução garante a maior precisão na resposta?`,
      options: [
        "Ignorar os dados intermediários e inferir a resposta por intuição rápida",
        `Isolar os dados do problema, relacionar com as fórmulas/leis centrais de ${cleanTopic} e validar as unidades de medida`,
        "Adotar a primeira hipótese que pareça plausível sem verificar as condições de contorno",
        `Concluir que os princípios de ${cleanTopic} só se aplicam em experimentos ideais e nunca em problemas práticos`
      ],
      correct: 1,
      explanation: `Para ${goalText}, o método científico estruturado (isolar variáveis, aplicar o modelo de ${cleanTopic} e checar coerência) é a chave para o acerto seguro.`,
      conceptHint: `Pense na rotina ideal de resolução para ${goalText}: qual alternativa descreve o rigor analítico adequado ao nível ${educationLevelText}?`,
      eliminationHint: "Opções que defendem 'intuição rápida' ou 'não verificar condições' violam a prática acadêmica padrão."
    },
    {
      statement: `Ao analisar a dinâmica e o comportamento de ${cleanTopic} em ${subject}, se uma das premissas ou variáveis centrais sofrer uma alteração significativa, o que é esperado?`,
      options: [
        "O sistema permanecerá inalterado, pois os fatores externos não influenciam os resultados",
        `Haverá um impacto proporcional ou correspondente no resultado final, exigindo readequação das conclusões teóricas`,
        "Todas as leis fundamentais da disciplina são anuladas instantaneamente",
        "A resposta correta se tornará indefinível mesmo com todos os dados disponíveis"
      ],
      correct: 1,
      explanation: `Em ${subject}, a alteração de parâmetros essenciais em ${cleanTopic} produz desdobramentos lógicos e causais coerentes no resultado final.`,
      conceptHint: `Pense na relação de causa e efeito em ${cleanTopic}: como um elemento influencia diretamente os demais?`,
      eliminationHint: "Elimine alternativas niilistas ('leis anuladas', 'indefinível') ou de total indiferença ('permanecerá inalterado')."
    },
    {
      statement: `Você indicou que escolheu este assunto com o objetivo de "${reasonText}". Nesse contexto, qual cuidado crítico evita os erros conceituais mais comuns em ${cleanTopic}?`,
      options: [
        `Distinguir com clareza as definições centrais dos casos particulares e atentar para as condições sob as quais as regras de ${cleanTopic} são válidas`,
        "Substituir o raciocínio dedutivo por atalhos rápidos encontrados em redes sociais sem embasamento",
        "Considerar que termos semelhantes possuem sempre o mesmo significado exato em qualquer contexto de estudo",
        "Abandonar a verificação das etapas intermediárias quando o enunciado parecer simples"
      ],
      correct: 0,
      explanation: `Para superar o desafio de "${reasonText}", a maior proteção contra o erro é delimitar com precisão o campo de validade das regras de ${cleanTopic}.`,
      conceptHint: `Como sua tutora socrática, ressalto: repare na importância de saber exatamente quando uma regra se aplica e quando ela tem exceções.`,
      eliminationHint: "Descarte abordagens superficiais como 'substituir dedução por atalhos' ou 'ignorar etapas intermediárias'."
    },
    {
      statement: educationLevel === "superior"
        ? `Na perspectiva epistemológica e na aplicação avançada de ${cleanTopic}, qual síntese teórica expressa a maturidade conceitual esperada no Ensino Superior?`
        : `Em síntese, para alcançar alto desempenho em ${goalText} estudando ${cleanTopic} (${subject}), qual conclusão teórica é indispensável?`,
      options: [
        `A teoria de ${cleanTopic} é um corpo de conhecimento estruturado que conecta premissas lógicas a conclusões verificáveis e práticas`,
        `O aprendizado de ${cleanTopic} independe de revisão ou conexão com outros ramos do saber`,
        "O estudo ativo não produz ganhos cognitivos mensuráveis na retenção deste tema",
        "Questões de prova desse assunto baseiam-se em critérios aleatórios sem padrão técnico"
      ],
      correct: 0,
      explanation: `A consolidação de ${cleanTopic} em ${subject} repousa na constatação de que conceitos teóricos e resolução prática formam uma unidade contínua e rigorosa.`,
      conceptHint: `Pense na visão global da matéria: qual opção resume uma visão madura e científica sobre ${cleanTopic}?`,
      eliminationHint: "Alternativas que desacreditam o estudo ativo ou sugerem 'critérios aleatórios' são conceitualmente erradas."
    }
  ];

  const combined = [...baseQuestions, ...dynamicTemplates];
  return combined.slice(0, count);
}

function startQuiz(subject, topic = "", educationLevel = "medio", educationLevelText = "Ensino Médio / ENEM", goal = "prova_escolar", goalText = "Prova escolar ou bimestral", reason = "dificuldade", reasonText = "Superar dúvidas", count = 5) {
  if (typeof topic === "number") {
    count = topic;
    topic = subject;
    educationLevel = "medio";
    educationLevelText = "Ensino Médio / ENEM";
    goal = "prova_escolar";
    goalText = "Prova escolar";
    reason = "dificuldade";
    reasonText = "Fixar conteúdo";
  }

  quizState.subject = subject;
  quizState.topic = topic || subject;
  quizState.educationLevel = educationLevel;
  quizState.educationLevelText = educationLevelText;
  quizState.goal = goal;
  quizState.goalText = goalText;
  quizState.reason = reason;
  quizState.reasonText = reasonText;

  quizState.questions = generateDynamicQuestions(subject, topic, educationLevel, educationLevelText, goalText, reasonText, count);
  quizState.currentIndex = 0;
  quizState.score = 0;
  quizState.answered = false;

  quizSetupScreen.style.display = "none";
  quizResultsScreen.style.display = "none";
  quizActiveScreen.style.display = "grid";

  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  quizState.answered = false;
  const q = quizState.questions[quizState.currentIndex];
  const total = quizState.questions.length;
  const currentNum = quizState.currentIndex + 1;

  if (quizActiveSubject) quizActiveSubject.textContent = quizState.subject;
  if (quizActiveLevel) quizActiveLevel.textContent = quizState.educationLevelText;
  if (quizActiveTopic) quizActiveTopic.textContent = quizState.topic;

  quizProgressText.textContent = `Pergunta ${currentNum} de ${total}`;
  quizScoreBadge.textContent = `${quizState.score} ${quizState.score === 1 ? "acerto" : "acertos"}`;

  const pct = Math.round((currentNum / total) * 100);
  quizProgressBarFill.style.width = `${pct}%`;

  questionStatement.textContent = q.statement;
  questionOptions.replaceChildren();

  const letters = ["A", "B", "C", "D"];
  q.options.forEach((optText, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-btn";
    btn.innerHTML = `<span class="option-letter">${letters[idx]}</span> <span>${optText}</span>`;
    btn.addEventListener("click", () => selectQuizAnswer(idx, btn));
    questionOptions.append(btn);
  });

  questionFeedbackBox.style.display = "none";

  // Reset do Chat da Tutora IA para a pergunta atual, altamente contextualizada
  tutorChatMessages.innerHTML = `
    <div class="tutor-bubble">
      <p>👋 Olá! Sou sua <strong>Tutora Socrática de IA</strong>. Estamos estudando <strong>${quizState.topic}</strong> (${quizState.subject}) no nível <strong>${quizState.educationLevelText}</strong>, com foco em <strong>${quizState.goalText}</strong>!</p>
      <p style="margin: 6px 0; font-size: 11px; opacity: 0.9;">🎯 <em>Seu motivo</em>: ${quizState.reasonText}.</p>
      <p>Estou pronta para te ajudar a desvendar esta questão. Se tiver dúvida, me envie uma mensagem ou use os botões rápidos. Vou orientar seu raciocínio sem entregar o gabarito!</p>
    </div>
  `;
}

function selectQuizAnswer(selectedIndex, clickedBtn) {
  if (quizState.answered) return;
  quizState.answered = true;

  const q = quizState.questions[quizState.currentIndex];
  const allBtns = questionOptions.querySelectorAll(".option-btn");
  allBtns.forEach(b => (b.disabled = true));

  const isCorrect = selectedIndex === q.correct;
  if (isCorrect) {
    quizState.score++;
    clickedBtn.classList.add("correct");
    feedbackIconTitle.textContent = "✓ Parabéns, resposta correta!";
    feedbackIconTitle.className = "feedback-title correct";
  } else {
    clickedBtn.classList.add("incorrect");
    allBtns[q.correct].classList.add("correct");
    feedbackIconTitle.textContent = "× Não foi dessa vez!";
    feedbackIconTitle.className = "feedback-title incorrect";
  }

  feedbackExplanation.textContent = q.explanation;
  questionFeedbackBox.style.display = "block";

  if (quizState.currentIndex + 1 >= quizState.questions.length) {
    nextQuestionBtn.innerHTML = "<span>Ver Resultado Final</span> 🏆";
  } else {
    nextQuestionBtn.innerHTML = "<span>Próxima pergunta</span> ➔";
  }

  // Notificação da Tutora IA
  const tutorComment = isCorrect
    ? `Muito bem! Você demonstrou excelente compreensão sobre ${quizState.topic} no nível ${quizState.educationLevelText}.`
    : `Não desanime! Observe a explicação ao lado para entender a relação correta de ${quizState.topic}. O erro faz parte do aprendizado ativo!`;
  addTutorMessage(tutorComment, "tutor");
}

if (nextQuestionBtn) {
  nextQuestionBtn.addEventListener("click", () => {
    quizState.currentIndex++;
    if (quizState.currentIndex < quizState.questions.length) {
      renderCurrentQuestion();
    } else {
      finishQuiz();
    }
  });
}

function finishQuiz() {
  quizActiveScreen.style.display = "none";
  quizResultsScreen.style.display = "block";

  const total = quizState.questions.length;
  const correct = quizState.score;
  const wrong = total - correct;
  const pct = Math.round((correct / total) * 100);

  if (resProfileSubject) resProfileSubject.textContent = quizState.subject;
  if (resProfileTopic) resProfileTopic.textContent = quizState.topic;
  if (resProfileLevel) resProfileLevel.textContent = quizState.educationLevelText;
  if (resProfileGoal) resProfileGoal.textContent = quizState.goalText;

  rCorrectCount.textContent = correct;
  rWrongCount.textContent = wrong;
  rPctCount.textContent = `${pct}%`;

  resultsScorePhrase.textContent = `Você acertou ${correct} de ${total} perguntas (${pct}% de aproveitamento).`;

  if (pct >= 80) {
    resultsFeedbackMsg.textContent = `Sensacional! Seu domínio sobre "${quizState.topic}" no nível ${quizState.educationLevelText} está muito sólido para ${quizState.goalText}. Continue com revisões no seu StudyFlow!`;
  } else if (pct >= 60) {
    resultsFeedbackMsg.textContent = `Bom resultado! Você já domina os fundamentos de "${quizState.topic}". Vale a pena agendar uma sessão de revisão no StudyFlow para consolidar os detalhes para ${quizState.goalText}.`;
  } else {
    resultsFeedbackMsg.textContent = `O erro é a melhor oportunidade de aprendizado ativo! Como você escolheu "${quizState.topic}" para "${quizState.reasonText}", revise os conceitos apontados e faça outro teste!`;
  }
}

if (restartSameQuizBtn) {
  restartSameQuizBtn.addEventListener("click", () => {
    startQuiz(
      quizState.subject,
      quizState.topic,
      quizState.educationLevel,
      quizState.educationLevelText,
      quizState.goal,
      quizState.goalText,
      quizState.reason,
      quizState.reasonText,
      quizState.questions.length
    );
  });
}

if (newQuizBtn) {
  newQuizBtn.addEventListener("click", () => {
    quizResultsScreen.style.display = "none";
    quizActiveScreen.style.display = "none";
    quizSetupScreen.style.display = "block";
  });
}

// --- LÓGICA DA IA TUTORA SOCRÁTICA (SEM SPOILER / SEM RESPOSTA DIRETA) ---
function addTutorMessage(text, sender = "tutor") {
  const bubble = document.createElement("div");
  bubble.className = sender === "user" ? "user-bubble" : "tutor-bubble";
  bubble.innerHTML = `<p>${text}</p>`;
  tutorChatMessages.append(bubble);
  tutorChatMessages.scrollTop = tutorChatMessages.scrollHeight;
}

function generateSocraticResponse(userQuery) {
  const q = (quizState.questions && quizState.questions[quizState.currentIndex]) || {};
  const lower = stripAccents(userQuery);

  // Verificação robusta de tentativa de pedir resposta direta ou letra (Socratic Guardrail)
  const directAnswerPatterns = [
    "qual e a resposta", "qual a resposta", "me da a resposta", "diz a resposta", "fala a resposta",
    "qual resposta", "resposta certa", "resposta correta", "alternativa certa", "alternativa correta",
    "qual alternativa", "qual a alternativa", "qual opcao", "qual a opcao", "opcao certa", "opcao correta",
    "qual e a letra", "qual a letra", "qual letra", "e a a", "e a b", "e a c", "e a d",
    "letra a", "letra b", "letra c", "letra d", "me diz a letra", "diz a letra",
    "gabarito", "qual marcar", "marca qual", "marcar qual", "o que marcar", "qual e o gabarito",
    "me da o resultado", "qual e o resultado", "qual resultado", "me da a solucao", "qual a solucao"
  ];

  const regexDirect = (
    (/(resposta|gabarito|solucao|resultado)/.test(lower) && /(qual|me da|diz|fala|passa|quero|certa|correta)/.test(lower)) ||
    (/(alternativa|opcao)/.test(lower) && /(qual|certa|correta|marcar|assinalar|indica)/.test(lower)) ||
    (/(qual|devo|posso|vou|pra)\s+(marcar|assinalar|escolher)/.test(lower)) ||
    (/(qual\s+(e\s+a\s+)?letra|letra\s+[a-d]|e\s+a\s+[a-d])/.test(lower))
  );

  const isAskingDirect = regexDirect || directAnswerPatterns.some(pat => lower.includes(pat));

  if (isAskingDirect) {
    return `Como sua tutora com o método socrático, meu compromisso é com o seu aprendizado de verdade! Eu <strong>não posso dar a resposta direta nem indicar a letra certa</strong>. Mas veja bem: repare no enunciado da questão sobre <em>${quizState.subject || "esta matéria"}</em>. O que o texto pede especificamente? Pense no conceito teórico fundamental!`;
  }

  if (lower.includes("pista") || lower.includes("dica") || lower.includes("ajuda")) {
    return q.conceptHint || `Pense nos fundamentos teóricos de ${quizState.subject || "estudo"} aplicados a este contexto específico.`;
  }

  if (lower.includes("eliminar") || lower.includes("elimina") || lower.includes("errada")) {
    return q.eliminationHint || "Analise cada alternativa buscando termos radicais como 'sempre', 'nunca' ou premissas que contradigam o enunciado.";
  }

  if (lower.includes("interpretar") || lower.includes("enunciado") || lower.includes("texto")) {
    return `Para interpretar bem esta questão de ${quizState.subject || "estudo"}: identifique a pergunta central no final do texto e isole os dados principais antes de ler as opções.`;
  }

  return `Excelente questionamento sobre ${quizState.subject || "a matéria"}! Lembre-se: ${q.conceptHint || "relacione o enunciado às leis e regras gerais da disciplina."} Qual das opções parece mais coerente com essa lógica?`;
}

// Envio de dúvidas para a IA Tutora
if (tutorAskForm) {
  tutorAskForm.addEventListener("submit", event => {
    event.preventDefault();
    const query = tutorUserInput.value.trim();
    if (!query) return;

    addTutorMessage(query, "user");
    tutorUserInput.value = "";

    const thinkingBubble = document.createElement("div");
    thinkingBubble.className = "tutor-bubble";
    thinkingBubble.innerHTML = "<p><em>Analisando sua dúvida pedagogicamente...</em></p>";
    tutorChatMessages.append(thinkingBubble);
    tutorChatMessages.scrollTop = tutorChatMessages.scrollHeight;

    setTimeout(() => {
      thinkingBubble.remove();
      const reply = generateSocraticResponse(query);
      addTutorMessage(reply, "tutor");
    }, 600);
  });
}

// Botões de Atalhos Rápidos da IA
tutorChipBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const promptType = btn.getAttribute("data-prompt");
    const q = (quizState.questions && quizState.questions[quizState.currentIndex]) || {};
    let reply = "";

    if (promptType === "pista") {
      reply = q.conceptHint || `Lembre-se dos conceitos teóricos centrais de ${quizState.subject || "estudo"}.`;
    } else if (promptType === "interpretacao") {
      reply = `Para interpretar: foque na pergunta final do enunciado. Em ${quizState.subject || "esta matéria"}, cada palavra técnica carrega um significado preciso.`;
    } else if (promptType === "eliminacao") {
      reply = q.eliminationHint || "Descarte as alternativas que apresentem conceitos invertidos ou afirmações extremas.";
    }

    addTutorMessage(btn.textContent, "user");
    setTimeout(() => addTutorMessage(reply, "tutor"), 400);
  });
});

// --- DICAS DE ESTUDO ---
tipFilterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    tipFilterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.getAttribute("data-category");
    const tipCards = document.querySelectorAll(".tip-card");

    tipCards.forEach(card => {
      const cardCategory = card.getAttribute("data-category");
      if (category === "todas" || cardCategory === category) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});

if (promoBuyBtn) {
  promoBuyBtn.addEventListener("click", () => {
    switchTab("ebook");
    if (!isEbookUnlocked) {
      openCheckout();
    }
  });
}

// --- E-BOOK E CHECKOUT (R$ 19,90) COM CHAVE PIX 14997549129 ---
function renderEbookView() {
  if (isEbookUnlocked) {
    ebookShowcase.style.display = "none";
    ebookReader.style.display = "block";
    tabEbookTitle.textContent = "Meu E-book 📖";
    loadChapter(activeChapter);
  } else {
    ebookShowcase.style.display = "block";
    ebookReader.style.display = "none";
    tabEbookTitle.textContent = "E-book (R$ 19,90)";
  }
}

function loadChapter(num) {
  activeChapter = num;
  const chapter = EBOOK_CHAPTERS[num] || EBOOK_CHAPTERS[1];

  readerContent.innerHTML = `
    <h3>${chapter.title}</h3>
    ${chapter.content}
  `;

  const chapterButtons = document.querySelectorAll(".reader-tab-btn");
  chapterButtons.forEach(btn => {
    btn.classList.toggle("active", Number(btn.getAttribute("data-chapter")) === num);
  });
}

document.querySelectorAll(".reader-tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const num = Number(btn.getAttribute("data-chapter"));
    loadChapter(num);
  });
});

if (printEbookBtn) {
  printEbookBtn.addEventListener("click", () => {
    window.print();
  });
}

if (resetPurchaseBtn) {
  resetPurchaseBtn.addEventListener("click", () => {
    if (!window.confirm("Deseja simular uma nova compra do zero para testar o checkout novamente?")) return;
    localStorage.removeItem(STORAGE_KEY_EBOOK);
    isEbookUnlocked = false;
    renderEbookView();
    showToast("Status de compra resetado para teste!");
  });
}

function openCheckout() {
  checkoutModal.style.display = "flex";
  switchPaymentMethod("pix");
}

function closeCheckout() {
  checkoutModal.style.display = "none";
}

if (openCheckoutBtn) openCheckoutBtn.addEventListener("click", openCheckout);
if (closeCheckoutBtn) closeCheckoutBtn.addEventListener("click", closeCheckout);

checkoutModal.addEventListener("click", event => {
  if (event.target === checkoutModal) closeCheckout();
});

function switchPaymentMethod(method) {
  payTabPix.classList.toggle("active", method === "pix");
  payTabCard.classList.toggle("active", method === "card");
  payTabBoleto.classList.toggle("active", method === "boleto");

  payPanelPix.style.display = method === "pix" ? "block" : "none";
  payPanelCard.style.display = method === "card" ? "block" : "none";
  payPanelBoleto.style.display = method === "boleto" ? "block" : "none";
}

payTabPix.addEventListener("click", () => switchPaymentMethod("pix"));
payTabCard.addEventListener("click", () => switchPaymentMethod("card"));
payTabBoleto.addEventListener("click", () => switchPaymentMethod("boleto"));

// Copiar chave Pix direta (14997549129)
if (copySinglePixKey) {
  copySinglePixKey.addEventListener("click", () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(PIX_PHONE_KEY);
    }
    copySinglePixKey.textContent = "✓ Chave Copiada: 14997549129!";
    setTimeout(() => (copySinglePixKey.textContent = "📋 Copiar chave: 14997549129"), 2500);
    showToast(`Chave Pix copiada: ${PIX_PHONE_KEY}`);
  });
}

// Copiar código Pix Copia e Cola
copyPixBtn.addEventListener("click", () => {
  pixCopyInput.select();
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(pixCopyInput.value);
  }
  copyPixBtn.textContent = "✓ Copiado!";
  setTimeout(() => (copyPixBtn.textContent = "Copiar código"), 2500);
  showToast("Código Pix Copia e Cola copiado com sucesso!");
});

// Copiar código Boleto
copyBoletoBtn.addEventListener("click", () => {
  boletoCodeInput.select();
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(boletoCodeInput.value);
  }
  copyBoletoBtn.textContent = "✓ Copiado!";
  setTimeout(() => (copyBoletoBtn.textContent = "Copiar linha"), 2500);
  showToast("Linha digitável do boleto copiada com sucesso!");
});

function completePurchase(methodLabel) {
  localStorage.setItem(STORAGE_KEY_EBOOK, "true");
  isEbookUnlocked = true;
  closeCheckout();
  switchTab("ebook");
  renderEbookView();
  showToast(`🎉 Pagamento via ${methodLabel} confirmado! Seu E-book está liberado.`);
}

confirmPixBtn.addEventListener("click", () => completePurchase(`Pix (${PIX_PHONE_KEY})`));
confirmBoletoBtn.addEventListener("click", () => completePurchase("Boleto"));

// Formatação do Cartão de Crédito
cardNum.addEventListener("input", () => {
  let val = cardNum.value.replace(/\D/g, "").slice(0, 16);
  val = val.replace(/(\d{4})(?=\d)/g, "$1 ");
  cardNum.value = val;
  vcardNumber.textContent = val || "•••• •••• •••• ••••";

  if (val.startsWith("4")) vcardBrand.textContent = "VISA";
  else if (val.startsWith("5")) vcardBrand.textContent = "MASTERCARD";
  else if (val.startsWith("3")) vcardBrand.textContent = "AMEX";
  else vcardBrand.textContent = "CARTÃO";
});

cardName.addEventListener("input", () => {
  const val = cardName.value.toUpperCase();
  cardName.value = val;
  vcardHolder.textContent = val || "SEU NOME";
});

cardExp.addEventListener("input", () => {
  let val = cardExp.value.replace(/\D/g, "").slice(0, 4);
  if (val.length >= 3) {
    val = `${val.slice(0, 2)}/${val.slice(2)}`;
  }
  cardExp.value = val;
  vcardExp.textContent = val || "MM/AA";
});

cardCvv.addEventListener("input", () => {
  cardCvv.value = cardCvv.value.replace(/\D/g, "").slice(0, 4);
});

cardPaymentForm.addEventListener("submit", event => {
  event.preventDefault();
  cardErrorMsg.style.display = "none";

  const numDigits = cardNum.value.replace(/\D/g, "");
  const nameVal = cardName.value.trim();
  const expVal = cardExp.value.trim();
  const cvvVal = cardCvv.value.trim();

  if (numDigits.length < 16) {
    cardErrorMsg.textContent = "Digite um número de cartão de crédito válido com 16 dígitos.";
    cardErrorMsg.style.display = "block";
    cardNum.focus();
    return;
  }

  if (nameVal.length < 3) {
    cardErrorMsg.textContent = "Digite o nome completo do titular como está no cartão.";
    cardErrorMsg.style.display = "block";
    cardName.focus();
    return;
  }

  if (expVal.length < 5 || !expVal.includes("/")) {
    cardErrorMsg.textContent = "Informe uma data de validade válida (MM/AA).";
    cardErrorMsg.style.display = "block";
    cardExp.focus();
    return;
  }

  if (cvvVal.length < 3) {
    cardErrorMsg.textContent = "Informe o código de segurança (CVV de 3 ou 4 dígitos).";
    cardErrorMsg.style.display = "block";
    cardCvv.focus();
    return;
  }

  const payBtn = document.querySelector("#pay-card-btn");
  payBtn.disabled = true;
  payBtn.innerHTML = "Processando pagamento...";

  setTimeout(() => {
    payBtn.disabled = false;
    payBtn.innerHTML = "<span>Pagar R$ 19,90 com Cartão</span> ➔";
    completePurchase("Cartão de Crédito");
  }, 1200);
});

// --- GESTÃO DE HORÁRIOS ---
function renderSchedules() {
  const totalEntries = schedules.length;
  tabScheduleCount.textContent = totalEntries;

  let totalMinutes = 0;
  const activeDaysSet = new Set();
  const activeSubjectsSet = new Set();
  let currentlyStudying = null;

  schedules.forEach(entry => {
    const mins = Math.max(0, timeToMinutes(entry.endTime) - timeToMinutes(entry.startTime));
    totalMinutes += mins;
    activeDaysSet.add(entry.day);
    activeSubjectsSet.add(entry.subject);

    if (isCurrentlyActive(entry.day, entry.startTime, entry.endTime)) {
      currentlyStudying = entry;
    }
  });

  schedTotalHours.textContent = formatDuration(totalMinutes);
  schedActiveDays.textContent = `${activeDaysSet.size} ${activeDaysSet.size === 1 ? "dia" : "dias"}`;
  schedActiveSubjects.textContent = `${activeSubjectsSet.size} ${activeSubjectsSet.size === 1 ? "matéria" : "matérias"}`;

  if (currentlyStudying) {
    schedCurrentStatus.textContent = `Em estudo: ${currentlyStudying.subject}`;
    schedCurrentStatus.className = "status-highlight";
  } else {
    schedCurrentStatus.textContent = "Livre agora";
    schedCurrentStatus.className = "";
  }

  schedBadge.textContent = `${totalEntries} ${totalEntries === 1 ? "sessão" : "sessões"}`;
  clearAllSchedBtn.disabled = totalEntries === 0;
  clearAllSchedBtn.setAttribute("aria-disabled", String(totalEntries === 0));

  updateTodayBanner();

  const todayKey = getTodayKey();
  dayChips.forEach(chip => {
    const chipDay = chip.getAttribute("data-day");
    chip.classList.toggle("active", chipDay === selectedDayFilter);
    chip.classList.toggle("is-today", chipDay === todayKey);
  });

  schedList.replaceChildren();

  const filtered = selectedDayFilter === "todos"
    ? schedules
    : schedules.filter(entry => entry.day === selectedDayFilter);

  schedEmptyState.classList.toggle("visible", filtered.length === 0);
  if (schedules.length === 0) {
    schedEmptyTitle.textContent = "Nenhum horário planejado";
    schedEmptyDesc.textContent = "Defina matérias, dias e horários no formulário para montar sua rotina semanal.";
  } else if (filtered.length === 0) {
    schedEmptyTitle.textContent = "Nenhum estudo neste dia";
    schedEmptyDesc.textContent = "Selecione outro dia ou adicione novos horários para este período.";
  }

  const daysToShow = selectedDayFilter === "todos"
    ? DAYS_OF_WEEK
    : DAYS_OF_WEEK.filter(d => d.key === selectedDayFilter);

  daysToShow.forEach(dayObj => {
    const daySchedules = schedules
      .filter(s => s.day === dayObj.key)
      .sort((a, b) => a.startTime.localeCompare(b.startTime));

    if (daySchedules.length === 0) return;

    let dayTotalMins = 0;
    daySchedules.forEach(s => {
      dayTotalMins += Math.max(0, timeToMinutes(s.endTime) - timeToMinutes(s.startTime));
    });

    const dayGroup = document.createElement("div");
    dayGroup.className = "day-group";

    const header = document.createElement("div");
    header.className = "day-group-header";

    const titleWrap = document.createElement("div");
    titleWrap.className = "day-group-title";
    titleWrap.textContent = dayObj.name;

    if (dayObj.key === todayKey) {
      const todayPill = document.createElement("span");
      todayPill.className = "today-indicator";
      todayPill.textContent = "Hoje";
      titleWrap.append(todayPill);
    }

    const totalSpan = document.createElement("span");
    totalSpan.className = "day-group-total";
    totalSpan.textContent = `Total: ${formatDuration(dayTotalMins)}`;

    header.append(titleWrap, totalSpan);
    dayGroup.append(header);

    const itemsContainer = document.createElement("div");
    itemsContainer.className = "day-group-items";

    daySchedules.forEach(entry => {
      const card = createScheduleCard(entry);
      itemsContainer.append(card);
    });

    dayGroup.append(itemsContainer);
    schedList.append(dayGroup);
  });
}

function createScheduleCard(entry) {
  const card = document.createElement("div");
  const isNow = isCurrentlyActive(entry.day, entry.startTime, entry.endTime);
  card.className = `schedule-card${isNow ? " is-now" : ""}`;

  const duration = Math.max(0, timeToMinutes(entry.endTime) - timeToMinutes(entry.startTime));

  const main = document.createElement("div");
  main.className = "schedule-main";

  const headerLine = document.createElement("div");
  headerLine.className = "schedule-header-line";

  const subjectPill = document.createElement("span");
  subjectPill.className = "subject-pill";
  subjectPill.textContent = entry.subject;
  headerLine.append(subjectPill);

  const timeBadge = document.createElement("span");
  timeBadge.className = "schedule-time";
  timeBadge.textContent = `⏰ ${entry.startTime} – ${entry.endTime}`;
  headerLine.append(timeBadge);

  const durSpan = document.createElement("span");
  durSpan.className = "schedule-duration";
  durSpan.textContent = `(${formatDuration(duration)})`;
  headerLine.append(durSpan);

  if (isNow) {
    const nowBadge = document.createElement("span");
    nowBadge.className = "now-badge";
    nowBadge.textContent = "● Em andamento";
    headerLine.append(nowBadge);
  }

  main.append(headerLine);

  if (entry.notes) {
    const notesP = document.createElement("p");
    notesP.className = "schedule-notes";
    notesP.textContent = entry.notes;
    main.append(notesP);
  }

  const actions = document.createElement("div");
  actions.className = "task-actions";

  const editBtn = document.createElement("button");
  editBtn.type = "button";
  editBtn.className = "action-btn edit-btn";
  editBtn.textContent = "✎";
  editBtn.setAttribute("aria-label", `Editar horário de ${entry.subject}`);
  editBtn.title = "Editar horário";
  editBtn.addEventListener("click", () => startEditSchedule(entry.id));

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.className = "action-btn delete-btn";
  deleteBtn.textContent = "×";
  deleteBtn.setAttribute("aria-label", `Excluir horário de ${entry.subject}`);
  deleteBtn.title = "Excluir horário";
  deleteBtn.addEventListener("click", () => deleteSchedule(entry));

  actions.append(editBtn, deleteBtn);
  card.append(main, actions);
  return card;
}

function startEditSchedule(id) {
  const item = schedules.find(s => s.id === id);
  if (!item) return;

  editingScheduleId = item.id;
  schedSubject.value = item.subject;
  schedDay.value = item.day;
  schedStart.value = item.startTime;
  schedEnd.value = item.endTime;
  schedNotes.value = item.notes || "";

  clearSchedValidationErrors();

  schedFormHeading.textContent = "Editar horário";
  schedFormEyebrow.textContent = "MODIFICAÇÃO";
  schedSubmitText.textContent = "Salvar alterações";
  schedBtnIcon.textContent = "✓";
  cancelSchedEditBtn.style.display = "inline-flex";

  schedForm.scrollIntoView({ behavior: "smooth", block: "center" });
  schedSubject.focus();
}

function cancelEditSchedule() {
  editingScheduleId = null;
  schedForm.reset();
  clearSchedValidationErrors();

  schedFormHeading.textContent = "Planejar horário";
  schedFormEyebrow.textContent = "CRONOGRAMA";
  schedSubmitText.textContent = "Salvar horário";
  schedBtnIcon.textContent = "＋";
  cancelSchedEditBtn.style.display = "none";
}

cancelSchedEditBtn.addEventListener("click", cancelEditSchedule);

function deleteSchedule(entry) {
  if (!window.confirm(`Deseja excluir o horário de ${entry.subject} (${entry.startTime} - ${entry.endTime})?`)) return;

  const index = schedules.findIndex(s => s.id === entry.id);
  if (index === -1) return;

  const [removed] = schedules.splice(index, 1);
  if (editingScheduleId === entry.id) {
    cancelEditSchedule();
  }

  if (saveSchedules()) {
    renderSchedules();
    showToast(`Horário de ${removed.subject} excluído.`, () => {
      schedules.splice(index, 0, removed);
      saveSchedules();
      renderSchedules();
      showToast(`Horário de ${removed.subject} restaurado!`);
    });
  }
}

schedForm.addEventListener("submit", event => {
  event.preventDefault();
  clearSchedValidationErrors();

  const subject = schedSubject.value;
  const day = schedDay.value;
  const startTime = schedStart.value;
  const endTime = schedEnd.value;
  const notes = schedNotes.value.trim();

  if (!subject) {
    schedSubject.setAttribute("aria-invalid", "true");
    showSchedMessage("Escolha uma matéria.", true);
    schedSubject.focus();
    return;
  }
  if (!day) {
    schedDay.setAttribute("aria-invalid", "true");
    showSchedMessage("Escolha o dia da semana.", true);
    schedDay.focus();
    return;
  }
  if (!startTime) {
    schedStart.setAttribute("aria-invalid", "true");
    showSchedMessage("Informe o horário de início.", true);
    schedStart.focus();
    return;
  }
  if (!endTime) {
    schedEnd.setAttribute("aria-invalid", "true");
    showSchedMessage("Informe o horário de término.", true);
    schedEnd.focus();
    return;
  }
  if (timeToMinutes(endTime) <= timeToMinutes(startTime)) {
    schedEnd.setAttribute("aria-invalid", "true");
    showSchedMessage("O término deve ser posterior ao horário de início.", true);
    schedEnd.focus();
    return;
  }

  if (editingScheduleId) {
    const idx = schedules.findIndex(s => s.id === editingScheduleId);
    if (idx !== -1) {
      schedules[idx].subject = subject;
      schedules[idx].day = day;
      schedules[idx].startTime = startTime;
      schedules[idx].endTime = endTime;
      schedules[idx].notes = notes;

      if (saveSchedules()) {
        cancelEditSchedule();
        renderSchedules();
        showToast("Horário de estudo atualizado!");
      }
    }
  } else {
    const newEntry = {
      id: makeId("sched"),
      subject,
      day,
      startTime,
      endTime,
      notes
    };

    schedules.push(newEntry);

    if (saveSchedules()) {
      schedForm.reset();
      renderSchedules();
      showToast(`Horário de ${subject} adicionado à grade!`);
      schedSubject.focus();
    }
  }
});

function setDayFilter(dayKey) {
  selectedDayFilter = dayKey;
  renderSchedules();
}

dayChips.forEach(chip => {
  chip.addEventListener("click", () => {
    const day = chip.getAttribute("data-day");
    setDayFilter(day);
  });
});

clearAllSchedBtn.addEventListener("click", () => {
  if (schedules.length === 0) return;
  if (!window.confirm(`Deseja limpar todos os ${schedules.length} horários cadastrados na grade semanal?`)) return;

  const previous = [...schedules];
  schedules = [];

  if (saveSchedules()) {
    renderSchedules();
    showToast("Grade semanal limpa.", () => {
      schedules = previous;
      saveSchedules();
      renderSchedules();
      showToast("Horários restaurados!");
    });
  }
});

// --- GESTÃO DE TAREFAS (TASKS) ---
function updateCharCounter() {
  if (!titleCounter) return;
  const len = titleInput.value.length;
  titleCounter.textContent = `${len}/80`;
  titleCounter.classList.toggle("warning", len >= 70 && len < 80);
  titleCounter.classList.toggle("limit", len >= 80);
}

titleInput.addEventListener("input", () => {
  updateCharCounter();
  titleInput.removeAttribute("aria-invalid");
  if (formMessage.classList.contains("error")) showMessage("");
});

subjectInput.addEventListener("change", () => {
  subjectInput.removeAttribute("aria-invalid");
  if (formMessage.classList.contains("error")) showMessage("");
});

dateInput.addEventListener("input", () => {
  dateInput.removeAttribute("aria-invalid");
  if (formMessage.classList.contains("error")) showMessage("");
});

function renderStats() {
  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  const pending = total - completed;
  const percent = total ? Math.round((completed / total) * 100) : 0;

  tabTasksCount.textContent = total;
  totalCountEl.textContent = total;
  pendingCountEl.textContent = pending;
  doneCountEl.textContent = completed;
  progressLabel.textContent = `${percent}%`;

  if (progressBar) {
    progressBar.style.width = `${percent}%`;
    progressBar.setAttribute("aria-valuenow", String(percent));
    progressBar.classList.toggle("celebrate", pending === 0 && total > 0);
  }

  if (clearDoneBtn) {
    const hasCompleted = completed > 0;
    clearDoneBtn.disabled = !hasCompleted;
    clearDoneBtn.setAttribute("aria-disabled", String(!hasCompleted));
  }

  if (listSummary) {
    if (pending === 0 && total > 0) {
      listSummary.textContent = "Parabéns, você concluiu tudo! ✨";
    } else if (total === 0) {
      listSummary.textContent = "Nenhuma tarefa cadastrada.";
    } else {
      listSummary.textContent = `${pending} ${pending === 1 ? "tarefa pendente" : "tarefas pendentes"}`;
    }
  }
}

function createTaskElement(task) {
  const item = document.createElement("li");
  item.className = `task-item${task.completed ? " completed" : ""}`;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "task-check";
  checkbox.checked = task.completed;
  checkbox.setAttribute("aria-label", `Concluir tarefa: ${task.title}`);
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked;
    if (saveTasks()) {
      render();
      if (task.completed) {
        showToast(`Tarefa "${task.title}" marcada como concluída!`);
      }
    }
  });

  const main = document.createElement("div");
  main.className = "task-main";

  const title = document.createElement("p");
  title.className = "task-title";
  title.textContent = task.title;

  const meta = document.createElement("div");
  meta.className = "task-meta";

  const subject = document.createElement("span");
  subject.className = "subject-pill";
  subject.textContent = task.subject;
  meta.append(subject);

  const priority = document.createElement("span");
  priority.className = `priority-pill ${task.priority || "normal"}`;
  const priorityLabels = { alta: "Prioridade alta", normal: "Prioridade normal", baixa: "Prioridade baixa" };
  priority.textContent = priorityLabels[task.priority] || priorityLabels.normal;
  meta.append(priority);

  const dateInfo = getDueDateInfo(task.date, task.completed);
  if (dateInfo) {
    const dueDate = document.createElement("span");
    dueDate.className = `task-date ${dateInfo.className}`;
    dueDate.textContent = dateInfo.label;
    meta.append(dueDate);
  }

  main.append(title, meta);

  const actionsGroup = document.createElement("div");
  actionsGroup.className = "task-actions";

  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.className = "action-btn edit-btn";
  editButton.textContent = "✎";
  editButton.setAttribute("aria-label", `Editar tarefa: ${task.title}`);
  editButton.title = "Editar tarefa";
  editButton.addEventListener("click", () => startEditTask(task.id));

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "action-btn delete-btn";
  deleteButton.textContent = "×";
  deleteButton.setAttribute("aria-label", `Excluir tarefa: ${task.title}`);
  deleteButton.title = "Excluir tarefa";
  deleteButton.addEventListener("click", () => deleteTask(task));

  actionsGroup.append(editButton, deleteButton);
  item.append(checkbox, main, actionsGroup);
  return item;
}

function startEditTask(taskId) {
  const task = tasks.find(entry => entry.id === taskId);
  if (!task) return;

  editingTaskId = task.id;
  titleInput.value = task.title;
  subjectInput.value = task.subject;
  priorityInput.value = task.priority;
  dateInput.value = task.date || "";

  updateCharCounter();
  clearValidationErrors();

  formHeadingText.textContent = "Editar tarefa";
  formEyebrow.textContent = "MODIFICAÇÃO";
  submitBtnText.textContent = "Salvar alterações";
  btnIcon.textContent = "✓";
  cancelEditBtn.style.display = "inline-flex";

  form.scrollIntoView({ behavior: "smooth", block: "center" });
  titleInput.focus();
}

function cancelEdit() {
  editingTaskId = null;
  form.reset();
  priorityInput.value = "normal";
  updateCharCounter();
  clearValidationErrors();

  formHeadingText.textContent = "Adicionar tarefa";
  formEyebrow.textContent = "PLANEJAMENTO";
  submitBtnText.textContent = "Adicionar tarefa";
  btnIcon.textContent = "＋";
  cancelEditBtn.style.display = "none";
}

cancelEditBtn.addEventListener("click", cancelEdit);

function deleteTask(task) {
  if (!window.confirm(`Deseja excluir a tarefa "${task.title}"?`)) return;

  const index = tasks.findIndex(entry => entry.id === task.id);
  if (index === -1) return;

  const [removedTask] = tasks.splice(index, 1);
  if (editingTaskId === task.id) cancelEdit();

  if (saveTasks()) {
    render();
    showToast(`Tarefa "${removedTask.title}" excluída.`, () => {
      tasks.splice(index, 0, removedTask);
      saveTasks();
      render();
      showToast(`Tarefa restaurada com sucesso!`);
    });
  }
}

function render() {
  renderStats();

  const query = stripAccents(searchInput.value.trim());
  const statusFilter = filterSelect.value;
  const subjectFilter = filterSubject ? filterSubject.value : "todas";

  const priorityWeights = { alta: 1, normal: 2, baixa: 3 };

  const visibleTasks = tasks
    .filter(task => {
      const normalizedTitle = stripAccents(task.title);
      const normalizedSubject = stripAccents(task.subject);
      const matchesQuery = !query || normalizedTitle.includes(query) || normalizedSubject.includes(query);

      const matchesStatus = statusFilter === "todas" ||
        (statusFilter === "pendentes" && !task.completed) ||
        (statusFilter === "concluidas" && task.completed);

      const matchesSubject = subjectFilter === "todas" || task.subject === subjectFilter;

      return matchesQuery && matchesStatus && matchesSubject;
    })
    .sort((a, b) => {
      if (a.completed !== b.completed) {
        return Number(a.completed) - Number(b.completed);
      }
      if (a.date && b.date) {
        const dateCompare = a.date.localeCompare(b.date);
        if (dateCompare !== 0) return dateCompare;
      } else if (a.date) {
        return -1;
      } else if (b.date) {
        return 1;
      }
      const pDiff = (priorityWeights[a.priority] || 2) - (priorityWeights[b.priority] || 2);
      if (pDiff !== 0) return pDiff;

      return (b.createdAt || "").localeCompare(a.createdAt || "");
    });

  taskList.replaceChildren();
  visibleTasks.forEach(task => taskList.append(createTaskElement(task)));

  const total = tasks.length;
  const isFiltered = query || statusFilter !== "todas" || subjectFilter !== "todas";

  if (isFiltered) {
    taskCountBadge.textContent = `${visibleTasks.length} de ${total} ${total === 1 ? "tarefa" : "tarefas"}`;
  } else {
    taskCountBadge.textContent = `${total} ${total === 1 ? "tarefa" : "tarefas"}`;
  }

  emptyState.classList.toggle("visible", visibleTasks.length === 0);
  if (tasks.length === 0) {
    emptyTitle.textContent = "Nenhuma tarefa por aqui";
    emptyDesc.textContent = "Adicione uma tarefa no formulário para começar seu planejamento.";
  } else if (visibleTasks.length === 0) {
    emptyTitle.textContent = "Nenhum resultado encontrado";
    emptyDesc.textContent = "Tente ajustar os termos de busca ou selecionar outros filtros.";
  }

  updateTodayBanner();
}

form.addEventListener("submit", event => {
  event.preventDefault();
  clearValidationErrors();

  const title = titleInput.value.trim();
  const subject = subjectInput.value;
  const priority = priorityInput.value;
  const date = dateInput.value;

  if (title.length < 2) {
    titleInput.setAttribute("aria-invalid", "true");
    showMessage("Digite um nome com pelo menos 2 caracteres.", true);
    titleInput.focus();
    return;
  }

  if (!subject) {
    subjectInput.setAttribute("aria-invalid", "true");
    showMessage("Escolha a matéria da tarefa.", true);
    subjectInput.focus();
    return;
  }

  if (date && date < localDateString()) {
    dateInput.setAttribute("aria-invalid", "true");
    showMessage("A data de entrega não pode estar no passado.", true);
    dateInput.focus();
    return;
  }

  if (editingTaskId) {
    const taskIndex = tasks.findIndex(entry => entry.id === editingTaskId);
    if (taskIndex !== -1) {
      tasks[taskIndex].title = title;
      tasks[taskIndex].subject = subject;
      tasks[taskIndex].priority = ["alta", "normal", "baixa"].includes(priority) ? priority : "normal";
      tasks[taskIndex].date = date;

      if (saveTasks()) {
        cancelEdit();
        render();
        showToast("Tarefa atualizada com sucesso!");
      }
    }
  } else {
    const newTask = {
      id: makeId("task"),
      title,
      subject,
      priority: ["alta", "normal", "baixa"].includes(priority) ? priority : "normal",
      date,
      completed: false,
      createdAt: new Date().toISOString()
    };

    tasks.push(newTask);

    if (saveTasks()) {
      form.reset();
      priorityInput.value = "normal";
      updateCharCounter();
      dateInput.min = localDateString();
      render();
      showToast("Tarefa adicionada com sucesso!");
      titleInput.focus();
    }
  }
});

searchInput.addEventListener("input", render);
searchInput.addEventListener("search", render);
searchInput.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    searchInput.value = "";
    render();
  }
});

filterSelect.addEventListener("change", render);
if (filterSubject) filterSubject.addEventListener("change", render);

function setupCardFilter(cardEl, status) {
  if (!cardEl) return;
  const applyFilter = () => {
    filterSelect.value = status;
    if (filterSubject) filterSubject.value = "todas";
    searchInput.value = "";
    render();
  };
  cardEl.addEventListener("click", applyFilter);
  cardEl.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      applyFilter();
    }
  });
}

setupCardFilter(statCardTotal, "todas");
setupCardFilter(statCardPending, "pendentes");
setupCardFilter(statCardDone, "concluidas");

clearDoneBtn.addEventListener("click", () => {
  const completedTasks = tasks.filter(task => task.completed);
  if (completedTasks.length === 0) return;

  const count = completedTasks.length;
  const confirmMsg = `Deseja excluir ${count} ${count === 1 ? "tarefa concluída" : "tarefas concluídas"}?`;
  if (!window.confirm(confirmMsg)) return;

  tasks = tasks.filter(task => !task.completed);

  if (saveTasks()) {
    render();
    showToast(`${count} ${count === 1 ? "tarefa concluída removida" : "tarefas concluídas removidas"}.`, () => {
      tasks.push(...completedTasks);
      saveTasks();
      render();
      showToast("Tarefas concluídas restauradas!");
    });
  }
});

// --- INICIALIZAÇÃO GERAL ---
initTheme();

const today = new Date();
const formattedToday = today.toLocaleDateString("pt-BR", {
  weekday: "short",
  day: "2-digit",
  month: "short",
  year: "numeric"
});
todayDateEl.textContent = formattedToday.charAt(0).toUpperCase() + formattedToday.slice(1);

dateInput.min = localDateString();
updateCharCounter();

const savedTab = localStorage.getItem(ACTIVE_TAB_KEY);
if (savedTab === "schedule") switchTab("schedule");
else if (savedTab === "quiz") switchTab("quiz");
else if (savedTab === "tips") switchTab("tips");
else if (savedTab === "ebook") switchTab("ebook");
else switchTab("tasks");

render();
renderSchedules();
renderEbookView();
