"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.verifyToken = exports.signJWT = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var tokenSignature = process.env.TOKEN_SIGNATURE;
// Creates a new token for the user
// Token expires in 1 hour
function signJWT(user, signature) {
    return jsonwebtoken_1["default"].sign(user, signature, {
        expiresIn: 30 * 60
    });
}
exports.signJWT = signJWT;
function verifyToken(req, res, next) {
    var bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        var bearer = bearerHeader.split(' ');
        var bearerToken = bearer[1];
        try {
            jsonwebtoken_1["default"].verify(bearerToken, String(tokenSignature));
            next();
        }
        catch (error) {
            res.sendStatus(401);
        }
    }
    else {
        res.sendStatus(401);
    }
}
exports.verifyToken = verifyToken;
//# sourceMappingURL=middlware.js.map