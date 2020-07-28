const path = require('path')
const router = require('express').Router();

//runs the index html at http://localhost:3001
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

//runs the animals html at http://localhost:3001/animals
router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
});
//runs the zookeepers html at http://localhost:3001/zookeepers
router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});

module.exports = router;