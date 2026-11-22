(() => {
  'use strict';
  const choice = (prompt, choices, correct, explanation, topic) => ({ type: 'choice', prompt, choices, correct, explanation, topic });
  const short = (prompt, answers, explanation, topic) => ({ type: 'short', prompt, answers, explanation, topic });
  const written = (prompt, modelAnswer, rubric, explanation, topic) => ({ type: 'written', prompt, modelAnswer, rubric, explanation, topic });

  const portugues = {
    name: 'Português',
    intro: 'Leia com atenção, investigue os efeitos das palavras e explique suas respostas com pistas do texto.',
    assessments: {
      av1: {
        title: 'AV1 · Figuras de linguagem',
        overview: 'Reconheça comparações, imagens, contrastes e exageros. O objetivo é compreender o efeito produzido no contexto, além de lembrar o nome de cada figura.',
        topics: [
          {
            title: 'Sentido literal, sentido figurado e contexto',
            paragraphs: [
              'No sentido literal, uma expressão se aproxima de seu uso direto: “A porta de madeira está fechada”. No sentido figurado, as palavras constroem outra ideia: “A leitura abriu uma porta para novas descobertas”. Não apareceu uma porta material. A imagem sugere oportunidade, acesso ou mudança. Identificar esse deslocamento ajuda a interpretar textos, anúncios e conversas.',
              'Uma figura de linguagem é um recurso expressivo que participa da construção do sentido. Para analisá-la, leia a frase inteira, identifique as palavras decisivas e pergunte o que elas fazem o leitor imaginar ou sentir. Depois explique sua resposta. Dizer apenas “há linguagem figurada” não esclarece se o trecho valoriza uma ideia, intensifica uma emoção ou cria humor.'
            ],
            example: 'Em “A notícia foi um banho de água fria”, o banho representa a quebra de uma expectativa agradável. O contexto permite entender decepção, sem imaginar água de verdade.',
            pitfall: 'Uma mesma palavra pode ter uso literal ou figurado. Não classifique uma frase olhando apenas uma palavra isolada.'
          },
          {
            title: 'Comparação e metáfora',
            paragraphs: [
              'A comparação aproxima elementos por uma característica compartilhada e costuma mostrar essa relação com “como”, “tal qual” ou “parece”. Em “Sua voz era suave como uma brisa”, voz e brisa são aproximadas pela suavidade. Para explicar a comparação, nomeie os dois elementos e a qualidade que os conecta, em vez de apontar somente o conectivo.',
              'A metáfora também aproxima ideias, mas apresenta uma como se fosse a outra, sem um conectivo comparativo explícito: “Sua voz era uma brisa”. Essa identificação produz uma imagem expressiva. Nem toda frase com “como” contém comparação figurada: em “Como você resolveu a conta?”, a palavra introduz uma pergunta sobre o modo de fazer algo.'
            ],
            example: '“Meu irmão é uma fera no xadrez” é metáfora: “fera” indica habilidade ou força no jogo. “Ele joga como uma fera” explicita a comparação.',
            pitfall: 'Metáfora não é uma mentira a ser corrigida. É uma aproximação de sentidos que precisa ser interpretada no contexto.'
          },
          {
            title: 'Personificação e hipérbole',
            paragraphs: [
              'Personificação, também chamada de prosopopeia, atribui ações, sentimentos ou características humanas a seres não humanos ou a ideias. Em “A cidade acordou impaciente”, a cidade recebe uma atitude humana. O recurso pode tornar um cenário mais vivo e aproximar o leitor de uma emoção. Observe se o verbo realmente sugere uma experiência humana naquele trecho.',
              'Hipérbole é um exagero expressivo. Quem diz “Já procurei esse lápis um milhão de vezes” provavelmente quer destacar insistência ou impaciência, e não apresentar uma contagem. O exagero pode provocar humor, reforçar reclamações ou intensificar sentimentos. Interprete o efeito com cuidado: números grandes também aparecem em informações literais, como dados populacionais.'
            ],
            example: '“O vento sussurrou meu nome” humaniza o vento. “Chorei um oceano” exagera a quantidade de lágrimas para intensificar a tristeza.',
            pitfall: 'Nem toda ação de um animal é personificação: “o cão correu” descreve uma ação comum de cães; “o cão debateu a proposta” humaniza o animal.'
          },
          {
            title: 'Antítese e ironia',
            paragraphs: [
              'A antítese aproxima palavras ou ideias de sentidos opostos, como claro e escuro, alegria e tristeza, presença e ausência. Em “Entre risos e lágrimas, terminou a despedida”, o contraste mostra sentimentos diferentes convivendo na mesma situação. A oposição organiza o texto e destaca uma tensão; não basta localizar duas palavras quaisquer para afirmar que existe antítese.',
              'A ironia cria uma distância entre o que é dito literalmente e o sentido sugerido pela situação. Ao ver o chão molhado depois de alguém derrubar um copo, dizer “Que trabalho cuidadoso!” pode ser uma crítica irônica. Tom de voz, acontecimentos anteriores e consequências ajudam na interpretação. Fora do contexto, essa mesma frase poderia ser um elogio sincero.'
            ],
            example: '“Um pequeno passo, uma grande mudança” explora oposição de tamanho. “Ótimo, mais uma hora de fila!” pode expressar desagrado se a espera for indesejada.',
            pitfall: 'Ironia não equivale a qualquer piada. É necessário perceber a diferença entre o sentido literal e a intenção sugerida.'
          },
          {
            title: 'Outros recursos e explicação do efeito',
            paragraphs: [
              'Repetições de palavras, sons ou estruturas também podem produzir expressividade. A aliteração repete sons consonantais, como o som de “v” em “o vento varre a varanda”. A onomatopeia procura representar um som, como “toc-toc” para batidas. Esses recursos podem marcar ritmo, sugerir movimento e criar uma experiência sonora, especialmente em poemas e quadrinhos.',
              'Uma resposta completa une identificação e interpretação: cite a pista, nomeie o recurso quando for possível e explique seu efeito naquele trecho. Compare “há hipérbole” com “a expressão ‘esperei séculos’ exagera a duração e comunica impaciência”. A segunda resposta mostra o caminho da leitura. Mais de um recurso pode aparecer na mesma passagem, sem que um elimine o outro.'
            ],
            example: 'Em “Tic-tac, tic-tac: a espera não acaba”, a onomatopeia lembra o relógio, e a repetição reforça a sensação de passagem lenta do tempo.',
            pitfall: 'Evite explicações que servem para qualquer texto, como “deixa a frase bonita”. Indique a imagem, a emoção ou o contraste construído.'
          }
        ],
        questions: [
          choice('Em “A biblioteca é um oceano de descobertas”, qual é o recurso principal?', ['Metáfora', 'Onomatopeia', 'Ironia', 'Concordância'], 0, 'A biblioteca é identificada com um oceano para sugerir grande quantidade e possibilidade de exploração. Não existe conectivo comparativo.', 'Comparação e metáfora'),
          choice('Qual frase apresenta uma comparação figurada explícita?', ['A menina abriu a janela.', 'A esperança é uma semente.', 'A menina corria como o vento.', 'Como se escreve essa palavra?'], 2, '“Como” aproxima a corrida da menina da rapidez do vento. Na pergunta final, “como” pergunta o modo e não constrói uma comparação.', 'Comparação e metáfora'),
          choice('Em “A lua espiava pela janela”, a lua recebe uma ação humana. Qual é a figura?', ['Hipérbole', 'Personificação', 'Antítese', 'Onomatopeia'], 1, '“Espiar” é apresentado como uma atitude intencional da lua. A atribuição de comportamento humano caracteriza a personificação.', 'Personificação e hipérbole'),
          choice('Qual trecho usa hipérbole?', ['A mochila é azul.', 'Os alunos chegaram cedo.', 'A porta rangeu.', 'Minha mochila pesa uma tonelada!'], 3, '“Uma tonelada” exagera o peso da mochila para mostrar que ela parece muito pesada. O objetivo não é informar uma medida exata.', 'Personificação e hipérbole'),
          choice('Qual é o principal efeito de “Ria por fora, chorava por dentro”?', ['Informar a temperatura.', 'Imitar o som de uma risada.', 'Destacar o contraste entre aparência e sentimento.', 'Comparar a pessoa a um objeto.'], 2, 'Rir/chorar e fora/dentro colocam ideias opostas lado a lado. A antítese destaca a diferença entre o comportamento visível e a emoção.', 'Antítese e ironia'),
          choice('Após esquecer o trabalho pela terceira vez, alguém ouve: “Que memória excelente!”. No contexto, a frase é:', ['Irônica, pois o elogio literal sugere uma crítica.', 'Literal, porque comprova ótima memória.', 'Uma descrição neutra do trabalho.', 'Uma onomatopeia de esquecimento.'], 0, 'A situação contradiz o elogio. Essa distância entre o que se diz e o que se quer sugerir produz a ironia.', 'Antítese e ironia'),
          choice('Em qual opção o uso de “porta” é literal?', ['A música é uma porta para lembranças.', 'A gentileza abriu portas na conversa.', 'O estudo abriu a porta do conhecimento.', 'O carpinteiro consertou a porta da sala.'], 3, 'O carpinteiro conserta uma porta material da sala. Nos demais casos, “porta” sugere acesso, oportunidade ou conexão.', 'Sentido literal, sentido figurado e contexto'),
          choice('Em “Estou morrendo de fome”, dito antes do almoço por uma pessoa saudável, o exagero serve para:', ['Comprovar uma emergência médica.', 'Intensificar a sensação de fome.', 'Mostrar oposição entre fome e sono.', 'Imitar um ruído do estômago.'], 1, 'A expressão exagera a intensidade da fome. O contexto apresentado orienta uma leitura figurada, típica da hipérbole.', 'Personificação e hipérbole'),
          choice('Qual opção apresenta antítese?', ['A chuva cantou no telhado.', 'Ele é um livro aberto.', 'O silêncio e o barulho dividiam a casa.', 'Toc-toc, alguém chegou.'], 2, 'Silêncio e barulho são ideias opostas aproximadas na mesma construção. O contraste é o elemento central da antítese.', 'Antítese e ironia'),
          choice('“A turma era um formigueiro no recreio.” A imagem sugere principalmente:', ['Movimento intenso de muitas pessoas.', 'Que os alunos eram insetos de verdade.', 'Que todos estavam dormindo.', 'Que o recreio durou um ano.'], 0, 'A metáfora aproxima a movimentação da turma da atividade de um formigueiro. A interpretação depende dessa característica compartilhada.', 'Comparação e metáfora'),
          choice('Qual frase humaniza um elemento da natureza?', ['O rio tem cinco metros de largura.', 'O rio deságua no mar.', 'O rio atravessa a cidade.', 'O rio lamentou a partida dos barcos.'], 3, 'Lamentar expressa sentimento humano atribuído ao rio. As outras opções descrevem características ou ações naturais de um curso de água.', 'Personificação e hipérbole'),
          choice('Em “Toc-toc! A visita bateu à porta”, “toc-toc” é:', ['Uma antítese.', 'Uma onomatopeia.', 'Uma metáfora.', 'Uma ironia.'], 1, 'A expressão representa por escrito o som das batidas. Esse é o funcionamento da onomatopeia.', 'Outros recursos e explicação do efeito'),
          choice('Qual explicação analisa melhor “Esperei séculos pelo ônibus”?', ['É bonita porque tem palavras.', 'É literal: o narrador viveu vários séculos.', 'O exagero da duração comunica impaciência.', 'A frase imita o motor do ônibus.'], 2, 'A resposta relaciona a pista “séculos” ao recurso de exagero e ao efeito de impaciência. Assim, explica o sentido no contexto.', 'Outros recursos e explicação do efeito'),
          choice('“A velha praça guardava nossas histórias.” Qual leitura é mais adequada?', ['A praça recebe figuradamente a capacidade de guardar lembranças.', 'A praça colocou livros em uma gaveta real.', 'A frase só pode tratar de matemática.', 'O trecho afirma que a praça é uma pessoa real.'], 0, 'O lugar é apresentado como portador de memórias. A leitura figurada associa a praça às experiências das pessoas que passaram por ela.', 'Sentido literal, sentido figurado e contexto'),
          choice('Por que o contexto é importante para identificar a ironia?', ['Porque toda frase curta é irônica.', 'Porque a ironia sempre tem ponto de interrogação.', 'Porque elimina todos os sentidos figurados.', 'Porque revela se há distância entre a fala literal e a situação.'], 3, 'Uma frase de elogio pode ser sincera ou crítica. A situação e as pistas do texto permitem reconhecer a intenção irônica.', 'Antítese e ironia'),
          choice('Em “Vera viu o vento varrer a varanda”, a repetição do som de “v” exemplifica:', ['Hipérbole.', 'Aliteração.', 'Antítese.', 'Comparação explícita.'], 1, 'A recorrência de um som consonantal é aliteração. Ela pode reforçar o ritmo e sugerir o movimento do vento.', 'Outros recursos e explicação do efeito'),
          short('Qual figura exagera uma ideia para intensificá-la? Responda apenas com o nome.', ['hiperbole'], 'Hipérbole é o exagero expressivo, como em “mil tarefas” quando a pessoa quer ressaltar que tem muitas tarefas.', 'Personificação e hipérbole'),
          short('Qual é o outro nome de personificação? Responda com uma palavra.', ['prosopopeia'], 'Prosopopeia e personificação nomeiam o recurso que atribui características ou ações humanas a seres não humanos ou a ideias.', 'Personificação e hipérbole'),
          written('Leia: “O relógio devorava os minutos enquanto eu esperava a resposta”. Explique a imagem e seu possível efeito sobre a sensação de espera.', 'O relógio recebe a ação de devorar, como se fosse um ser vivo. A imagem apresenta o tempo de maneira intensa e pode sugerir ansiedade com a passagem dos minutos durante a espera.', ['Identifica a atribuição figurada da ação de devorar ao relógio.', 'Relaciona a imagem à passagem do tempo e à espera.', 'Explica um efeito coerente com o trecho, sem tratar a ação como literal.'], 'Compare sua resposta com os critérios. O efeito pode ser descrito com palavras diferentes, desde que esteja ligado às pistas do trecho.', 'Outros recursos e explicação do efeito'),
          written('Crie duas frases sobre uma prova: uma com comparação e outra com metáfora. Explique qual é a aproximação de ideias em cada uma.', 'Comparação: “A prova parecia um labirinto”, aproximando a dificuldade das questões à de encontrar uma saída. Metáfora: “A prova era um labirinto”, apresentando essa identificação sem conectivo comparativo.', ['Apresenta uma comparação com conectivo ou expressão comparativa.', 'Apresenta uma metáfora sem conectivo comparativo explícito.', 'Explica com clareza a característica que aproxima os elementos.'], 'Os exemplos são possibilidades, não frases obrigatórias. Faça a autoavaliação pela construção e pela explicação do sentido.', 'Comparação e metáfora')
        ],
        videoQuery: 'figuras de linguagem metáfora comparação personificação hipérbole antítese ironia 7 ano'
      },
      av2: {
        title: 'AV2 · Concordância verbal e leitura de Herança',
        overview: 'Revise a relação entre sujeito e verbo e desenvolva uma leitura apoiada em evidências. O título Herança foi informado sem autor, edição ou texto; por isso, a parte literária usa seu próprio exemplar e não presume personagens ou acontecimentos.',
        topics: [
          {
            title: 'Encontrar o sujeito e o núcleo',
            paragraphs: [
              'Na concordância verbal, o verbo se ajusta ao sujeito em pessoa e número. Compare “Eu estudo”, “Nós estudamos” e “Eles estudam”. Antes de escolher uma terminação, descubra de quem ou do que a oração fala. Em “As alunas da turma revisaram o conteúdo”, o sujeito é “As alunas da turma” e seu núcleo é “alunas”.',
              'O núcleo é a palavra central do sujeito. Expressões que acompanham esse núcleo podem aparecer no singular ou no plural sem mudar quem controla a concordância. Em “A caixa de livros caiu”, o núcleo é “caixa”, singular. O verbo fica no singular, embora “livros” esteja mais perto dele. Essa proximidade é uma fonte frequente de erros.',
              'Para revisar uma frase, separe sujeito e informação sobre ele. Depois substitua mentalmente o sujeito por um pronome: “As alunas” corresponde a “elas”; “a caixa” corresponde a “ela”. A substituição ajuda a conferir a forma verbal. Faça essa análise pelo sentido e pela estrutura, sem escolher automaticamente a palavra mais próxima do verbo.'
            ],
            example: '“Os cadernos do estudante estavam na mochila”: o núcleo “cadernos” equivale a “eles”; por isso, usamos “estavam”, mesmo com “estudante” no singular.',
            pitfall: 'A posição não determina o sujeito. Em “Chegaram os convidados”, “os convidados” continua sendo o sujeito e exige o plural.'
          },
          {
            title: 'Concordâncias frequentes e verbos impessoais',
            paragraphs: [
              'Quando dois núcleos formam um sujeito composto antes do verbo, a concordância mais comum é o plural: “Ana e Pedro chegaram”. Se aparece “eu” junto de outra pessoa, a forma de primeira pessoa do plural resolve construções como “Eu e meus colegas estudamos”. Também observe a diferença entre “a gente estuda” e “nós estudamos”, ambas possíveis nos contextos adequados.',
              'Alguns usos não têm sujeito. O verbo haver com sentido de existir fica no singular: “Havia muitos livros na mesa”. Já existir concorda com seu sujeito: “Existiam muitos livros na mesa”. O verbo fazer indicando tempo decorrido também é impessoal: “Faz dois meses”. Nesses casos, o termo no plural não transforma o verbo impessoal em plural.',
              'Concordância deve ser estudada junto do contexto de uso. Na conversa cotidiana, existem variedades de fala; em exercícios de escrita formal, aplique a norma solicitada sem desvalorizar as pessoas por seu modo de falar. Revise uma escolha de cada vez: localize o sujeito, determine pessoa e número e verifique se o verbo tem emprego impessoal.'
            ],
            example: '“Há duas páginas soltas” mantém haver no singular. Se trocarmos por existir, escrevemos “Existem duas páginas soltas”, pois “duas páginas” é sujeito de existir.',
            pitfall: 'Não transforme “havia” em “haviam” quando o sentido for existir. Outros usos de haver precisam de análise própria.'
          },
          {
            title: 'Herança: organizar a leitura do próprio exemplar',
            paragraphs: [
              'Há diferentes obras que podem ter o título Herança. Sem autor, edição e texto, não é possível estabelecer enredo, personagens ou interpretação correta dessa leitura. Use o exemplar indicado pela escola. Antes de começar, anote título completo, autor e edição; observe capa, apresentação e sumário, distinguindo o que esses elementos sugerem daquilo que a narrativa realmente confirma.',
              'Durante a leitura, produza um registro simples por capítulo ou trecho: o que aconteceu, quem participou, onde e quando a situação ocorreu e qual dúvida permaneceu. Anote a página de uma passagem importante. Se o livro não tiver capítulos, organize o registro em blocos de páginas. Esse mapa permite retomar informações sem depender apenas de uma lembrança geral.',
              'Separe informação explícita, inferência e opinião. Informação explícita aparece diretamente no texto. Inferência é uma conclusão construída com pistas e pode precisar de revisão. Opinião apresenta seu julgamento, mas também fica mais convincente quando você explica os motivos. Se não souber um detalhe, retorne ao livro; completar uma lacuna com invenção prejudica a leitura.'
            ],
            example: 'Registro de leitura: “Na página que marquei, uma personagem muda de atitude. Vou comparar sua fala anterior com a decisão desse trecho”. Preencha nomes e fatos somente após consultar seu exemplar.',
            pitfall: 'O título sozinho não prova qual é o tema nem que exista uma herança material no enredo. Confirme cada afirmação na obra utilizada.'
          },
          {
            title: 'Interpretar e escrever com evidências',
            paragraphs: [
              'Ao responder sobre um texto, comece identificando o que a pergunta pede: localizar uma informação, explicar uma causa, comparar atitudes ou defender uma interpretação. Uma resposta sobre motivação deve relacionar ação e pistas da narrativa. Observe também quem conta a história. Narrador é a voz que apresenta os acontecimentos; autor é a pessoa responsável pela obra, e os dois não devem ser confundidos.',
              'Uma boa resposta escrita pode seguir três movimentos: apresentar sua ideia, indicar uma passagem e explicar a relação entre elas. A evidência pode ser uma paráfrase fiel com indicação da página, sem copiar um parágrafo inteiro. O número da página ajuda quem lê a conferir, mas não substitui a explicação. Se sua edição não numerar páginas, identifique o capítulo ou trecho.',
              'Na revisão final, confira conteúdo e linguagem. Veja se sua afirmação corresponde ao que o livro mostra, se a explicação responde à pergunta e se os verbos concordam com os sujeitos. Diferentes interpretações podem ser defensáveis quando apoiadas no texto. Aqui, as respostas sobre o exemplar de Herança serão autoavaliadas com critérios, pois não há acesso ao livro nem correção por inteligência artificial.'
            ],
            example: 'Estrutura possível: “Interpreto essa decisão como sinal de mudança, porque no trecho indicado a personagem age de modo diferente de antes. A comparação entre as duas atitudes sustenta minha leitura”. Complete com evidências reais.',
            pitfall: 'Resumir o enredo inteiro não garante responder à pergunta. Selecione apenas os acontecimentos necessários para sustentar sua explicação.'
          }
        ],
        questions: [
          choice('Complete na escrita formal: “Os alunos da escola ___ o capítulo”.', ['leu', 'leram', 'lia', 'lê'], 1, 'O núcleo do sujeito é “alunos”, no plural. “Leram” concorda com esse núcleo na terceira pessoa do plural.', 'Encontrar o sujeito e o núcleo'),
          choice('Qual frase apresenta concordância adequada?', ['A caixa de lápis caíram.', 'Os livros da menina sumiu.', 'As folhas do caderno rasgou.', 'A coleção de revistas ficou na sala.'], 3, 'O núcleo “coleção” está no singular e pede “ficou”. O plural de “revistas” não altera a concordância.', 'Encontrar o sujeito e o núcleo'),
          choice('Em “As respostas do estudante estavam corretas”, qual núcleo orienta o verbo?', ['respostas', 'estudante', 'corretas', 'do'], 0, '“Respostas” é o núcleo do sujeito e está no plural. Por isso, o verbo aparece como “estavam”.', 'Encontrar o sujeito e o núcleo'),
          choice('Escolha a forma adequada: “Chegaram cedo ___”.', ['a convidada', 'o visitante', 'os convidados', 'um colega'], 2, 'O sujeito pode vir depois do verbo. “Os convidados” está no plural e concorda com “chegaram”.', 'Encontrar o sujeito e o núcleo'),
          choice('Complete: “Eu e meus colegas ___ a apresentação”.', ['preparou', 'preparamos', 'prepararam', 'prepara'], 1, 'O sujeito inclui a primeira pessoa “eu” junto de outras pessoas, correspondendo a “nós”. Assim, usamos “preparamos”.', 'Concordâncias frequentes e verbos impessoais'),
          choice('Qual alternativa usa haver corretamente com sentido de existir?', ['Haviam muitas questões.', 'Houveram dois encontros.', 'Haviam três livros.', 'Havia várias dúvidas.'], 3, 'Haver com sentido de existir é impessoal e fica no singular: “havia”. A expressão “várias dúvidas” não é sujeito desse verbo.', 'Concordâncias frequentes e verbos impessoais'),
          choice('Ao substituir “Há muitos textos aqui” por uma frase com existir, temos:', ['Existem muitos textos aqui.', 'Existe muitos textos aqui.', 'Existia muitos textos aqui.', 'Existimos muitos textos aqui.'], 0, 'Existir tem sujeito e concorda com ele. “Muitos textos” está no plural, então a forma é “existem”.', 'Concordâncias frequentes e verbos impessoais'),
          choice('Qual frase está adequada para indicar tempo decorrido?', ['Fazem dois meses que comecei.', 'Fazem três dias de leitura.', 'Faz duas semanas que li o capítulo.', 'Fazem anos que estudo.'], 2, 'Fazer indicando tempo decorrido é impessoal e fica no singular: “faz duas semanas”.', 'Concordâncias frequentes e verbos impessoais'),
          choice('Qual dupla apresenta concordância adequada na escrita formal?', ['A gente estudamos / nós estuda.', 'A gente estuda / nós estudamos.', 'A gente estudam / nós estudou.', 'A gente estudais / nós estudas.'], 1, '“A gente” pede verbo na terceira pessoa do singular; “nós” pede primeira pessoa do plural.', 'Concordâncias frequentes e verbos impessoais'),
          choice('Em uma interpretação, o que é uma inferência?', ['Uma cópia de qualquer frase.', 'Uma informação sempre escrita literalmente.', 'Um palpite sem relação com a leitura.', 'Uma conclusão construída a partir de pistas do texto.'], 3, 'Inferir é relacionar pistas e chegar a uma conclusão. Essa conclusão precisa ser coerente com o texto e pode ser revista.', 'Herança: organizar a leitura do próprio exemplar'),
          choice('Antes de estudar o paradidático Herança, qual atitude ajuda a identificar a obra correta?', ['Conferir autor e edição do exemplar indicado pela escola.', 'Escolher qualquer resumo com o mesmo título.', 'Inventar personagens a partir da capa.', 'Considerar que todos os livros com esse título são iguais.'], 0, 'O mesmo título pode aparecer em obras diferentes. Autor, edição e orientação da escola ajudam a identificar o material correto.', 'Herança: organizar a leitura do próprio exemplar'),
          choice('Qual registro de leitura é mais útil para retomar um trecho?', ['“Foi legal”, sem outros dados.', 'Uma lista de palavras desconectadas.', 'Resumo breve do acontecimento, dúvida e indicação da página.', 'Uma conclusão inventada antes da leitura.'], 2, 'O registro combina informação relevante, acompanhamento da dúvida e localização, facilitando a conferência posterior.', 'Herança: organizar a leitura do próprio exemplar'),
          choice('Leia o texto original deste exercício: “Lia releu o aviso e voltou à sala buscar o caderno”. Qual informação é explícita?', ['Lia esqueceu o caderno porque estava triste.', 'Lia voltou à sala buscar o caderno.', 'O aviso foi escrito pela diretora.', 'Lia perdeu uma prova.'], 1, 'O retorno à sala para buscar o caderno está declarado. As demais opções acrescentam causas e fatos que o trecho não informa.', 'Interpretar e escrever com evidências'),
          choice('Qual afirmação distingue narrador de autor?', ['Narrador e autor são sempre a mesma pessoa.', 'O autor existe apenas dentro da história.', 'O narrador é sempre o personagem principal.', 'O narrador é a voz do texto; o autor é quem escreve a obra.'], 3, 'A voz narrativa pode ser criada pelo autor e não representa necessariamente suas opiniões ou experiências pessoais.', 'Interpretar e escrever com evidências'),
          choice('Qual resposta apresenta melhor uma interpretação fundamentada?', ['“A atitude sugere preocupação, pois a personagem confere a porta várias vezes no trecho indicado.”', '“É preocupação porque eu quis.”', '“Não li, mas tenho certeza.”', '“Qualquer ação significa a mesma coisa.”'], 0, 'A resposta liga uma conclusão a uma ação observável. Assim, o leitor consegue acompanhar e avaliar a interpretação.', 'Interpretar e escrever com evidências'),
          choice('Qual frase mantém a concordância correta?', ['O grupo de leitores discutiram o final.', 'As páginas do livro estava solta.', 'Os capítulos da obra apresentam pistas.', 'A autora e o ilustrador participou.'], 2, 'O núcleo “capítulos” pede “apresentam”, no plural. Nas outras frases, há desencontro entre o núcleo do sujeito e a forma verbal.', 'Encontrar o sujeito e o núcleo'),
          short('Complete apenas com a forma correta de fazer: “___ três dias que terminei a leitura”.', ['faz'], '“Faz” permanece no singular porque indica tempo decorrido. “Três dias” não exige plural nesse uso impessoal.', 'Concordâncias frequentes e verbos impessoais'),
          short('Complete com o presente de existir: “___ duas versões do texto”.', ['existem'], '“Duas versões” é sujeito de existir e está no plural. Por isso, a forma adequada é “existem”.', 'Concordâncias frequentes e verbos impessoais'),
          written('Consulte seu exemplar de Herança. Identifique título completo e autor. Escolha uma decisão de uma personagem, indique capítulo ou página e explique uma possível motivação com duas pistas do texto.', 'Resposta-modelo de estrutura, a preencher com o livro: “Li [título], de [autor]. Em [localização], [personagem] decide [ação real]. Interpreto que age por [motivação], porque [pista 1] e [pista 2]”. Não há modelo de enredo sem a obra correta.', ['Identifica a obra e localiza uma decisão que realmente aparece no exemplar.', 'Apresenta duas pistas concretas e explica a relação delas com a motivação.', 'Distingue interpretação de informação explícita e escreve com clareza.'], 'Use a rubrica para autoavaliar e confira os fatos no livro. Este exercício não valida automaticamente acontecimentos de uma obra sem autor e edição informados.', 'Herança: organizar a leitura do próprio exemplar'),
          written('Com seu exemplar de Herança, compare dois trechos que ajudem a compreender uma personagem ou um tema. Indique a localização de ambos, explique uma semelhança ou mudança e revise a concordância verbal de sua resposta.', 'Estrutura possível: “No primeiro trecho, localizado em [página/capítulo], ocorre [fato]. No segundo, em [localização], ocorre [fato]. Essa comparação sugere [interpretação], porque [relação entre as evidências]”. Use somente fatos verificados no exemplar.', ['Seleciona e localiza dois trechos reais do livro utilizado.', 'Explica uma relação entre os trechos e sustenta sua interpretação.', 'Organiza a resposta e revisa a concordância entre sujeitos e verbos.'], 'A rubrica orienta a autoavaliação; diferentes leituras são possíveis quando sustentadas pelos trechos. Não existe correção automática do conteúdo do seu exemplar.', 'Interpretar e escrever com evidências')
        ],
        videoQuery: 'concordância verbal sujeito núcleo haver existir fazer tempo decorrido 7 ano'
      }
    }
  };

  const producao = {
    name: 'Produção Textual',
    intro: 'Experimente palavras, sons e estruturas. Planeje, escreva, leia em voz alta e revise o efeito que deseja produzir.',
    assessments: {
      av1: {
        title: 'AV1 · Poema, poesia, ritmo e rimas',
        overview: 'Estude a organização do poema e os recursos que constroem ritmo. Aprenda a distinguir sílabas gramaticais e poéticas e a reconhecer esquemas de rimas.',
        topics: [
          {
            title: 'Poema, poesia, verso e estrofe',
            paragraphs: [
              'Poema é um texto organizado artisticamente com palavras, muitas vezes em versos e estrofes. Verso é cada linha do poema; estrofe é um conjunto de versos separado de outro conjunto. A maneira de distribuir as palavras participa da leitura: uma pausa no fim do verso, por exemplo, pode destacar uma imagem ou criar uma expectativa para a linha seguinte.',
              'Poesia é um conceito mais amplo, relacionado à experiência e à expressão sensível, imaginativa ou estética. Podemos perceber poesia em um poema, mas também em uma cena, uma música ou outra criação. Na atividade escolar, diferenciar os termos ajuda: poema nomeia o texto; poesia se relaciona à dimensão poética que ele pode produzir no leitor.',
              'O eu lírico é a voz que se expressa no poema. Ela não deve ser confundida automaticamente com a pessoa que escreveu. Um autor pode criar uma voz infantil, imaginária ou diferente de si. Para interpretar, observe quem parece falar, a quem se dirige, quais imagens utiliza e que sentimento ou reflexão constrói com as palavras.'
            ],
            example: 'Em um texto de quatro linhas separadas visualmente de outro grupo de quatro, cada linha é um verso, e cada grupo pode formar uma estrofe. A voz que diz “eu” pertence ao eu lírico.',
            pitfall: 'Um poema não precisa rimar nem declarar sentimentos amorosos. Há poemas sobre cotidiano, humor, crítica, memória e muitos outros temas.'
          },
          {
            title: 'Sílabas gramaticais e sílabas poéticas',
            paragraphs: [
              'A divisão gramatical considera a organização das sílabas de cada palavra: “ca-sa”, “me-ni-no”, “ca-fé”. A contagem poética considera como o verso soa na leitura. Ela é feita até a última sílaba tônica do verso. As sílabas que vêm depois dessa sílaba tônica final não entram na contagem métrica, embora continuem existindo na palavra.',
              'Na escansão, que é a divisão do verso em sílabas poéticas, vogais de palavras vizinhas podem se unir na pronúncia. Essa ligação depende do encontro sonoro e da leitura; não é preciso forçar toda sequência de vogais a se tornar uma sílaba. Comece lendo em voz alta, marque a sílaba tônica final e só então conte as unidades sonoras.',
              'Um exemplo simples evita confusão: “O sol nasceu” pode ser dividido em “O / sol / nas / ceu”, com quatro sílabas poéticas, pois “ceu” é a última sílaba tônica. Já “O sol brilha” fica “O / sol / bri(lha)”: a contagem termina em “bri”, somando três. O restante da palavra é pronunciado, mas não contado.'
            ],
            example: '“O sol brilha”: na divisão gramatical, O / sol / bri / lha totaliza quatro sílabas. Na métrica, a contagem termina em “bri”, última tônica do verso, e totaliza três.',
            pitfall: 'Contar letras não é contar sílabas. Além disso, a contagem de um verso não é sempre a soma das divisões gramaticais de todas as palavras.'
          },
          {
            title: 'Rimas e esquemas ABAB, AABB e ABBA',
            paragraphs: [
              'A rima se baseia na correspondência sonora, geralmente observada a partir da última vogal tônica das palavras. Por isso, ouça as terminações em vez de olhar apenas a escrita. Para representar as rimas de uma estrofe, atribuímos uma letra a cada conjunto sonoro: palavras que rimam recebem a mesma letra; uma terminação diferente recebe outra letra.',
              'No esquema ABAB, o primeiro verso rima com o terceiro, e o segundo com o quarto. No esquema AABB, os dois primeiros rimam entre si, e os dois seguintes formam outro par. No esquema ABBA, o primeiro rima com o quarto e o segundo com o terceiro. As letras mostram relações sonoras; elas não indicam o assunto dos versos.',
              'Considere apenas as palavras finais “coração / luar / canção / mar”. “Coração” rima com “canção”, formando A; “luar” rima com “mar”, formando B. A sequência é ABAB. Se reorganizarmos para “coração / canção / luar / mar”, teremos AABB. Em “coração / luar / mar / canção”, teremos ABBA. A ordem transforma o esquema, mesmo mantendo as mesmas palavras.'
            ],
            example: 'Finalizações “flor / jardim / amor / assim” formam ABAB: flor-amor e jardim-assim. Leia os sons finais para justificar as duas correspondências.',
            pitfall: 'As letras A e B são etiquetas convencionais. O primeiro conjunto encontrado recebe A, qualquer que seja a letra final escrita na palavra.'
          },
          {
            title: 'Versos livres, versos brancos e revisão',
            paragraphs: [
              'Versos livres não seguem um padrão fixo de medida ao longo do poema. Versos brancos são versos sem rima. Essas classificações observam aspectos diferentes: livre se refere à regularidade métrica; branco, à ausência de rimas. Um poema pode reunir versos livres e brancos, mas os termos não significam exatamente a mesma coisa. Também é possível escrever versos com medida regular sem rimar.',
              'Mesmo quando não há rima ou medida fixa, o texto pode apresentar ritmo. Repetições, pausas, sons, tamanho dos versos e escolha das palavras orientam a leitura. Ao produzir, pense no que deseja destacar. Um verso curto pode criar uma pausa forte, enquanto uma sequência mais longa pode sugerir continuidade. Leia o resultado para perceber se o efeito combina com sua intenção.',
              'Na revisão, confira tema, imagens, voz, organização e som. Se o exercício pede um esquema, marque as palavras finais e use letras para verificar as rimas. Não sacrifique o sentido apenas para encaixar uma palavra que rima. Trocar uma expressão pouco clara ou retirar uma repetição desnecessária pode fortalecer o poema. Escrever poesia também envolve escolhas e reescrita.'
            ],
            example: '“A rua desperta / devagar / sob o primeiro ônibus” pode ser lido como versos de comprimentos diferentes e sem rimas finais. Observe como as quebras criam pausas e destacam “devagar”.',
            pitfall: 'Verso livre não significa escrever sem intenção. A organização precisa contribuir para a experiência de leitura, mesmo sem regra métrica fixa.'
          }
        ],
        questions: [
          choice('Cada linha de um poema é chamada de:', ['Parágrafo obrigatório.', 'Refrão obrigatório.', 'Verso.', 'Capítulo.'], 2, 'Verso é cada linha da organização poética. Um conjunto de versos pode formar uma estrofe.', 'Poema, poesia, verso e estrofe'),
          choice('Uma estrofe é:', ['Um conjunto de versos.', 'Qualquer palavra com rima.', 'A pessoa que escreveu o poema.', 'Uma regra que proíbe pausas.'], 0, 'A estrofe reúne versos e costuma ser separada visualmente de outros conjuntos por um espaço.', 'Poema, poesia, verso e estrofe'),
          choice('Qual afirmação distingue melhor poema de poesia?', ['Todo poema precisa rimar.', 'Poesia é somente o título do texto.', 'Poema e autor são sinônimos.', 'Poema é uma forma de texto; poesia é uma dimensão de expressão e experiência estética.'], 3, 'Poema nomeia o texto; poesia é um conceito mais amplo. A dimensão poética pode aparecer em diferentes formas de expressão.', 'Poema, poesia, verso e estrofe'),
          choice('O eu lírico é:', ['Sempre o aluno que lê.', 'A voz que se expressa no poema.', 'Obrigatoriamente a biografia do autor.', 'O conjunto de rimas.'], 1, 'O eu lírico é uma voz construída no texto. Não se deve atribuir automaticamente suas falas e sentimentos à pessoa do autor.', 'Poema, poesia, verso e estrofe'),
          choice('A contagem de sílabas poéticas de um verso vai até:', ['A primeira palavra.', 'A última letra escrita.', 'A última sílaba tônica do verso.', 'A primeira rima do poema.'], 2, 'A escansão encerra a contagem na última sílaba tônica. Sílabas posteriores são pronunciadas, mas não entram na medida.', 'Sílabas gramaticais e sílabas poéticas'),
          choice('Quantas sílabas poéticas há em “O sol brilha”, seguindo O / sol / bri(lha)?', ['Três.', 'Quatro.', 'Duas.', 'Cinco.'], 0, 'A sílaba tônica final é “bri”. Contamos O, sol e bri; “lha” fica depois da última tônica e não entra na medida poética.', 'Sílabas gramaticais e sílabas poéticas'),
          choice('Qual é a divisão gramatical adequada de “menino”?', ['me-ni-n-o', 'men-ino', 'm-e-ni-no', 'me-ni-no'], 3, '“Menino” apresenta três sílabas gramaticais: me-ni-no. A divisão não é feita letra por letra.', 'Sílabas gramaticais e sílabas poéticas'),
          choice('Por que a soma das sílabas gramaticais pode diferir da contagem poética?', ['Porque poemas não têm sons.', 'Porque encontros sonoros podem unir sílabas e a contagem termina na última tônica.', 'Porque todas as palavras viram uma sílaba.', 'Porque se contam apenas consoantes.'], 1, 'A escansão considera o som do verso e a posição da última sílaba tônica. A divisão gramatical trata as palavras separadamente.', 'Sílabas gramaticais e sílabas poéticas'),
          choice('As palavras finais “coração / luar / canção / mar” formam qual esquema?', ['AABB', 'ABBA', 'ABAB', 'AAAA'], 2, 'Coração-canção formam A; luar-mar formam B. Pela ordem dos quatro versos, temos A-B-A-B.', 'Rimas e esquemas ABAB, AABB e ABBA'),
          choice('Qual sequência de palavras finais apresenta AABB?', ['flor / amor / mar / luar', 'flor / mar / amor / luar', 'flor / mar / luar / amor', 'flor / céu / chuva / rua'], 0, 'Flor-amor formam o primeiro par, A-A. Mar-luar formam o segundo par, B-B.', 'Rimas e esquemas ABAB, AABB e ABBA'),
          choice('No esquema ABBA, quais versos rimam entre si?', ['1 com 2; 3 com 4.', 'Todos obrigatoriamente com todos.', '1 com 3; 2 com 4.', '1 com 4; 2 com 3.'], 3, 'As letras repetidas indicam as correspondências: A aparece no primeiro e no quarto; B, no segundo e no terceiro.', 'Rimas e esquemas ABAB, AABB e ABBA'),
          choice('Para verificar uma rima, é mais importante observar:', ['A cor da página.', 'A correspondência sonora das terminações.', 'O número de letras do título.', 'Se as palavras têm o mesmo significado.'], 1, 'Rima é uma relação sonora, geralmente a partir da última vogal tônica. Palavras de mesmo significado não necessariamente rimam.', 'Rimas e esquemas ABAB, AABB e ABBA'),
          choice('Versos livres são aqueles que:', ['Nunca possuem ritmo.', 'Precisam ter oito sílabas.', 'Não seguem uma medida fixa regular.', 'Devem rimar em AABB.'], 2, 'A liberdade está relacionada à métrica. Ritmo, imagens e até rimas podem aparecer, mesmo sem medida fixa.', 'Versos livres, versos brancos e revisão'),
          choice('Versos brancos são versos:', ['Sem rima.', 'Sem palavras.', 'Escritos apenas em papel branco.', 'Com obrigação de quatro sílabas.'], 0, '“Branco” descreve a ausência de rima. Um verso branco pode ter medida regular.', 'Versos livres, versos brancos e revisão'),
          choice('Qual atitude melhora a revisão de um poema com esquema ABAB solicitado?', ['Olhar somente o título.', 'Acrescentar qualquer palavra difícil.', 'Trocar todas as palavras por sinônimos.', 'Conferir as terminações, ler em voz alta e preservar o sentido.'], 3, 'A revisão precisa considerar o esquema sonoro e o efeito do texto. Uma rima não deve destruir a clareza da ideia.', 'Versos livres, versos brancos e revisão'),
          choice('Qual afirmação sobre ritmo é adequada?', ['Só existe com rima perfeita.', 'Pode ser criado por pausas, repetições e organização dos versos.', 'Desaparece nos versos livres.', 'É sempre igual em todos os poemas.'], 1, 'O ritmo resulta de várias escolhas sonoras e de organização. Não depende exclusivamente de rimas ou de medida fixa.', 'Versos livres, versos brancos e revisão'),
          short('Escreva apenas o esquema de rimas de “coração / luar / mar / canção”.', ['abba', 'a b b a', 'a-b-b-a'], 'Coração-canção recebem A; luar-mar recebem B. A ordem é A-B-B-A.', 'Rimas e esquemas ABAB, AABB e ABBA'),
          short('Como se chama cada linha de um poema? Responda com uma palavra.', ['verso'], 'Cada linha organizada no poema é um verso. O conjunto de versos forma uma estrofe.', 'Poema, poesia, verso e estrofe'),
          written('Escreva uma estrofe de quatro versos sobre um lugar de que você gosta, usando rimas ABAB. Depois marque A e B nas palavras finais e explique sua escolha.', 'Exemplo: “Na praça encontro uma flor (A) / e vejo o brilho do luar (B) / guardo um instante de cor (A) / enquanto escuto o mar (B)”. Flor-cor e luar-mar formam as correspondências. Você pode criar outra cena.', ['Produz quatro versos ligados a um lugar e com sentido compreensível.', 'Organiza as rimas finais em ABAB e marca as correspondências corretamente.', 'Explica como as palavras ou imagens contribuem para o efeito pretendido.'], 'Use o modelo apenas como referência. A autoavaliação considera sentido, organização e rimas; não exige copiar as palavras do exemplo.', 'Rimas e esquemas ABAB, AABB e ABBA'),
          written('Explique a diferença entre sílaba gramatical e sílaba poética usando “O sol brilha”. Mostre as duas contagens e diga por que elas diferem.', 'Gramaticalmente, temos O / sol / bri / lha: quatro sílabas. Na contagem poética, O / sol / bri(lha): três sílabas, porque a última tônica é “bri” e a contagem termina nela.', ['Distingue a divisão das palavras da medida sonora do verso.', 'Apresenta quatro sílabas gramaticais e três poéticas no exemplo.', 'Explica a interrupção da contagem na última sílaba tônica.'], 'A explicação é essencial: apenas indicar os números não mostra a regra utilizada. Confira cada critério na sua resposta.', 'Sílabas gramaticais e sílabas poéticas')
        ],
        videoQuery: 'poema poesia sílabas poéticas rimas ABAB AABB ABBA versos livres brancos 7 ano'
      },
      av2: {
        title: 'AV2 · Composição musical e letra de canção',
        overview: 'Entenda a relação entre letra, melodia e interpretação. Planeje uma canção curta com tema, voz, estrofes e refrão e aprenda a revisar sua produção.',
        topics: [
          {
            title: 'Canção, letra e melodia',
            paragraphs: [
              'A canção combina linguagem verbal e elementos musicais. A letra é o texto cantado; a melodia é uma sequência organizada de alturas e durações que reconhecemos como a linha musical. Ao ler uma letra no papel, percebemos palavras e organização, mas a experiência da canção também depende de como essas palavras se relacionam com sons, ritmo e interpretação.',
              'Uma mesma frase pode produzir efeitos diferentes quando cantada lentamente ou rapidamente, em registro suave ou intenso. Pausas e alongamentos destacam palavras. Por isso, analisar uma canção exige observar a relação entre o que é dito e a maneira como é apresentado. Na produção escolar, mesmo uma melodia simples pode ajudar a testar se os versos cabem com naturalidade.',
              'Composição não se limita a preencher um molde de rimas. Ela envolve selecionar tema, construir uma perspectiva e organizar ideias em uma sequência que possa ser acompanhada pelo ouvinte. Nem toda música tem letra: existem composições instrumentais. Neste estudo, o foco é a canção com texto verbal, criada ou analisada de acordo com a proposta da escola.'
            ],
            example: 'Se o verso fala de pressa, uma execução rápida pode reforçar essa sensação; uma execução muito lenta pode criar contraste. O efeito depende do conjunto, não apenas de uma palavra.',
            pitfall: 'Letra e melodia não são a mesma coisa. A letra pode ser lida sem som, mas isso não revela todos os efeitos da canção.'
          },
          {
            title: 'Tema, eu lírico e destinatário',
            paragraphs: [
              'O tema é o assunto central desenvolvido pela canção, como amizade, saudade, convivência ou um problema da comunidade. Um título pode dar uma pista, mas a interpretação deve considerar a letra inteira. Pergunte quais imagens, ações e palavras retornam. O tema pode ser apresentado diretamente ou construído por situações que levam o ouvinte a uma reflexão.',
              'O eu lírico é a voz que se manifesta na letra. Ela pode dizer “eu”, falar por um grupo ou se dirigir a alguém. Não confunda essa voz automaticamente com o compositor ou com o cantor. Uma pessoa pode interpretar a história de uma personagem inventada. Observe também o destinatário: a fala se dirige a uma pessoa, a um lugar, a si mesma ou ao público?',
              'Ao escrever, escolher uma perspectiva ajuda a manter a unidade. Se a proposta é falar de amizade pela voz de quem recebe ajuda, os detalhes podem destacar acolhimento e parceria. Se a voz é de quem se sente sozinho, as mesmas situações terão outro peso. Revise pronomes, tempos verbais e imagens para que a perspectiva permaneça compreensível.'
            ],
            example: 'Em “Eu te encontro no portão / para dividir o dia”, a voz fala a um “tu” ou “você”. A aproximação pode sugerir companhia, mas o restante da letra deve confirmar a leitura.',
            pitfall: 'Uma letra em primeira pessoa não comprova que o compositor viveu todos os acontecimentos narrados.'
          },
          {
            title: 'Estrofes, refrão e estrutura',
            paragraphs: [
              'As estrofes podem desenvolver imagens, situações ou etapas de uma história. O refrão é um trecho que retorna e costuma concentrar uma ideia importante, facilitando o reconhecimento e a participação do público. A repetição pode reforçar uma emoção, um convite ou uma mensagem. Ela tem função no conjunto e não precisa ser vista como falta de criatividade.',
              'Uma organização possível é estrofe, refrão, nova estrofe e refrão. Também podem aparecer introdução, ponte e encerramento, conforme o projeto. A ponte apresenta uma mudança ou passagem em relação às partes vizinhas. Essas estruturas são possibilidades de composição, não uma regra universal: existem canções sem refrão ou com outras formas de organizar seus materiais.',
              'Para planejar, resuma a função de cada parte antes de escrever tudo. A primeira estrofe pode apresentar uma situação; a segunda pode mostrar uma mudança; o refrão pode reunir a ideia central. Leia as partes em sequência e verifique se há progressão. Se todas repetem a mesma informação sem novo efeito, tente acrescentar um detalhe ou reorganizar o texto.'
            ],
            example: 'Plano sobre cuidado com a praça: estrofe 1 apresenta o lugar; refrão convida a cuidar; estrofe 2 mostra uma ação coletiva; refrão retoma o convite com novo sentido após essa ação.',
            pitfall: 'O refrão costuma se repetir, mas nem toda repetição isolada constitui um refrão. Observe se há um trecho recorrente com função estrutural.'
          },
          {
            title: 'Escrever, experimentar e revisar',
            paragraphs: [
              'Comece pelo objetivo e pelo público. Defina o que deseja comunicar e para quem a canção será apresentada. Faça uma lista de palavras, imagens e situações ligadas ao tema. Em seguida, escolha algumas que expressem sua ideia com precisão. Linguagem simples pode ser muito expressiva quando apresenta detalhes concretos, em vez de repetir frases vagas sobre qualquer assunto.',
              'Escreva uma primeira versão e experimente cantá-la ou marcá-la em um pulso regular. Perceba onde faltam pausas, onde sobram sílabas e quais palavras recebem destaque. Nem toda composição precisa ter versos do mesmo tamanho ou rimas fixas, mas as escolhas devem funcionar na execução planejada. Você pode ajustar uma palavra sem abandonar o sentido que deseja transmitir.',
              'Na revisão, avalie coerência do tema, clareza do eu lírico, relação entre partes e facilidade de cantar. Observe se as repetições têm propósito e se a rima está ajudando a mensagem. Use criação própria e identifique referências quando a atividade permitir adaptações. Para esta plataforma, a letra escrita pode ser autoavaliada; a qualidade da melodia precisa ser experimentada na apresentação.'
            ],
            example: 'Primeira versão: “Vamos colaborar para a preservação cotidiana da praça”. Versão mais curta para testar no pulso: “Nossa praça vai viver / com o cuidado de você”. Compare clareza, ritmo e sentido antes de escolher.',
            pitfall: 'Não troque uma palavra importante por outra sem sentido apenas porque ela rima. A revisão sonora deve caminhar junto da revisão da mensagem.'
          }
        ],
        questions: [
          choice('A letra de uma canção é:', ['O texto verbal que é cantado.', 'Apenas o volume do instrumento.', 'Somente a velocidade da execução.', 'O nome da pessoa que canta.'], 0, 'A letra corresponde às palavras da canção. Melodia, ritmo e interpretação se relacionam a ela, mas são dimensões diferentes.', 'Canção, letra e melodia'),
          choice('Melodia é melhor descrita como:', ['A lista de instrumentos.', 'A opinião de quem ouviu.', 'O tamanho da página.', 'Uma sequência organizada de alturas e durações musicais.'], 3, 'A melodia organiza notas e suas durações em uma linha reconhecível. Não é sinônimo de letra ou de volume.', 'Canção, letra e melodia'),
          choice('Qual afirmação sobre canção é adequada?', ['Toda música instrumental possui letra.', 'Na canção, palavras e elementos musicais participam da construção de sentido.', 'A letra nunca muda de efeito na interpretação.', 'Só existe canção com rima ABAB.'], 1, 'A canção articula linguagem verbal e música. A forma de cantar pode reforçar ou transformar efeitos das palavras.', 'Canção, letra e melodia'),
          choice('O eu lírico de uma letra é:', ['Sempre o professor.', 'O mesmo que o público.', 'A voz que se manifesta no texto.', 'O nome do instrumento principal.'], 2, 'A voz da letra pode ser criada e não coincide necessariamente com compositor ou intérprete.', 'Tema, eu lírico e destinatário'),
          choice('O refrão geralmente:', ['Retorna e destaca uma ideia importante.', 'Aparece somente no título.', 'Proíbe qualquer repetição.', 'Precisa contar uma história inteira.'], 0, 'A recorrência ajuda a reconhecer um trecho e pode concentrar a mensagem central, embora nem toda canção tenha refrão.', 'Estrofes, refrão e estrutura'),
          choice('Qual afirmação sobre estrutura é correta?', ['Todas as canções têm exatamente duas estrofes.', 'Uma canção sem refrão deixa de ser canção.', 'Ponte e refrão são sempre idênticos.', 'Estrofe e refrão são possibilidades de organização, não um molde universal.'], 3, 'Há diferentes formas de composição. É preciso verificar o projeto e a canção analisada em vez de impor uma estrutura única.', 'Estrofes, refrão e estrutura'),
          choice('Uma função possível da estrofe é:', ['Apagar o tema da canção.', 'Desenvolver uma situação, imagem ou etapa da narrativa.', 'Substituir todos os sons por silêncio.', 'Impedir a continuidade da letra.'], 1, 'As estrofes podem acrescentar informações e desenvolver a ideia. O refrão pode retomar um ponto central entre elas.', 'Estrofes, refrão e estrutura'),
          choice('Em “Eu te espero no portão”, o pronome “te” ajuda a indicar:', ['O instrumento usado.', 'A medida obrigatória do verso.', 'A pessoa a quem a voz se dirige.', 'O autor real da canção.'], 2, '“Te” aponta um destinatário da fala do eu lírico. O trecho não identifica automaticamente o compositor ou sua vida.', 'Tema, eu lírico e destinatário'),
          choice('Qual atitude ajuda a reconhecer o tema de uma canção?', ['Observar ideias, imagens e situações recorrentes na letra inteira.', 'Ler só a primeira letra do título.', 'Contar exclusivamente os instrumentos.', 'Supor que toda letra trata de romance.'], 0, 'A recorrência e o desenvolvimento das ideias ajudam a sustentar o tema. O título sozinho pode ser insuficiente.', 'Tema, eu lírico e destinatário'),
          choice('Na revisão, por que cantar ou marcar o pulso pode ser útil?', ['Para provar que todo verso tem a mesma métrica.', 'Para substituir a mensagem por rimas.', 'Para dispensar a leitura da letra.', 'Para perceber pausas, encaixe das palavras e destaques sonoros.'], 3, 'A experimentação revela dificuldades que podem não aparecer na leitura silenciosa, como excesso de sílabas e pausas pouco naturais.', 'Escrever, experimentar e revisar'),
          choice('Qual escolha preserva melhor o sentido durante a revisão?', ['Trocar palavras aleatoriamente.', 'Ajustar a expressão mantendo a ideia e testando o resultado sonoro.', 'Acrescentar rimas sem relação com o tema.', 'Apagar todas as partes diferentes.'], 1, 'A revisão deve melhorar a relação entre som e mensagem. A clareza precisa continuar presente após os ajustes.', 'Escrever, experimentar e revisar'),
          choice('Uma ponte em uma canção pode:', ['Ser obrigatoriamente o título.', 'Repetir sempre todas as estrofes.', 'Criar uma mudança ou passagem entre partes.', 'Eliminar a possibilidade de melodia.'], 2, 'A ponte pode introduzir contraste ou transição. Sua presença e função dependem da organização escolhida.', 'Estrofes, refrão e estrutura'),
          choice('Qual afirmação evita confundir eu lírico e compositor?', ['A voz da letra pode viver uma situação inventada pelo compositor.', 'Todo “eu” é uma confissão real.', 'O cantor sempre escreveu a letra.', 'O tema prova a biografia de quem canta.'], 0, 'Uma canção pode construir personagens e perspectivas. A primeira pessoa é um recurso expressivo e não uma prova biográfica.', 'Tema, eu lírico e destinatário'),
          choice('Um bom planejamento começa por:', ['Escolher palavras difíceis sem tema.', 'Decidir apenas o volume final.', 'Copiar um refrão conhecido sem indicação.', 'Definir objetivo, tema, público e perspectiva.'], 3, 'Essas escolhas orientam o vocabulário, a estrutura e a mensagem. Depois, a primeira versão pode ser testada e revisada.', 'Escrever, experimentar e revisar'),
          choice('A repetição do refrão pode produzir qual efeito?', ['Eliminar a mensagem.', 'Reforçar uma ideia e facilitar o reconhecimento pelo público.', 'Garantir que todas as canções sejam iguais.', 'Provar que não há criatividade.'], 1, 'A repetição pode ter função expressiva e estrutural. Sua qualidade depende de como funciona no conjunto.', 'Estrofes, refrão e estrutura'),
          choice('Qual critério é adequado para revisar uma letra?', ['A quantidade de palavras raras apenas.', 'Se todas as linhas acabam com a mesma letra escrita.', 'Se as partes se conectam ao tema e funcionam na execução planejada.', 'Se o título tem exatamente dez letras.'], 2, 'Coerência e relação com a execução são critérios relevantes. Regras arbitrárias não substituem a análise do objetivo da produção.', 'Escrever, experimentar e revisar'),
          short('Como se chama o trecho recorrente de uma canção que costuma destacar a ideia central? Responda com uma palavra.', ['refrao'], 'O refrão é um trecho que retorna e pode reunir uma ideia importante. Nem toda canção precisa ter um.', 'Estrofes, refrão e estrutura'),
          short('Qual é o nome da voz que se manifesta na letra de uma canção? Responda com duas palavras.', ['eu lirico'], 'O eu lírico é a voz textual. Ele pode ser diferente do compositor e do intérprete.', 'Tema, eu lírico e destinatário'),
          written('Crie uma letra curta sobre convivência na escola, com duas estrofes de dois versos e um refrão de dois versos. Identifique as partes e explique a mensagem que deseja reforçar.', 'Possibilidade de plano: estrofe 1 mostra um conflito cotidiano; refrão convida à escuta e ao respeito; estrofe 2 apresenta uma ação de colaboração; o refrão retorna. A letra final deve usar palavras e imagens próprias.', ['Produz duas estrofes e um refrão, com dois versos em cada parte.', 'Desenvolve o tema da convivência com sentido e conexão entre as partes.', 'Explica a função do refrão e a mensagem que ele reforça.'], 'Não é obrigatório usar rimas, a menos que seu professor acrescente essa exigência. A rubrica verifica estrutura, tema e intenção.', 'Escrever, experimentar e revisar'),
          written('Escolha dois versos da letra que você criou. Leia ou cante em um pulso simples, faça uma revisão e explique o que mudou para melhorar clareza, pausa ou encaixe sonoro.', 'Exemplo de procedimento: “A primeira versão tinha uma expressão longa que dificultava a pausa. Troquei por uma frase mais curta, mantive a ideia de respeito e testei novamente em voz alta”. Apresente suas versões reais antes e depois.', ['Mostra dois versos antes e depois da revisão.', 'Explica uma mudança concreta relacionada a clareza, pausa ou encaixe.', 'Preserva o tema e relata a experimentação em voz alta ou com pulso.'], 'A autoavaliação observa sua justificativa e o processo de revisão. A plataforma não escuta nem avalia uma melodia sem gravação ou integração de áudio.', 'Escrever, experimentar e revisar')
        ],
        videoQuery: 'letra de canção composição musical estrofe refrão melodia eu lírico produção textual'
      }
    }
  };

  const ingles = {
    name: 'Inglês',
    intro: 'Entenda os padrões, compare exemplos e use o inglês em situações de esporte, experiências, regras e escolhas.',
    assessments: {
      av1: {
        title: 'AV1 · Exciting Sports, can e cartaz individual',
        overview: 'Aprenda combinações frequentes com play, do e go, expresse habilidades com can e organize um cartaz esportivo claro para o leitor.',
        topics: [
          {
            title: 'Sports: combinações com play, do e go',
            paragraphs: [
              'Para falar de esportes em inglês, aprendemos combinações frequentes entre verbo e atividade. Usamos play em muitos jogos com bola e esportes organizados como partidas: play football, play basketball, play tennis e play volleyball. Em “I play basketball after school”, o foco está na prática de basquete depois da escola. Memorize o conjunto, não apenas a tradução isolada do verbo.',
              'Usamos do em atividades como do judo, do karate, do gymnastics e do yoga. Já go aparece em combinações com muitas atividades terminadas em -ing: go swimming, go cycling, go running e go skating. Esses grupos ajudam, mas são tendências de uso, não uma regra perfeita para qualquer palavra inventada. Confira a combinação ensinada para cada esporte.',
              'Uma forma prática de estudar é construir três colunas e colocar cada expressão completa na coluna adequada. Depois crie frases curtas sobre sua rotina: “I do judo on Mondays” ou “We go swimming on Saturdays”. A escolha de play, do ou go depende da atividade; o tempo e o sujeito da frase também podem exigir outras mudanças no verbo.'
            ],
            example: '“I play tennis, I do karate and I go cycling.” São três combinações diferentes. Não usamos “play swimming” apenas porque swimming é uma atividade esportiva.',
            pitfall: 'Não traduza “praticar” sempre pelo mesmo verbo. Em inglês, a combinação convencional com o nome da atividade é importante.'
          },
          {
            title: 'Can: habilidades, negativas e perguntas',
            paragraphs: [
              'Can pode expressar habilidade: “I can swim” significa que eu sei ou consigo nadar. A estrutura é sujeito + can + verbo na forma básica. O verbo seguinte não recebe to nem -s: “She can run”, e não “She can runs”. A forma can é a mesma com I, you, he, she, it, we e they.',
              'Na negativa, usamos cannot ou a contração can’t: “He can’t skate”. Na pergunta, can vai antes do sujeito: “Can you swim?”. Não acrescentamos do ou does nessa estrutura. Em respostas curtas, retomamos o pronome adequado: “Yes, I can” ou “No, I can’t”. Observe quem responde para escolher I, he, she, we ou they corretamente.',
              'Can também pode aparecer em pedidos ou permissões, dependendo da situação. Neste estudo, o foco principal é a habilidade esportiva. Para interpretar uma frase, verifique o contexto: “Can you play tennis?” pode perguntar sobre a capacidade de jogar. Evite concluir que a pessoa joga todos os dias apenas porque sabe jogar; habilidade e hábito são informações diferentes.'
            ],
            example: 'Pergunta: “Can Mia ride a bike?”. Resposta afirmativa curta: “Yes, she can”. Resposta completa: “Mia can ride a bike”. Em todas, can mantém a mesma forma.',
            pitfall: 'Depois de can, use a forma básica: can play, can swim, can do. Evite “can to swim”, “cans swim” e “can swims”.'
          },
          {
            title: 'Ler informações esportivas com atenção',
            paragraphs: [
              'Um texto esportivo curto pode informar modalidade, local, horário, público e habilidade. Procure primeiro a finalidade: é um convite, um perfil de atleta ou uma regra de atividade? Depois localize palavras conhecidas e dados concretos. Não é necessário traduzir cada termo antes de compreender uma informação principal, como onde ocorrerá um encontro ou qual esporte será praticado.',
              'Compare “I can play volleyball” e “I play volleyball on Fridays”. A primeira frase apresenta uma habilidade; a segunda informa um hábito com indicação de tempo. Uma não comprova automaticamente a outra. Da mesma forma, “I can’t swim” informa uma limitação de habilidade no contexto, mas não explica a causa. Acrescentar motivos não escritos é uma interpretação sem evidência.',
              'Ao responder a uma questão, volte à frase que contém o dado solicitado. Se a pergunta usa where, procure lugar; com when, procure tempo; com what sport, procure a modalidade. Nomes próprios, números e palavras como park, school, Friday e afternoon ajudam a localizar informações. Depois confira se a alternativa escolhida respeita exatamente o que está escrito.'
            ],
            example: '“Sports Club: volleyball at the school gym on Friday, at 3 p.m.” informa esporte, local e horário. Não informa que todos os participantes já sabem jogar.',
            pitfall: 'Não use apenas seu conhecimento do mundo para responder. O que costuma acontecer em um clube não substitui os dados do texto apresentado.'
          },
          {
            title: 'Produzir um cartaz individual',
            paragraphs: [
              'O cartaz individual deve ser sua produção e comunicar uma mensagem rapidamente. Antes de escrever, defina a proposta: apresentar um esporte, descrever suas habilidades ou convidar para uma atividade. Escolha um título curto e visível, uma imagem que ajude a compreender e poucas informações organizadas. Um leitor deve perceber a ideia principal sem procurar frases espalhadas pela página.',
              'Para apresentar habilidades, use frases como “I can play tennis” e “I can’t skate yet”. Para um convite fictício, inclua os dados necessários e deixe claro no trabalho que são parte da atividade escolar. Se houver evento real, confira horário e local antes de escrever. A clareza depende de informações corretas, contraste suficiente e letras que possam ser lidas.',
              'Na revisão, confira as combinações com play, do e go e a forma básica depois de can. Veja se o título combina com o conteúdo e se a imagem tem uma função. Evite preencher todo o espaço com texto. Você pode usar uma lista para habilidades e um pequeno bloco para informações do evento, mantendo uma ordem visual que guie a leitura.'
            ],
            example: 'Cartaz de apresentação: “MY SPORTS — I can play volleyball. I can ride a bike. I can’t do judo yet.” A palavra yet indica que a habilidade ainda pode ser desenvolvida.',
            pitfall: 'Um cartaz visualmente chamativo pode continuar incompleto. Confira se ele informa o que a proposta pede e se as frases estão compreensíveis.'
          }
        ],
        questions: [
          choice('Complete: “I ___ basketball after school”.', ['go', 'do', 'am', 'play'], 3, 'A combinação usual é play basketball. Play aparece com muitos jogos organizados e esportes com bola.', 'Sports: combinações com play, do e go'),
          choice('Complete: “My sister can ___ gymnastics”.', ['play', 'do', 'go', 'does'], 1, 'A expressão é do gymnastics. Depois de can, o verbo permanece na forma básica do.', 'Sports: combinações com play, do e go'),
          choice('Complete: “We ___ swimming on Saturdays”.', ['play', 'do', 'go', 'can to'], 2, 'A combinação é go swimming. Muitas atividades em -ing aparecem com go.', 'Sports: combinações com play, do e go'),
          choice('Qual frase apresenta a forma correta depois de can?', ['She can play tennis.', 'She can plays tennis.', 'She cans play tennis.', 'She can to play tennis.'], 0, 'Can mantém a mesma forma e é seguido pelo verbo básico: can play. Não usamos -s nem to depois dele.', 'Can: habilidades, negativas e perguntas'),
          choice('A negativa de “He can skate” é:', ['He doesn’t can skate.', 'He can not to skate.', 'He cans not skate.', 'He can’t skate.'], 3, 'Can’t é a contração de cannot. O verbo skate permanece na forma básica.', 'Can: habilidades, negativas e perguntas'),
          choice('Como perguntar se alguém sabe nadar?', ['You can to swim?', 'Can you swim?', 'Do you can swim?', 'Can you swims?'], 1, 'Na pergunta com can, colocamos can antes do sujeito e mantemos o verbo na forma básica.', 'Can: habilidades, negativas e perguntas'),
          choice('Responda afirmativamente: “Can Leo play volleyball?”.', ['Yes, she can.', 'Yes, he does.', 'Yes, he can.', 'Yes, he cans.'], 2, 'Leo é retomado por he no contexto apresentado, e a resposta curta mantém o modal can.', 'Can: habilidades, negativas e perguntas'),
          choice('Qual dupla está adequada?', ['do judo / go cycling', 'play judo / do cycling', 'go judo / play cycling', 'do tennis / play swimming'], 0, 'As combinações estudadas são do judo e go cycling. Aprender cada expressão completa ajuda a evitar traduções automáticas.', 'Sports: combinações com play, do e go'),
          choice('“I can ride a bike” expressa principalmente:', ['Uma obrigação.', 'Um evento passado.', 'Uma proibição.', 'Uma habilidade.'], 3, 'Can indica capacidade ou habilidade nesse contexto: a pessoa consegue andar de bicicleta.', 'Can: habilidades, negativas e perguntas'),
          choice('Leia: “Nina can play tennis, but she can’t swim”. Qual informação está correta?', ['Nina sabe nadar.', 'Nina sabe jogar tênis, mas não sabe nadar.', 'Nina pratica tênis todos os dias.', 'Nina não sabe jogar tênis.'], 1, 'A frase contrasta a habilidade de jogar tênis com a ausência da habilidade de nadar. Não informa uma rotina diária.', 'Ler informações esportivas com atenção'),
          choice('Leia: “Volleyball Club — school gym — Friday — 3 p.m.” Onde ocorrerá a atividade?', ['No parque.', 'Na piscina.', 'No ginásio da escola.', 'Na sexta-feira.'], 2, 'School gym indica o local. Friday responde quando; 3 p.m. informa o horário.', 'Ler informações esportivas com atenção'),
          choice('No mesmo cartaz, qual informação responde a “When?”?', ['Friday, at 3 p.m.', 'Volleyball.', 'School gym.', 'Club.'], 0, 'When pergunta quando. O dia Friday e o horário 3 p.m. localizam a atividade no tempo.', 'Ler informações esportivas com atenção'),
          choice('Qual frase usa uma combinação usual de esporte?', ['I do football.', 'I play swimming.', 'I go karate.', 'I play volleyball.'], 3, 'Play volleyball é a combinação convencional. Para os outros esportes, as expressões estudadas são play football, go swimming e do karate.', 'Sports: combinações com play, do e go'),
          choice('Qual opção melhora um cartaz individual sobre habilidades?', ['Texto minúsculo sem título.', 'Título visível e frases curtas com can/can’t.', 'Informações contraditórias.', 'Imagem que esconde todas as frases.'], 1, 'Um título claro e frases curtas ajudam a identificar o assunto e compreender as habilidades apresentadas.', 'Produzir um cartaz individual'),
          choice('Qual pergunta está corretamente organizada?', ['Can she plays basketball?', 'Does she can play basketball?', 'Can she play basketball?', 'She cans play basketball?'], 2, 'A ordem é can + sujeito + verbo básico. O modal dispensa does e não permite -s em play.', 'Can: habilidades, negativas e perguntas'),
          choice('Qual frase permite concluir apenas uma habilidade, sem afirmar uma rotina?', ['I can play tennis.', 'I play tennis every Monday.', 'I go running on Sundays.', 'I do yoga every morning.'], 0, 'Can play informa que a pessoa sabe jogar. As outras frases trazem marcas de hábito ou frequência.', 'Ler informações esportivas com atenção'),
          short('Complete com play, do ou go: “I ___ karate”.', ['do'], 'A expressão usual é do karate. Aprenda o verbo junto do nome da atividade.', 'Sports: combinações com play, do e go'),
          short('Complete com play, do ou go: “We ___ cycling”.', ['go'], 'A combinação é go cycling, como em go swimming e go running.', 'Sports: combinações com play, do e go'),
          written('Planeje um cartaz individual chamado “My Sports”. Escreva três frases em inglês: duas habilidades com can e uma habilidade que você ainda não tem com can’t. Use pelo menos duas atividades diferentes e explique como organizará o cartaz.', 'Exemplo: “I can play volleyball. I can ride a bike. I can’t do judo yet.” O título pode ficar no alto, as frases em um bloco legível e as imagens próximas das atividades correspondentes.', ['Escreve duas frases afirmativas e uma negativa, com sujeito + can/can’t + verbo básico.', 'Usa atividades esportivas e combinações verbais adequadas.', 'Explica uma organização visual com título e informações legíveis.'], 'As habilidades podem ser diferentes das do modelo. Faça a autoavaliação das estruturas e da clareza; não é preciso declarar habilidades que você não possui.', 'Produzir um cartaz individual'),
          written('Crie um pequeno convite esportivo fictício em inglês, com esporte, lugar, dia e horário. Acrescente uma pergunta com can para o leitor e identifique em português os quatro dados do convite.', 'Exemplo fictício: “VOLLEYBALL DAY — At the school gym, on Friday, at 3 p.m. Can you play volleyball?” Dados: vôlei; ginásio da escola; sexta-feira; 15h. O evento é apenas parte da atividade escolar.', ['Inclui esporte, lugar, dia e horário de forma compreensível.', 'Escreve uma pergunta com can + sujeito + verbo básico.', 'Identifica corretamente os dados em português e indica o caráter fictício do convite.'], 'O modelo mostra uma possibilidade. A rubrica avalia a comunicação e a estrutura; não cria nem anuncia um evento real.', 'Produzir um cartaz individual')
        ],
        videoQuery: 'sports play do go can abilities inglês 7 ano cartaz'
      },
      av2: {
        title: 'AV2 · Present Perfect, escolhas, aparência e regras',
        overview: 'Revise have/has + particípio, question word + to-infinitive, look like, obrigação e ausência de obrigação, proibição e infinitivo de finalidade.',
        topics: [
          {
            title: 'Present Perfect: forma e relação com o presente',
            paragraphs: [
              'O Present Perfect é formado por have ou has mais o particípio passado do verbo principal. Usamos have com I, you, we e they; has com he, she e it. Compare “I have finished” e “She has finished”. Verbos regulares costumam ter particípio em -ed, mas há formas irregulares, como go/gone, see/seen, do/done e write/written.',
              'Esse tempo pode apresentar uma experiência sem localizar o momento exato ou um acontecimento passado com relevância atual. “I have visited that museum” apresenta uma experiência; “I have lost my key” pode destacar um resultado no presente. Não traduza mecanicamente cada frase. Em exercícios básicos, expressões de tempo passado concluído como yesterday costumam pedir Simple Past: “I visited it yesterday”.',
              'Na negativa, coloque not no auxiliar: “He has not finished” ou “He hasn’t finished”. Na pergunta, inverta auxiliar e sujeito: “Have you finished?”. O verbo principal permanece no particípio. Ever pode perguntar se uma experiência já ocorreu; never pode indicar que ela nunca ocorreu. Observe sempre o contexto e evite usar a forma do passado simples quando o exercício pede particípio.'
            ],
            example: '“She has written a message.” Has concorda com she; written é o particípio de write. Na pergunta: “Has she written a message?”.',
            pitfall: 'Não escreva “She have wrote”. O padrão é has + written. Em vários verbos irregulares, passado simples e particípio são diferentes.'
          },
          {
            title: 'Question word + to-infinitive',
            paragraphs: [
              'Podemos combinar palavras interrogativas com to + verbo básico para falar de uma dúvida, escolha ou orientação. Exemplos: what to do, where to go, when to start, how to use it e which option to choose. Em “I don’t know what to do”, o trecho significa “o que fazer”, sem formar uma pergunta direta com ponto de interrogação.',
              'A palavra escolhida depende da informação em dúvida. Where se relaciona a lugar; when, a tempo; how, a modo; what, à ação ou coisa; which, a uma escolha entre opções. “Please explain how to use the app” pede o modo de usar. O padrão não é aplicado automaticamente a qualquer palavra interrogativa: why, por exemplo, não entra normalmente nessas combinações básicas.'
            ],
            example: '“We need to decide where to meet”: precisamos decidir onde nos encontrar. Where aponta a escolha do lugar, e meet vem na forma básica depois de to.',
            pitfall: 'Não confunda a expressão encaixada com uma pergunta direta. “I know where to go” não usa a ordem de “Where do I go?”.'
          },
          {
            title: 'Look like: aparência e semelhança',
            paragraphs: [
              'Look like pode indicar aparência ou semelhança e costuma ser seguido de um nome ou pronome: “She looks like her sister” significa que ela se parece com a irmã. A pergunta “What does he look like?” busca uma descrição de aparência. Observe a concordância no presente: “He looks like...” e “They look like...”.',
              'Compare “She looks tired” com “She looks like her mother”. No primeiro caso, tired é um adjetivo e aparece diretamente após looks. No segundo, her mother é um grupo nominal introduzido por like. “What is she like?” costuma pedir características ou personalidade, enquanto “What does she look like?” foca a aparência. Ler a estrutura inteira evita confundir essas perguntas.'
            ],
            example: 'Pergunta: “What does Ben look like?”. Resposta possível: “He is tall and has curly hair”. Para semelhança: “He looks like his father”.',
            pitfall: 'Evite “She looks like tired” no padrão estudado. Use “She looks tired”, pois tired é adjetivo.'
          },
          {
            title: 'Must, have to, don’t have to e mustn’t',
            paragraphs: [
              'Must e have to podem expressar obrigação ou necessidade. “You must wear a helmet” e “You have to wear a helmet” comunicam uma exigência no contexto. Must é seguido de verbo básico e não varia por pessoa. Have to muda no presente: “She has to study”. Embora haja diferenças de ênfase entre as formas, não trate a origem da obrigação como uma regra absoluta.',
              'A diferença central nas negativas é de sentido. Must not ou mustn’t indica proibição: “You mustn’t run here” significa que correr ali não é permitido. Don’t have to indica ausência de obrigação: “You don’t have to run” significa que não é necessário correr. Com he, she e it, usamos doesn’t have to, sem acrescentar -s a have.'
            ],
            example: '“You don’t have to bring lunch” permite levar comida se você quiser, mas diz que isso não é necessário. “You mustn’t bring food” proíbe trazer comida.',
            pitfall: '“Não precisa” e “não pode” não são equivalentes. Confundir don’t have to com mustn’t pode inverter o sentido de uma regra.'
          },
          {
            title: 'To-infinitive para finalidade',
            paragraphs: [
              'To + verbo básico também pode indicar a finalidade de uma ação. Em “I study to learn”, estudar é a ação e aprender é o objetivo: “Eu estudo para aprender”. Em “She went to the library to borrow a book”, o primeiro to faz parte da indicação de destino; o segundo introduz a finalidade de ir à biblioteca.',
              'Para reconhecer o infinitivo de finalidade, pergunte “para quê?”. “He exercises to stay healthy” responde que ele se exercita para manter a saúde. Não acrescente -ing depois desse to de infinitivo. Compare essa estrutura com question word + infinitive: em “I know how to cook”, how to cook expressa o modo conhecido; não explica a finalidade de saber.'
            ],
            example: '“We use a dictionary to check words.” Para que usamos um dicionário? Para conferir palavras. Assim, to check words apresenta a finalidade.',
            pitfall: 'To tem diferentes funções em inglês. Antes de classificar, observe o que vem depois dele e qual relação ele estabelece na frase.'
          }
        ],
        questions: [
          choice('Complete: “She ___ finished her homework”.', ['have', 'is', 'has', 'do'], 2, 'She exige has. O Present Perfect é formado por has + particípio, neste caso finished.', 'Present Perfect: forma e relação com o presente'),
          choice('Qual frase está no Present Perfect com forma adequada?', ['They have seen this film.', 'They has saw this film.', 'They have see this film.', 'They seen this film.'], 0, 'They pede have, e seen é o particípio de see. Saw é a forma de Simple Past.', 'Present Perfect: forma e relação com o presente'),
          choice('Qual é a pergunta correspondente a “You have finished”?', ['Do you have finished?', 'Have finished you?', 'You has finished?', 'Have you finished?'], 3, 'Para formar a pergunta, have vai antes do sujeito. Finished continua no particípio.', 'Present Perfect: forma e relação com o presente'),
          choice('Qual frase apresenta uma experiência sem indicar um momento passado específico?', ['I visited the museum yesterday.', 'I have visited that museum.', 'I am visiting the museum now.', 'I will visit the museum tomorrow.'], 1, 'Have visited apresenta a experiência sem dizer quando ela ocorreu. Yesterday localiza um passado concluído na primeira opção.', 'Present Perfect: forma e relação com o presente'),
          choice('O particípio de write, usado em “He has ___ a letter”, é:', ['write', 'wrote', 'written', 'writing'], 2, 'Write é irregular: write, wrote, written. Após has, o Present Perfect exige o particípio written.', 'Present Perfect: forma e relação com o presente'),
          choice('Complete: “I don’t know ___ to do”.', ['what', 'who does', 'why do', 'what do'], 0, 'What to do significa “o que fazer”. O trecho segue o padrão question word + to + verbo básico.', 'Question word + to-infinitive'),
          choice('“Please show me how to use this app” pede informação sobre:', ['Uma proibição.', 'Um horário obrigatório.', 'A aparência do aplicativo.', 'O modo de usar o aplicativo.'], 3, 'How está ligado ao modo. How to use significa “como usar”.', 'Question word + to-infinitive'),
          choice('Complete para indicar dúvida sobre lugar: “We need to decide ___ to meet”.', ['when', 'where', 'how many', 'what time is'], 1, 'Where indica lugar. Where to meet significa “onde nos encontrar”. When indicaria tempo.', 'Question word + to-infinitive'),
          choice('Qual pergunta busca uma descrição de aparência?', ['What does he like?', 'What has he done?', 'What does he look like?', 'Where does he live?'], 2, 'What does he look like? pergunta sobre aparência. What does he like? pergunta do que ele gosta.', 'Look like: aparência e semelhança'),
          choice('Qual frase usa look like corretamente para semelhança?', ['She looks like her sister.', 'She look like her sister.', 'She looks like tired.', 'She does looks like her sister.'], 0, 'She exige looks, e her sister é um grupo nominal que pode seguir look like. Com o adjetivo tired, usaríamos looks tired.', 'Look like: aparência e semelhança'),
          choice('“You mustn’t use your phone here” significa:', ['Você precisa usar o celular.', 'Você não precisa usar o celular, mas pode.', 'Você sabe usar o celular.', 'Você está proibido de usar o celular aqui.'], 3, 'Mustn’t indica proibição. A ausência de necessidade seria expressa por don’t have to.', 'Must, have to, don’t have to e mustn’t'),
          choice('“You don’t have to bring a notebook” informa que:', ['Trazer caderno é proibido.', 'Não é necessário trazer caderno.', 'É obrigatório trazer dois cadernos.', 'O caderno já foi perdido.'], 1, 'Don’t have to retira a obrigação; não cria uma proibição. A pessoa pode trazer um caderno se quiser.', 'Must, have to, don’t have to e mustn’t'),
          choice('Complete: “He ___ wear a uniform at school”.', ['have to', 'must to', 'has to', 'has must'], 2, 'Na terceira pessoa do singular, have to se torna has to. Depois, wear fica na forma básica.', 'Must, have to, don’t have to e mustn’t'),
          choice('Em “I went to the library to borrow a book”, qual parte indica finalidade?', ['to borrow a book', 'I', 'went', 'the library'], 0, 'To borrow a book responde “para quê?”. A ida à biblioteca teve a finalidade de pegar um livro emprestado.', 'To-infinitive para finalidade'),
          choice('Qual frase usa corretamente o infinitivo de finalidade?', ['I exercise to staying healthy.', 'I exercise for stay healthy.', 'I exercise to stayed healthy.', 'I exercise to stay healthy.'], 3, 'To stay healthy indica o objetivo de se exercitar. Depois do to de infinitivo, usamos a forma básica stay.', 'To-infinitive para finalidade'),
          choice('Qual frase negativa está adequada no presente?', ['She don’t have to wait.', 'She doesn’t have to wait.', 'She doesn’t has to wait.', 'She mustn’t to wait.'], 1, 'Com she, usamos doesn’t have to. O auxiliar doesn’t já marca a terceira pessoa; have permanece na forma básica.', 'Must, have to, don’t have to e mustn’t'),
          short('Complete apenas com have ou has: “They ___ finished the project”.', ['have'], 'They usa have no Present Perfect. O verbo principal finished já está no particípio.', 'Present Perfect: forma e relação com o presente'),
          short('Complete com o particípio de go: “She has ___ home”.', ['gone'], 'O verbo irregular go tem as formas go, went e gone. O Present Perfect pede gone depois de has.', 'Present Perfect: forma e relação com o presente'),
          written('Escreva quatro frases em inglês para um clube: uma obrigação com must ou have to, uma proibição com mustn’t, uma ausência de obrigação com don’t have to e uma ação com finalidade usando to + verbo. Explique em português a diferença entre as duas negativas.', 'Exemplo: “You must wear sports shoes. You mustn’t run near the pool. You don’t have to bring a ball. We exercise to stay healthy.” Mustn’t proíbe uma ação; don’t have to informa que ela não é necessária.', ['Produz as quatro estruturas solicitadas com verbos na forma adequada.', 'Usa proibição e ausência de obrigação com sentidos claramente diferentes.', 'Explica a diferença em português e indica corretamente uma finalidade.'], 'Outras regras são possíveis. Avalie a forma e o sentido, principalmente a diferença entre “não pode” e “não precisa”.', 'Must, have to, don’t have to e mustn’t'),
          written('Escreva três frases em inglês: uma experiência com Present Perfect, uma dúvida com question word + to-infinitive e uma semelhança com look like. Depois identifique o padrão usado em cada frase.', 'Exemplo: “I have visited a museum” usa have + particípio. “I don’t know where to go” usa where + to + verbo básico. “My brother looks like my father” usa looks like + grupo nominal para indicar semelhança.', ['Usa have/has com particípio adequado para uma experiência sem tempo passado específico.', 'Constrói uma expressão adequada de question word + to-infinitive.', 'Usa look like para semelhança e identifica os três padrões.'], 'As frases podem tratar de situações diferentes. Confira concordância, particípio e forma básica depois de to antes da autoavaliação.', 'Question word + to-infinitive')
        ],
        videoQuery: 'present perfect have has participle must have to must not do not have to infinitive purpose'
      }
    }
  };

  globalThis.ESTUDA_CONTENT = { ...(globalThis.ESTUDA_CONTENT || {}), portugues, producao, ingles };
})();
