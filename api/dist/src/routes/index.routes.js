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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var auth_1 = __importDefault(require("../../db/auth"));
var post_1 = __importDefault(require("../../db/post"));
var user_1 = __importDefault(require("../../db/user"));
var middlware_1 = require("../../middleware/middlware");
var routes = (0, express_1.Router)();
routes.get('/', function (req, res) {
    return res.send('Express blog api');
});
routes.post('/users/new', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, defaultIMG, email, password, results;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, username = _a.username, defaultIMG = _a.defaultIMG, email = _a.email, password = _a.password;
                return [4 /*yield*/, user_1["default"]["new"](username, defaultIMG, email, password)];
            case 1:
                results = _b.sent();
                res.status(201).json(results);
                return [2 /*return*/];
        }
    });
}); });
routes.post('/users/login', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, details;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password;
                return [4 /*yield*/, auth_1["default"].login(email, password)];
            case 1:
                details = _b.sent();
                if (details != null) {
                    res.status(200).json(details);
                }
                else {
                    res.status(403).json({ error: 'email or password is incorrect' });
                }
                return [2 /*return*/];
        }
    });
}); });
routes.get('/users/:id', middlware_1.verifyToken, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, user_1["default"].single(parseInt(id))];
            case 1:
                results = _a.sent();
                res.status(200).json(results);
                return [2 /*return*/];
        }
    });
}); });
routes.put('/users/:id/update', middlware_1.verifyToken, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, imgURL, username, userBio, results;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.params.id;
                _a = req.body, imgURL = _a.imgURL, username = _a.username, userBio = _a.userBio;
                return [4 /*yield*/, user_1["default"].updateProfile(parseInt(id), imgURL, username, userBio)];
            case 1:
                results = _b.sent();
                res.json(results);
                return [2 /*return*/];
        }
    });
}); });
routes.get('/users/:id/posts/', middlware_1.verifyToken, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, post_1["default"].singleUser(parseInt(id))];
            case 1:
                results = _a.sent();
                res.json(results);
                return [2 /*return*/];
        }
    });
}); });
routes.get('/users/:id/posts/:postID', middlware_1.verifyToken, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var postID, results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                postID = req.params.postID;
                return [4 /*yield*/, post_1["default"].single(parseInt(postID))];
            case 1:
                results = _a.sent();
                res.status(200).json(results);
                return [2 /*return*/];
        }
    });
}); });
routes["delete"]('/users/:id/posts/:postID', middlware_1.verifyToken, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var postID;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                postID = req.params.postID;
                return [4 /*yield*/, post_1["default"]["delete"](parseInt(postID))];
            case 1:
                _a.sent();
                res.status(204).json({ message: 'successfully deleted post' });
                return [2 /*return*/];
        }
    });
}); });
routes.post('/users/:id/posts/new', middlware_1.verifyToken, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, url, title, description, content, category, publish, results;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.params.id;
                _a = req.body, url = _a.url, title = _a.title, description = _a.description, content = _a.content, category = _a.category, publish = _a.publish;
                return [4 /*yield*/, post_1["default"]["new"](parseInt(id), url, title, description, content, category, publish)];
            case 1:
                results = _b.sent();
                res.status(201).json(results);
                return [2 /*return*/];
        }
    });
}); });
routes.get('/feed', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, post_1["default"].all()];
            case 1:
                result = _a.sent();
                res.json(result);
                return [2 /*return*/];
        }
    });
}); });
routes.get('/feed/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, post_1["default"].single(parseInt(id))];
            case 1:
                results = _a.sent();
                res.json(results);
                return [2 /*return*/];
        }
    });
}); });
exports["default"] = routes;
//# sourceMappingURL=index.routes.js.map