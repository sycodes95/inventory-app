const express = require("express");
const router = express.Router();

const guns_controller = require('../controllers/gunsController')

router.get('/', guns_controller.index) 

router.get('/assaultrifle', guns_controller.assault_rifle)

router.get('/handgun', guns_controller.hand_gun)

router.get('/sniperrifle', guns_controller.sniper_rifle)

router.get('/marksmanrifle', guns_controller.marksman_rifle)

router.get('/shotgun', guns_controller.shot_gun)

router.get('/smg', guns_controller.smg)

router.get('/:id/', guns_controller.gun_detail)

router.post('/:id/', guns_controller.gun_purchase_post)

router.get('/thankyou', guns_controller.gun_purchase_thank_you)

module.exports = router;