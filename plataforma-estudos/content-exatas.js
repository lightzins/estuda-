/* Estuda+ | Conteúdo de Ciências e Matemática para o 7º ano. */
(() => {
  'use strict';

  globalThis.ESTUDA_CONTENT = {
    ...(globalThis.ESTUDA_CONTENT || {}),
    ciencias: {
      name: 'Ciências',
      intro: 'Entenda como o corpo troca gases e se defende. Relacione estruturas, processos e evidências em situações do cotidiano.',
      assessments: {
        av1: {
          title: 'AV1 · Sistema respiratório',
          overview: 'Acompanhe o caminho do ar, explique os movimentos respiratórios e conecte a hematose ao transporte de gases e à respiração celular.',
          videoQuery: 'sistema respiratório inspiração expiração hematose respiração celular 7 ano',
          topics: [
            {
              title: '1. O caminho do ar e a proteção das vias respiratórias',
              paragraphs: [
                'O ar que entra pelo nariz percorre as cavidades nasais, a faringe, a laringe, a traqueia, os brônquios e os bronquíolos até alcançar os alvéolos pulmonares. A traqueia se divide em dois brônquios principais, um para cada pulmão. Dentro deles, a ramificação continua, distribuindo o ar por muitas regiões. Os alvéolos são pequenas estruturas onde ocorre a troca de gases com o sangue.',
                'Nas cavidades nasais, o ar é aquecido e umidificado. Pelos e muco ajudam a reter partículas; cílios presentes em partes das vias respiratórias movimentam o muco em direção à faringe. Essas estruturas diminuem a chegada de impurezas às regiões delicadas dos pulmões. A faringe também participa do sistema digestório, mas o ar segue para a laringe e a traqueia, enquanto o alimento deve seguir para o esôfago.'
              ],
              example: 'Para ordenar cartões, comece pela entrada: cavidades nasais → faringe → laringe → traqueia → brônquios → bronquíolos → alvéolos. A troca com o sangue acontece no último elemento.',
              pitfall: 'Confundir brônquios com bronquíolos: os brônquios são ramificações maiores, que depois se subdividem em bronquíolos.'
            },
            {
              title: '2. Inspiração e expiração: volume e pressão',
              paragraphs: [
                'Na inspiração, o diafragma se contrai e desce, enquanto a ação de músculos entre as costelas ajuda a ampliar a caixa torácica. O volume disponível para os pulmões aumenta e a pressão do ar dentro deles fica momentaneamente menor que a pressão atmosférica. O ar, então, entra pelas vias respiratórias. Os pulmões acompanham os movimentos do tórax; eles não são músculos que puxam o ar por contração própria.',
                'Na expiração tranquila, o diafragma relaxa e sobe, e o retorno elástico dos pulmões e do tórax reduz o volume. A pressão interna fica momentaneamente maior que a externa e o ar sai. Em uma expiração forçada, como ao soprar com força, outros músculos também participam. A regra útil é relacionar as etapas: aumento de volume favorece entrada; diminuição de volume favorece saída, devido às diferenças de pressão.'
              ],
              example: 'Se um desenho mostra diafragma contraído e mais baixo, identifique inspiração: volume torácico aumenta → pressão interna diminui em relação à externa → ar entra.',
              pitfall: 'Achar que o diafragma sobe ao inspirar. Na inspiração ele se contrai e desce; na expiração tranquila ele relaxa e sobe.'
            },
            {
              title: '3. Hematose: a troca entre alvéolos e sangue',
              paragraphs: [
                'Os alvéolos são envolvidos por muitos capilares sanguíneos. Suas paredes e as dos capilares são muito finas, o que reduz a distância que os gases precisam atravessar. A grande quantidade de alvéolos oferece uma ampla superfície de contato. Nesse local ocorre a hematose pulmonar: o oxigênio passa do ar alveolar para o sangue, e o gás carbônico passa do sangue para o interior dos alvéolos.',
                'A passagem ocorre por difusão: cada gás tende a se deslocar do local onde sua pressão parcial é maior para onde ela é menor. Para esta revisão, pense em uma diferença que favorece o movimento de cada gás. A ventilação renova o ar alveolar, enquanto a circulação traz sangue e o leva adiante. Ventilação, troca gasosa e circulação se complementam, mas representam processos diferentes dentro do funcionamento do organismo.'
              ],
              example: 'Em um capilar que chega aos alvéolos, o sangue traz CO₂ dos tecidos. Na hematose, CO₂ vai para os alvéolos e O₂ entra no sangue; o CO₂ poderá sair na expiração.',
              pitfall: 'Inverter as setas: na hematose pulmonar, o oxigênio vai para o sangue, e o gás carbônico vai para os alvéolos.'
            },
            {
              title: '4. Como os gases chegam às células',
              paragraphs: [
                'Depois da hematose, o sangue leva oxigênio dos pulmões ao coração e, em seguida, aos tecidos. Grande parte do oxigênio é transportada ligada à hemoglobina, proteína presente nas hemácias. Nos tecidos, o oxigênio sai do sangue e chega às células. O coração impulsiona o sangue, e os vasos formam os caminhos da circulação. Por isso, o sistema respiratório depende do sistema circulatório para atender células distantes dos pulmões.',
                'O gás carbônico produzido nas células faz o percurso de volta: passa para o sangue, é levado aos pulmões e sai para os alvéolos. Uma parte viaja ligada a proteínas ou dissolvida, mas a maior parte é transportada no sangue na forma de bicarbonato. Não é necessário decorar reações químicas nesta etapa: compreenda que o sangue transporta gases por diferentes mecanismos e conecta a atividade das células ao ambiente externo.'
              ],
              example: 'Siga uma molécula de oxigênio: ar → alvéolo → sangue → coração → tecido → célula. Para o CO₂ produzido no tecido, o sentido geral se inverte até a saída na expiração.',
              pitfall: 'Imaginar que o ar inteiro circula pelas artérias. Os gases atravessam superfícies e são transportados pelo sangue; não há bolhas de ar percorrendo normalmente os vasos.'
            },
            {
              title: '5. Ventilação, hematose e respiração celular',
              paragraphs: [
                'Ventilação pulmonar é o movimento de entrada e saída de ar dos pulmões. Hematose é a troca gasosa entre os alvéolos e o sangue. Respiração celular aeróbia é um conjunto de processos das células que utiliza nutrientes e oxigênio para disponibilizar energia, formando também gás carbônico e água. Uma representação simplificada é: glicose + oxigênio → gás carbônico + água + energia disponibilizada. Esses nomes descrevem etapas relacionadas, não três maneiras de dizer exatamente a mesma coisa.',
                'Ao correr, muitos músculos precisam disponibilizar mais energia em menos tempo. A frequência e a profundidade da ventilação, assim como a circulação, costumam aumentar para acompanhar a demanda de oxigênio e a remoção de gás carbônico. É possível contar ciclos respiratórios durante um minuto para comparar duas situações. Um ciclo corresponde a uma inspiração e uma expiração. Essa contagem, em uma atividade escolar, descreve a observação e não serve sozinha para diagnosticar doenças.'
              ],
              example: 'Em uma observação, foram contados 18 ciclos em 1 minuto. A frequência foi 18 ciclos/min, e não 36: inspiração e expiração pertencem ao mesmo ciclo.',
              pitfall: 'Dizer que respiração celular ocorre nos pulmões. Ela ocorre nas células; os pulmões contribuem com a entrada de O₂ e a eliminação de CO₂.'
            }
          ],
          questions: [
            {
              type: 'choice',
              prompt: 'Qual sequência acompanha corretamente o ar depois das cavidades nasais até o local da hematose?',
              choices: ['Laringe → faringe → alvéolos → traqueia → brônquios.', 'Faringe → laringe → traqueia → brônquios → bronquíolos → alvéolos.', 'Traqueia → esôfago → brônquios → alvéolos.', 'Faringe → bronquíolos → laringe → brônquios → alvéolos.'],
              correct: 1,
              explanation: '1. O ar passa da região nasal para a faringe e a laringe. 2. Segue pela traqueia, que se divide em brônquios. 3. Os brônquios se ramificam em bronquíolos que conduzem aos alvéolos.',
              topic: 'Caminho do ar'
            },
            {
              type: 'choice',
              prompt: 'Uma turma compara a entrada do ar pelo nariz com um tubo sem revestimento. Que função das cavidades nasais deve entrar na explicação?',
              choices: ['Produzir a maior parte do gás carbônico do corpo.', 'Realizar a respiração celular de todos os tecidos.', 'Aquecer, umidificar e ajudar a filtrar o ar inspirado.', 'Bombear o sangue que vai aos pulmões.'],
              correct: 2,
              explanation: '1. O revestimento nasal aquece e umidifica o ar. 2. Pelos e muco ajudam a reter partículas. 3. Isso prepara o ar antes de alcançar regiões mais delicadas; a troca de gases acontece principalmente nos alvéolos.',
              topic: 'Caminho do ar'
            },
            {
              type: 'choice',
              prompt: 'Durante uma inspiração tranquila, qual mudança acontece com o diafragma e o volume torácico?',
              choices: ['O diafragma se contrai e desce; o volume torácico aumenta.', 'O diafragma relaxa e sobe; o volume torácico aumenta.', 'O diafragma se contrai e sobe; o volume torácico diminui.', 'O diafragma relaxa e desce; o volume torácico não muda.'],
              correct: 0,
              explanation: '1. A contração faz o diafragma descer. 2. Isso contribui para ampliar o volume torácico. 3. A pressão interna diminui em relação à externa, favorecendo a entrada de ar.',
              topic: 'Inspiração e expiração'
            },
            {
              type: 'choice',
              prompt: 'Na expiração tranquila, o ar sai principalmente porque:',
              choices: ['O tórax aumenta de volume e a pressão interna cai.', 'O oxigênio empurra o diafragma para baixo.', 'Os alvéolos se fecham totalmente a cada ciclo.', 'O volume pulmonar diminui e a pressão interna supera momentaneamente a externa.'],
              correct: 3,
              explanation: '1. O diafragma relaxa e sobe. 2. O retorno elástico reduz o volume dos pulmões. 3. A pressão interna fica momentaneamente maior que a atmosférica, e o ar sai.',
              topic: 'Inspiração e expiração'
            },
            {
              type: 'choice',
              prompt: 'Onde ocorre principalmente a hematose pulmonar?',
              choices: ['Entre o esôfago e o estômago.', 'Entre o ar dos alvéolos e o sangue dos capilares.', 'Entre os pelos do nariz e o ar externo.', 'Dentro dos ossos que formam as costelas.'],
              correct: 1,
              explanation: '1. Os alvéolos recebem ar e são cercados por capilares. 2. Suas paredes finas permitem a passagem de gases. 3. A troca entre esse ar e o sangue é a hematose pulmonar.',
              topic: 'Hematose'
            },
            {
              type: 'choice',
              prompt: 'Na hematose, quais são os sentidos corretos das trocas?',
              choices: ['O₂: sangue → alvéolos; CO₂: alvéolos → sangue.', 'O₂ e CO₂: apenas alvéolos → sangue.', 'O₂: alvéolos → sangue; CO₂: sangue → alvéolos.', 'O₂ e CO₂: apenas sangue → alvéolos.'],
              correct: 2,
              explanation: '1. O sangue que chega aos pulmões traz CO₂ dos tecidos. 2. O CO₂ atravessa para o interior dos alvéolos. 3. Ao mesmo tempo, O₂ do ar alveolar entra no sangue e poderá ser distribuído aos tecidos.',
              topic: 'Hematose'
            },
            {
              type: 'choice',
              prompt: 'Que combinação de características favorece as trocas nos alvéolos?',
              choices: ['Paredes finas, grande superfície total e muitos capilares.', 'Paredes grossas e ausência de vasos sanguíneos.', 'Pouca superfície de contato e paredes impermeáveis aos gases.', 'Presença de dentes e de enzimas digestivas.'],
              correct: 0,
              explanation: '1. Paredes finas reduzem a distância para a difusão. 2. Muitos alvéolos ampliam a superfície total. 3. A rede de capilares aproxima o sangue dessa superfície.',
              topic: 'Hematose'
            },
            {
              type: 'choice',
              prompt: 'Uma molécula de O₂ atravessa a parede alveolar e entra no sangue. Qual proteína transporta grande parte desse oxigênio?',
              choices: ['Queratina dos cabelos.', 'Amido dos alimentos.', 'Muco da traqueia.', 'Hemoglobina das hemácias.'],
              correct: 3,
              explanation: '1. As hemácias contêm hemoglobina. 2. Essa proteína se liga ao oxigênio. 3. A circulação leva o sangue aos tecidos, onde o oxigênio pode ser liberado.',
              topic: 'Transporte de gases'
            },
            {
              type: 'choice',
              prompt: 'Qual frase distingue corretamente ventilação de respiração celular aeróbia?',
              choices: ['Ventilação produz energia em todas as células; respiração celular apenas move o tórax.', 'Ventilação move ar; respiração celular usa nutrientes e O₂ para disponibilizar energia.', 'As duas ocorrem somente nos alvéolos e são idênticas.', 'Respiração celular é a entrada de ar pela boca, e ventilação é a saída pelo nariz.'],
              correct: 1,
              explanation: '1. Ventilar significa movimentar ar para dentro e para fora dos pulmões. 2. Nas células, a respiração aeróbia utiliza nutrientes e O₂. 3. Ela disponibiliza energia e forma CO₂ e água.',
              topic: 'Ventilação e respiração celular'
            },
            {
              type: 'choice',
              prompt: 'Após uma corrida, os músculos aumentam a demanda de energia. Que resposta do organismo está relacionada a essa demanda?',
              choices: ['Interromper o fluxo de sangue aos músculos.', 'Parar completamente a produção de CO₂ nas células.', 'Aumentar a ventilação e a circulação para acompanhar as trocas e o transporte.', 'Transformar os bronquíolos em vasos sanguíneos.'],
              correct: 2,
              explanation: '1. Músculos em atividade utilizam mais energia em menos tempo. 2. A respiração celular aeróbia demanda O₂ e produz CO₂. 3. Ventilação e circulação costumam aumentar para acompanhar essas necessidades.',
              topic: 'Integração dos sistemas'
            },
            {
              type: 'choice',
              prompt: 'Em uma contagem escolar, Júlia registrou 12 inspirações e as 12 expirações correspondentes em um minuto. Quantos ciclos respiratórios ela observou?',
              choices: ['12 ciclos.', '24 ciclos.', '6 ciclos.', '144 ciclos.'],
              correct: 0,
              explanation: '1. Um ciclo reúne uma inspiração e uma expiração. 2. As 12 inspirações têm 12 expirações correspondentes. 3. Logo, são 12 pares, ou 12 ciclos no minuto; não se somam as etapas como ciclos separados.',
              topic: 'Frequência respiratória'
            },
            {
              type: 'choice',
              prompt: 'Uma célula muscular produz CO₂. Qual percurso resume o caminho desse gás até o ambiente?',
              choices: ['Célula → traqueia → sangue → alimento.', 'Célula → alvéolos diretamente, sem transporte.', 'Célula → cavidades nasais → sangue → pulmões.', 'Célula → sangue → alvéolos → vias respiratórias → ambiente.'],
              correct: 3,
              explanation: '1. O CO₂ passa do tecido para o sangue. 2. A circulação o leva aos pulmões. 3. Ele passa para os alvéolos e é eliminado pelo fluxo de ar na expiração.',
              topic: 'Transporte de gases'
            },
            {
              type: 'choice',
              prompt: 'Que afirmação sobre o transporte de gás carbônico está correta?',
              choices: ['Todo CO₂ viaja como bolhas de ar nas artérias.', 'Grande parte é transportada no sangue na forma de bicarbonato.', 'Somente os pelos do nariz transportam CO₂.', 'O CO₂ produzido nos tecidos nunca chega ao sangue.'],
              correct: 1,
              explanation: '1. O CO₂ dos tecidos entra no sangue. 2. Grande parte é convertida em bicarbonato para transporte. 3. Nos pulmões, o processo permite que o CO₂ seja eliminado nos alvéolos e depois na expiração.',
              topic: 'Transporte de gases'
            },
            {
              type: 'choice',
              prompt: 'Uma ilustração mostra o volume dos pulmões aumentando e a pressão interna menor que a externa. Que etapa ela representa?',
              choices: ['Expiração tranquila, pois o ar sai da menor para a maior pressão.', 'Digestão, pois o ar entra no estômago.', 'Inspiração, pois o ar entra da maior para a menor pressão.', 'Hematose, pois não existe movimento de ar.'],
              correct: 2,
              explanation: '1. Compare as pressões: a externa é maior. 2. O ar entra pelas vias respiratórias em direção à pressão menor. 3. Isso ocorre na inspiração, associada ao aumento do volume pulmonar.',
              topic: 'Inspiração e expiração'
            },
            {
              type: 'choice',
              prompt: 'Qual representação simplificada corresponde à respiração celular aeróbia?',
              choices: ['Glicose + O₂ → CO₂ + água + energia disponibilizada.', 'CO₂ + água → armazém de O₂ nos ossos.', 'Ar + muco → alimento + luz.', 'O₂ → glicose, sem participação de nutrientes.'],
              correct: 0,
              explanation: '1. A respiração aeróbia utiliza nutrientes, como a glicose, e oxigênio. 2. Forma CO₂ e água. 3. Parte da energia dos nutrientes é disponibilizada para atividades celulares.',
              topic: 'Ventilação e respiração celular'
            },
            {
              type: 'choice',
              prompt: 'Se o ar alcança os alvéolos, mas o sangue não circula adequadamente nessa região, por que a distribuição de O₂ pode ser prejudicada?',
              choices: ['Porque os alvéolos passam a produzir alimentos.', 'Porque a ventilação deixa automaticamente de existir.', 'Porque as células começam a receber ar pela pele.', 'Porque a chegada do ar precisa se combinar à troca gasosa e ao transporte pelo sangue.'],
              correct: 3,
              explanation: '1. A ventilação traz O₂ aos alvéolos. 2. A hematose transfere esse gás ao sangue. 3. A circulação precisa transportar o O₂ aos tecidos; uma etapa sozinha não completa todo o caminho.',
              topic: 'Integração dos sistemas'
            },
            {
              type: 'short',
              prompt: 'Como se chama a troca gasosa entre o ar dos alvéolos e o sangue? Responda com uma palavra.',
              answers: ['hematose', 'Hematose'],
              explanation: 'A hematose pulmonar é a troca em que O₂ passa dos alvéolos ao sangue e CO₂ faz o caminho inverso.',
              topic: 'Hematose'
            },
            {
              type: 'short',
              prompt: 'Em uma atividade, foram registrados 9 ciclos completos em 30 segundos. Mantido esse ritmo, quantos ciclos seriam registrados em 1 minuto? Digite apenas o número.',
              answers: ['18', '18,0', '18.0'],
              explanation: '1 minuto tem 60 segundos, o dobro de 30. Assim, 9 × 2 = 18 ciclos no minuto. Um ciclo já inclui inspiração e expiração.',
              topic: 'Frequência respiratória'
            },
            {
              type: 'written',
              prompt: 'Uma pessoa inspira e, algum tempo depois, uma célula da perna utiliza O₂. Explique o caminho desse oxigênio e o que acontece com o CO₂ produzido pela célula.',
              modelAnswer: 'O ar passa pelas cavidades nasais, faringe, laringe, traqueia, brônquios e bronquíolos até os alvéolos. Na hematose, o O₂ entra no sangue e é transportado principalmente pela hemoglobina, passando pela circulação até o tecido da perna. A célula usa O₂ na respiração celular aeróbia. O CO₂ produzido entra no sangue, é levado aos pulmões, passa aos alvéolos e sai na expiração.',
              rubric: ['Ordena o caminho do ar até os alvéolos sem incluir o esôfago.', 'Relaciona hematose e transporte sanguíneo de O₂ até os tecidos.', 'Descreve o retorno do CO₂ pelo sangue aos alvéolos e sua saída na expiração.'],
              explanation: 'Confira cada etapa separadamente: condução do ar, troca nos alvéolos, transporte no sangue e uso celular. Depois refaça o caminho de retorno do CO₂. Use a rubrica para comparar sua resposta ao modelo.',
              topic: 'Integração dos sistemas'
            },
            {
              type: 'written',
              prompt: 'Um colega afirmou: “Inspirar, fazer hematose e realizar respiração celular são o mesmo processo”. Corrija a frase explicando os três conceitos e descreva o movimento do diafragma na inspiração.',
              modelAnswer: 'São processos relacionados, mas diferentes. Na inspiração, o diafragma se contrai e desce, o volume torácico aumenta e o ar entra devido à diferença de pressão. A hematose é a troca de O₂ e CO₂ entre alvéolos e sangue. A respiração celular aeróbia ocorre nas células, utiliza nutrientes e O₂ para disponibilizar energia e produz CO₂ e água.',
              rubric: ['Define inspiração como entrada de ar e cita contração e descida do diafragma.', 'Define hematose como troca gasosa entre alvéolos e sangue, com os sentidos corretos dos gases.', 'Localiza a respiração celular nas células e relaciona nutrientes, O₂ e energia.'],
              explanation: 'Uma resposta completa diferencia movimento de ar, troca gasosa e transformação celular. O vínculo entre eles é funcional: a ventilação contribui com O₂ para a hematose e o transporte que atende às células.',
              topic: 'Ventilação e respiração celular'
            }
          ]
        },
        av2: {
          title: 'AV2 · Firewall do organismo',
          overview: 'Use a ideia de camadas de proteção para compreender barreiras, imunidade inata e adaptativa, memória imunológica, vacinas, soros e os conceitos de vírus e bactérias.',
          videoQuery: 'imunidade inata adaptativa barreiras vacina soro vírus bactérias 7 ano',
          topics: [
            {
              title: '1. Barreiras: a primeira camada de proteção',
              paragraphs: [
                'A comparação do organismo com um sistema protegido por firewall ajuda a imaginar várias camadas de defesa. A pele íntegra forma uma barreira física, enquanto mucosas revestem superfícies que se comunicam com o exterior. O muco pode reter partículas e microrganismos, e cílios de partes das vias respiratórias ajudam a deslocá-lo. Lágrimas, saliva e secreções também participam da proteção por mecanismos físicos e químicos. Essas defesas atuam continuamente no contato com o ambiente.',
                'Nenhuma barreira torna o corpo completamente isolado. Precisamos trocar gases, receber alimentos e interagir com o mundo. Quando um microrganismo ultrapassa uma superfície protetora, outras respostas entram em ação. Nem todo microrganismo causa doença: muitos vivem no ambiente e em nosso corpo sem provocar dano, e alguns participam de relações benéficas. A metáfora do firewall é limitada, pois organismos são sistemas biológicos complexos, e a defesa depende de células e moléculas em interação.'
              ],
              example: 'Uma partícula fica presa no muco antes de alcançar uma região profunda das vias respiratórias. Esse caso representa uma barreira da defesa inata, sem precisar de contato anterior com aquela partícula.',
              pitfall: 'Achar que todos os microrganismos são inimigos ou que a pele impede absolutamente qualquer entrada. Existem microrganismos benéficos e barreiras que podem ser ultrapassadas.'
            },
            {
              title: '2. Imunidade inata: resposta rápida e geral',
              paragraphs: [
                'A imunidade inata reúne barreiras e respostas que já estão disponíveis antes de um contato específico. Suas células reconhecem padrões comuns a diferentes agentes ou sinais de dano. Fagócitos, por exemplo, podem envolver e digerir materiais e microrganismos em um processo chamado fagocitose. Isso não significa que reconheçam todos os detalhes de um invasor como faria uma resposta adaptativa específica. A defesa inata também ajuda a sinalizar e organizar a participação de outras células.',
                'A inflamação é uma resposta a situações como lesão e presença de certos agentes. Mudanças locais nos vasos e a chegada de células de defesa podem produzir vermelhidão, calor e inchaço. Inflamação e infecção não são sinônimos: infecção envolve um agente infeccioso, enquanto uma lesão sem esse agente também pode provocar inflamação. Na revisão escolar, compare os mecanismos e seus papéis; sinais isolados não permitem concluir qual doença uma pessoa tem.'
              ],
              example: 'Um fagócito engloba uma bactéria. A sequência reconhecer um padrão → envolver o material → digeri-lo exemplifica fagocitose, um mecanismo da imunidade inata.',
              pitfall: 'Usar inflamação e infecção como palavras equivalentes. Uma inflamação pode ocorrer por uma lesão sem haver infecção.'
            },
            {
              title: '3. Imunidade adaptativa e memória',
              paragraphs: [
                'A imunidade adaptativa produz respostas dirigidas a características específicas, chamadas antígenos. Linfócitos B podem se diferenciar em células produtoras de anticorpos. Esses anticorpos reconhecem alvos específicos e podem neutralizar agentes ou facilitar sua eliminação por outros mecanismos. Linfócitos T exercem diferentes funções, como coordenar respostas e reconhecer células infectadas. Portanto, o sistema adaptativo não se resume aos anticorpos; existe cooperação entre tipos de células e entre as defesas inata e adaptativa.',
                'No primeiro contato com um antígeno, a resposta adaptativa geralmente precisa de tempo para se organizar. Depois, algumas células permanecem como células de memória. Em um novo contato com o mesmo alvo, elas podem contribuir para uma resposta mais rápida e eficaz. Essa memória é específica: lembrar um antígeno não significa estar protegido contra qualquer outro agente. Além disso, a proteção não é necessariamente absoluta ou permanente; ela varia conforme o agente e a resposta desenvolvida.'
              ],
              example: 'Em um modelo escolar, o primeiro contato com o antígeno A produz células de memória. No segundo contato com A, a resposta pode ser mais rápida. Isso não garante a mesma resposta contra um antígeno B diferente.',
              pitfall: 'Dizer que um anticorpo serve para todos os agentes. A especificidade do reconhecimento é uma característica central da imunidade adaptativa.'
            },
            {
              title: '4. Vacinas e soros: maneiras diferentes de proteção',
              paragraphs: [
                'Vacinas apresentam antígenos ou instruções para produzi-los, de modo a estimular uma resposta do próprio organismo. Dependendo da vacina, podem ser usados componentes de um agente, versões inativadas, versões atenuadas ou outras tecnologias. O objetivo é preparar a defesa e formar memória imunológica sem exigir a passagem pela doença natural. A proteção leva um tempo para se desenvolver, e algumas vacinas exigem mais de uma dose ou reforços para alcançar o resultado esperado.',
                'Soros com anticorpos específicos fornecem anticorpos já prontos e são um exemplo de imunização passiva. Esses anticorpos podem agir de modo mais imediato, mas sua proteção é temporária e não cria, por si só, a memória que resulta da produção ativa pelo próprio organismo. Vacina e soro, portanto, não são intercambiáveis. Aqui a comparação é conceitual: a escolha e o uso de produtos de saúde dependem de avaliação profissional e não podem ser decididos por uma questão escolar.'
              ],
              example: 'No quadro comparativo, escreva: vacina → organismo elabora resposta, imunização ativa e possível memória; soro → recebe anticorpos prontos, imunização passiva e efeito temporário.',
              pitfall: 'Afirmar que vacinas são anticorpos prontos ou que soros sempre criam memória imunológica. Essas características estão trocadas.'
            },
            {
              title: '5. Vírus, bactérias e o papel dos antibióticos',
              paragraphs: [
                'Bactérias são seres formados por células procarióticas, sem núcleo delimitado por membrana. Elas possuem estruturas celulares e podem se multiplicar por divisão quando encontram condições adequadas. Vírus não são células: contêm material genético envolvido por uma cápsula de proteínas e, em alguns casos, um envelope. Para se multiplicar, dependem da maquinaria de uma célula hospedeira. Tanto vírus quanto bactérias são diversos, e nem todas as bactérias causam doenças; várias participam de processos úteis.',
                'Antibióticos atuam contra bactérias por mecanismos que atingem estruturas ou processos bacterianos. Eles não atuam contra os vírus responsáveis por uma infecção viral. O uso inadequado favorece a seleção de bactérias resistentes: bactérias capazes de sobreviver podem se multiplicar e aumentar sua participação na população. Não é o corpo da pessoa que se torna resistente ao antibiótico. Para comparar conceitos, separe agente causador, modo de multiplicação e alvo da substância; o nome de um sintoma sozinho não identifica o agente.'
              ],
              example: 'Em uma população com 98 bactérias sensíveis e 2 resistentes, uma pressão seletiva pode reduzir as sensíveis e permitir que as resistentes se multipliquem. A mudança ocorre na população bacteriana.',
              pitfall: 'Concluir que antibiótico combate qualquer infecção. Vírus e bactérias têm características distintas, e antibióticos não tratam a infecção viral em si.'
            }
          ],
          questions: [
            {
              type: 'choice',
              prompt: 'Qual situação exemplifica uma barreira de defesa do organismo?',
              choices: ['O coração impulsionando sangue para os músculos.', 'O estômago enviando alimento para a traqueia.', 'O muco retendo partículas nas vias respiratórias.', 'Uma hemácia produzindo anticorpos específicos.'],
              correct: 2,
              explanation: '1. Barreiras dificultam a entrada ou a progressão de agentes. 2. O muco retém partículas. 3. Esse mecanismo faz parte da imunidade inata e pode atuar antes de uma resposta adaptativa específica.',
              topic: 'Barreiras'
            },
            {
              type: 'choice',
              prompt: 'A pele íntegra contribui com a defesa porque:',
              choices: ['Forma uma barreira física que dificulta a entrada de muitos agentes.', 'Produz anticorpos exclusivos para cada vírus antes do nascimento.', 'Impede qualquer interação com o ambiente, sem exceções.', 'Substitui todas as células de defesa do sangue.'],
              correct: 0,
              explanation: '1. A pele separa tecidos internos do ambiente. 2. Quando íntegra, dificulta a passagem de muitos agentes. 3. Essa barreira se soma a outras defesas; ela não garante isolamento absoluto.',
              topic: 'Barreiras'
            },
            {
              type: 'choice',
              prompt: 'Um fagócito envolve e digere um microrganismo. Como se chama esse processo?',
              choices: ['Ventilação.', 'Fotossíntese.', 'Hematose.', 'Fagocitose.'],
              correct: 3,
              explanation: '1. A célula envolve o material com sua membrana. 2. O material é internalizado. 3. Sua digestão ajuda a eliminar o agente: essa sequência é a fagocitose.',
              topic: 'Imunidade inata'
            },
            {
              type: 'choice',
              prompt: 'Qual descrição corresponde à imunidade inata?',
              choices: ['Depende sempre de uma vacina para começar a existir.', 'Inclui respostas rápidas que reconhecem padrões comuns a diferentes agentes.', 'Reconhece apenas um antígeno e sempre produz memória específica.', 'É formada exclusivamente pelos anticorpos recebidos em soros.'],
              correct: 1,
              explanation: '1. As defesas inatas estão disponíveis antes de um contato específico. 2. Reconhecem padrões e sinais de dano. 3. Barreiras e fagócitos são exemplos; anticorpos e memória específica pertencem à discussão adaptativa.',
              topic: 'Imunidade inata'
            },
            {
              type: 'choice',
              prompt: 'Uma lesão mecânica sem microrganismo causador produz inflamação local. Que conclusão é correta?',
              choices: ['Toda inflamação é obrigatoriamente uma infecção bacteriana.', 'A ausência de infecção impede qualquer resposta de defesa.', 'Inflamação e infecção são conceitos diferentes; uma lesão também pode inflamar.', 'Inflamação significa que o corpo produziu uma vacina.'],
              correct: 2,
              explanation: '1. Infecção envolve a presença e a atividade de um agente infeccioso. 2. Inflamação é uma resposta a dano ou a certos agentes. 3. Uma lesão sem infecção pode, portanto, provocar inflamação.',
              topic: 'Imunidade inata'
            },
            {
              type: 'choice',
              prompt: 'O que caracteriza a imunidade adaptativa?',
              choices: ['Reconhecimento específico e possibilidade de formação de memória.', 'Ausência completa de participação de linfócitos.', 'Atuação somente como uma parede externa de pele.', 'Resposta idêntica contra qualquer substância, sem reconhecimento específico.'],
              correct: 0,
              explanation: '1. Linfócitos reconhecem antígenos de modo específico. 2. A resposta pode produzir células de memória. 3. Em um novo contato com o mesmo alvo, a defesa pode agir com maior rapidez e eficácia.',
              topic: 'Imunidade adaptativa'
            },
            {
              type: 'choice',
              prompt: 'Qual afirmação sobre anticorpos está correta?',
              choices: ['São bactérias que atacam todas as células humanas.', 'São sinônimos de antibióticos e atuam sempre da mesma forma.', 'São produzidos pelas hemácias para levar O₂.', 'São proteínas que reconhecem alvos específicos e podem ajudar na defesa.'],
              correct: 3,
              explanation: '1. Linfócitos B podem originar células produtoras de anticorpos. 2. Anticorpos reconhecem alvos específicos. 3. Esse reconhecimento pode neutralizar agentes ou facilitar sua eliminação.',
              topic: 'Imunidade adaptativa'
            },
            {
              type: 'choice',
              prompt: 'Após um primeiro contato com o antígeno A, surgiram células de memória. O que pode acontecer em novo contato com A?',
              choices: ['A defesa perde toda a capacidade de reconhecer A.', 'Uma resposta adaptativa mais rápida e eficaz pode ocorrer.', 'O antígeno A se transforma obrigatoriamente em anticorpo.', 'O corpo fica protegido contra todos os agentes existentes.'],
              correct: 1,
              explanation: '1. Algumas células do primeiro contato permanecem como memória. 2. Elas reconhecem o mesmo alvo em novo contato. 3. A resposta pode ser mais rápida, mas essa memória não corresponde à proteção universal.',
              topic: 'Memória imunológica'
            },
            {
              type: 'choice',
              prompt: 'Qual alternativa descreve o princípio de uma vacina?',
              choices: ['Substituir o sistema imunológico por uma barreira de metal.', 'Entregar sempre somente anticorpos prontos para ação temporária.', 'Estimular a resposta do próprio organismo e a formação de memória contra determinados alvos.', 'Eliminar todos os microrganismos do ambiente.'],
              correct: 2,
              explanation: '1. Vacinas apresentam antígenos ou instruções para sua produção. 2. O próprio organismo responde. 3. Essa imunização ativa pode formar memória; a proteção precisa de tempo para se desenvolver.',
              topic: 'Vacinas'
            },
            {
              type: 'choice',
              prompt: 'Um soro com anticorpos específicos é exemplo de imunização passiva porque:',
              choices: ['Fornece anticorpos já prontos, sem depender da produção inicial pelo receptor.', 'Contém somente células de memória fabricadas no receptor.', 'Sempre cria proteção permanente contra qualquer doença.', 'É igual a qualquer vacina em composição e mecanismo.'],
              correct: 0,
              explanation: '1. Na imunização passiva, anticorpos são recebidos prontos. 2. Eles podem ter ação mais imediata. 3. A proteção é temporária e não produz, por si só, a memória de uma resposta ativa.',
              topic: 'Soros'
            },
            {
              type: 'choice',
              prompt: 'Qual comparação entre vacina e soro está correta?',
              choices: ['Vacina e soro fornecem sempre a mesma proteção imediata e permanente.', 'Vacina fornece somente antibióticos; soro fornece somente vírus.', 'Vacina não depende de nenhuma resposta do organismo; soro sempre gera memória.', 'Vacina estimula resposta ativa; soro fornece anticorpos e proteção temporária.'],
              correct: 3,
              explanation: '1. Na vacina, a resposta é elaborada pelo próprio organismo. 2. No soro, anticorpos específicos já estão prontos. 3. Por isso, os tempos de ação e a relação com a memória são diferentes.',
              topic: 'Vacinas e soros'
            },
            {
              type: 'choice',
              prompt: 'Qual diferença entre bactérias e vírus está correta?',
              choices: ['Vírus são células completas; bactérias nunca têm material genético.', 'Bactérias são celulares; vírus dependem de células hospedeiras para se multiplicar.', 'Bactérias e vírus são sempre do mesmo tamanho e têm as mesmas estruturas.', 'Somente bactérias dependem obrigatoriamente da maquinaria de outra célula para se multiplicar.'],
              correct: 1,
              explanation: '1. Bactérias são organismos celulares procarióticos. 2. Vírus não possuem organização celular. 3. A multiplicação viral depende da maquinaria de células hospedeiras.',
              topic: 'Vírus e bactérias'
            },
            {
              type: 'choice',
              prompt: 'Por que um antibiótico não combate a infecção viral em si?',
              choices: ['Porque vírus são sempre maiores que bactérias.', 'Porque antibióticos atuam apenas em ossos.', 'Porque seus alvos são estruturas ou processos bacterianos, ausentes nos vírus.', 'Porque todo vírus já nasce como uma bactéria resistente.'],
              correct: 2,
              explanation: '1. Antibióticos atingem alvos bacterianos. 2. Vírus têm organização e multiplicação diferentes. 3. Um medicamento com alvo bacteriano não elimina o vírus responsável por uma infecção viral.',
              topic: 'Antibióticos'
            },
            {
              type: 'choice',
              prompt: 'Ao estudar resistência bacteriana, qual frase a turma deve manter no cartaz?',
              choices: ['Bactérias resistentes podem sobreviver a uma pressão seletiva e se multiplicar.', 'O corpo humano inteiro se transforma em bactéria resistente.', 'O antibiótico ensina deliberadamente todas as bactérias a mudar.', 'Qualquer uso de antibiótico transforma vírus em bactérias.'],
              correct: 0,
              explanation: '1. Uma população pode conter bactérias com características de resistência. 2. Sob certa pressão seletiva, elas sobrevivem mais que as sensíveis. 3. Ao se multiplicarem, sua proporção na população pode aumentar.',
              topic: 'Resistência bacteriana'
            },
            {
              type: 'choice',
              prompt: 'Qual afirmação evita uma generalização incorreta sobre microrganismos?',
              choices: ['Toda bactéria provoca obrigatoriamente uma doença.', 'Nenhum microrganismo pode viver associado ao corpo humano.', 'Todo microrganismo é um vírus e deve ser eliminado.', 'Existem bactérias que não causam doenças e participam de relações benéficas.'],
              correct: 3,
              explanation: '1. Bactérias são muito diversas. 2. Algumas podem causar doenças, mas outras vivem sem causar dano ou têm funções benéficas. 3. O grupo inteiro não deve ser definido apenas pelos exemplos patogênicos.',
              topic: 'Vírus e bactérias'
            },
            {
              type: 'choice',
              prompt: 'Qual sequência descreve melhor a cooperação entre as camadas de defesa?',
              choices: ['Anticorpos → costelas → alimento, sem participação de células.', 'Barreiras dificultam a entrada; respostas inatas atuam; a resposta adaptativa pode se organizar.', 'A pele só começa a funcionar após o primeiro contato com um antígeno.', 'A resposta adaptativa elimina a necessidade de qualquer barreira física.'],
              correct: 1,
              explanation: '1. Barreiras atuam no contato com o ambiente. 2. Se forem ultrapassadas, respostas inatas ajudam a conter agentes e a sinalizar. 3. A defesa adaptativa pode se desenvolver com especificidade; as camadas cooperam.',
              topic: 'Integração das defesas'
            },
            {
              type: 'short',
              prompt: 'Qual é o nome do processo em que uma célula de defesa envolve e digere um microrganismo? Responda com uma palavra.',
              answers: ['fagocitose', 'Fagocitose'],
              explanation: 'O envolvimento, a entrada e a digestão do material pelo fagócito caracterizam a fagocitose, um mecanismo importante da imunidade inata.',
              topic: 'Imunidade inata'
            },
            {
              type: 'short',
              prompt: 'A vacina estimula o próprio organismo a desenvolver uma resposta. Essa imunização é ativa ou passiva? Responda com uma palavra.',
              answers: ['ativa', 'Ativa'],
              explanation: 'É imunização ativa porque o próprio organismo elabora a resposta ao estímulo. Receber anticorpos prontos corresponde à imunização passiva.',
              topic: 'Vacinas e soros'
            },
            {
              type: 'written',
              prompt: 'Compare vacina e soro com anticorpos específicos. Explique a origem dos anticorpos, a relação com a memória e a diferença geral no tempo de proteção.',
              modelAnswer: 'A vacina estimula o próprio organismo a responder a certos antígenos, produzindo uma imunização ativa que pode formar memória. Essa resposta precisa de tempo para se desenvolver. O soro fornece anticorpos prontos, caracterizando imunização passiva, com ação mais imediata e proteção temporária. Receber esses anticorpos não forma, por si só, memória imunológica no receptor.',
              rubric: ['Diz que a vacina estimula a resposta do organismo e que o soro entrega anticorpos prontos.', 'Relaciona vacina à imunização ativa e à possibilidade de memória, distinguindo a imunização passiva.', 'Compara o desenvolvimento da resposta à vacina com a ação mais imediata e temporária do soro.'],
              explanation: 'Organize a comparação por origem, memória e tempo. A atividade verifica conceitos; o modelo não indica qual produto uma pessoa deve usar em uma situação real.',
              topic: 'Vacinas e soros'
            },
            {
              type: 'written',
              prompt: 'Corrija as duas frases: “Todos os microrganismos causam doença” e “Antibióticos matam vírus porque vírus são bactérias pequenas”. Use diferenças biológicas e o conceito de alvo do antibiótico.',
              modelAnswer: 'Nem todos os microrganismos causam doença; existem bactérias que vivem sem causar dano e outras com funções benéficas. Bactérias são seres celulares procarióticos. Vírus não são células e dependem de uma célula hospedeira para se multiplicar. Antibióticos atingem estruturas ou processos bacterianos, por isso não combatem a infecção viral em si.',
              rubric: ['Reconhece que nem todo microrganismo é patogênico e menciona bactérias não prejudiciais.', 'Diferencia bactérias celulares de vírus dependentes de células hospedeiras para multiplicação.', 'Explica que os alvos dos antibióticos são bacterianos, sem atribuir ação antiviral a eles.'],
              explanation: 'Comece retirando a generalização sobre microrganismos. Depois compare a organização dos dois grupos e conecte essa diferença ao alvo bacteriano dos antibióticos.',
              topic: 'Vírus, bactérias e antibióticos'
            }
          ]
        }
      }
    },
    matematica: {
      name: 'Matemática',
      intro: 'Resolva situações com coordenadas, formas, transformações, porcentagens e dados. Acompanhe os cálculos e explique suas escolhas.',
      assessments: {
        av1: {
          title: 'AV1 · Geometria em movimento',
          overview: 'Localize pontos no plano cartesiano, investigue polígonos e acompanhe translações, reflexões e rotações com coordenadas e situações completas.',
          videoQuery: 'plano cartesiano polígonos translação reflexão rotação simetria 7 ano',
          topics: [
            {
              title: '1. Plano cartesiano: localizar e descrever posições',
              paragraphs: [
                'O plano cartesiano usa dois eixos perpendiculares: o eixo x é horizontal e o eixo y é vertical. O encontro entre eles é a origem, representada por (0, 0). Um ponto é escrito como par ordenado (x, y). Primeiro leia o deslocamento horizontal e depois o vertical, sempre a partir da origem. Os sinais indicam os sentidos: x positivo fica à direita e x negativo à esquerda; y positivo fica acima e y negativo abaixo.',
                'Antes de resolver um problema de localização, confira a unidade e a escala. Em um mapa, cada unidade pode representar um metro ou um quarteirão, e isso altera a distância real. Trocar a ordem das coordenadas também costuma mudar o ponto: (2, 5) e (5, 2) representam posições diferentes. Para registrar um trajeto, anote o ponto inicial, cada mudança horizontal ou vertical e o ponto final. Essa organização evita confundir uma posição com um deslocamento.'
              ],
              example: 'Uma biblioteca está em B(−3, 2), com escala de 1 unidade = 1 quarteirão. Da origem, ande 3 quarteirões à esquerda e 2 para cima no mapa. A posição é (−3, 2), não (2, −3).',
              pitfall: 'Ler o par de trás para frente. Em (x, y), a primeira coordenada é horizontal e a segunda é vertical.'
            },
            {
              title: '2. Quadrantes, eixos e distâncias alinhadas',
              paragraphs: [
                'Os eixos dividem o plano em quatro quadrantes. No I, x e y são positivos; no II, x é negativo e y positivo; no III, os dois são negativos; no IV, x é positivo e y negativo. A numeração segue o sentido anti-horário, começando na região superior direita. Pontos que têm uma coordenada igual a zero ficam em um eixo, e não em um quadrante. A origem pertence aos dois eixos.',
                'Quando dois pontos têm o mesmo y, o segmento entre eles é horizontal e sua medida é a diferença positiva entre os valores de x. Quando têm o mesmo x, o segmento é vertical e usamos a diferença positiva entre os valores de y. Podemos escrever distância horizontal = |x₂ − x₁| e distância vertical = |y₂ − y₁|. As barras indicam valor absoluto: uma distância não será negativa. Em um percurso com trechos, some as medidas dos trechos percorridos.'
              ],
              example: 'No mapa, A(−4, 2) e B(3, 2) têm o mesmo y. A distância é |3 − (−4)| = |7| = 7 unidades. Já C(0, −5) está no eixo y, fora dos quadrantes.',
              pitfall: 'Colocar um ponto do eixo em um quadrante ou aceitar distância negativa. O sinal localiza a posição; a medida da distância é não negativa.'
            },
            {
              title: '3. Polígonos: lados, perímetro e diagonais',
              paragraphs: [
                'Um polígono é uma figura plana fechada formada por segmentos de reta que se encontram nas extremidades, sem cruzamentos no contorno de um polígono simples. O número de lados é igual ao número de vértices: triângulo tem 3, quadrilátero 4, pentágono 5, hexágono 6 e octógono 8. Um círculo não é polígono porque sua borda é curva. Um polígono regular tem todos os lados e todos os ângulos internos de mesma medida; só uma dessas condições não basta.',
                'O perímetro é a soma dos comprimentos de todos os lados e conserva a unidade de comprimento. Diagonal é um segmento entre dois vértices não consecutivos. Em um polígono convexo com n lados, o número de diagonais é d = n × (n − 3) ÷ 2: cada vértice liga-se por diagonais a n − 3 outros e cada diagonal foi contada duas vezes. A soma dos ângulos internos é S = (n − 2) × 180°, obtida pela divisão em triângulos.'
              ],
              example: 'Um hexágono convexo tem d = 6 × 3 ÷ 2 = 9 diagonais e S = 4 × 180° = 720°. Se for regular e cada lado medir 4 cm, seu perímetro será 6 × 4 = 24 cm.',
              pitfall: 'Confundir perímetro com área, ou contar o próprio vértice e seus dois vizinhos como destinos de diagonais.'
            },
            {
              title: '4. Translação e rotação: deslocar ou girar',
              paragraphs: [
                'Na translação, todos os pontos de uma figura se deslocam a mesma distância, na mesma direção e no mesmo sentido. A figura não gira e conserva seu tamanho e sua forma. Para transladar por a unidades na horizontal e b na vertical, usamos (x, y) → (x + a, y + b). Um a negativo indica movimento à esquerda, e um b negativo indica movimento para baixo. É necessário aplicar a mesma regra a todos os vértices.',
                'Na rotação, a figura gira em torno de um centro, com um ângulo e um sentido definidos. Sem essas três informações, a transformação não fica determinada. Quando o centro é a origem, uma rotação de 90° anti-horários segue (x, y) → (−y, x); para 90° horários, segue (x, y) → (y, −x). Uma meia-volta, de 180°, segue (x, y) → (−x, −y). Essas regras conservam distâncias e ângulos; não devem ser usadas diretamente para um centro diferente da origem.'
              ],
              example: 'Um robô está em (−2, 3) e avança 5 unidades à direita e 4 para baixo: (−2 + 5, 3 − 4) = (3, −1). Já girar (3, 1) em 90° anti-horários na origem produz (−1, 3).',
              pitfall: 'Aplicar a regra de rotação sem conferir centro e sentido, ou mover cada vértice por uma quantidade diferente ao tentar fazer uma translação.'
            },
            {
              title: '5. Reflexão e simetria: investigar um espelho',
              paragraphs: [
                'Uma reflexão produz a imagem de uma figura em relação a uma reta que funciona como espelho. Cada ponto e sua imagem ficam à mesma distância dessa reta, em lados opostos, exceto os pontos da própria reta, que permanecem fixos. Na reflexão em relação ao eixo x, a regra é (x, y) → (x, −y). Em relação ao eixo y, é (x, y) → (−x, y). A reflexão preserva medidas de lados e ângulos, mas inverte a orientação da figura.',
                'Uma figura tem eixo de simetria quando a reflexão nessa reta faz a imagem coincidir com a própria figura. Imagine dobrar o desenho sobre a reta e verificar a sobreposição das duas partes. Um triângulo equilátero tem três eixos de simetria; um quadrado tem quatro. Nem toda figura tem algum eixo, e uma reta que simplesmente divide uma área ao meio pode não ser eixo de simetria. Para justificar, compare a correspondência e as distâncias dos pontos ao eixo.'
              ],
              example: 'O ponto P(2, −1), refletido no eixo x, vira P′(2, 1): x permanece e y troca de sinal. No eixo y, o mesmo ponto vira (−2, −1): somente x troca de sinal.',
              pitfall: 'Trocar os sinais das duas coordenadas em uma reflexão sobre um eixo. Essa troca dupla corresponde à rotação de 180° em torno da origem.'
            }
          ],
          questions: [
            {
              type: 'choice',
              prompt: 'No mapa de um bairro, cada unidade vale um quarteirão. Uma entrega está em (−3, 2). Como chegar a essa posição saindo da origem, pelos eixos do mapa?',
              choices: ['3 quarteirões à direita e 2 para baixo.', '2 quarteirões à esquerda e 3 para cima.', '3 quarteirões à esquerda e 2 para cima.', '3 quarteirões para cima e 2 à direita.'],
              correct: 2,
              explanation: '1. Leia x primeiro: −3 indica 3 unidades à esquerda. 2. Leia y: 2 indica 2 unidades para cima. 3. Como cada unidade vale um quarteirão, essas são as quantidades do percurso.',
              topic: 'Plano cartesiano'
            },
            {
              type: 'choice',
              prompt: 'Uma quadra foi marcada no ponto Q(4, −2) de um mapa cartesiano. Em qual quadrante ela fica?',
              choices: ['IV quadrante.', 'I quadrante.', 'II quadrante.', 'III quadrante.'],
              correct: 0,
              explanation: '1. x = 4 é positivo, então o ponto está à direita. 2. y = −2 é negativo, então está abaixo. 3. A região direita e inferior é o IV quadrante.',
              topic: 'Quadrantes e eixos'
            },
            {
              type: 'choice',
              prompt: 'Um aspersor está em S(0, −5). Qual descrição de sua posição é correta?',
              choices: ['Está no III quadrante porque y é negativo.', 'Está no IV quadrante porque x é zero.', 'Está na origem, pois uma coordenada é zero.', 'Está no eixo y e não pertence a um quadrante.'],
              correct: 3,
              explanation: '1. Quando x = 0, o ponto está sobre o eixo y. 2. Como y = −5, ele fica abaixo da origem. 3. Os eixos são fronteiras dos quadrantes, e seus pontos não pertencem a nenhum deles.',
              topic: 'Quadrantes e eixos'
            },
            {
              type: 'choice',
              prompt: 'Em uma oficina, um robô parte de (−2, 3), anda 5 unidades à direita e 4 para baixo. Qual é sua posição final?',
              choices: ['(−7, 7).', '(3, −1).', '(3, 7).', '(−7, −1).'],
              correct: 1,
              explanation: '1. À direita, somamos 5 ao x: −2 + 5 = 3. 2. Para baixo, subtraímos 4 do y: 3 − 4 = −1. 3. O ponto final é (3, −1).',
              topic: 'Translação'
            },
            {
              type: 'choice',
              prompt: 'Um mural digital reflete o ponto A(2, −1) em relação ao eixo x. Qual será a imagem de A?',
              choices: ['(−2, −1).', '(−2, 1).', '(2, 1).', '(1, 2).'],
              correct: 2,
              explanation: '1. Na reflexão no eixo x, a coordenada x permanece. 2. O y troca de sinal: −1 vira 1. 3. Portanto, A′ = (2, 1), à mesma distância do eixo x.',
              topic: 'Reflexão'
            },
            {
              type: 'choice',
              prompt: 'Em um projeto de jardim simétrico, uma árvore está em (4, 3). Sua árvore-espelho em relação ao eixo y deve ficar em:',
              choices: ['(−4, 3).', '(4, −3).', '(−4, −3).', '(3, 4).'],
              correct: 0,
              explanation: '1. Refletir no eixo y mantém a altura, portanto y = 3. 2. A distância horizontal de 4 unidades passa para o outro lado: x = −4. 3. A imagem é (−4, 3).',
              topic: 'Reflexão'
            },
            {
              type: 'choice',
              prompt: 'Uma peça de jogo tem um vértice em (3, 1). Ao girá-la 90° no sentido anti-horário, em torno da origem, para onde vai esse vértice?',
              choices: ['(1, −3).', '(−3, −1).', '(1, 3).', '(−1, 3).'],
              correct: 3,
              explanation: '1. Para 90° anti-horários na origem, use (x, y) → (−y, x). 2. Substituindo x = 3 e y = 1, obtemos (−1, 3). 3. O centro e o sentido informados determinam essa regra.',
              topic: 'Rotação'
            },
            {
              type: 'choice',
              prompt: 'Um símbolo de um painel tem um ponto em (−2, 5). Uma rotação de 180° em torno da origem leva esse ponto a:',
              choices: ['(−2, −5).', '(2, −5).', '(5, −2).', '(2, 5).'],
              correct: 1,
              explanation: '1. Uma meia-volta na origem troca o sinal de ambas as coordenadas. 2. −2 passa a 2 e 5 passa a −5. 3. A imagem é (2, −5).',
              topic: 'Rotação'
            },
            {
              type: 'choice',
              prompt: 'Uma placa tem formato de pentágono convexo. Se forem traçadas todas as suas diagonais, quantas haverá?',
              choices: ['2 diagonais.', '10 diagonais.', '5 diagonais.', '15 diagonais.'],
              correct: 2,
              explanation: '1. No pentágono, n = 5. 2. Use d = n × (n − 3) ÷ 2. 3. d = 5 × 2 ÷ 2 = 5. A divisão por 2 retira a contagem dupla de cada diagonal.',
              topic: 'Polígonos'
            },
            {
              type: 'choice',
              prompt: 'Um mosaico tem uma peça em formato de hexágono convexo. Qual é a soma de seus ângulos internos?',
              choices: ['720°.', '360°.', '540°.', '1.080°.'],
              correct: 0,
              explanation: '1. Um hexágono tem 6 lados. 2. A soma é S = (n − 2) × 180°. 3. S = (6 − 2) × 180° = 4 × 180° = 720°.',
              topic: 'Polígonos'
            },
            {
              type: 'choice',
              prompt: 'Uma horta retangular mede 18 m de comprimento e 12 m de largura. Uma cerca será colocada em todo o contorno, sem abertura. Quantos metros de cerca são necessários?',
              choices: ['30 m.', '216 m.', '36 m.', '60 m.'],
              correct: 3,
              explanation: '1. A cerca acompanha o perímetro, não a área. 2. Some os quatro lados: 18 + 12 + 18 + 12. 3. O total é 60 m; também podemos calcular 2 × (18 + 12).',
              topic: 'Perímetro'
            },
            {
              type: 'choice',
              prompt: 'Uma placa de trânsito desenhada em uma atividade tem contorno de octógono. Quantos lados e vértices esse contorno possui?',
              choices: ['6 lados e 8 vértices.', '8 lados e 8 vértices.', '8 lados e 16 vértices.', '10 lados e 10 vértices.'],
              correct: 1,
              explanation: '1. O prefixo de octógono indica 8 lados. 2. Cada encontro de lados consecutivos forma um vértice. 3. Um octógono possui, assim, 8 lados e 8 vértices.',
              topic: 'Polígonos'
            },
            {
              type: 'choice',
              prompt: 'Uma fábrica anuncia uma peça como hexágono regular. Que condições precisam ser verificadas?',
              choices: ['Apenas a existência de seis lados, com qualquer medida.', 'Somente dois lados iguais e dois ângulos retos.', 'Seis lados iguais entre si e seis ângulos internos iguais entre si.', 'Todos os lados curvos e ausência de vértices.'],
              correct: 2,
              explanation: '1. Hexágono significa 6 lados. 2. Regular exige lados de mesma medida. 3. Exige também ângulos internos de mesma medida: apenas ter lados iguais não comprova regularidade.',
              topic: 'Polígonos regulares'
            },
            {
              type: 'choice',
              prompt: 'Uma bandeirinha tem formato de triângulo equilátero. Quantos eixos de simetria esse formato possui?',
              choices: ['3 eixos.', '1 eixo.', '2 eixos.', '6 eixos.'],
              correct: 0,
              explanation: '1. Em cada vértice, a reta que passa pelo ponto médio do lado oposto é um eixo de simetria. 2. O triângulo equilátero tem três vértices. 3. Portanto, há três eixos distintos.',
              topic: 'Simetria'
            },
            {
              type: 'choice',
              prompt: 'Em uma ciclovia horizontal do mapa, A = (−4, 2) e B = (3, 2). Cada unidade vale 100 m. Qual distância separa A e B pelo trecho reto?',
              choices: ['100 m.', '300 m.', '400 m.', '700 m.'],
              correct: 3,
              explanation: '1. As alturas são iguais, logo o trecho é horizontal. 2. A diferença é 3 − (−4) = 7 unidades. 3. Pela escala, 7 × 100 = 700 m.',
              topic: 'Distâncias no plano'
            },
            {
              type: 'choice',
              prompt: 'Um azulejo triangular foi transladado 6 cm à direita, sem girar. O que acontece com suas medidas e sua orientação?',
              choices: ['Todos os lados dobram e a orientação é invertida.', 'Lados e ângulos mantêm as medidas, e a orientação é conservada.', 'Somente o maior lado mantém a medida.', 'O perímetro aumenta em 6 cm.'],
              correct: 1,
              explanation: '1. A translação aplica o mesmo deslocamento a todos os pontos. 2. As distâncias entre pontos e os ângulos permanecem iguais. 3. A figura não gira nem se reflete, conservando também a orientação.',
              topic: 'Translação'
            },
            {
              type: 'short',
              prompt: 'Um ponto (−4, 2) sofre rotação de 90° anti-horários em torno da origem. Qual é apenas a coordenada y da imagem? Digite o número com sinal, se necessário.',
              answers: ['-4', '−4', '-4,0', '-4.0', '−4,0', '−4.0'],
              explanation: 'A regra é (x, y) → (−y, x). Assim, (−4, 2) passa a (−2, −4), e a coordenada y da imagem é −4.',
              topic: 'Rotação'
            },
            {
              type: 'short',
              prompt: 'Quantas diagonais tem um hexágono convexo? Digite apenas o número.',
              answers: ['9', '9,0', '9.0'],
              explanation: 'Use d = n × (n − 3) ÷ 2. Com n = 6, temos d = 6 × 3 ÷ 2 = 18 ÷ 2 = 9 diagonais.',
              topic: 'Polígonos'
            },
            {
              type: 'written',
              prompt: 'Um entregador percorre as ruas de um mapa de P(−3, −2) até Q(2, −2) e depois até R(2, 4). Cada unidade vale 1 quarteirão. Descreva os sentidos dos dois trechos, calcule a distância percorrida e indique o quadrante de R.',
              modelAnswer: 'De P a Q, o y permanece −2 e o x passa de −3 para 2: o entregador anda 5 quarteirões à direita. De Q a R, o x permanece 2 e o y passa de −2 para 4: ele anda 6 quarteirões para cima. A distância do trajeto é 5 + 6 = 11 quarteirões. R(2, 4) está no I quadrante, pois as duas coordenadas são positivas.',
              rubric: ['Descreve o primeiro trecho como 5 unidades à direita e o segundo como 6 para cima.', 'Soma as medidas dos dois trechos e encontra 11 quarteirões para o trajeto informado.', 'Identifica R no I quadrante e justifica pelos dois sinais positivos.'],
              explanation: 'Calcule cada variação no eixo correspondente antes de somar. O problema pede o trajeto pelas duas ruas descritas, então a soma dos trechos é a distância solicitada.',
              topic: 'Plano cartesiano e trajetos'
            },
            {
              type: 'written',
              prompt: 'Um logotipo triangular tem vértices A(1, 1), B(4, 1) e C(1, 3). Primeiro ele é refletido no eixo y. Depois a imagem é transladada 2 unidades à direita e 1 para baixo. Determine as coordenadas após cada etapa e diga o que ocorre com as medidas dos lados.',
              modelAnswer: 'Na reflexão no eixo y, apenas x troca de sinal: A′(−1, 1), B′(−4, 1) e C′(−1, 3). Depois aplicamos (x, y) → (x + 2, y − 1): A″(1, 0), B″(−2, 0) e C″(1, 2). As medidas dos lados e dos ângulos são preservadas nas duas transformações; a reflexão inverte a orientação e a translação conserva a orientação da imagem que recebeu.',
              rubric: ['Encontra os três vértices refletidos trocando somente o sinal de x.', 'Aplica a translação aos pontos já refletidos e encontra (1, 0), (−2, 0) e (1, 2).', 'Afirma que lados e ângulos conservam as medidas nas duas etapas.'],
              explanation: 'A ordem importa: registre a reflexão primeiro, então use seus resultados como entrada da translação. Compare cada par de coordenadas com a regra e observe que nenhuma dessas transformações amplia a figura.',
              topic: 'Composição de transformações'
            }
          ]
        },
        av2: {
          title: 'AV2 · Porcentagens, estatística e probabilidade',
          overview: 'Calcule descontos e acréscimos, resuma dados com média e amplitude e interprete chances, frequências, pictogramas e gráficos de setores.',
          videoQuery: 'porcentagem média amplitude probabilidade frequência pictograma gráfico setores 7 ano',
          topics: [
            {
              title: '1. Porcentagem: comparar uma parte ao todo',
              paragraphs: [
                'Porcentagem significa uma quantidade a cada cem partes iguais. Escrever 25% equivale a escrever 25/100 = 0,25 = 1/4. Para calcular p% de uma quantidade V, use parte = V × p ÷ 100. Antes da conta, identifique o todo ao qual a porcentagem se refere: pode ser o preço de um livro, o total de alunos ou a quantidade de água de um reservatório. O mesmo percentual produz valores diferentes quando os totais são diferentes.',
                'Também podemos descobrir o percentual de uma parte conhecida: percentual = parte ÷ total × 100%, com total diferente de zero. Verifique se parte e total usam a mesma unidade. Frações conhecidas tornam a estimativa mais rápida: 50% é metade, 25% é um quarto e 10% é um décimo. Estimar ajuda a perceber erros de escala, como encontrar um desconto maior que o preço quando o percentual informado é pequeno e menor que 100%.'
              ],
              example: 'Uma turma tem 40 estudantes e 10 vão à escola de bicicleta. Percentual = 10 ÷ 40 × 100% = 25%. Para conferir, 1/4 de 40 é 10.',
              pitfall: 'Usar a parte como se fosse o total no denominador. Sempre identifique primeiro a quantidade que representa 100%.'
            },
            {
              title: '2. Acréscimos e descontos: acompanhar a base',
              paragraphs: [
                'Um desconto reduz o valor inicial: preço final = preço inicial × (1 − p/100). Um acréscimo aumenta esse valor: preço final = preço inicial × (1 + p/100). Também é possível calcular o valor do desconto ou aumento separadamente e depois subtrair ou somar. Em um problema de compras, diferencie o valor da mudança do novo preço. Se um desconto é de R$ 20,00, isso não significa que o produto passará a custar R$ 20,00.',
                'Em mudanças sucessivas, o segundo percentual é aplicado sobre o valor que existe depois da primeira etapa. Por isso, descontar 20% e depois aumentar 20% não retorna ao preço original. A base do aumento ficou menor após o desconto. Registre os valores intermediários para evitar somar ou cancelar percentuais sem analisar a situação. Ao comparar com um orçamento, some os preços finais dos itens e só então calcule a diferença para o dinheiro disponível.'
              ],
              example: 'Um item de R$ 100,00 recebe 20% de desconto: 100 × 0,80 = R$ 80,00. Depois aumenta 20%: 80 × 1,20 = R$ 96,00. O aumento foi R$ 16,00, não R$ 20,00.',
              pitfall: 'Cancelar percentuais sucessivos por terem o mesmo número, ignorando que eles se referem a bases diferentes.'
            },
            {
              title: '3. Média e amplitude: resumir sem esconder os dados',
              paragraphs: [
                'A média aritmética simples é calculada por média = soma dos valores ÷ quantidade de valores. Cada observação conta, inclusive quando um número aparece repetido. Se as vendas de quatro dias foram 20, 24, 28 e 28 unidades, a soma é 100 e a média é 25 unidades por dia. O resultado não precisa coincidir com um valor observado. Ele representa uma distribuição igualitária do total entre as observações, útil para comparar conjuntos de mesma natureza.',
                'A amplitude é calculada por amplitude = maior valor − menor valor. Ela descreve a distância entre os extremos, mas não informa como todos os dados estão distribuídos. Dois grupos podem ter a mesma média e amplitudes diferentes. Ao acrescentar um novo dado, atualize a soma e a quantidade antes de calcular a nova média. Não tire a média simples de médias de grupos com tamanhos diferentes sem considerar quantas observações cada grupo representa.'
              ],
              example: 'Para 18 °C, 25 °C, 21 °C e 29 °C, a amplitude é 29 − 18 = 11 °C. A média é (18 + 25 + 21 + 29) ÷ 4 = 93 ÷ 4 = 23,25 °C.',
              pitfall: 'Calcular amplitude como maior mais menor, ou dividir a soma apenas pela quantidade de valores diferentes, esquecendo as repetições.'
            },
            {
              title: '4. Probabilidade e frequência: possibilidade e observação',
              paragraphs: [
                'Em uma experiência com resultados igualmente prováveis, probabilidade = número de resultados favoráveis ÷ número de resultados possíveis. O resultado pode ser escrito como fração, decimal ou porcentagem. Uma probabilidade de 1/4 equivale a 0,25 ou 25%. Ela está entre 0 e 1, ou entre 0% e 100%: zero corresponde a um evento impossível nas condições dadas, e um corresponde a um evento certo. Sempre descreva quais resultados pertencem ao evento pedido.',
                'Frequência absoluta é o número de vezes que um resultado foi observado. Frequência relativa é esse número dividido pelo total de observações e pode ser transformada em porcentagem. Probabilidade teórica e frequência observada não são a mesma coisa: em poucas tentativas de um sorteio justo, as proporções podem variar. Por exemplo, uma moeda equilibrada não precisa produzir exatamente cinco caras em dez lançamentos. Para resolver exercícios, diferencie a contagem já registrada da chance calculada a partir das regras do experimento.'
              ],
              example: 'Uma sacola tem 3 fichas vermelhas, 2 azuis e 5 verdes, todas com a mesma chance de retirada. Total = 10; P(azul) = 2/10 = 1/5 = 20%. Já 6 azuis em 24 retiradas dão frequência relativa 6/24 = 25%.',
              pitfall: 'Usar somente os resultados favoráveis no denominador ou afirmar que uma chance de 50% obriga alternância entre dois resultados.'
            },
            {
              title: '5. Pictogramas e setores: ler a legenda e o total',
              paragraphs: [
                'Um pictograma usa símbolos para representar quantidades. A legenda informa quanto vale cada símbolo e deve ser lida antes de contar. Se um desenho de livro vale 4 empréstimos, três desenhos completos representam 12 empréstimos. Meio símbolo pode representar 2 se a legenda permitir essa divisão. Em gráficos de barras, compare alturas usando a escala; em qualquer gráfico, confira título, categorias, unidades e fonte. A aparência de um símbolo sozinha não revela a quantidade que ele representa.',
                'Um gráfico de setores representa partes de um mesmo total por fatias de um círculo. O círculo inteiro corresponde a 360° e a 100%. Para uma categoria, ângulo = frequência ÷ total × 360°. No caminho inverso, frequência = ângulo ÷ 360° × total. As frequências devem somar o total, os percentuais 100% e os ângulos 360°, desconsiderando pequenos arredondamentos quando houver. O formato é útil para comparar partes do todo; para acompanhar valores por dia, barras ou linhas costumam facilitar a leitura.'
              ],
              example: 'Em uma pesquisa com 40 alunos, 10 escolheram música. A fatia será 10 ÷ 40 × 360° = 90°, equivalente a 25% do círculo. Todas as informações necessárias podem ser fornecidas por texto, sem desenho.',
              pitfall: 'Confundir 25% com 25° ou contar ícones sem multiplicar pelo valor indicado na legenda.'
            }
          ],
          questions: [
            {
              type: 'choice',
              prompt: 'Um livro custa R$ 80,00 e está com desconto de 25% sobre esse preço. Qual é o preço final?',
              choices: ['R$ 20,00.', 'R$ 60,00.', 'R$ 55,00.', 'R$ 100,00.'],
              correct: 1,
              explanation: '1. Calcule o desconto: 80 × 25 ÷ 100 = 20. 2. Subtraia do preço inicial: 80 − 20 = 60. 3. O livro passa a custar R$ 60,00; R$ 20,00 é o valor retirado.',
              topic: 'Desconto'
            },
            {
              type: 'choice',
              prompt: 'O passe mensal de transporte custava R$ 120,00 e teve acréscimo de 15%. Qual é o novo valor?',
              choices: ['R$ 135,00.', 'R$ 102,00.', 'R$ 18,00.', 'R$ 138,00.'],
              correct: 3,
              explanation: '1. O aumento é 120 × 15 ÷ 100 = 18 reais. 2. Some ao valor inicial: 120 + 18 = 138. 3. Também podemos calcular 120 × 1,15 = R$ 138,00.',
              topic: 'Acréscimo'
            },
            {
              type: 'choice',
              prompt: 'Uma turma quer arrecadar R$ 300,00 para uma visita. Já reuniu 18% da meta. Quanto foi arrecadado até agora?',
              choices: ['R$ 54,00.', 'R$ 18,00.', 'R$ 246,00.', 'R$ 36,00.'],
              correct: 0,
              explanation: '1. O total de referência, ou 100%, é 300 reais. 2. Calcule 300 × 18 ÷ 100 = 54. 3. Foram arrecadados R$ 54,00; R$ 246,00 seria o valor que ainda falta.',
              topic: 'Porcentagem'
            },
            {
              type: 'choice',
              prompt: 'Um produto de R$ 100,00 recebeu desconto de 20%. Uma semana depois, seu preço já descontado teve aumento de 20%. Qual passou a ser o preço?',
              choices: ['R$ 100,00.', 'R$ 80,00.', 'R$ 96,00.', 'R$ 120,00.'],
              correct: 2,
              explanation: '1. Após o desconto: 100 × 0,80 = 80. 2. O aumento de 20% agora incide sobre 80: 80 × 0,20 = 16. 3. O preço final é 80 + 16 = R$ 96,00. Os percentuais não se cancelam porque as bases mudaram.',
              topic: 'Variações sucessivas'
            },
            {
              type: 'choice',
              prompt: 'Uma cantina vendeu 20, 24, 28 e 28 sanduíches em quatro dias. Qual foi a média diária nesses dias?',
              choices: ['24 sanduíches.', '25 sanduíches.', '28 sanduíches.', '100 sanduíches.'],
              correct: 1,
              explanation: '1. Some todas as vendas, incluindo os dois dias com 28: 20 + 24 + 28 + 28 = 100. 2. Divida pelos quatro dias: 100 ÷ 4 = 25. 3. A média foi 25 sanduíches por dia.',
              topic: 'Média aritmética'
            },
            {
              type: 'choice',
              prompt: 'Quatro temperaturas registradas em uma atividade foram 18 °C, 25 °C, 21 °C e 29 °C. Qual é a amplitude desse conjunto?',
              choices: ['47 °C.', '23,25 °C.', '7 °C.', '11 °C.'],
              correct: 3,
              explanation: '1. Identifique o maior valor: 29 °C. 2. Identifique o menor: 18 °C. 3. A amplitude é 29 − 18 = 11 °C. Não é necessário calcular a média para encontrá-la.',
              topic: 'Amplitude'
            },
            {
              type: 'choice',
              prompt: 'Nos três primeiros dias, a biblioteca emprestou em média 12 livros por dia. No quarto dia, emprestou 16. Qual foi a média dos quatro dias?',
              choices: ['13 livros por dia.', '14 livros por dia.', '28 livros por dia.', '12 livros por dia.'],
              correct: 0,
              explanation: '1. O total dos três dias foi 3 × 12 = 36 livros. 2. Com o quarto dia, o total passou a 36 + 16 = 52. 3. A nova média é 52 ÷ 4 = 13 livros por dia.',
              topic: 'Média aritmética'
            },
            {
              type: 'choice',
              prompt: 'Uma sacola tem 3 fichas vermelhas, 2 azuis e 5 verdes, indistinguíveis pelo toque. Todas têm a mesma chance de retirada. Qual é a probabilidade de retirar uma azul?',
              choices: ['2/5.', '1/2.', '1/5.', '3/10.'],
              correct: 2,
              explanation: '1. Há 3 + 2 + 5 = 10 fichas no total. 2. As favoráveis são as 2 azuis. 3. P(azul) = 2/10 = 1/5, equivalente a 20%.',
              topic: 'Probabilidade'
            },
            {
              type: 'choice',
              prompt: 'Um dado justo tem faces numeradas de 1 a 6. Qual é a probabilidade de sair um número maior que 4 em um lançamento?',
              choices: ['1/6.', '1/3.', '2/3.', '1/2.'],
              correct: 1,
              explanation: '1. Os resultados favoráveis são 5 e 6: dois resultados. 2. Há seis resultados igualmente prováveis. 3. A probabilidade é 2/6 = 1/3. O 4 não entra porque o enunciado pede maior que 4.',
              topic: 'Probabilidade'
            },
            {
              type: 'choice',
              prompt: 'Em 24 retiradas de uma experiência com reposição, a cor azul apareceu 6 vezes. Qual foi a frequência relativa observada da cor azul?',
              choices: ['6%.', '18%.', '30%.', '25%.'],
              correct: 3,
              explanation: '1. A frequência absoluta foi 6 e o total foi 24. 2. A relativa é 6 ÷ 24 = 0,25. 3. Convertendo para porcentagem, 0,25 × 100% = 25%. Isso descreve o que foi observado.',
              topic: 'Frequência'
            },
            {
              type: 'choice',
              prompt: 'Em um pictograma de empréstimos, cada livro desenhado inteiro vale 4 empréstimos e meio desenho vale 2. A linha de terça-feira tem 3 desenhos inteiros e meio desenho. Quantos empréstimos ela representa?',
              choices: ['14 empréstimos.', '12 empréstimos.', '7 empréstimos.', '3,5 empréstimos.'],
              correct: 0,
              explanation: '1. Os três desenhos inteiros valem 3 × 4 = 12. 2. O meio desenho vale 2. 3. Somando, 12 + 2 = 14 empréstimos. A legenda já informa o valor de cada parte.',
              topic: 'Pictogramas'
            },
            {
              type: 'choice',
              prompt: 'Em uma pesquisa com 40 alunos, 10 escolheram música como atividade preferida. Em um gráfico de setores dessa pesquisa, qual deve ser o ângulo da fatia de música?',
              choices: ['25°.', '40°.', '90°.', '180°.'],
              correct: 2,
              explanation: '1. Música representa 10/40 = 1/4 do total. 2. O círculo inteiro mede 360°. 3. O ângulo é 1/4 × 360° = 90°. O percentual é 25%, mas o ângulo é 90°.',
              topic: 'Gráfico de setores'
            },
            {
              type: 'choice',
              prompt: 'Um gráfico de setores representa 60 estudantes. A fatia de uma categoria mede 120°. Quantos estudantes pertencem a essa categoria?',
              choices: ['12 estudantes.', '20 estudantes.', '30 estudantes.', '40 estudantes.'],
              correct: 1,
              explanation: '1. A fração do círculo é 120/360 = 1/3. 2. Aplique essa fração ao total de 60. 3. 60 ÷ 3 = 20 estudantes. Os dados do texto bastam para a conta.',
              topic: 'Gráfico de setores'
            },
            {
              type: 'choice',
              prompt: 'Uma turma registrou o transporte principal de 30 alunos: 15 vão de ônibus, 9 a pé e 6 de bicicleta. Qual é o percentual que vai de ônibus?',
              choices: ['15%.', '30%.', '45%.', '50%.'],
              correct: 3,
              explanation: '1. O total é 30, também conferido por 15 + 9 + 6. 2. A fração do ônibus é 15/30 = 1/2. 3. Metade do total corresponde a 50%.',
              topic: 'Porcentagem e frequência'
            },
            {
              type: 'choice',
              prompt: 'Uma rifa tem 100 bilhetes com a mesma chance de sorteio e apenas um será sorteado. Ana comprou 7 bilhetes diferentes. Qual é a chance de o bilhete sorteado ser um dos dela?',
              choices: ['7%.', '70%.', '1%.', '93%.'],
              correct: 0,
              explanation: '1. Há 7 resultados favoráveis, pois Ana tem 7 bilhetes. 2. Há 100 resultados possíveis. 3. A probabilidade é 7/100 = 7%. Ter mais de um bilhete aumenta a chance, mas não garante ganhar.',
              topic: 'Probabilidade'
            },
            {
              type: 'choice',
              prompt: 'A biblioteca quer comparar o número de empréstimos de segunda a sexta: 12, 18, 15, 20 e 10. Qual escolha facilita comparar as quantidades por dia, mantendo uma escala comum?',
              choices: ['Um pictograma sem legenda nem indicação dos dias.', 'Um único número que esconda os cinco valores.', 'Um gráfico de barras com os dias identificados e uma escala de empréstimos.', 'Um gráfico sem título, categorias ou unidades.'],
              correct: 2,
              explanation: '1. Cada dia é uma categoria com uma quantidade conhecida. 2. Barras em uma escala comum permitem comparar as alturas. 3. Dias, título e unidade precisam estar indicados para que o leitor interprete os dados.',
              topic: 'Leitura de gráficos'
            },
            {
              type: 'short',
              prompt: 'Uma campanha arrecadou R$ 240,00. Quanto corresponde a 12,5% desse total, em reais? Digite somente o número.',
              answers: ['30', '30,0', '30.0', '30,00', '30.00'],
              explanation: '12,5% = 0,125 = 1/8. Assim, 240 × 0,125 = 30, ou 240 ÷ 8 = 30. O valor é R$ 30,00.',
              topic: 'Porcentagem'
            },
            {
              type: 'short',
              prompt: 'Em uma pesquisa com 36 estudantes, 9 escolheram teatro. Qual é o ângulo da categoria teatro em um gráfico de setores? Digite apenas o número de graus.',
              answers: ['90', '90,0', '90.0'],
              explanation: 'A fração é 9/36 = 1/4. Multiplicando pelo círculo completo, 1/4 × 360° = 90°.',
              topic: 'Gráfico de setores'
            },
            {
              type: 'written',
              prompt: 'Lia tem R$ 220,00. Uma mochila de R$ 150,00 recebeu desconto de 10%, e um kit de cadernos de R$ 80,00 teve aumento de 5%. Calcule os dois preços finais, o total da compra e diga se o dinheiro é suficiente, com a diferença.',
              modelAnswer: 'O desconto da mochila é 150 × 0,10 = R$ 15,00; seu preço final é 150 − 15 = R$ 135,00. O aumento do kit é 80 × 0,05 = R$ 4,00; seu preço final é 80 + 4 = R$ 84,00. A compra custa 135 + 84 = R$ 219,00. O dinheiro é suficiente e sobra 220 − 219 = R$ 1,00.',
              rubric: ['Calcula o desconto de R$ 15,00 e o preço final da mochila de R$ 135,00.', 'Calcula o acréscimo de R$ 4,00 e o preço final do kit de R$ 84,00.', 'Encontra total de R$ 219,00 e conclui que sobra R$ 1,00 do orçamento.'],
              explanation: 'Aplique cada percentual ao preço do item correspondente. Some apenas os preços finais e compare o resultado ao orçamento. Registre os valores intermediários para permitir a conferência.',
              topic: 'Porcentagem e orçamento'
            },
            {
              type: 'written',
              prompt: 'Uma pesquisa registrou a preferência de leitura de 40 estudantes: 18 escolheram ficção, 10 ciências e 12 quadrinhos. Confira o total, calcule o ângulo da fatia de ficção em um gráfico de setores e a probabilidade de escolher ao acaso um estudante que prefere ciências, com todos tendo a mesma chance.',
              modelAnswer: 'A soma é 18 + 10 + 12 = 40, confirmando o total. Ficção corresponde a 18/40 = 0,45 = 45%, então seu ângulo é 0,45 × 360° = 162°. Para ciências, existem 10 estudantes favoráveis entre 40 possíveis: P = 10/40 = 1/4 = 25%. O ângulo descreve uma parte do círculo e a probabilidade descreve o sorteio informado.',
              rubric: ['Confere a soma das frequências e encontra 40 estudantes.', 'Calcula 18/40 × 360° e encontra 162° para ficção.', 'Calcula a probabilidade de ciências como 10/40 = 1/4, aceitando também 0,25 ou 25%.'],
              explanation: 'Use o mesmo total de 40 como referência nas duas contas. Para o setor, multiplique a fração por 360°; para a probabilidade, mantenha a razão favoráveis/possíveis ou converta para porcentagem.',
              topic: 'Frequência, setores e probabilidade'
            }
          ]
        }
      }
    }
  };
})();
