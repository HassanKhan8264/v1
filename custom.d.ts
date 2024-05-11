// Import necessary modules
import express from "express";

export declare module "express" {
    export interface Request {
        // Common properties for CRUD operations
        userId?: string; // Optional, for identifying the user making the request
    }

    export interface Response {
        __: any; // Placeholder for any additional response data
    }
}
