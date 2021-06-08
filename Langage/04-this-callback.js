class Contact {
  constructor(name) {
    this.name = name;
  }
  hello() {
    setTimeout(() => {
      // pseudo variable (créé automatiquement au moment de l'appel)
      // dans une fonction fléchée, les pseudos variables ne sont pas créees
      console.log('Hello my name is ' + this.name);
    }, 1000);
  }
}

const romain = new Contact('Romain');
romain.hello();
