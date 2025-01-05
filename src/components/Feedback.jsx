import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Data from "./Data";

function Feedback() {
    const [feedback, setFeedback] = useState(
        JSON.parse(localStorage.getItem("feedback")) || {}
    );
    const [star, setStar] = useState(
        JSON.parse(localStorage.getItem("star")) || 0
    );
    const [hover, setHover] = useState(
        JSON.parse(localStorage.getItem("hover")) || null
    );
    const [feedbackList, setFeedbackList] = useState(
        JSON.parse(localStorage.getItem("feedbackList")) || []
    );

    useEffect(() => {
        localStorage.setItem("feedback", JSON.stringify(feedback));
        localStorage.setItem("star", JSON.stringify(star));
        localStorage.setItem("hover", JSON.stringify(hover));
        localStorage.setItem("feedbackList", JSON.stringify(feedbackList));
    }, [feedback, star, hover, feedbackList]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFeedback({ ...feedback, [name]: value });
    };

    const handleMouseOver = (index) => {
        setHover(index + 1);
    };

    const handleMouseLeave = () => {
        setHover(null);
    };

    const handleClick = (index) => {
        setStar(index + 1);
        setFeedback({ ...feedback, rating: index + 1 });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!feedback.feedback || !feedback.rating)
            return alert("Please fill in all fields");
        setFeedbackList([...feedbackList, feedback]);
        setFeedback({});
        setStar(0);
        console.log(feedbackList);
    };

    return (
        <>
            <div className="container">
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="feedback">Feedback</label>
                    <textarea
                        name="feedback"
                        id="feedback"
                        cols="30"
                        rows="5"
                        value={feedback.feedback || ""}
                        autoFocus
                        onChange={handleChange}
                    ></textarea>
                    <div className="stars">
                        {[...Array(5)].map((_, index) => (
                            <FaStar
                                key={index}
                                onMouseOver={() => handleMouseOver(index)}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => handleClick(index)}
                                color={
                                    index < (hover || star) ? "yellow" : "gray"
                                }
                            />
                        ))}
                    </div>
                    <button>Submit</button>
                </form>
                <div className="review-card-container">
                    <Data feedbackList={feedbackList} />
                </div>
            </div>
        </>
    );
}

export default Feedback;
