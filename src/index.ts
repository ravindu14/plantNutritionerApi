import "reflect-metadata";

import Init from "./init";

// Load Controllers
import AuthenticationController from "./authentication/authentication.controller";
import DeficiencyController from "./deficiency/deficiency.controller";
import ProductController from "./products/products.controller";
import ResearchController from "./research/research.controller";

const app = new Init([
  new AuthenticationController(),
  new DeficiencyController(),
  new ProductController(),
  new ResearchController()
]);

app.listen();
