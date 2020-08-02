"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
/* eslint-disable func-names */
var mongoose_1 = require("mongoose");
var roles_1 = require("@app/modules/permissions/roles");
var types_1 = require("@app/utils/mongo/types");
var security_1 = require("@app/utils/security");
var UserSchema = new mongoose_1.Schema({
    name: types_1["default"].required.string,
    sex: types_1["default"].required.string,
    age: types_1["default"].required.number,
    hobby: types_1["default"].required.string,
    dayOfBirth: types_1["default"].required.date,
    email: types_1["default"].required.string,
    roles: [types_1["default"].required["enum"]([roles_1.Roles.ADMIN, roles_1.Roles.USER])],
    password: types_1["default"].required.string
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt"
    }
});
exports.UserSchema = UserSchema;
UserSchema.pre("save", function (next) {
    if (!this.isModified("password"))
        return next();
    this.password = security_1.encrypt(this.password);
    return next();
});
UserSchema.pre("findOne", function (next) {
    var password = this.getQuery().password;
    if (password) {
        this.setQuery(__assign(__assign({}, this.getQuery()), { password: security_1.encrypt(password) }));
    }
    return next();
});
UserSchema.post("findOne", function (user, next) {
    if (user)
        Object.assign(user, { password: security_1.decrypt(user.password) });
    return next();
});
UserSchema.pre("find", function (next) {
    var password = this.getQuery().password;
    if (password) {
        this.setQuery(__assign(__assign({}, this.getQuery()), { password: security_1.encrypt(password) }));
    }
    return next();
});
