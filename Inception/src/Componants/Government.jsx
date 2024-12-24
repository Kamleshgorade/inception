import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Government() {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [error, setError] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    // Fetch jobs from the server
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/jobs');
                setJobs(response.data);
                setFilteredJobs(response.data);
            } catch (err) {
                console.error('Error fetching jobs:', err);
                setError('Failed to fetch jobs. Please try again.');
            }
        };
        fetchJobs();
    }, []);

    // Search handler
    const handleSearch = () => {
        if (searchQuery) {
            const filtered = jobs.filter(job =>
                job.JOBTITLE.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredJobs(filtered);
        } else {
            setFilteredJobs(jobs);
        }
    };

    // Horizontal Scroll logic
    const scrollContainerRef = useRef(null);

    const handleScroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 320; // Adjust the scroll distance
            const scrollDistance = direction === 'left' ? -scrollAmount : scrollAmount;
            scrollContainerRef.current.scrollBy({
                left: scrollDistance,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        // Auto scroll every 3 seconds
        const intervalId = setInterval(() => {
            if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollBy({
                    left: 320, // Adjust the scroll distance
                    behavior: 'smooth',
                });
            }
        }, 3000);

        return () => clearInterval(intervalId); // Clean up on component unmount
    }, []);

    return (
        <div className="container mt-4" style={{ paddingTop: '70px' }}>
            <h1 className="text-center text-info">Government Jobs</h1>
            {error && <div className="alert alert-danger">{error}</div>}

            {/* Search Bar and Button */}
            <div className="mb-4 d-flex justify-content-center">
                <input
                    type="text"
                    className="form-control w-50"
                    placeholder="Search by job title"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ marginRight: '10px' }}
                />
                <button className="btn btn-primary ml-2" onClick={handleSearch}>
                    Search
                </button>
            </div>

            <div className="d-flex align-items-center">
                <button
                    onClick={() => handleScroll('left')}
                    className="btn btn-light d-none d-md-block"
                    style={{
                        position: 'relative',
                        top: '50%',
                        right: '10px',
                        width: '40px',
                        zIndex: 10,
                        background: 'black',
                        color: 'white'
                    }}
                >
                    &#8592;
                </button>

                <div
                    className="row no-gutters"
                    style={{
                        position: 'relative',
                        overflowX: 'auto',
                        marginLeft: '15px',
                        marginRight: '15px',
                        width: '930px',
                        scrollbarWidth: 'none', // Hide scrollbar for Firefox
                        msOverflowStyle: 'none', // Hide scrollbar for Internet Explorer and Edge
                    }}
                    ref={scrollContainerRef}
                >
                    <ul
                        className="d-flex flex-nowrap list-unstyled"
                        style={{
                            padding: 0,
                            margin: 0,
                        }}
                    >
                        {filteredJobs.length > 0 ? (
                            filteredJobs.map((job) => (
                                <li
                                    key={job.JOBID}
                                    className="flex-shrink-0"
                                    style={{
                                        marginRight: '20px',
                                        width: '300px',
                                        maxWidth: '400px',
                                        boxSizing: 'border-box',
                                    }}
                                >
                                    <div className="card shadow-lg rounded-lg">
                                        <img
                                            src={job.FILEPATH ? `/my-backend/${job.FILEPATH}` : 'src/assets/jobdefault.jpg'}
                                            className="card-img-top"
                                            alt={job.JOBTITLE}
                                            style={{ objectFit: 'cover', height: '200px' }}
                                        />
                                        <div className="card-body">
                                            <h4
                                                className="card-title text-uppercase font-weight-bold"
                                                style={{
                                                    whiteSpace: 'normal',
                                                    wordWrap: 'break-word',
                                                }}
                                            >
                                                {job.JOBTITLE}
                                            </h4>
                                            <p
                                                style={{
                                                    whiteSpace: 'normal',
                                                    wordWrap: 'break-word',
                                                }}
                                            >
                                                {job.JOBDISC}
                                            </p>
                                            <p>
                                                <strong>Company:</strong> {job.COMPANY}
                                            </p>
                                            <p>
                                                <strong>Location:</strong> {job.LOCATION}
                                            </p>
                                            <p>
                                                <strong>Posted On:</strong>{' '}
                                                {new Date(job.POSTEDDATE).toLocaleDateString()}
                                            </p>
                                            <Link
                                                to={`/jobinDetails/${job.JOBID}`}
                                                className="btn btn-primary mt-3"
                                            >
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <p className="text-center w-100">No jobs available at the moment.</p>
                        )}
                    </ul>
                </div>

                <button
                    onClick={() => handleScroll('right')}
                    className="btn btn-light d-none d-md-block"
                    style={{
                        position: 'relative',
                        top: '50%',
                        right: '10px',
                        width: '40px',
                        zIndex: 10,
                        background: 'black',
                        color: 'white'
                    }}
                >
                    &#8594;
                </button>

                {/* Inline CSS for hiding scrollbar */}
                <style>
                    {`
                            /* Hide scrollbar for all browsers */
                            .row.no-gutters::-webkit-scrollbar {
                                display: none; /* For Chrome, Safari, and Opera */
                            }

                            .row.no-gutters {
                                -ms-overflow-style: none; /* For Internet Explorer and Edge */
                                scrollbar-width: none; /* For Firefox */
                            }
                        `}
                </style>
            </div>

        </div>
    );
}

export default Government;
