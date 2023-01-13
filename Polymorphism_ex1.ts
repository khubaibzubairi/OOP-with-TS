interface patient {
  patientInfo(): any;
  diagnos(): any;
  patientHistory(): any;
  patientStatus(): any;
}

class Cardiology implements patient {
  patientInfo() {}

  diagnos() {}

  patientHistory() {}

  patientStatus() {}
}

class Nurology implements patient {
  patientInfo() {}

  diagnos() {}

  patientHistory() {}

  patientStatus() {}
}

class Dental implements patient {
  patientInfo() {}

  diagnos() {}

  patientHistory() {}

  patientStatus() {}
}

let patent1: patient = new Nurology();
