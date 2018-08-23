const Data = require('../util/data');
const Temp = require('../util/temp');
const getData = Data.getData;
const temp = Temp.temp;
const express = require('express');
const path = require('path');

exports.first = function (req, res, next) {
    getData.d1(function (err, s1data) {
        getData.d2(function (err, s2data) {
            console.log(s1data, s2data);
            res.render('layout', {
                s1: temp.s1(s1data),
                s2: temp.s2(s2data)
            });
        })
    });
}

exports.second = function (req, res, next) {
    var n = 2;
    var result = {};
    getData.d1(function (err, s1data) {
        result.s1data = s1data;
        --n || writeResult();
    })
    getData.d2(function (err, s2data) {
        result.s2data = s2data;
        --n || writeResult();
    })
    function writeResult() {
        res.render('layout', {
            s1: temp.s1(result.s1data),
            s2: temp.s2(result.s2data)
        });
    }
}

exports.third = function (req, res, next) {
    var n = 2;
    var result = {};
    getData.d1(function (err, s1data) {
        result.s1data = s1data;
        --n || writeResult();
    })
    getData.d2(function (err, s2data) {
        result.s2data = s2data;
        --n || writeResult();
    })
    function writeResult() {
        res.render('staticLayout', {
            s1: temp.s1(result.s1data),
            s2: temp.s2(result.s2data)
        });
    }
}

exports.fourth = function (req, res, next) {
    res.render('headLayout', function (err, str) {
        if (err) return res.req.next(err);
        res.setHeader('content-type', 'text/html; charset=utf-8');
        res.write(str);
    })
    var n = 2;
    getData.d1(function (err, s1data) {
        res.write('<section id="s1">' + temp.s1(s1data) + '</section>');
        --n || res.end();
    });
    getData.d2(function (err, s2data) {
        res.write('<section id="s2">' + temp.s2(s2data) + '</section>');
        --n || res.end();
    });
}

exports.bigpipe = function (req, res, next) {
    res.render('headLayout', function (err, str) {
        if (err) return res.req.next(err);
        res.setHeader('content-type', 'text/html; charset=utf-8');
        res.write(str);
        res.write('<section id="s1"></section><section id="s2"></section>');
    });
    var n = 2;
    getData.d1(function (err, s1data) {
        res.write('<script>$("#s1").html("' + temp.s1(s1data).replace(/"/g, '\\"') + '")</script>');
        --n || res.end();
    });
    getData.d2(function (err, s2data) {
        res.write('<script>$("#s2").html("' + temp.s2(s2data).replace(/"/g, '\\"') + '")</script>');
        --n || res.end();
    });
}