"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
class BaseController {
    response(res, code, status, message, data) {
        if (!message) {
            message = status ? "Success" : "Failed";
        }
        const json = { status, message };
        if (data) {
            if (status) {
                json.data = data;
            }
            else {
                json.error = data;
            }
        }
        res.status(code).json({ status, message, data });
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=baseController.js.map