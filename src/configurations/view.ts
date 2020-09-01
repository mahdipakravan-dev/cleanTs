import express , { Application } from "express";

export default class ViewConfig{
    constructor(private readonly app:Application){ 
        app.set("view engine" , "ejs")
        app.set("views" , "public/views")
        app.use(express.static("public"));
    }
}