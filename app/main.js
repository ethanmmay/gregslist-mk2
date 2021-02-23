import CarsController from "./Controllers/CarsController.js";
import HousesController from "./Controllers/HousesController.js"
import JobsController from "./Controllers/JobsController.js"

class App {
  // valuesController = new ValuesController();
  CarsController = new CarsController();
  HousesController = new HousesController();
  JobsController = new JobsController();
}

window["app"] = new App();
