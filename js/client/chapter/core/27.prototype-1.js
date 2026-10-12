/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

const animal = {
  legs: 4,
  tail: true,
  get eat() {
    return this.stomach;
  },
  set eat(food) {
    this.stomach = [];
    this.stomach.push(food);
  },
};

const cat = {
  pattern: 'gray stripes',
  hunt(target) {
    this.prey = target;
    this.eat = this.prey;
    return `${target}에게 조용히 접근 후 먹는다.`;
  },
  __proto__: animal,
};

cat.hunt('mouse');

// 생성자 함수

function Animal() {
  this.legs = 4;
  this.tail = true;
  this.getEat = function () {
    return this.stomach ?? [];
  };
  this.setEat = function (food) {
    this.stomach = [];
    this.stomach.push(food);
  };
}

function Cat(name) {
  Animal.call(this);
  this.name = name;
  this.pattern = 'gray stripes';
  this.hunt = function (target) {
    this.prey = target;
    return `${target}에게 조용히 접근합니다.`;
  };
}

const _animal = new Animal();

const _cat = new Cat('새벽');

class Bar {
  constructor() {
    this.what = '';
  }

  barFunc = function (sound) {
    return sound;
  };

  static foo(sound) {
    return sound;
  }
}

const bar = new Bar();

console.log(Bar.prototype);
