export class Registration<T>{
  value: T;
  name: string;
  email: string;
  password: string;
  password_confirmation: string;

  constructor(options: {
      value?: T,
      name?: string,
      email?: string,
      password?: string,
      password_confirmation?: string,
    } = {}) {
    this.value = options.value;
    this.name = options.name || '';
    this.email = options.email || '';
    this.password = options.password || '';
    this.password_confirmation = options.password_confirmation || '';
  }
}
