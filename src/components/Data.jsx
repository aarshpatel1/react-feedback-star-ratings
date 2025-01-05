import React from "react";
import { FaStar } from "react-icons/fa";

function Data({ feedbackList }) {
    return (
        <>
            {feedbackList.length === 0 ? (
                <h1>No feedback given yet</h1>
            ) : (
                feedbackList.map((feedback, index) => (
                    <div class="card w-50" key={index}>
                        <div class="card-body">
                            <h2 class="card-title">Unknown User</h2>
                            <p class="card-text">
                                {feedback.feedback}
                                <br />
                                Rating:
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
                            </p>
                        </div>
                    </div>
                ))
            )}
        </>
    );
}

export default Data;
