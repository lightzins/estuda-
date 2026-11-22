# Estuda+

Plataforma estática de revisão do 7º ano, com sete matérias e trilhas separadas para AV1 e AV2. Cada trilha tem revisão, exemplos, erros comuns e 20 questões: 16 de alternativas, duas respostas curtas e duas escritas, totalizando 280 atividades de treino.

## Executar e verificar

Na raiz do repositório:

```powershell
python -m http.server 4174 --bind 127.0.0.1 --directory plataforma-estudos
node --test plataforma-estudos/tests/materia.test.cjs
```

Abra `http://127.0.0.1:4174/`. Não há instalação, build, chave de API ou backend. A configuração `vercel.json` da raiz publica a pasta `plataforma-estudos`.

## Arquivos e adaptação

- `catalog.js`: nomes, cronograma e formato oficial das avaliações fornecidas pelo usuário.
- `content-humanas.js`, `content-linguagens.js`, `content-exatas.js`: conteúdo de revisão e bancos de questões, reunidos em `ESTUDA_CONTENT`.
- `study-engine.js`: correção, normalização de respostas e leitura segura do progresso.
- `materia-deep.js`: apresentação das trilhas, modos treino/simulado, rubricas e visualizações matemáticas.
- `dashboard.js`: busca, filtros, cartões e links de revisão.
- `app.css`: cores e layout compartilhados. `legacy-soft.css` adapta a oficina de poemas existente.

O tema padrão é escuro, com superfícies em cinza, realces verdes suaves e campos, avisos de correção e gráficos adaptados à mesma paleta.

Para adicionar uma matéria, use o mesmo identificador no catálogo e no conteúdo. Cada objeto em `assessments.av1` e `assessments.av2` contém `title`, `overview`, `topics`, `questions` e `videoQuery`. Um tópico contém `title`, `paragraphs`, `example` e `pitfall`. As questões têm `type`, `prompt`, `topic` e `explanation`, além dos campos específicos:

- `choice`: quatro `choices` e um índice `correct` entre 0 e 3.
- `short`: lista `answers` com as respostas completas aceitas.
- `written`: `modelAnswer` e lista `rubric` de critérios de autoavaliação.

Mantenha a quantidade de questões sincronizada com os textos de interface e os testes ao alterar o formato das trilhas.

## Funcionamento e limites

O modo treino mostra a explicação após conferir uma resposta. O simulado só libera a correção após preencher e entregar as 20 questões. As respostas escritas recebem modelo e rubrica; a pontuação é registrada pelo próprio estudante, sem alegar correção semântica por IA. A pontuação de treino não é a nota oficial da escola.

Os rascunhos e o progresso são locais ao navegador, separados por matéria e avaliação. A versão atual usa as chaves `estuda-v4-<materia>-<av>`; o progresso das versões anteriores é preservado nas chaves antigas, mas não é transferido para perguntas diferentes. Não há sincronização entre aparelhos.

Os complementos em vídeo são links identificados como pesquisas no YouTube. As atividades sobre o paradidático **Herança** orientam a leitura do exemplar pessoal; autor, edição e enredo não foram presumidos. A análise de poemas da oficina usa aproximações ortográficas/sonoras e estimativas de métrica, apresentadas como tais.

## Verificação desta versão

24 testes automatizados verificam cobertura das sete matérias, 14 bancos de 20 questões, estruturas das revisões, respostas e rubricas, correção, persistência independente, dados inválidos, transformações geométricas e existência dos arquivos publicados. A interface também foi conferida no navegador em computador e largura de celular, incluindo busca, revisão, respostas certas e erradas, autoavaliação, recarga, troca de AV, entrega e reinício do simulado.
