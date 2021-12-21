"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_model_1 = __importDefault(require("../models/post.model"));
const post_services_1 = __importDefault(require("../services/post.services"));
class PostController {
    constructor() {
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { author, title, content, picture } = req.body;
                const newPost = yield post_services_1.default.create({ author, title, content, picture });
                res.status(200).send(newPost);
            }
            catch (err) {
                res.status(500).send(err.message);
            }
        });
        this.getPosts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.query;
            try {
                const getPostsResult = yield post_services_1.default.getPosts(id);
                if (!getPostsResult)
                    res.status(204).json(`Post by id: ${id} wasnt found`);
                res.status(200).json(getPostsResult);
            }
            catch (e) {
                res.status(500).send(e);
            }
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { author, title, content, picture, _id } = req.body;
            if (!_id) {
                res.status(400).json(`No post id`);
            }
            const updatedPost = yield post_model_1.default.findOneAndUpdate({ _id }, { author, title, content, picture }, { new: true });
            if (!updatedPost) {
                res.status(404).json(`Post with id: ${_id} not found`);
            }
            res.status(200).json(updatedPost);
        });
    }
}
exports.default = new PostController();
//# sourceMappingURL=post.controller.js.map