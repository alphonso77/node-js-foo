const YAML = require('yaml');
const fs = require('fs');

module.exports = function(app){
    app.post('/jsontoyaml', (req, res) => {

        const doc = new YAML.Document();
        doc.contents = req.body;

        if (process.env.NODE_ENV === 'development') {
            const file = fs.createWriteStream(__dirname + `/output.yaml`);
            file.write(doc.toString());
            console.log(`wrote to ${__dirname}/output.yaml`);
        }
        res.send(doc.toString());
    });
}