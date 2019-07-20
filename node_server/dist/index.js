"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//express stuff
var express_1 = __importDefault(require("express"));
//DB stuff
var mongoose_1 = __importDefault(require("mongoose"));
var post_1 = require("./post");
var app = express_1.default();
//body parser
var body_parser_1 = __importDefault(require("body-parser"));
// parse application/x-www-form-urlencoded
app.use(body_parser_1.default.urlencoded({ extended: false }));
// parse application/json
app.use(body_parser_1.default.json());
//configure db
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connect("mongodb://localhost:27017/D1G", { useNewUrlParser: true });
//schema
var post = mongoose_1.default.model("Post", post_1.postSchema);
//cors
var cors_1 = __importDefault(require("cors"));
app.use(cors_1.default());
/***********************************\
            RESTful API
\***********************************/
app.get('/api/posts', function (req, res) {
    post.find({}, function (err, posts) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.send(posts);
    });
});
app.post('/api/posts', function (req, res) {
    console.log(req.body);
    var newPost = new post(req.body);
    newPost.save().then(function (items) {
        res.status(200).send(newPost);
    });
});
var port = 3000;
app.listen(port, function () {
    console.log("Listening on port " + port);
});
