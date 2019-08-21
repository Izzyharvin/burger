var connection = require("../config/connection.js");

function printQuestionMarks(number) {
    var array = [];

    for (var i = 0; i < number; i++) {
        array.push("?");
    }

    return array.toString();
}

function objToSql(object) {
    var array = [];

    for (var key in object) {
        var value = object[key];

        if (Object.hasOwnProperty.call(object, key)) {
            if (typeof value === "string" && value.indexOf(" ") >=0) {
                value = "'" + value + "'";
            }

            array.push(key + "=" + value);
        }
    }

    return array.toString();
}

var orm = {
    all: function(tableInput, callback) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                console.log(err);
            }
            callback(result);
        });
    },
    create: function(table, cols, vals, callback) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                console.log(err);
            }
            callback(result);
        });
    },
    update: function(table, objColVals, condition, callback) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                console.log(err);
            }
            callback(results);
        });
    },
    delete: function(table, condition, callback) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if (err) {
                console.log(err);
            }
            callback(result);
        });
    }
};

module.exports = orm;
