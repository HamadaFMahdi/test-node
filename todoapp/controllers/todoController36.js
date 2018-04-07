//dummy data for ep 34.
// let data = [{item: 'get milk'}, {item: 'get food'}, {item: 'get hot choc'}];

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//connect to database
mongoose.connect('mongodb://***:***@ds159493.mlab.com:59493/hamada-todo')

//create a schema - this is like a blue print
const todoSchema = new mongoose.Schema({
  item: String
});

const Todo = mongoose.model('Todo', todoSchema);
const urlecodedParser = bodyParser.urlencoded({extended: false});

module.exports = (app) => {

  app.get('/todo', (req, res) => {
    //this time we need to get data from mongodb and pass it to the view
    //.find will go to the db and get all the items if we put {}
    //but if we want specific we can use:
    // Todo.find({item: 'buy flowers'})
    Todo.find({}, (err, data) => {
      if (err) throw err;
      res.render('todo', {todos: data});
    });
    // before we would render the array to the view
    // res.render('todo', {todos: data});
  });

  //user adds item
  app.post('/todo', urlecodedParser, (req, res) => {
    //now we need to get data from the view and add it to mongodb
    const newTodo = Todo(req.body).save((err, data) => {
      if (err) throw err;
      res.json(data);
    });
    // before we would just push it to the end of the data array
    // data.push(req.body);
    // res.json(data);

  });

  //delete
  app.delete('/todo/:item', (req, res) => {
    //delete item from mongodb
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove((err, data) => {
      if (err) throw err;
      res.json(data);
    });
    // data = data.filter((todo) => {
    //   return todo.item.replace(/ /g, '-') !== req.params.item;
    // });
    // res.json(data);
  });
};
