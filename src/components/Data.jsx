import React from "react";
import { FaStar } from "react-icons/fa";

function Data({ feedbackList }) {
    return (
        <>
            {feedbackList.length === 0 ? (
                <h1>No feedback has been given yet</h1>
            ) : (
                feedbackList.map((feedback, index) => (
                    <div className="card" key={index}>
                        <div>
                            <h2>Unknown User</h2>
                            <p>
                                <span className="inline-heading">
                                    Feedback :
                                </span>{" "}
                                {feedback.feedback}
                            </p>
                            <span>
                                <span className="inline-heading">Rating :</span>
                                {[...Array(5)].map((_, index) => (
                                    <span key={index}>
                                        <FaStar
                                            color={
                                                index < feedback.rating
                                                    ? "gold"
                                                    : "gray"
                                            }
                                        />
                                    </span>
                                ))}
                            </span>
                        </div>
                    </div>
                ))
            )}
        </>
    );
}

export default Data;
