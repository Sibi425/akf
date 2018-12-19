const config = require('../config/config')
const path = require('path')

module.exports = {
    getFishData(req, res){

        res.sendFile( path.resolve(__dirname, '../' + config.fishes));
        console.log("gigigi")
    }
}