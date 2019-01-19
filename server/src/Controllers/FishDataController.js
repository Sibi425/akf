const config = require('../config/config')
const path = require('path')
//const fishDataFile = path.resolve(__dirname, '../' + config.fishes)

module.exports = {
    getFishData(req, res){

        res.sendFile(config.fishes);

    }
}
