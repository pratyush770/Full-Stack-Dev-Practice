const Student = require('./student');

// create a new student (POST)
exports.createStudent = async (req, res) => {
    try {
        const { id, name, age, course, email } = req.body;

        if (!id || !name || !age || !course || !email) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const newStudent = new Student({ id, name, age, course, email });
        await newStudent.save();

        res.status(201).json({ message: 'Student created successfully', student: newStudent });
    } catch (error) {
        console.error('Error creating student:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// get all students (GET)
exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// get a student by id (GET)
exports.getStudentById = async (req, res) => {
    try {
        const studentId = parseInt(req.params.id);
        if (isNaN(studentId)) {
            return res.status(400).json({ error: 'Invalid student ID' });
        }

        const student = await Student.findOne({ id: studentId });

        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }

        res.json(student);
    } catch (error) {
        console.error('Error fetching student:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// update a student (PUT)
exports.updateStudent = async (req, res) => {
    try {
        const studentId = parseInt(req.params.id);
        if (isNaN(studentId)) {
            return res.status(400).json({ error: 'Invalid student ID' });
        }

        const updatedStudent = await Student.findOneAndUpdate(
            { id: studentId },
            { $set: req.body },
            { new: true, runValidators: true }
        );

        if (!updatedStudent) {
            return res.status(404).json({ error: 'Student not found' });
        }

        res.json({ message: 'Student updated successfully', student: updatedStudent });
    } catch (error) {
        console.error('Error updating student:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// delete a student (DELETE)
exports.deleteStudent = async (req, res) => {
    try {
        const studentId = parseInt(req.params.id);
        if (isNaN(studentId)) {
            return res.status(400).json({ error: 'Invalid student ID' });
        }

        const result = await Student.deleteOne({ id: studentId });

        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Student not found' });
        }

        res.json({ message: 'Record deleted successfully' });
    } catch (error) {
        console.error('Error deleting student:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
