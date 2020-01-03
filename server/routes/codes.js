const express = require ('express')
const db = require('../db/db')
const router = express.Router()

module.exports = router

const sendGenericErrorMessage = (res) => {
    res.status(500).send(
      "An Unexpected error has occurred and we're looking into it"
    )
  }

router.get('/codes', (req,res) => {
    return db.getAllCode()
        .then(codes => res.json(codes))
        .catch(()=> sendGenericErrorMessage(res))
})