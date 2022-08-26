class human {
  private name: string = "";
  private age: number = 0;

  public setName(n: string = "") {
    this.name = n;
  }

  public setAge(a: number = 0) {
    this.age = a;
  }

  public getName() {
    return this.name;
  }

  public getAge() {
    return this.age;
  }
}

const ali: any = new human();

ali.setName("Ali");

ali.setAge(23);

console.log("Name: " + ali.getName() + " Age: " + ali.getAge());
