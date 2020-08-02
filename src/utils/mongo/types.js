"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var mongooseTypes = {
    required: {
        string: {
            type: String,
            required: true
        },
        number: {
            type: Number,
            required: true
        },
        objectId: {
            type: mongoose_1.Schema.Types.ObjectId,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        "enum": function (enums) { return ({
            type: String,
            "enum": enums,
            required: true
        }); }
    },
    not_required: {
        string: {
            type: String,
            "default": null
        },
        number: {
            type: Number,
            "default": null
        },
        objectId: {
            type: mongoose_1.Schema.Types.ObjectId,
            "default": null
        },
        date: {
            type: Date,
            "default": null
        },
        "enum": function (enums) { return ({
            type: String,
            "enum": enums,
            "default": null
        }); }
    }
};
exports["default"] = mongooseTypes;
