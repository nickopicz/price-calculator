export class User {
  constructor(name, days, totalPrice, duration, people, fullStay) {
    this.name = name;
    this.days = days;
    this.duration = duration;
    this.totalPrice = totalPrice;
    this.people = people;
    this.fullStay = fullStay;
    this.unitCostPrime = 0;
    this.durationCost = 0;
    this.fullStay = true;
    this.remainingCost = 0;
  }

  setPrice() {
    let dayPerc = this.days / this.duration;
    let costPart = dayPerc * this.totalPrice;
    let perPerson = costPart / this.people;

    if (dayPerc < 1) {
      this.fullStay = false;
      let remain = 1 - dayPerc;
      this.remainingCost = remain * this.totalPrice;
    }

    this.unitCostPrime = perPerson;
  }

  get getUnitCost() {
    this.setPrice();
    return this.unitCostPrime;
  }

  get getDays() {
    return this.days;
  }
  get getName() {
    return this.name;
  }
  get stayDur() {
    return this.fullStay;
  }
  set stayDur(val) {
    this.fullStay = val;
  }
}

export class Container {
  constructor() {
    this.users = [];
    this.firstUnitCost = 0;
    this.peopleSecond = 0;
    this.remainder = 0;
    this.unitCostSecond = 0;
  }
  set Users(usersList) {
    this.users = usersList;
  }
  get Users() {
    return this.users;
  }

  get getRemainder() {
    this.leftOverPeople();
    for (var user in this.users) {
      if (user.remainingCost > 0) {
        this.remainder = user.remainingCost;
      }
    }

    let unitCostTemp = this.remainder / this.peopleSecond;
    this.unitCostSecond = unitCostTemp;
    return unitCostTemp;
  }
  set leftOver(people) {
    this.peopleSecond = people;
  }
  get leftOver() {
    return this.peopleSecond;
  }
}
