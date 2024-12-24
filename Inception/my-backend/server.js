const express = require('express');
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const sql = require('mssql'); // SQL Server library


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database configuration for SQL Server
const dbConfig = {
    user: 'sa',          // Your SQL Server username
    password: '123456',   // Your SQL Server password
    server: '192.168.1.121\\SQLEXPRESS', // Your SQL Server instance
    database: 'ABC',   // Your database name
    options: {
        encrypt: false,
        trustServerCertificate: true, // Enable this option if using a self-signed certificate
    },
    // port: 1433,  // Default SQL Server port

};



// !!*** This part is temporary we have use here this is admin part ***!!//

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads'); // Ensure this folder exists
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

// POST API SEPERATLY TAKE FROM FRONTEND AND UPLOAD IN FOLDER . AND SEND PATH TO FRONTEND,
// THEN IT COMES WITH REGULER DATA AND GET INSERTED IN tblJoB TABLE.
app.post('/api/upload', upload.single('file'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded.' });
        }
        const filePath = `uploads/${req.file.filename}`;
        res.status(200).json({ filePath });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'File upload failed.', error: error.message });
    }
});


// POST endpoint to create a new job .  from admin to database entry of jobs
app.post('/api/jobs', async (req, res) => {
    try {
        console.log('Received POST request to /api/jobs'); // Check if endpoint is hit
        console.log('Request Body:', req.body); // Log the full request body

        const { JOBTITLE, JOBDISC, COMPANY, LOCATION, POSTEDDATE, FULLDESCRIPTION, BONDDESCRIPTION, TERMSCONDITIONS, LINK, FILEPATH } = req.body;

        // Validate request body
        if (!JOBTITLE || !JOBDISC || !COMPANY || !LOCATION || !POSTEDDATE || !FULLDESCRIPTION || !BONDDESCRIPTION || !TERMSCONDITIONS || !LINK || !FILEPATH) {
            console.log('Validation failed: Missing fields'); // Log validation errors
            return res.status(400).json({ message: 'All fields are required.' });
        }

        console.log('Validated Data:', {
            JOBTITLE, JOBDISC, COMPANY, LOCATION, POSTEDDATE, FULLDESCRIPTION, BONDDESCRIPTION, TERMSCONDITIONS, LINK
        }); // Log extracted fields

        // SQL connection and query
        const pool = await sql.connect(dbConfig);
        console.log('Connected to database'); // Log connection success


        // Generate a unique JOBID by incrementing the max JOBID in the table
        const result = await pool.request().query('SELECT MAX(JOBID) AS maxId FROM tblJob');
        const maxId = result.recordset[0].maxId || 0; // Default to 0 if no rows exist
        const newJobId = maxId + 1;

        await pool.request()
            .input('JOBID', sql.Int, newJobId)
            .input('JOBTITLE', sql.NVarChar, JOBTITLE)
            .input('JOBDISC', sql.NVarChar, JOBDISC)
            .input('COMPANY', sql.NVarChar, COMPANY)
            .input('LOCATION', sql.NVarChar, LOCATION)
            .input('POSTEDDATE', sql.Date, POSTEDDATE)
            .input('FULLDESCRIPTION', sql.NVarChar, FULLDESCRIPTION)
            .input('BONDDESCRIPTION', sql.NVarChar, BONDDESCRIPTION)
            .input('TERMSCONDITIONS', sql.NVarChar, TERMSCONDITIONS)
            .input('LINK', sql.NVarChar, LINK)
            .input('FILEPATH', sql.NVarChar, FILEPATH || null) // Save file path
            .query(`
                INSERT INTO tblJob (JOBID, JOBTITLE, JOBDISC, COMPANY, LOCATION, POSTEDDATE, FULLDESCRIPTION, BONDDESCRIPTION, TERMSCONDITIONS, LINK, FILEPATH ) 
                VALUES (@JOBID, @JOBTITLE, @JOBDISC, @COMPANY, @LOCATION, @POSTEDDATE, @FULLDESCRIPTION, @BONDDESCRIPTION, @TERMSCONDITIONS, @LINK, @FILEPATH);
            `);

        console.log('Job inserted successfully'); // Log insertion success
        res.status(201).json({ message: 'Job created successfully' });
    } catch (error) {
        console.error('Error creating job:', error);  // Log the error in detail
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

// END !!*** This part is temperary we have use here this is admin part ***!! END //


//****************************************************************************************************//
//****************************************************************************************************//


// FRONTEND !!***  ***!! FRONTEND //

// GET endpoint to fetch all jobs
// GET endpoint to fetch all jobs
app.get('/api/jobs', async (req, res) => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request().query('SELECT * FROM tblJob');

        // Log the fetched data for debugging purposes
        console.log('Jobs fetched successfully:', result.recordset);

        res.status(200).json(result.recordset);
    } catch (error) {
        console.error('Error fetching jobs:', error);
        res.status(500).json({ message: 'Error fetching jobs', error });
    }
});

// GET endpoint to fetch job details by JOBID
app.get('/api/jobs/:jobId', async (req, res) => {
    const { jobId } = req.params; // Get JOBID from route parameters
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool
            .request()
            .input('jobId', sql.NVarChar, jobId) // Use sql.NVarChar for nvarchar type
            .query('SELECT * FROM tblJob WHERE JOBID = @jobId');

        if (result.recordset.length > 0) {
            res.status(200).json(result.recordset[0]); // Send the first record as JSON
        } else {
            res.status(404).json({ message: 'Job not found' });
        }
    } catch (error) {
        console.error('Error fetching job details:', error);
        res.status(500).json({ message: 'Error fetching job details', error });
    }
});



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

