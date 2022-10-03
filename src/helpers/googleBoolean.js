
function googleString(obj) {
    let string = '';

    for (let key in obj) {
        let val = obj[key]


        for (let i = 0; i < val.length; i++) {
            let str = val[i];
            let siteEnd = ''
            // let titleSpace = ' | '
            if (val.length > 1) {
                siteEnd = ' | '
            }
            if (key === 'site' && i !== val.length - 1) {
                let output = `site:${str}${siteEnd}`
                string += output
            }
            if (key === "site" && i === val.length - 1) {
                let   
            }
            if (key === 'title' && val.length) {
                let output = `(${str})`
            }
        }
        return string;
    }
}


const test1 = {
    site: ['lever', 'greenhouse.io', 'jobs.ashbyhq.com', 'app.dover.io'],
    title: ['engineer', 'developer'],
    description: ['react'],
    omits: ['staff', 'senior', 'sr', 'principal', 'lead', 'c++']
};

console.log(googleString(test1));


module.exports = {
    googleString
}
