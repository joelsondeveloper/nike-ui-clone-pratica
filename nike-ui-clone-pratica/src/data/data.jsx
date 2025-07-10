import tenisPreto from "../assets/tenis-preto.png";
import tenisLaranja from "../assets/tenis-laranja.png";
import tenisRosa from "../assets/tenis-rosa.png";
import tenisVermelho from "../assets/tenis-vermelho.png";
import tenisAmarelo from "../assets/tenis-amarelo.png";

const shoesData = [
  {
    name: "Nike Pegasus 41",
    description:
      "Tênis de corrida versátil com entressola ReactX para retorno de energia e cabedal em malha respirável.",
    buttonText: "Buy now",
    features: [
      "Peso aproximado de 297g",
      "Drop de 10mm",
      "Ideal para corredores de peso leve a médio",
      "Cabedal em malha respirável",
      "Entressola ReactX",
      "Solado de borracha",
    ],
    qualityStatement: "A melhor combinação de conforto e performance.",
    src: tenisVermelho,
    gradient: `radial-gradient(
    circle,
    rgb(175, 42, 42) 0%,
    rgb(100, 0, 0) 80%
  )`,
    color: `#D00000`
  },
  {
    name: "Nike Metcon 9",
    description:
      "Tênis de treino com entressola de dupla densidade para conforto duradouro e cabedal respirável com estampa tátil.",
    buttonText: "Buy now",
    features: [
      "Suporte flexível na área dos dedos",
      "Ideal para cross-training e levantamento de peso",
      "Entressola de dupla densidade",
      "Cabedal respirável",
      "Solado de borracha",
    ],
    qualityStatement: "Suporte e estabilidade para os treinos mais pesados.",
    src: tenisLaranja,
    gradient: `radial-gradient(
  circle,
  rgb(216, 124, 25) 0%,
  rgb(224, 78, 4) 80%
)`,
    color: `#FF6B00`
  },
  {
    name: "Nike Revolution 7",
    description:
      "Tênis de corrida com entressola de espuma para passada suave e cabedal em tecido respirável.",
    buttonText: "Buy now",
    features: [
      "Peso aproximado de 229g",
      "Drop de 10mm",
      "Ideal para corredores iniciantes",
      "Cabedal em tecido respirável",
      "Entressola em EVA",
      "Solado de borracha",
    ],
    qualityStatement: "Conforto e suavidade em cada passo.",
    src: tenisRosa,
    gradient: `radial-gradient(
  circle,
  rgb(223, 104, 165) 0%,
  rgb(230, 4, 143) 80%
)`,
    color: `#ff068f`
  },
  {
    name: "Nike Dunk High Twist",
    description:
      "Tênis de estilo retrô com cabedal em couro e sobreposições em tons pastel.",
    buttonText: "Buy now",
    features: [
      "Design vintage",
      "Paleta de cores pastel",
      "Cabedal em couro",
      "Entressola de borracha",
    ],
    qualityStatement: "Estilo e conforto com toque retrô.",
    src: tenisAmarelo,
    gradient: `radial-gradient(
  circle,
  rgb(243, 216, 94) 0%,
  rgb(209, 169, 8) 80%
)`,
    color: `#ffd000`
  },
  {
    name: "Nike Zoom Vapor Pro 2 HC",
    description:
      "Tênis de tênis de alto desempenho com entressola acolchoada para suporte sem peso extra e cabedal em mesh durável para ventilação.",
    buttonText: "Buy now",
    features: [
      "Tecnologia Zoom Air para amortecimento responsivo",
      "Design de baixo perfil para agilidade",
      "Entressola acolchoada",
      "Cabedal em mesh respirável",
      "Solado de borracha",
    ],
    qualityStatement: "Alta performance com conforto.",
    src: tenisPreto,
    gradient: `radial-gradient(circle,rgb(41, 40, 40) 0%,rgb(17, 17, 17) 80%
)`,
    color: `#0f0f0f`
  },
];

export default shoesData;
