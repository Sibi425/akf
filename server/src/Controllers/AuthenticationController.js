module.exports = {
    register(req, res) {
        res.send({
            "msg": `lol you are ${req.body.email}`
        })
    }
}
