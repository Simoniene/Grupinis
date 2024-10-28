type AthleteType = {
  athleteID: string;
  name: string;
  age: number;
  nationality: string;
};

abstract class Athlete {
  athleteID: string;
  name: string;
  age: number;
  nationality: string;

  constructor(
    athleteID: string,
    name: string,
    age: number,
    nationality: string
  ) {
    this.athleteID = athleteID;
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  abstract trainSeason(): void;
  abstract competition(): void;

  getAthleteID(): string {
    return this.athleteID;
  }

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  getNationality(): string {
    return this.nationality;
  }
}

interface Endurance {
  enduranceTraining(): void;
  checkEnduranceLevel(): void;
}

class Sprinter extends Athlete {
  best100mTime: number;
  best200mTime: number;

  constructor(
    athleteID: string,
    name: string,
    age: number,
    nationality: string,
    best100mTime: number,
    best200mTime: number
  ) {
    super({ athleteID, name, age, nationality });
    this.best100mTime = best100mTime;
    this.best200mTime = best200mTime;
  }
  trainSeason(): void {
    console.log("..........");
  }
  competition(): void {
    console.log("..........");
  }
  train(): void {
    console.log(`${this.getName()} training for sprinting.`);
  }

  compete(): void {
    console.log(`${this.getName()} competing in a sprint!`);
  }

  displayBestTimes(): void {
    console.log(
      `${this.getName()}'s best 100m time: ${this.best100mTime} seconds`
    );
    console.log(
      `${this.getName()}'s best 200m time: ${this.best200mTime} seconds`
    );
  }
}

class MarathonRunner extends Athlete implements Endurance {
  bestMarathonTime: number;

  constructor(
    athleteID: string,
    name: string,
    age: number,
    nationality: string,
    bestMarathonTime: number
  ) {
    super(athleteID, name, age, nationality);
    this.bestMarathonTime = bestMarathonTime;
  }
  enduranceTraining(): void {
    console.log("..........");
  }
  checkEnduranceLevel(): void {
    console.log("..........");
  }
  trainSeason(): void {
    console.log("..........");
  }
  competition(): void {
    console.log("..........");
  }
}
