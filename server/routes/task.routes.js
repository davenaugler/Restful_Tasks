const TaskController = require("../controllers/task.controller");

module.exports = function(app) {
  app.post("/api/tasks/create", TaskController.createNewTask);
  app.get("/api/tasks",TaskController.getAllDaTasks);
  app.get("/api/tasks/:id", TaskController.getOneSingleTask);
  app.put("/api/tasks/update/:id", TaskController.updateOneSingleTask);
  app.delete("/api/tasks/delete/:id", TaskController.deleteOneSingleTask);
}