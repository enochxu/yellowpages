import React from "react";
import { Rating } from "@mui/material";
import { Card, Row } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./ReviewCard.css";

export const restroomTypes = new Map([
  ["gender-neutral", "bi-gender-ambiguous"],
  ["women", "bi-gender-female"],
  ["men", "bi-gender-male"],
]);

const ReviewCard = ({ name, type, rating, reviewText }) => {
  return (
    <Card className="review-card" type={type} style={{ width: "40%" }}>
      <Card.Body>
        <Card.Title>
          {name} <i class={restroomTypes.get(type)}></i>
        </Card.Title>
        <Rating name="read-only" value={rating} readOnly />
        <Card.Text>{reviewText}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ReviewCard;
