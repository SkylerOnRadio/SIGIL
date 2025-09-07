import express from 'express'

const router = express.Router()

router.get('/gets', (req, res) => {
    res.json("This is a route.")
})

export default router