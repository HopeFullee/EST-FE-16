/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

class Animal {
  head = 1;

  #private = 'asd';

  constructor(name) {
    this.legs = 4;
    this.name = name;
    this.stomach = [];
    console.log(this.#private);
  }

  get eat() {
    return this.stomach;
  }
}

class Cat extends Animal {
  constructor(name, pattern = 'gray stripe') {
    super(name);
    this.pattern = pattern;
  }

  foo() {
    return 'foo';
  }

  bar() {
    return 'bar';
  }
}

const animal = new Animal('몽쉘이');

const cat = new Cat('mrnight');

// console.log(cat);

console.log(animal);

const obj = {
  key: 'value',

  foo: function () {
    return this.key;
  },

  bar: () => {
    return this.key;
  },

  concise() {
    return this.key;
  },
};

// console.log(obj.bar());

function Maker() {
  this.name = 'name';
  this.func = function () {
    return 'func';
  };
}

console.log(new Maker());

console.log(new Object());

function myfunc() {
  return 'func';
}

const myfunc2 = () => {
  return 'func';
};

console.log(myfunc.prototype);
console.log(myfunc2.prototype);
