import React from "react";

function ReviewCards({ feedbackList }) {
    return (
        <>
            <div className="container">
                <h1>Feedback</h1>
                {feedbackList.length === 0 ? (
                    <p>No feedback given yet</p>
                ) : (
                    <ul>
                        {feedbackList.map((feedback, index) => (
                            <li key={index}>
                                <p>{feedback.feedback}</p>
                                <p>{feedback.rating}</p>
                            </li>
                        ))}
                    </ul>
                )}
                <div class="card w-50">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                            With supporting text below as a natural lead-in to
                            additional content.
                        </p>
                        <a href="#" class="btn btn-primary">
                            Button
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReviewCards;
