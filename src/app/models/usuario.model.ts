export class Usuario {

  constructor(
    public uid      : string,
    public email    : string,
    public userName : string,
    public role     : string,
    public img      ?: string,
    public sex      ?: string,
    public birthDate?: string,
    public country  ?: string,
    public facebook ?: string,
    public github   ?: string,
    public linkedIn ?: string,
    public twitter  ?: string,
    public bio      ?: string,
    public event    ?: string,
    public group    ?: string,
    public insignias?: string[]
  ) {}

}