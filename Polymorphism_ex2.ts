interface booking {
  booking(): any;
  status(): any;
  payment(): any;
}

class PC implements booking {
  booking() {}

  status() {}

  payment() {}
}

class Avari implements booking {
  booking() {}

  status() {}

  payment() {}
}

class Pakeeza implements booking {
  booking() {}

  status() {}

  payment() {}
}

let booking1: booking = new Pakeeza();
