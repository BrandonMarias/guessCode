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
      { code: 173, name: "Entre masrcos" },
      { code: 409, name: "Tapa Gas" },
      { code: 638, name: "Salpicadera vs Pilar" },
      { code: 646, name: "Faro vs Salpicadera" },
    ],
    "Partes Interiores": [
      { code: 21, name: "lavadora" },
      { code: 22, name: "refrigerador" },
      { code: 23, name: "microondas" },
      { code: 24, name: "licuadora" },
    ],
    Herramientas: [
      { code: 31, name: "martillo" },
      { code: 32, name: "destornillador" },
      { code: 33, name: "taladro" },
      { code: 34, name: "llave inglesa" },
    ],
  };