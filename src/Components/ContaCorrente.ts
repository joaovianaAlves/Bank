import Cliente from "./Cliente";
import Movimentos from "./Movimentos";

export default class ContaCorrente {
  cliente: Cliente;
  tipoConta: "total" | "simples" | "economica";
  historicoMoves: Movimentos[];

  constructor(cliente: Cliente, tipoConta: "total" | "simples" | "economica") {
    this.cliente = cliente;
    this.historicoMoves = []; //sempre sera um array vazio pois so sera incluido valores ao depositar ou sacar
    this.tipoConta = tipoConta;
  }

  Depositar(descricao: string, valores: number) {
    this.historicoMoves.push(new Movimentos(descricao, valores));
  }

  Sacar(descricao: string, valores: number) {
    this.historicoMoves.push(new Movimentos(descricao, -valores));
  }

  Saldo() {
    return this.historicoMoves.reduce((prev, data) => prev + data.valor, 0);
  }
}
