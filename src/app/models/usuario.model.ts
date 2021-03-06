export class Usuario {

  constructor(
    public uid      : string,
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
      this.sex = '';
      this.birthDate = '';
      this.country = '';
      this.facebook = '';
      this.github = '';
      this.linkedIn = '';
      this.twitter = '';
      this.bio = '';
  }

}