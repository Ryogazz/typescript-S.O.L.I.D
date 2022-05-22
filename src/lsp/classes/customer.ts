import {
  CustomerProtocol,
  custumerOrInterprise,
  InterpriseProtocol,
} from './interfaces/customer-protocol';

export class IndividualCustomer
  implements CustomerProtocol, custumerOrInterprise
{
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }

  getname(): string {
    return this.firstName + ' ' + this.lastName;
  }
  getIDN(): string {
    return this.cpf;
  }
}

export class interpriseCustomer
  implements InterpriseProtocol, custumerOrInterprise
{
  name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  getname(): string {
    return this.name;
  }

  getIDN(): string {
    return this.cnpj;
  }
}
