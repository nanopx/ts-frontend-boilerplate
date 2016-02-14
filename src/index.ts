function greeter(person: string) {
  if(person.includes('Jane')) {
    return "Hello! " + person;
  }
}

var user = "Jane User";

document.body.innerHTML = greeter(user);