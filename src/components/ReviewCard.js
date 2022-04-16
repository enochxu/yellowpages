import React from "react";
import { Rating } from "@mui/material";
import { Card, Row } from "react-bootstrap";
import "./ReviewCard.css";

const ReviewCard = ({ name, rating, reviewText }) => {
  return (
    <Card className="review-card" style={{ width: "40%" }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Rating name="read-only" value={rating} readOnly />
        <Card.Text>{reviewText}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ReviewCard;
