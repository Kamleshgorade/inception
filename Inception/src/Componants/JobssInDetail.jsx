import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const JobssInDetail = () => {
    const { jobId } = useParams(); // Extract jobId from the route
    const [job, setJob] = useState(null); // State to hold job details
    const [error, setError] = useState(''); // State to handle errors

    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/jobs/${jobId}`);
                setJob(response.data); // Update state with fetched job details
            } catch (err) {
                console.error('Error fetching job details:', err);
                setError('Failed to fetch job details. Please try again.');
            }
        };

        fetchJobDetails();
    }, [jobId]);

    return (
        <div className="container mt-4" style={{ paddingTop: '70px' }}>
            <h1 className="mb-4 text-center text-info">Job Details</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            {job ? (
                <div className="card shadow-lg p-4">
                    {/* Job Image */}
                    <img
                        src={job.FILEPATH ? `/my-backend/${job.FILEPATH}` : 'src/assets/jobdefault.jpg'}
                        // src={job.FILEPATH || 'src/assets/jobdefault.jpg'} // Default image if job.IMAGE is not available
                        alt={job.JOBTITLE}
                        className="card-img-top"
                        style={{ objectFit: 'cover', height: '100%' }} // Adjust height as needed
                    />
                    <h2 className="text-uppercase text-primary">{job.JOBTITLE}</h2>
                    <p>{job.JOBDISC}</p>
                    <p>
                        <strong>COMPANY:</strong> {job.COMPANY}
                    </p>
                    <p>
                        <strong>LOCATION:</strong> {job.LOCATION}
                    </p>
                    <p>
                        <strong>POSTED DATE:</strong> {new Date(job.POSTEDDATE).toLocaleDateString()}
                    </p>
                    <p>
                        <strong>FULL DESCRIPTION :</strong> {job.FULLDESCRIPTION}
                    </p>
                    <p>
                        <strong>BOND DESCRIPTION :</strong> {job.BONDDESCRIPTION}
                    </p>
                    <p>
                        <strong>TERMS AND CONDITIONS :</strong> {job.TERMSCONDITIONS}
                    </p>
                    <p>
                        <strong>APPLY BY LINK :</strong>
                        <a
                            href={job.LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none', color: 'blue' }}
                        >
                            {job.LINK}
                        </a>
                    </p>

                </div>
            ) : (
                <p className="text-center">Loading job details...</p>
            )}
        </div>
    );
};

export default JobssInDetail;
