var assert = require('assert');
const { googleString } = require('../helpers/googleBoolean.js')

console.log(googleString(), "this is a test")

const googleString1 = 'site:lever | site:greenhouse.io | site:jobs.ashbyhq.com | site:app.dover.io (engineer | developer) "react" -staff -senior -sr. -principal -lead -c++';
const googleString2 = 'site:lever (engineer) "react" "javascript" -c++';

const test1 = {
    site: ['lever', 'greenhouse.io', 'jobs.ashbyhq.com', 'app.dover.io'],
    title: ['engineer', 'developer'],
    description: ['react'],
    omits: ['staff', 'senior', 'sr', 'principal', 'lead', 'c++']
};

const test2 = {
    site: ['lever'],
    title: ['engineer'],
    describe: ['react', 'javascript'],
    omits: ['c++']
}

describe('Google-Search', function () {
    describe('googleString()', function () {
        it('should take in an object and return a google string', function () {
            assert.deepEqual(googleString(test1), googleString1);
            assert.deepEqual(googleString(test2), googleString2)
        });
    });
});
