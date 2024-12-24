import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const JobPost = () => {
    const getTodayDate = () => new Date().toISOString().split('T')[0];

    const [job, setJob] = useState({
        title: '',
        description: '',
        company: '',
        location: '',
        postedDate: getTodayDate(),
        fulldescription: '', // Default to today
        bonddescription: '',
        termsconditions: '',
        link: '',
        file: null, // File for upload
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    // NOTE:--> HERE WE HAVE UPLOAD IMAGE AS FILE TOTAL SEPARATELY.
    //          FROM FRONTEND TO BACKEND WITH SEPERATE APIs.
    //          WE GET RESPONSE FROM BACKEND THAT PATH WE ADD
    //          IN FILE PATH TO UPLOAD WITH OTHER DATA IN tblJob TABLE

    // Handle file input 
    const handleFileChange = (e) => {
        setJob({ ...job, file: e.target.files[0] });
    };

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setJob({ ...job, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');
        try {
            let filePath = '';

            // Step 1: Upload the file first (if a file is selected)
            if (job.file) {
                const formData = new FormData();
                formData.append('file', job.file);

                const uploadResponse = await axios.post(
                    'http://localhost:5000/api/upload',
                    formData,
                    { headers: { 'Content-Type': 'multipart/form-data' } }
                );

                // Assuming the backend returns the file path
                filePath = uploadResponse.data.filePath;
            }

            // Update the fields to match what the backend expects
            // Step 2: Send job data along with the file path
            const payload = {
                JOBTITLE: job.title,
                JOBDISC: job.description,
                COMPANY: job.company,
                LOCATION: job.location,
                POSTEDDATE: job.postedDate,
                FULLDESCRIPTION: job.fulldescription,
                BONDDESCRIPTION: job.bonddescription,
                TERMSCONDITIONS: job.termsconditions,
                LINK: job.link,
                FILEPATH: filePath, // Include the file path
            };

            await axios.post('http://localhost:5000/api/jobs', payload);
            setMessage('Job posted successfully!');
            setJob({ title: '', description: '', company: '', location: '', postedDate: getTodayDate(), fulldescription: '', termsconditions: '', link: '', file: null, }); // Reset form
        } catch (err) {
            console.error(err);
            setError('Failed to post job. Please try again.');
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center">Post a Job</h1>
            {message && <div className="alert alert-success">{message}</div>}
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="title" className="form-label">Job Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            value={job.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="company" className="form-label">Company</label>
                        <input
                            type="text"
                            className="form-control"
                            id="company"
                            name="company"
                            value={job.company}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Job Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        value={job.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="location" className="form-label">Location</label>
                        <input
                            type="text"
                            className="form-control"
                            id="location"
                            name="location"
                            value={job.location}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="postedDate" className="form-label">Posted Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id="postedDate"
                            name="postedDate"
                            value={job.postedDate}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="fulldescription" className="form-label">Job Full Description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="fulldescription"
                            name="fulldescription"
                            value={job.fulldescription}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="bonddescription" className="form-label">Bond Description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="bonddescription"
                            name="bonddescription"
                            value={job.bonddescription}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="termsconditions" className="form-label">TERMS And CONDITIONS</label>
                        <input
                            type="text"
                            className="form-control"
                            id="termsconditions"
                            name="termsconditions"
                            value={job.termsconditions}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="link" className="form-label">Apply By Link</label>
                        <input
                            type="text"
                            className="form-control"
                            id="link"
                            name="link"
                            value={job.link}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label htmlFor="file" className="form-label">Upload File</label>
                        <input
                            type="file"
                            className="form-control"
                            id="file"
                            name="file"
                            onChange={handleFileChange}
                        />
                    </div>


                </div>
                <button type="submit" className="btn btn-primary w-100">Post Job</button>
            </form>
        </div>
    );
};

export default JobPost;


