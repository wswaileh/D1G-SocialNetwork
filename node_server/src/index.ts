//express stuff
import express from "express";
import { Request, Response } from "express";
//DB stuff
import mongoose from "mongoose";
import { postSchema } from "./post";

const app = express();

//body parser
import bodyParser from "body-parser";
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


//configure db
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/D1G", { useNewUrlParser: true })
//schema
let post = mongoose.model("Post", postSchema );

//cors
import cors from "cors";

app.use(cors());
 /***********************************\  
             RESTful API
 \***********************************/
app.get('/api/posts' ,  (req : Request , res: Response) => {
    post.find({}, (err, posts)=> {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.send(posts);
    });
});

app.post('/api/posts' ,  (req : Request , res: Response) => {
    console.log(req.body);
    var newPost = new post(req.body);
    newPost.save().then(items => {
        res.status(200).send(newPost);
    })
});

const port = 3000;
app.listen(port, ()=> {
    console.log("Listening on port " + port);
});