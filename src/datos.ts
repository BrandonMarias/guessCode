export interface Item {
    code: number;
    name: string;
  }

export const stacks: Record<string, Item[]> = {
    "Holguras y niveles": [
      { code: 193, name: "Faro vs Parrilla" },
      { code: 622, name: "Faro vs facia" },
      { code: 621, name: "Parrilla vs Facia" },
      { code: 307, name: "Cofre vs Parrilla" },
      { code: 647, name: "Faro vs Cofre" },
      { code: 121, name: "Salpicadera vs cofre" },
      { code: 278, name: "Marco vs Toldo" },
      { code: 173, name: "Entre marcos" },
      { code: 409, name: "Tapa Gas" },
      { code: 638, name: "Salpicadera vs Pilar" },
      { code: 646, name: "Faro vs Salpicadera" },
    ],
    "Partes Interiores": [
      { code: 717, name: "Botones volante" },
      { code: 606, name: "Pad Volante" },
      { code: 464, name: "Volante" },
      { code: 295, name: "Odometro" },
      { code: 629, name: "Pantalla Meter" },
      { code: 450, name: "Velocimetro" },
      { code: 113, name: "SW ignicion" },
      { code: 349, name: "Respaldo Asiento" },
      { code: 92, name: "Candado cinturon seguridad" },
      { code: 628, name: "Porta vasos" },
      { code: 50, name: "Asiento" },
      { code: 779, name: "Sw calefactor asiento" },
      { code: 3, name: "Aire Acondicionado" },
      { code: 785, name: "Perilla 4WD" },
      { code: 207, name: "Freno de mano" },
      { code: 464, name: "Ventilas Tablero" },
      { code: 235, name: "SW intermitentes" },
      { code: 630, name: "Pantalla" },
      { code: 669, name: "Toma corriente tablero" },
      { code: 672, name: "Jack Audio" },
      { code: 315, name: "Perilla Palanca Velocidades" },
      { code: 303, name: "Palanca velocidades TM" },
      { code: 304, name: "Palanca velocidades TA" },
      { code: 152, name: "Cubierta palanca velocidades" },
    ],
    Herramientas: [
      { code: 31, name: "martillo" },
      { code: 32, name: "destornillador" },
      { code: 33, name: "taladro" },
      { code: 34, name: "llave inglesa" },
    ],
  };