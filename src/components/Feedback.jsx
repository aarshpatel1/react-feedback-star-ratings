import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Data from "./Data";

function Feedback() {
    const [feedback, setFeedback] = useState({});
    const [star, setStar] = useState(0);
    const [hover, setHover] = useState(0);
    const [feedbackList, setFeedbackList] = useState([]);

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
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="feedback">Feedback</label>
                <br />
                <textarea
                    name="feedback"
                    id="feedback"
                    cols="30"
                    rows="5"
                    value={feedback.feedback || ""}
                    autoFocus
                    onChange={handleChange}
                ></textarea>
                <br />
                {[...Array(5)].map((_, index) => (
                    <FaStar
                        key={index}
                        onMouseOver={() => handleMouseOver(index)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick(index)}
                        color={index < (hover || star) ? "yellow" : "gray"}
                    />
                ))}
                <br />
                <button>Submit</button>
            </form>
            <Data feedbackList={feedbackList} />
        </>
    );
}

export default Feedback;
