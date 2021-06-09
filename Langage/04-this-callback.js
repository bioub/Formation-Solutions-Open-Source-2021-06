class Contact {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log('Hello my name is ' + this.name);
  }
  helloAsync() {
    setTimeout(() => this.hello(), 1000);
  }
}

const romain = new Contact('Romain');
romain.helloAsync();
