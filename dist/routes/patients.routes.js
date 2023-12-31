"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patients_controller_1 = __importDefault(require("../controllers/patients.controller"));
const patients_validator_1 = __importDefault(require("../validators/patients.validator"));
const validate_1 = __importDefault(require("../middlewares/validate"));
const trycatch_1 = __importDefault(require("../middlewares/trycatch"));
const auth_1 = __importDefault(require("../middlewares/auth"));
const router = express_1.default.Router();
router.post("/register", (0, validate_1.default)(patients_validator_1.default.create), (0, trycatch_1.default)(patients_controller_1.default.create));
router.get("/tests", (0, auth_1.default)(), (0, trycatch_1.default)(patients_controller_1.default.getTests));
router.get("/reports", (0, auth_1.default)(), (0, trycatch_1.default)(patients_controller_1.default.getReports));
exports.default = router;
//# sourceMappingURL=patients.routes.js.map