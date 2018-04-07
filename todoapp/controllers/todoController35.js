//dummy data for ep 34.
let data = [{item: 'get milk'}, {item: 'get food'}, {item: 'get hot choc'}];

const bodyParser = require('body-parser');

const urlecodedParser = bodyParser.urlencoded({extended: false});

module.exports = (app) => {

  app.get('/todo', (req, res) => {
    res.render('todo', {todos: data});

  });

  //user adds item
  app.post('/todo', urlecodedParser, (req, res) => {
    data.push(req.body);
    res.json(data);

  });

  //delete
  app.delete('/todo/:item', (req, res) => {
    data = data.filter((todo) => {
      return todo.item.replace(/ /g, '-') !== req.params.item;
    });
    res.json(data);
  });
};
