import { db } from "../db/index.js"
import { users } from "../schema/users.schema.js"
import { Request, Response } from "express"


export const getAllUsers = async(req:Request,res:Response) => {
    console.log(req.method)
    const allUsers = await db.select().from(users)
    return res.status(200).json({data:allUsers})
}