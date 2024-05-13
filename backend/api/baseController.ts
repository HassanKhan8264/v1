import {Response} from "express";

export abstract class BaseController {

    response(res: Response, code: number, status: boolean, message?: string, data?: any) {
        if (!message) { message = status ? "Success" : "Failed"; }
        const json: any = {status, message};

        if (data) {
            if (status) {
                json.data = data;
            } else {
                json.error = data;
            }
        }

        // if (meta) { json.meta = meta; }
        res.status(code).json({ status, message, data });
        // return res.status(code).json(json);
    }
}
