const subjects = {
  portugues: {
    name:'Língua Portuguesa', dates:['26/10','23/11'],
    intro:'Esta plataforma prepara você para explicar o efeito das figuras de linguagem, aplicar regras de concordância verbal e responder perguntas sobre o paradidático Herança com base em evidências do livro.',
    av1:{title:'AV1 — Figuras de linguagem',video:'figuras de linguagem videoaula 7 ano',lines:[
      'Figuras de linguagem são formas de usar as palavras para criar imagem, emoção, humor ou intensidade.',
      'Metáfora é comparação implícita: “meu coração é gelo” não diz que o coração virou gelo de verdade.',
      'Comparação é explícita: usa “como”, “tal qual” ou expressão equivalente: “frio como gelo”.',
      'Personificação atribui ação humana a seres não humanos: “o vento cantou na janela”.',
      'Hipérbole é exagero intencional: “esperei uma eternidade”. Ela não deve ser lida literalmente.',
      'Antítese aproxima ideias contrárias: claro/escuro, amor/ódio, vida/morte.',
      'Ironia constrói um sentido diferente do sentido literal, muitas vezes para criticar ou gerar humor.',
      'Em prova, não basta dar o nome da figura: indique a palavra usada e explique seu efeito.',
      'Uma mesma frase pode apresentar mais de um recurso; escolha o que está mais evidente no contexto.',
      'Treino: releia frases e pergunte se elas exageram, comparam, opõem ideias ou humanizam algo.'
    ]},
    av2:{title:'AV2 — Concordância verbal e Herança',video:'concordância verbal videoaula 7 ano',lines:[
      'Concordância verbal é a relação entre o verbo e o núcleo do sujeito.',
      'Antes de escolher o verbo, encontre quem pratica ou sofre a ação na frase.',
      'Em “A turma chegou”, o núcleo é turma, singular; por isso chegou fica no singular.',
      'Em “Os alunos chegaram”, o núcleo é alunos, plural; por isso chegaram fica no plural.',
      'Em sujeito composto antes do verbo, a forma mais comum é plural: “Ana e João estudaram”.',
      'Palavras perto do verbo não mandam na concordância se não forem o núcleo do sujeito.',
      'Releia a frase inteira para evitar concordar com uma palavra dentro de uma expressão.',
      'Para Herança, faça uma ficha com personagens, narrador, espaço, tempo, conflito e desfecho.',
      'Toda resposta sobre o livro precisa citar um acontecimento ou característica que prove sua ideia.',
      'Não invente fatos do paradidático: responda somente com base no livro e no caderno.'
    ]},
    questions:[
      q('Uma metáfora é:', ['uma comparação implícita','um exagero','uma oposição'],0,'A metáfora aproxima ideias sem usar conectivo comparativo.'),
      q('“O sol sorriu” é:', ['personificação','antítese','ironia'],0,'O sol recebeu uma ação humana.'),
      q('“Chorei um rio” usa:', ['hipérbole','comparação','eufemismo'],0,'A frase exagera para intensificar a emoção.'),
      q('Em “A turma chegou”, o verbo está no singular porque:', ['turma é o núcleo singular','chegou é um adjetivo','há muitas pessoas'],0,'O verbo concorda com o núcleo do sujeito.'),
      q('Em “Pedro e Ana leram”, o sujeito é:', ['composto','oculto','indeterminado'],0,'Há dois núcleos: Pedro e Ana.'),
      q('Na análise de um livro, uma evidência é:', ['um fato do enredo','uma opinião sem base','uma palavra aleatória'],0,'Use fatos e trechos do enredo para justificar.'),
      q('Antítese aproxima:', ['ideias opostas','palavras iguais','somente verbos'],0,'Claro/escuro é um exemplo.'),
      q('A melhor primeira etapa da concordância é:', ['achar o sujeito','achar a rima','contar sílabas'],0,'O sujeito orienta a forma do verbo.'),
      q('Ironia deve ser entendida:', ['pelo contexto','só pelo dicionário','como exagero sempre'],0,'O contexto mostra se o sentido literal foi invertido.'),
      text('Na frase “A chuva dançou no telhado”, qual figura atribui uma ação humana à chuva?',['personificação','prosopopeia'])
    ]
  },
  producao: {
    name:'Produção Textual', dates:['27/10','24/11'],
    intro:'Aqui você aprende a reconhecer a organização do poema e a analisar como palavras, sons e refrões trabalham em poemas e canções.',
    av1:{title:'AV1 — Poema, poesia, sílabas e rimas',video:'poema poesia sílaba poética rimas videoaula',lines:[
      'Poema é a composição escrita; poesia é o efeito de imaginação, sentimento e linguagem que ele pode produzir.',
      'Verso é cada linha do poema; estrofe é o conjunto de versos separado por um espaço.',
      'A sílaba gramatical segue a divisão da palavra; a sílaba poética segue a leitura sonora do verso.',
      'Na escansão, a contagem vai até a última sílaba tônica do verso.',
      'Vogais próximas entre uma palavra e outra podem se unir na pronúncia poética.',
      'Rima é a aproximação de sons, geralmente no fim de dois ou mais versos.',
      'ABAB é alternada: o primeiro verso rima com o terceiro, e o segundo com o quarto.',
      'AABB é emparelhada: os dois primeiros rimam entre si, assim como os dois seguintes.',
      'ABBA é interpolada: o primeiro rima com o quarto e o segundo com o terceiro.',
      'Verso branco tem métrica sem rima; verso livre não segue uma medida regular fixa.'
    ]},
    av2:{title:'AV2 — Composição musical e canção',video:'composição musical canção letra poesia videoaula',lines:[
      'Canção une letra, melodia, ritmo e interpretação; poema pode existir apenas na página ou na voz.',
      'A letra da canção pode usar recursos poéticos como rima, repetição, metáfora e ritmo.',
      'O eu lírico é a voz que fala no texto; ele não é automaticamente o autor real.',
      'Tema é a ideia central: saudade, mudança, amizade, crítica social ou outro assunto.',
      'Refrão é uma parte que retorna e ajuda a criar unidade e memória na canção.',
      'Ritmo pode surgir pela repetição de sons, palavras, pausas, sílabas fortes e melodia.',
      'Ao interpretar, observe o que é dito e como a forma altera o sentido.',
      'Uma resposta forte cita um recurso e depois explica o efeito que ele cria.',
      'Não basta escrever “tem rima”: diga quais palavras rimam e que musicalidade isso produz.',
      'Na redação, organize introdução, desenvolvimento e conclusão, com exemplos do texto.'
    ]},
    questions:[
      q('Poema é:', ['a composição textual','somente a emoção','uma música obrigatória'],0,'Poesia é o efeito artístico; poema é a composição.'),
      q('ABAB representa rima:', ['alternada','emparelhada','interpolada'],0,'A rima A retorna no terceiro verso.'),
      q('AABB representa rima:', ['emparelhada','livre','interpolada'],0,'As rimas aparecem aos pares.'),
      q('Verso branco tem:', ['métrica sem rima','rima sem métrica','nem métrica nem ritmo'],0,'Branco se refere à ausência de rima.'),
      q('Verso livre:', ['não tem medida regular fixa','tem sempre 7 sílabas','rima em ABBA'],0,'Ele pode ter ritmo, mas não obrigação de medida fixa.'),
      q('Refrão é:', ['parte repetida','último verso sempre','título da canção'],0,'Ele reaparece na canção.'),
      q('Eu lírico é:', ['a voz do texto','o leitor','o professor'],0,'Não é necessariamente o autor real.'),
      q('Na escansão, paramos:', ['na última sílaba tônica','no fim da folha','na primeira rima'],0,'A métrica termina na última tônica.'),
      q('Em uma análise, evidência é:', ['uma palavra ou trecho do texto','uma opinião sem texto','o nome do autor apenas'],0,'A evidência sustenta a interpretação.'),
      text('Escreva o nome do tipo de rima representado pelo esquema ABBA.',['interpolada','oposta','intercalada'])
    ]
  },
  historia: {
    name:'História',dates:['28/10','25/11'],
    intro:'Você vai ligar expansão territorial, economia colonial, escravidão e resistência, evitando respostas que tratem processos históricos como eventos isolados.',
    av1:{title:'AV1 — Brasil e expansão territorial',video:'expansão territorial Brasil colonial bandeirantes videoaula 7 ano',lines:[
      'No início da colonização, Portugal ocupava principalmente o litoral da América Portuguesa.',
      'A ocupação avançou ao interior por interesses econômicos, religiosos e políticos.',
      'Bandeiras buscavam metais, capturavam indígenas e percorriam áreas afastadas do litoral.',
      'Missões reuniam populações indígenas para catequese e trabalho, criando disputas com colonizadores.',
      'A pecuária avançou para o interior porque precisava de grandes espaços e apoiava outras atividades.',
      'A mineração atraiu pessoas, abriu rotas e estimulou a ocupação de regiões centrais.',
      'O Tratado de Tordesilhas havia dividido terras entre Portugal e Espanha de modo teórico.',
      'O Tratado de Madri valorizou, entre outros critérios, a ocupação efetiva do território.',
      'Expansão territorial não foi pacífica: envolveu conflitos, violência e tomada de terras indígenas.',
      'Em uma resposta, conecte causa, ação e consequência: atividade econômica, deslocamento e território.'
    ]},
    av2:{title:'AV2 — Escravidão na América Portuguesa',video:'escravidão na América portuguesa videoaula 7 ano',lines:[
      'A escravidão foi uma instituição central da sociedade colonial portuguesa na América.',
      'Pessoas indígenas foram escravizadas, e milhões de africanos foram trazidos à força pelo tráfico atlântico.',
      'O trabalho escravizado sustentou engenhos, mineração, trabalho urbano e atividades domésticas.',
      'A produção açucareira dependia de grande quantidade de trabalho forçado.',
      'Escravização significou violência física, separação de famílias e negação de liberdade.',
      'Pessoas escravizadas não foram passivas: resistiram de muitas formas no cotidiano e em ações coletivas.',
      'Quilombos foram comunidades formadas por resistência, com destaque para Palmares.',
      'Manifestações culturais, fugas, negociações, revoltas e preservação de saberes também foram resistência.',
      'Não use a expressão “escravo” como se fosse identidade natural; prefira pessoa escravizada quando adequado.',
      'Uma boa resposta explica sistema econômico, violência e resistência na mesma análise.'
    ]},
    questions:[
      q('Bandeiras contribuíram para:', ['interiorização da ocupação','fim da mineração','criação do Sudeste'],0,'Elas percorreram áreas internas.'),
      q('A pecuária avançou ao interior porque:', ['precisava de espaço','dependia do mar','não usava terra'],0,'A criação de gado exigia grandes áreas.'),
      q('O Tratado de Madri valorizou:', ['ocupação efetiva','somente o litoral','a língua indígena'],0,'A ocupação foi um critério importante.'),
      q('A mineração causou:', ['novas rotas e deslocamentos','menos circulação','fim de vilas'],0,'Ela atraiu população e comércio.'),
      q('O tráfico atlântico trouxe pessoas africanas:', ['à força','como turistas','sem violência'],0,'Foi um processo violento de escravização.'),
      q('Quilombos representam:', ['resistência','uma empresa portuguesa','um tratado'],0,'Foram formas de organização e resistência.'),
      q('A escravidão serviu à economia:', ['colonial','digital','industrial moderna apenas'],0,'Ela sustentou diversas atividades coloniais.'),
      q('Resistência inclui:', ['fugas e preservação cultural','aceitar tudo','somente guerras externas'],0,'Houve ações individuais e coletivas.'),
      q('Uma boa resposta histórica liga:', ['causa, processo e consequência','só data','só opinião'],0,'Isso mostra relação entre fatos.'),
      text('Escreva uma forma de resistência de pessoas escravizadas.',['quilombo','fuga','revolta','cultura'])
    ]
  },
  ciencias: {
    name:'Ciências',dates:['28/10','25/11'],
    intro:'A revisão explica o funcionamento básico da respiração e as camadas de defesa que atuam como um firewall no organismo.',
    av1:{title:'AV1 — O que ocorre quando respiramos',video:'sistema respiratório trocas gasosas videoaula 7 ano',lines:[
      'Respirar permite que o organismo obtenha oxigênio e elimine gás carbônico.',
      'O ar entra principalmente pelo nariz, onde pode ser filtrado, aquecido e umedecido.',
      'Depois ele passa por faringe, laringe, traqueia, brônquios e bronquíolos.',
      'Os bronquíolos terminam em alvéolos, pequenas bolsas presentes nos pulmões.',
      'Nos alvéolos acontece a troca gasosa entre o ar e o sangue.',
      'O oxigênio passa para o sangue e é levado às células do corpo.',
      'O gás carbônico produzido pelas células é levado ao pulmão e eliminado na expiração.',
      'O diafragma se contrai na inspiração e ajuda a aumentar o espaço da caixa torácica.',
      'A respiração não é só entrada de ar: inclui transporte de gases e trocas nas células.',
      'Em diagramas, siga sempre o caminho do ar para não inverter as estruturas.'
    ]},
    av2:{title:'AV2 — Firewall do organismo humano',video:'sistema imunológico defesa do organismo videoaula',lines:[
      'O organismo enfrenta microrganismos como vírus, bactérias, fungos e protozoários.',
      'Pele e mucosas são barreiras físicas que dificultam a entrada de agentes invasores.',
      'Lágrimas, saliva e secreções também participam da proteção.',
      'A defesa inata é rápida e geral: ela age antes de reconhecer um invasor específico.',
      'Inflamação e febre podem fazer parte da resposta de defesa do corpo.',
      'A defesa adaptativa é mais específica e pode formar memória imunológica.',
      'Anticorpos ajudam a reconhecer certos agentes e participam de respostas específicas.',
      'Vacinas apresentam estímulos seguros para treinar a memória do sistema imunológico.',
      'Antibióticos agem contra bactérias e não devem ser usados para tratar infecções virais.',
      'Prevenção inclui higiene, vacinação, alimentação, sono e orientação profissional.'
    ]},
    questions:[
      q('A troca gasosa ocorre nos:', ['alvéolos','brônquios','olhos'],0,'Os alvéolos ficam nos pulmões.'),
      q('O oxigênio passa:', ['do alvéolo para o sangue','do sangue para o ar','do estômago para o pulmão'],0,'É parte da troca gasosa.'),
      q('O diafragma ajuda principalmente na:', ['respiração','digestão','visão'],0,'Ele participa dos movimentos respiratórios.'),
      q('A pele funciona como:', ['barreira de defesa','vírus','anticorpo'],0,'Ela dificulta a entrada de microrganismos.'),
      q('Vacinas:', ['treinam a defesa','substituem pulmões','são antibióticos'],0,'Elas ajudam a formar memória imunológica.'),
      q('Antibióticos combatem principalmente:', ['bactérias','todos os vírus','oxigênio'],0,'Não servem para vírus.'),
      q('A defesa inata é:', ['rápida e geral','sempre lenta','uma vacina'],0,'Ela é uma primeira resposta.'),
      q('O gás carbônico é eliminado na:', ['expiração','inspiração','digestão'],0,'Ele sai com o ar expirado.'),
      q('Mucosas ajudam a:', ['proteger entradas do corpo','produzir ossos','mover pernas'],0,'Elas são barreiras.'),
      text('Escreva o nome do local onde ocorre a troca gasosa.',['alveolo','alvéolo','alveolos','alvéolos'])
    ]
  },
  geografia: {
    name:'Geografia',dates:['29/10','26/11'],
    intro:'A revisão explica primeiro o mapa e a vida no Sudeste; depois mostra, com exemplos simples, como exportação, importação e globalização conectam o Brasil ao mundo.',
    av1:{title:'AV1 — Região Sudeste',video:'região sudeste geografia videoaula 7 ano',lines:[
      'A Região Sudeste tem quatro estados: São Paulo, Rio de Janeiro, Minas Gerais e Espírito Santo.',
      'Ela concentra grande parte da população e das maiores cidades brasileiras.',
      'São Paulo é um importante centro industrial, financeiro e de serviços do país.',
      'Minas Gerais se destaca por mineração, agricultura, indústria e grande extensão territorial.',
      'Rio de Janeiro tem turismo, petróleo, indústria, serviços e importante população urbana.',
      'Espírito Santo se relaciona a atividades portuárias, siderurgia, agricultura e exploração de petróleo.',
      'Urbanização é o crescimento das cidades e da população urbana.',
      'Industrialização atrai empregos e infraestrutura, mas também pode aumentar desigualdades e poluição.',
      'Redes de transporte ligam cidades, portos, aeroportos e áreas produtoras.',
      'Para entender mapas, localize os estados, capitais, limites e principais atividades econômicas.'
    ]},
    av2:{title:'AV2 — Economia e relações internacionais do Brasil',video:'economia relações internacionais do Brasil videoaula',lines:[
      'Exportar significa vender produtos ou serviços brasileiros para outros países.',
      'Importar significa comprar produtos ou serviços de outros países.',
      'Exemplo simples: café vendido ao exterior é exportação; um eletrônico comprado de fora é importação.',
      'O Brasil participa da economia mundial por comércio, investimentos, turismo e acordos internacionais.',
      'Commodities são produtos básicos vendidos em grande escala, como soja, minério de ferro e petróleo.',
      'A venda de commodities gera recursos, mas pode deixar a economia dependente de preços internacionais.',
      'Portos, estradas e ferrovias ajudam a levar produtos brasileiros ao mercado externo.',
      'A globalização aumenta conexões, mas seus benefícios e problemas não são distribuídos igualmente.',
      'Relações internacionais também envolvem diplomacia, acordos ambientais e organismos como o Mercosul.',
      'Em questões, diferencie conceito, exemplo e consequência: exportação, produto e impacto.'
    ]},
    questions:[
      q('Qual estado não fica no Sudeste?', ['Bahia','Minas Gerais','Espírito Santo'],0,'A Bahia está no Nordeste.'),
      q('A Região Sudeste possui:', ['quatro estados','dois estados','dez estados'],0,'São SP, RJ, MG e ES.'),
      q('Urbanização é:', ['crescimento das cidades','fim das estradas','somente agricultura'],0,'É aumento e expansão da vida urbana.'),
      q('Exportar é:', ['vender ao exterior','comprar do exterior','vender dentro da cidade'],0,'Exportação é venda para outros países.'),
      q('Importar é:', ['comprar do exterior','vender café','fechar portos'],0,'Importação é compra externa.'),
      q('Soja e minério podem ser:', ['commodities','capitais estaduais','tratados'],0,'São produtos básicos de grande escala.'),
      q('Um porto ajuda a:', ['enviar e receber mercadorias','criar florestas','mudar capitais'],0,'Ele conecta transporte marítimo e comércio.'),
      q('Globalização aumenta:', ['conexões entre países','o número de estados','a distância entre cidades'],0,'Ela amplia fluxos de pessoas, bens e informações.'),
      q('Uma consequência possível da industrialização é:', ['poluição e empregos','fim de cidades','fim do comércio'],0,'Ela pode criar oportunidades e impactos ambientais.'),
      text('Escreva um exemplo de produto que o Brasil pode exportar.',['soja','cafe','café','minerio','minério','petroleo','petróleo'])
    ]
  },
  ingles: {
    name:'Inglês',dates:['09 a 13/11','26/11'],
    intro:'Você vai praticar as expressões de esportes e as estruturas gramaticais da AV2 em frases curtas e claras.',
    av1:{title:'AV1 — Exciting Sports',video:'exciting sports i can play do go videoaula',lines:[
      'Use I can para dizer o que você consegue fazer: I can swim.',
      'Use play com jogos e esportes em equipe: play soccer, play volleyball.',
      'Use do com artes marciais e algumas atividades: do karate, do yoga.',
      'Use go + atividade com -ing: go swimming, go skating.',
      'Evite misturar os verbos: não escreva “play swimming” para essa estrutura.',
      'No trabalho, apresente o nome do esporte em inglês e use frases simples.',
      'Inclua equipamentos: ball, helmet, shoes, racket ou os que combinarem com o esporte.',
      'Explique regras básicas com frases curtas e palavras conhecidas.',
      'Use imagens ou desenhos que realmente representem o esporte escolhido.',
      'Revise ortografia, maiúscula no início de frase e ponto final.'
    ]},
    av2:{title:'AV2 — Estruturas gramaticais',video:'present perfect must have to dont have to must not videoaula',lines:[
      'Present Perfect é formado por have/has + particípio: I have finished; she has finished.',
      'Use have com I, you, we e they; use has com he, she e it.',
      'Question word + to infinitive aparece em expressões como what to do e where to go.',
      'Look like pergunta ou descreve aparência: What does she look like?',
      'Must e have to indicam obrigação: You must wear a helmet.',
      'Do not have to significa que algo não é necessário, mas ainda pode ser feito.',
      'Must not significa proibição: You must not smoke here.',
      'To + infinitive pode mostrar finalidade: I study to learn.',
      'Observe a diferença entre “não precisa” e “não pode”; ela é muito cobrada.',
      'Faça frases curtas e traduza para conferir se o sentido está correto.'
    ]},
    questions:[
      q('Complete: I can ___ soccer.', ['play','do','go'],0,'Play é usado com soccer.'),
      q('Complete: I can ___ karate.', ['do','play','go'],0,'Do é usado com karate.'),
      q('Complete: I can go ___.', ['swimming','soccer','helmet'],0,'Go vem com atividade em -ing.'),
      q('Present Perfect usa:', ['have/has + particípio','did + infinitivo','am + verbo'],0,'Essa é a estrutura básica.'),
      q('She ___ finished.', ['has','have','do'],0,'She usa has.'),
      q('Must not significa:', ['proibição','ausência de necessidade','passado'],0,'É diferente de do not have to.'),
      q('Do not have to significa:', ['não é necessário','é proibido','é obrigatório'],0,'A ação não é exigida.'),
      q('To learn em “I study to learn” mostra:', ['finalidade','proibição','aparência'],0,'Mostra o objetivo de estudar.'),
      q('Look like se relaciona a:', ['aparência','tempo','comida'],0,'Pergunta como alguém se parece.'),
      text('Escreva em inglês uma frase com “I can”.',['i can'])
    ]
  },
  matematica: {
    name:'Matemática',dates:['30/10','27/11'],
    intro:'A plataforma mostra a ideia antes da conta: localize pontos, visualize transformações, use fórmulas de porcentagem e interprete dados de situações reais.',
    av1:{title:'AV1 — Geometria',video:'plano cartesiano polígonos simetria videoaula 7 ano',lines:[
      'O plano cartesiano tem eixo horizontal x e eixo vertical y.',
      'Um ponto é escrito como par ordenado (x,y); leia x primeiro e y depois.',
      'Exemplo: (3,5) significa três unidades à direita e cinco unidades para cima.',
      'Polígono é figura plana fechada formada por segmentos de reta.',
      'Triângulo tem três lados; quadrilátero tem quatro; pentágono tem cinco.',
      'Translação desloca a figura sem girar nem inverter sua forma.',
      'Rotação gira a figura em torno de um ponto.',
      'Reflexão espelha a figura em relação a uma reta, chamada eixo de simetria.',
      'Simetria mantém correspondência: as partes ficam equilibradas em relação ao eixo ou centro.',
      'Em questão com desenho, marque primeiro os vértices e depois compare as posições.'
    ]},
    av2:{title:'AV2 — Probabilidade e Estatística',video:'porcentagem média amplitude probabilidade gráfico de setores videoaula',lines:[
      'Porcentagem é uma parte de cada 100: 25% significa 25 em 100.',
      'Para calcular p% de um valor, transforme p em decimal ou use p/100.',
      'Exemplo: 10% de 80 = 0,10 × 80 = 8.',
      'Acréscimo de 10% em 80 resulta em 88; decréscimo de 10% resulta em 72.',
      'Média é soma dos valores dividida pela quantidade de valores.',
      'Exemplo: média de 4, 6 e 8 = 18 ÷ 3 = 6.',
      'Amplitude é maior valor menos menor valor; em 4, 6 e 8, amplitude = 8 − 4 = 4.',
      'Probabilidade compara casos favoráveis e possíveis: em um dado, par = 3/6 = 1/2.',
      'Frequência é o número de vezes que um resultado apareceu em uma pesquisa ou experimento.',
      'Em pictogramas, confira a legenda; em gráfico de setores, compare cada fatia com o total.'
    ]},
    questions:[
      q('No ponto (3,5), o primeiro número é:', ['x','y','a média'],0,'Em (x,y), x vem primeiro.'),
      q('Um polígono de quatro lados é:', ['quadrilátero','triângulo','círculo'],0,'Quadriláteros têm quatro lados.'),
      q('Espelhar uma figura é:', ['reflexão','rotação','média'],0,'A reflexão usa um eixo de simetria.'),
      q('10% de 80 é:', ['8','18','80'],0,'0,10 × 80 = 8.'),
      q('A média de 4,6,8 é:', ['6','8','18'],0,'18 dividido por 3 é 6.'),
      q('A amplitude de 4,6,8 é:', ['4','6','8'],0,'8 − 4 = 4.'),
      q('Em um dado, a chance de sair par é:', ['3/6','1/6','6/6'],0,'2,4 e 6 são três resultados favoráveis.'),
      q('Pictograma deve ser lido com atenção à:', ['legenda','cor da parede','assinatura'],0,'A legenda informa o valor de cada símbolo.'),
      q('Acréscimo de 10% em 80 é:', ['88','72','90'],0,'80 + 8 = 88.'),
      text('Escreva apenas o resultado de 25% de 200.',['50'])
    ]
  }
};

function q(question, choices, correct, explanation) { return {type:'choice',question,choices,correct,explanation}; }
function text(question, keys) { return {type:'text',question,keys}; }
const requestedSubject = new URLSearchParams(location.search).get('materia') || 'portugues';
const id = Object.hasOwn(subjects, requestedSubject) ? requestedSubject : 'portugues';
const s = subjects[id];
const $ = x => document.querySelector(x);
document.title = 'Estuda+ | ' + s.name;
$('#title').textContent = s.name;
$('#intro').textContent = s.intro;
$('#av1date').textContent = s.dates[0];
$('#av2date').textContent = s.dates[1];
const videoUrl = q => 'https://www.youtube.com/results?search_query=' + encodeURIComponent(q);
// The content model has two assessment objects (av1/av2), not a lessons array.
$('#lessons').innerHTML = ['av1', 'av2'].map(term => {
  const lesson = s[term];
  return '<article class="lesson '+term+'" id="'+term+'"><div class="eyebrow">Revisão · '+term.toUpperCase()+'</div><h2>'+lesson.title+'</h2><ol>'+lesson.lines.map(line=>'<li>'+line+'</li>').join('')+'</ol><a class="video" target="_blank" rel="noopener" href="'+videoUrl(lesson.video)+'">▶ Buscar videoaula complementar</a></article>';
}).join('');

const storageKey = 'estuda-atividades-v2-' + id;
let records = {};
let canSave = true;
try {
  const stored = JSON.parse(localStorage.getItem(storageKey) || '{}');
  if (stored && typeof stored === 'object' && !Array.isArray(stored)) records = stored;
} catch { canSave = false; }
function normalize(value) { return value.toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim(); }
function evaluateWritten(item, value) {
  const answer = normalize(value);
  if (id === 'matematica') return /^(50|50[.,]0+)$/.test(answer);
  if (id === 'ingles') return /^i can\s+[a-z]+(?:\s+[a-z]+)*[.!?]?$/.test(answer);
  return item.keys.some(key => new RegExp('\\b'+normalize(key)+'(?:s)?\\b').test(answer));
}
function saveProgress() {
  try { localStorage.setItem(storageKey, JSON.stringify(records)); }
  catch { canSave = false; }
}
function renderActivities() {
  $('#quiz').innerHTML = s.questions.map((item,i) => item.type==='choice'
    ? '<article class="quiz-card" id="question'+i+'"><p>'+(i+1)+'. '+item.question+'</p><div class="answers">'+item.choices.map((choice,n)=>'<button type="button" data-q="'+i+'" data-n="'+n+'">'+choice+'</button>').join('')+'</div><div class="result" id="result'+i+'" role="status"></div></article>'
    : '<article class="quiz-card" id="question'+i+'"><p><label for="text'+i+'">'+(i+1)+'. '+item.question+'</label></p><div class="answers"><input id="text'+i+'" placeholder="Escreva sua resposta" autocomplete="off"><button type="button" data-text="'+i+'">Corrigir resposta</button></div><div class="result" id="result'+i+'" role="status"></div></article>'
  ).join('');
  document.querySelectorAll('.answers button[data-q]').forEach(button => button.onclick = () => {
    const i=+button.dataset.q;
    if (records[i]) return;
    records[i]={choice:+button.dataset.n};
    showAnswer(i); saveProgress(); finish();
  });
  document.querySelectorAll('.answers button[data-text]').forEach(button => {
    const i=+button.dataset.text;
    const submit = () => {
      const value=$('#text'+i).value.trim();
      if (!value) { $('#result'+i).textContent='Escreva uma resposta antes de corrigir.'; return; }
      records[i]={value};
      showAnswer(i); saveProgress(); finish();
    };
    button.onclick=submit;
    $('#text'+i).addEventListener('keydown', event => { if (event.key==='Enter') submit(); });
  });
  s.questions.forEach((item,i) => {
    const record=records[i];
    if (!record) return;
    if (item.type==='choice' && Number.isInteger(record.choice) && item.choices[record.choice]!==undefined) showAnswer(i);
    else if (item.type==='text' && typeof record.value==='string' && record.value.trim()) {
      $('#text'+i).value=record.value; showAnswer(i);
    } else delete records[i];
  });
  finish();
}
function isCorrect(i) {
  const item=s.questions[i], record=records[i];
  return record && (item.type==='choice' ? record.choice===item.correct : evaluateWritten(item,record.value));
}
function showAnswer(i) {
  const item=s.questions[i], record=records[i], correct=isCorrect(i);
  if (item.type==='choice') {
    document.querySelectorAll('#question'+i+' .answers button').forEach(button => {
      const n=+button.dataset.n;
      button.disabled=true;
      button.classList.toggle('right', n===item.correct);
      button.classList.toggle('wrong', n===record.choice && !correct);
    });
    $('#result'+i).textContent=(correct?'✓ Correto. ':'✗ Reveja: ')+item.explanation;
  } else {
    const example=item.keys[0];
    $('#result'+i).textContent=correct
      ? (id==='ingles' ? '✓ Estrutura “I can + verbo” identificada. Confira também se a frase faz sentido em inglês.' : '✓ Resposta aceita.')
      : '✗ Revise sua resposta e tente novamente. Resposta esperada ou exemplo: '+example+'.';
  }
}
function finish() {
  const answered=s.questions.filter((item,i)=>records[i]).length;
  const hits=s.questions.filter((item,i)=>isCorrect(i)).length;
  $('#finish').textContent=(answered===s.questions.length ? 'Resultado: '+hits+' de '+s.questions.length+' acertos.' : answered+' de '+s.questions.length+' questões respondidas · '+hits+' acertos.')+' '+(canSave?'Seu progresso fica salvo neste navegador.':'O salvamento local está indisponível; o resultado permanece nesta sessão.');
}
$('#retry').onclick=()=>{ records={}; saveProgress(); renderActivities(); };
renderActivities();
