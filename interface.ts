interface a {
  name: string;
  age: number;
  getName(): void;
}

interface b extends a {
  getAge(): number;
}

class aa implements a {
  name: string = "";
  age: number = 0;
  constructor(n: string) {
    this.name = n;
  }
  getName(): void {
    console.log(this.name);
  }
}

class bb implements a {
  name: string = "";
  age: number = 0;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  getName(): void {
    console.log(this.name);
  }

  getAge() {
    return this.age;
  }
}

const aobj: any = new aa("Khubaib");

aobj.getName();

const bobj: any = new bb("Nouman", 23);

bobj.getName();

console.log(bobj.getAge());
