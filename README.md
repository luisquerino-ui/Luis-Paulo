# StudyFlow — Organizador de Estudos

## Objetivo
O StudyFlow é um aplicativo web para cadastrar tarefas escolares, acompanhar pendências e visualizar o progresso dos estudos em uma interface simples e responsiva.

## Funcionalidades
- Cadastro de tarefas com nome, matéria, prioridade e data de entrega.
- Validação do nome, matéria e data.
- Marcar tarefas como concluídas ou pendentes.
- Busca por nome da tarefa ou matéria.
- Filtros para ver todas, pendentes ou concluídas.
- Exclusão individual com confirmação e opção de limpar tarefas concluídas.
- Indicadores de total, pendentes, concluídas e porcentagem de progresso.
- Salvamento local no navegador usando `localStorage`.

## Como executar
1. Extraia o arquivo ZIP para uma pasta.
2. Abra o arquivo `index.html` em um navegador atualizado (Chrome, Edge, Firefox etc.).
3. Adicione tarefas pelo formulário e experimente os filtros e os checkboxes.
4. Os dados ficam salvos no navegador usado. Limpar os dados do navegador pode apagá-los.

Não é necessário instalar dependências, banco de dados ou servidor.

## Arquivos
- `index.html`: estrutura e conteúdo da página.
- `style.css`: aparência, cores, espaçamentos e adaptação para telas menores.
- `script.js`: cadastro, validações, filtros, estatísticas e armazenamento local.

## Testes recomendados
- Tentar enviar o formulário vazio e verificar a mensagem de validação.
- Cadastrar uma tarefa válida e verificar se ela aparece.
- Marcar e desmarcar uma tarefa e observar os indicadores.
- Pesquisar por parte do título ou matéria.
- Testar os filtros.
- Excluir uma tarefa e cancelar/confirmar a caixa de diálogo.
- Atualizar a página e conferir se as tarefas continuam salvas.
- Abrir em uma janela estreita ou no celular para verificar a responsividade.
