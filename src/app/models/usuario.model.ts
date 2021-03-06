export class Usuario {

  constructor(
    public email    : string,
    public nick     : string,
    public sex      ?: string,
    public birthDate?: string,
    public country  ?: string,
    public facebook ?: string,
    public github   ?: string,
    public linkedIn ?: string,
    public twitter  ?: string,
    public bio      ?: string
  ) {
    
  }

}