"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_controller_1 = __importDefault(require("../controllers/post.controller"));
const router = (0, express_1.Router)();
router.post('/posts', (req, res) => post_controller_1.default.create(req, res));
router.get('/posts', (req, res) => post_controller_1.default.getPosts(req, res));
router.get('/posts/:id', (req, res) => post_controller_1.default.getPosts(req, res));
router.put('/posts', (req, res) => post_controller_1.default.update(req, res));
exports.default = router;
//# sourceMappingURL=post.router.js.map