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
class PostServices {
    constructor() {
        this.create = (post) => __awaiter(this, void 0, void 0, function* () {
            const { author, title, content, picture } = post;
            const newPost = new post_model_1.default({ author, title, content, picture });
            yield newPost.save();
            return newPost;
        });
        this.getPosts = (id) => __awaiter(this, void 0, void 0, function* () {
            debugger;
            if (!id) {
                const allPosts = yield post_model_1.default.find();
                return allPosts;
            }
            const post = yield post_model_1.default.findById(id);
            return post;
        });
        // public update = async (req: TypedRequestBody<ICreatePostBody>, res: Response) => {
        //   const { author, title, content, picture, _id } = req.body;
        //   if(!_id) {
        //     res.status(400).json(`No post id`);
        //   }
        //   const updatedPost = await Post.findOneAndUpdate({_id}, {author, title, content, picture}, {new: true});
        //   if(!updatedPost) {
        //     res.status(404).json(`Post with id: ${_id} not found`);
        //   }
        //   res.status(200).json(updatedPost)
        // };
    }
}
exports.default = new PostServices();
//# sourceMappingURL=post.services.js.map