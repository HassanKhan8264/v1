"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes/routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)({
    origin: "http://localhost:4200",
    credentials: true,
}));
app.use("/api/v1", routes_1.default);
app.listen(config_1.default.PORT, () => {
    console.log(`Server is running on port ${config_1.default.PORT}`);
});
//# sourceMappingURL=index.js.map