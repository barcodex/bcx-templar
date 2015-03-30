var fs = require('fs');
var t = require('bcx-temple');

exports.getTemplate = getTemplate;
exports.doTemplate = doTemplate;
exports.loopTemplate = loopTemplate;

function getTemplate(name) {
    var path = 'templates/' + name + '.html';
    try {
        return fs.readFileSync(path, 'utf8');
    } catch(err) {
        console.log('Template not found: ' + path);
        return '';
    }
}

function doTemplate(templateName, data, options) {
    return t.doText(getTemplate(templateName), data, options);
}

function loopTemplate(templateName, data, options) {
    options = options || {};
    var joint = ('joint' in options) ? options["joint"] : os.EOL;
    var parts = [];
    var templateText = getTemplate(templateName);
    data.forEach(function(row) {
        parts.push(t.doText(templateText, row, options));
    });
    return parts.join(joint);
}
