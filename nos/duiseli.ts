class Country<T> {
  code: T;

  constructor(code: T) {
    this.code = code;
  }
}

const Bangladesh = new Country<string>("DB");
