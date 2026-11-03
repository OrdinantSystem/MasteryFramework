import type {Locale} from '../i18n';
const copy = {
  en: {
    prompt: 'Drag the teal tip around the circle. Which rotation brings x back to itself?',
    help: 'Release to snap to the nearest quarter-turn. Use the arrow keys for 5° steps (Shift: 90°), or choose a power below.',
    angle: 'Rotation angle (°)', handle: 'Rotate the vector',
    free: 'Between quarter-turns: R(θ) is a rotation matrix. It is a power of J at the marked points.',
    snapped: 'Each factor of J adds a 90° counterclockwise turn.',
    identity: 'Four quarter-turns: J⁴ = I. The vector is back at x; every vector returns to its starting position.',
    start: 'J⁰ = I: the starting position, with no rotation.',
    caption: 'The length stays $\\sqrt{5}$. Drag freely, then release to connect the rotation with one of the four distinct powers of J.',
  },
  de: {
    prompt: 'Ziehe die türkise Spitze um den Kreis. Welche Drehung bringt x zu sich selbst zurück?',
    help: 'Beim Loslassen rastet die Spitze bei der nächsten Vierteldrehung ein. Pfeiltasten: 5° (Umschalt: 90°). Oder wähle unten eine Potenz.',
    angle: 'Drehwinkel (°)', handle: 'Vektor drehen',
    free: 'Zwischen den Vierteldrehungen ist R(θ) eine Drehmatrix. An den markierten Punkten ist sie eine Potenz von J.',
    snapped: 'Jeder Faktor J fügt eine Drehung um 90° gegen den Uhrzeigersinn hinzu.',
    identity: 'Vier Vierteldrehungen: J⁴ = I. Der Vektor ist wieder bei x; jeder Vektor kehrt zu seiner Ausgangslage zurück.',
    start: 'J⁰ = I: die Ausgangslage ohne Drehung.',
    caption: 'Die Länge bleibt $\\sqrt{5}$. Ziehe frei und lasse los, um die Drehung einer der vier verschiedenen Potenzen von J zuzuordnen.',
  },
  es: {
    prompt: 'Arrastra la punta turquesa por el círculo. ¿Qué giro devuelve x a su posición inicial?',
    help: 'Al soltar, la punta se ajusta al cuarto de vuelta más cercano. Flechas: 5° (Mayús: 90°). También puedes elegir una potencia abajo.',
    angle: 'Ángulo de giro (°)', handle: 'Girar el vector',
    free: 'Entre los cuartos de vuelta, R(θ) es una matriz de rotación. En los puntos marcados es una potencia de J.',
    snapped: 'Cada factor J añade un giro de 90° en sentido antihorario.',
    identity: 'Cuatro cuartos de vuelta: J⁴ = I. El vector vuelve a x; todo vector regresa a su posición inicial.',
    start: 'J⁰ = I: la posición inicial, sin giro.',
    caption: 'La longitud sigue siendo $\\sqrt{5}$. Arrastra libremente y suelta para relacionar el giro con una de las cuatro potencias distintas de J.',
  },
};
export const rotationCopy = (locale: Locale) => copy[locale];
