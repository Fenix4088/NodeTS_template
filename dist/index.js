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
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const post_router_1 = __importDefault(require("./src/routers/post.router"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const PORT = (process.env.PORT && +process.env.PORT) || 5000;
const DB = `mongodb+srv://fenix:${process.env.PASS}@cluster0.1kxrh.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', post_router_1.default);
const startApp = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        mongoose_1.default.connect(`${DB}`, (err) => {
            if (err)
                throw new Error(err.message);
            console.log('Conected to db');
        });
        app.listen(PORT, () => {
            console.log(`App started on PORT: ${PORT}`);
        });
    }
    catch (err) {
        console.error(err);
    }
});
startApp();
//# sourceMappingURL=index.js.map