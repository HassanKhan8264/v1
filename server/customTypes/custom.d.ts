import { Request, Response } from "express";
import { Request } from "express-serve-static-core";

declare module "express-serve-static-core" {
  interface Request {
    body?: any;
    user?: any;
  }
}
export module "express-serve-static-core" {
  interface Response {
    __: any;
  }
}
