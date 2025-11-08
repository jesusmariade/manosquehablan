export const lessons = [
  {
    id: 'alfabeto',
    title: 'Alfabeto',
    description: 'Aprende el alfabeto en lenguaje de señas con ejemplos claros.',
    level: 'Basico',
    duration: 12,
    topics: [
      {
        id: 'alf-1',
        title: 'A - F',
        steps: [
          { id: 'alf-1-1', type: 'texto', content: { text: 'Señas para A, B, C' } },
          { id: 'alf-1-2', type: 'imagen', content: { uri: '' } },
        ],
      },
    ],
  },
  {
    id: 'saludos',
    title: 'Saludos básicos',
    description: 'Frases comunes para presentarte y saludar.',
    level: 'Basico',
    duration:   8,
    topics: [
      {
        id: 'sal-1',
        title: 'Saludos',
        steps: [
          { id: 'sal-1-1', type: 'texto', content: { text: 'Hola, ¿Cómo estás?' } },
        ],
      },
    ],
  },
  {
    id: 'numeros',
    title: 'Números',
    description: 'Cuenta del 1 al 20 en señas.',
    level: 'Basico',
    duration: 10,
    topics: [
      {
        id: 'num-1',
        title: '1 - 10',
        steps: [
          { id: 'num-1-1', type: 'texto', content: { text: 'Señas del 1 al 5' } },
        ],
      },
    ],
  },
];