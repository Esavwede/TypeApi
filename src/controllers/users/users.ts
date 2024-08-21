
import {  Request, Response} from "express"
import { UserSignupReqBody } from "../../interfaces/request/body/users/users"
import { SignupResponseBody } from "../../interfaces/response/body/users/user"


export function getUsers(req: Request, res: Response){
    res.json({ msg:"users" })
}

export function signup(
    req: Request<{},{}, UserSignupReqBody >,
    res: Response< SignupResponseBody >)
{
    const newUser = req.body 
    console.log(" User Signedup ")
    console.dir( newUser )
    res.json({"msg":"signup successfull", data: { email: req.body.email  }})
}


