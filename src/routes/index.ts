
import { Express } from "express";

import userRoutes from "./users/users";

export default function routes( app: Express ): void 
{

    // Endpoints 
    userRoutes(app) 
}