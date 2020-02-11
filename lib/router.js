const App = require('./app');
const {
  readBody,
  serveTodoList,
  serveStaticPage,
  serveNotFound,
  addTodo,
  addTodoItem,
  toggleItemStatus,
  deleteTodoItem,
  deleteTodo,
  editItem,
  editTitle
} = require('./handlers');

const app = new App();
app.use(readBody);
app.get('getTodoList', serveTodoList);
app.get('', serveStaticPage);
app.get('', serveNotFound);
app.post('addTodoTitle', addTodo);
app.post('addItemToTitle', addTodoItem);
app.post('markItem', toggleItemStatus);
app.post('deleteItem', deleteTodoItem);
app.post('deleteTodoTitle', deleteTodo);
app.post('editItem', editItem);
app.post('editTitle', editTitle);

const requestListener = function(req, res) {
  app.serve(req, res);
};

module.exports = {requestListener};