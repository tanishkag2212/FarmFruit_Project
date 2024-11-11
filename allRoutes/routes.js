let routes = require("express").Router();

routes.use("/api/v1/city",require("../controllers/CityController"));
routes.use("/api/v1/product",require("../controllers/ProductController"));
routes.use("/api/v1/category",require("../controllers/CategoryController"));
routes.use("/api/v1/subcategory",require("../controllers/SubCategoryController"));
routes.use("/api/v1/user",require("../controllers/UserController"));
routes.use("/api/v1/order",require("../controllers/OrderController"));
routes.use("/api/v1/myorder",require("../controllers/MyOrderController"));
routes.use("/api/v1/auth",require("../controllers/AuthController"));
routes.use("/api/v1/admin/auth",require("../controllers/AdminAuthController"));
routes.use("/api/v1/admin",require("../controllers/AdminController"));

module.exports = routes;