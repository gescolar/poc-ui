
export class Veiculo {
  placa: string;
  modelo: string;
  versao: string;
  anoFab: string;
  anoMod: string;
  combustivel: string;
  segmento: string;
  subsegmento: string;
  carroceria: string;
  potencia: string;
  procedencia: string;
  eixosQtd: string;
  pBT: string;
  cMT: string;
  motorizacao: string;
  numLugares: string;
  capacCarga: string;
  numCaixaCambio: string;
  numEixoTras: string;
  numEixoAux: string;
  numMotor: string;
  complemento: Complemento[];
}

export class Complemento {
  fipe: string;
  descAno: string;
  combustivel: string;
  preco: string;
}

