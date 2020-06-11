
const router = require('express').Router();

const Teacher = require('../../models/teacher');

// GET http://localhost:3000/api/teachers
router.get('/',  (req, res) => {
    Teacher.find()
        // .then( teachers => {
        //     res.json(teachers);
        // })
        // .catch(err => {
        //     res.json({ error: err.mensaje });
        // })
        .then(teachers => res.json(teachers))
        .catch(err => res.json({ error: err.message }));
});

// POST http://localhost:3000/api/clients 
router.post('/', async (req, res) => {
    try{
        const newTeacher = await Teacher.create(req.body);
        res.json(newTeacher);
    } catch(err){
        res.json({ error: err.message }); 
    }
});

// PUT http://localhost:3000/api/teachers
router.put('/', async(req, res) => { 
    const editedTeacher = await Teacher.findByIdAndUpdate(req.body.id, req.body, { new: true }); 
    res.json(editedTeacher);

});

//DELETE http://localhost:3000/api/teachers/IDTEACHER
router.delete('/:teacherId', (req, res) => { 
    const teacherId = req.params.teacherId;
    Teacher.findByIdAndDelete(teacherId)
    .then(teacher => {
       // res.json({ success: 'El docente se ha borrado' });
       if (teacher){
           res.json({ success: 'El docente se ha borrado' });
       } else {
        res.json({ error: 'El docente no existe' });
       }
    })
    .catch(err => {
        res.json({ error: err.message });
    })
});

module.exports = router;

