# Relatório de Desenvolvimento e Revisão Técnica — StudyFlow

## Nome do aplicativo
StudyFlow — Organizador de Estudos com Quiz & IA Tutora Socrática

## Objetivo
Criar e aprimorar um aplicativo web completo para organização acadêmica, com gerenciamento de tarefas, cronograma semanal de horários, técnicas científicas de aprendizagem, um E-book premium integrado com checkout multimétodo (Pix, Cartão e Boleto) e uma seção dedicada de Quiz com IA Tutora Socrática (sem spoilers ou respostas diretas).

## Como a Inteligência Artificial foi utilizada
A Inteligência Artificial foi utilizada para:
1. Estruturar a arquitetura técnica e de estilo do aplicativo, garantindo acessibilidade, responsividade e modo escuro nativo por padrão.
2. Implementar a IA Tutora Socrática no Quiz, aplicando filtros de segurança pedagógicos que interceptam tentativas de obter gabaritos diretos e convertem as dúvidas em perguntas reflexivas, pistas conceituais e estratégias de eliminação de alternativas incorretas.
3. Desenvolver o gerador de questões conceituais dinâmicas para qualquer disciplina personalizada digitada pelo estudante.
4. Elaborar os fluxos de checkout e o leitor imersivo do E-book de técnicas de estudo.

---

## Funcionalidades Implementadas

### 1. Modo Escuro Nativo por Padrão (Dark Mode)
- O aplicativo inicia automaticamente no **Modo Escuro** (`data-theme="dark"`), proporcionando conforto visual imediato e economia de energia em telas OLED.
- O usuário pode alternar para o Modo Claro a qualquer momento pelo botão no cabeçalho, com a preferência preservada no `localStorage`.

### 2. Pagamento Pix com a Chave Informada
- Integração da chave Pix exata: **`14997549129`**.
- Card de destaque visual contendo:
  - Número da chave visível e formatado.
  - Botão de cópia rápida em 1 clique com feedback via Toast.
  - Código Pix Copia e Cola atualizado e QR Code correspondente.
  - Liberação imediata do E-book ao simular a confirmação do pagamento.

### 3. Nova Seção Separada: Quiz Interativo com IA (`🎯 Quiz com IA`)
- **Seleção Livre de Matéria**:
  - 10 disciplinas completas pré-cadastradas: *Matemática, Português, História, Geografia, Ciências, Física, Química, Inglês, Filosofia e Programação*.
  - Opção **"Outra matéria (digitar nome)"**: permite ao usuário estudar qualquer disciplina personalizada (ex.: Direito Constitucional, Robótica, Anatomia, etc.), com geração dinâmica de questões e gabaritos.
- **Configuração da Quantidade de Perguntas**:
  - Opções para 3, 5 ou 10 questões por sessão.
- **Interface Interativa de Resolução**:
  - Barra de progresso percentual e contador de acertos em tempo real.
  - Feedback visual imediato nas alternativas: cor verde para a resposta correta e vermelha para a incorreta.
  - Explicação fundamentada exibida após a resposta.
  - Painel final de pontuação com diagnóstico de desempenho e botão de recomeço.

### 4. IA Tutora Socrática (Assistente Anti-Spoiler)
- **Filtro Rígido Anti-Gabarito**:
  - A IA **nunca** fornece a resposta direta nem revela a letra da alternativa correta, mesmo quando solicitada diretamente por perguntas como *"qual é a resposta?"*, *"qual letra marcar?"*, *"me dá o gabarito"*, *"é a letra A?"*, etc.
  - Em vez disso, a IA explica seu papel pedagógico socrático e direciona o estudante a analisar as palavras-chave do enunciado.
- **Suporte a Dúvidas Conceituais e Dicas Guiadas**:
  - Chat lateral em tempo real integrado à tela da questão atual.
  - Campo aberto para digitar qualquer dúvida sobre o conteúdo.
  - Botões de atalhos rápidos pedagógicos:
    - 💡 *Pedir dica*: fornece a fundamentação teórica essencial da questão.
    - 🔍 *Interpretar texto*: orienta a dissecação do comando da questão.
    - ❌ *Eliminar alternativa*: orienta como descartar os distratores mais óbvios sem entregar o gabarito.

### 5. Demais Recursos Preservados
- **Painel de Tarefas**: Gerenciamento com prazos, prioridades, matérias, filtros, busca, ordenação e estatísticas.
- **Quadro Semanal de Horários**: Planejamento diário e por turnos de horários de estudo.
- **Painel de Dicas Científicas**: Métodos Pomodoro, Feynman, Repetição Espaçada e Active Recall com filtros de categoria.
- **E-book Premium e Leitor**: Venda a R$ 19,90 com leitor de 5 capítulos, sumário interativo e checkout multimétodo (Pix, Cartão de Crédito e Boleto Bancário).

---

## Testes Realizados e Validação Técnica

1. **Validação de Sintaxe e Scripts**:
   - Executado `node --check script.js`: 0 erros de sintaxe.
   - Suíte de testes unitários automatizada com 100% de aprovação (`test_suite.js`).
2. **Teste do Modo Escuro**:
   - Limpo o `localStorage`; a aplicação carregou nativamente no tema escuro com paleta grafite/neon (`#0f172a`, `#1e293b`).
3. **Teste da Chave Pix**:
   - A chave `14997549129` é exibida com destaque no modal de checkout; o botão "Copiar Chave Pix" copia o número com sucesso para a área de transferência.
4. **Teste de Proteção da IA Tutora**:
   - Inseridas mensagens pedindo a resposta direta (*"qual é a resposta?"*, *"qual alternativa correta?"*, *"letra a ou b?"*); a IA recusou prontamente sem vazar a resposta e orientou o raciocínio.
   - Acionados os botões de dicas conceituais e eliminação; a IA forneceu as orientações sem revelar a letra certa.
5. **Teste de Matérias Personalizadas no Quiz**:
   - Selecionada a opção personalizada com a matéria "Direito Constitucional"; o sistema gerou 5 questões válidas com 4 opções, dicas pedagógicas e feedback de acerto/erro.

---

## Conclusão
Todas as solicitações do usuário foram atendidas com excelência:
- A chave Pix `14997549129` foi integrada com interface intuitiva de cópia.
- O modo escuro foi configurado como padrão.
- A seção dedicada de Quiz permite testar qualquer matéria, acompanhada por uma IA Tutora Socrática que guia o estudante sem revelar respostas prontas.