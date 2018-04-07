var events = require('events');
var util = require('util');

//part1

// var emmitter = new events.EventEmitter();
//
// emmitter.on('laugh', (cough) => {
//   console.log(`hahahahhahahahahah ${cough}`);
// });
//
// emmitter.emit('laugh',1+3);


//part2

var Car = function(wheels, windows, tyres, breaks) {
  this.wheels = wheels;
  this.windows = windows;
  this.tyres = tyres;
  this.breaks = breaks;
};

util.inherits(Car, events.EventEmitter);

var merc = new Car(4, 8, 4, 10);
var bmw = new Car(5, 6, 7, 17);

var cars = [merc, bmw];

cars.forEach((car) => {
  car.on('rev', (horn) => {
    console.log(`This car with ${car.wheels} wheels, ${car.windows} windows, ${car.tyres} tyres and ${car.breaks} breaks is doing a weird horn: ${horn}`);
  })
})

merc.emit('rev', 'neeeenooooooneeeeenoooo');
bmw.emit('rev', 'lool');
