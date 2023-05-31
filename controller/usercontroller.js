"use strict";
// const user = require("../models/useSchema");
// const User = require("../models/useSchema");
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUserData = exports.deleteAllUsers = exports.deleteUser = exports.updateUser = exports.addUser = void 0;
var useSchema_1 = require("../models/useSchema");
var validator = require("validator");
// Post user data
function addUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var user, fname, lname, email, phone1, profile, findemail, phone, findphone, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user = new useSchema_1.User(req.body);
                    fname = req.body.firstname;
                    lname = req.body.lastname;
                    email = req.body.email;
                    phone1 = req.body.phone;
                    profile = req.body.profile;
                    console.log("phone", phone1);
                    if (!fname)
                        return [2 /*return*/, res.status(400).send({ "message": "Enter User first name" })];
                    if (!lname)
                        return [2 /*return*/, res.status(400).send({ "message": "Enter User last name" })];
                    // if (isNaN("")) return res.status(400).send({ "message": "Enter User last name" });
                    if (!email)
                        return [2 /*return*/, res.status(400).send({ "message": "Enter User email" })];
                    if (!profile)
                        return [2 /*return*/, res.status(400).send({ "message": "Enter User profile" })];
                    if (!phone1)
                        return [2 /*return*/, res.status(400).send({ "message": "Enter User phone number" })];
                    if (!validator.isEmail(email))
                        return [2 /*return*/, res.status(400).send({ "message": "Enter valid email" })];
                    if (!validator.isLength(phone1, 6, 10))
                        return [2 /*return*/, res.status(400).send({ "message": "Enter valid Phone number" })];
                    if (isNaN(Number(phone1)))
                        return [2 /*return*/, res.status(400).send({ "message": "Enter Numeric phone data .." })];
                    if (!validator.isMobilePhone(phone1))
                        return [2 /*return*/, res.status(400).send({ "message": "Enter valid phone number" })];
                    return [4 /*yield*/, useSchema_1.User.findOne({ email: email })];
                case 1:
                    findemail = _a.sent();
                    if (findemail) {
                        console.log("findemail", findemail);
                        return [2 /*return*/, res.status(404).send({ message: "Email Already Exist!!" })];
                    }
                    phone = req.body.phone;
                    return [4 /*yield*/, useSchema_1.User.findOne({ phone: phone })];
                case 2:
                    findphone = _a.sent();
                    if (findphone) {
                        console.log("fingphone", findphone);
                        return [2 /*return*/, res.status(404).send({ message: "Phone Number Already Exist!!" })];
                    }
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, user.save()];
                case 4:
                    _a.sent();
                    return [2 /*return*/, res.status(201).send(user)];
                case 5:
                    e_1 = _a.sent();
                    return [2 /*return*/, res.status(500).send({ "message": "this is internal server error" })];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.addUser = addUser;
function updateUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _id, updatedData, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    _id = req.body._id;
                    return [4 /*yield*/, useSchema_1.User.findByIdAndUpdate(_id, req.body)];
                case 1:
                    updatedData = _a.sent();
                    return [2 /*return*/, res.status(200).send(updatedData)];
                case 2:
                    e_2 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ message: "id is not a match" })];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.updateUser = updateUser;
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _id, deletedData, data, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    _id = req.body._id;
                    return [4 /*yield*/, useSchema_1.User.findByIdAndDelete(_id)];
                case 1:
                    deletedData = _a.sent();
                    return [4 /*yield*/, useSchema_1.User.find()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, res.status(200).send(data)];
                case 3:
                    e_3 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ message: "id is not a match" })];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.deleteUser = deleteUser;
// Delete all users
function deleteAllUsers(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var deletedData, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, useSchema_1.User.deleteMany()];
                case 1:
                    deletedData = _a.sent();
                    return [2 /*return*/, res.status(200).send(deletedData)];
                case 2:
                    e_4 = _a.sent();
                    return [2 /*return*/, res.status(400).send(e_4)];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.deleteAllUsers = deleteAllUsers;
// Get all user data
function getAllUserData(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var page, limit, skip, userData, count, e_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    page = +req.query.page;
                    limit = +req.query.limit;
                    if (!page)
                        page = 0;
                    if (!limit)
                        limit = 10;
                    skip = page * limit;
                    return [4 /*yield*/, useSchema_1.User.find().skip(skip).limit(limit)];
                case 1:
                    userData = _a.sent();
                    return [4 /*yield*/, useSchema_1.User.countDocuments()];
                case 2:
                    count = _a.sent();
                    return [2 /*return*/, res.status(200).json({ limit: limit, page: page, user: userData, count: count })];
                case 3:
                    e_5 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_5)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getAllUserData = getAllUserData;
