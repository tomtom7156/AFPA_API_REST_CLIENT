const express = require('express');
const router = new express.Router;

//Controllers
const HotelControls =  require('./controllers/HotelController');
const ClientControls = require('./controllers/ClientController');
const ReservationControls = require('./controllers/ReservationController');

router.get('/', (req, res) => res.send('ok'));

//Routes Clients
router.get('/clients', ClientControls.all);
router.get('/clients/:id', ClientControls.find);
router.post('/clients/ajout', ClientControls.create)
router.put('/clients/modifier/:id', ClientControls.update)
router.delete('/clients/suprimer/:id', ClientControls.delete)
// router.get('/clients/hotels/:id', ClientControls.hotelByClient)

//Routes Hotels
router.get('/hotels', HotelControls.all);
router.get('/hotels/:id', HotelControls.find);
router.post('/hotels/ajout', HotelControls.create)
router.put('/hotels/modifier/:id', HotelControls.update)
router.delete('/hotels/suprimer/:id', HotelControls.delete)
// router.get('/hotels/clients/:id', HotelControls.clientsByHotel);

//Routes Reservation
router.get('/reservations', ReservationControls.all);
router.get('/reservations/:id', ReservationControls.find);
router.post('/reservations/ajout', ReservationControls.create)
router.put('/reservations/modifier/:id', ReservationControls.update)
router.delete('/reservations/suprimer/:id', ReservationControls.delete)

module.exports = router;