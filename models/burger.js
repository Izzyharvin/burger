var orm = require("../config/orm.js");

var burger = {
    all: function (callback) {
        orm.all("burgers", function (res) {
            callback(res);
        });
    },
    create: function (cols, vals, callback) {
        orm.create("burgers", cols, vals, function (res) {
            callback(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            callback(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("burger", condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;