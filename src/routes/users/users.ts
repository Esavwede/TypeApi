

// Types 
import { Express, Router, Request, Response, NextFunction } from "express"

// Packages 
import { getUsers, signup } from "../../controllers/users/users"

const router = Router() 

export default function userRoutes( app: Express )
{

    router.get('/', getUsers )
    router.post('/signup', signup )

    app.use('/users', router ) 

}