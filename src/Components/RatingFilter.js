import { Rate } from "antd";

const RatingFilter = ({onRatingSelected}) => {
    const onRatingClick = (value) => {
        onRatingSelected(value);
        console.log(value);
    }
    return (
      <div
        style={{
          marginBottom: "16px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h4>Rating</h4>
        <span onClick={() => onRatingClick(4)}><Rate disabled defaultValue={4} /></span>
        <span onClick={() => onRatingClick(3)}><Rate disabled defaultValue={3} /></span>
        <span onClick={() => onRatingClick(2)}><Rate disabled defaultValue={2} /></span>
        <span onClick={() => onRatingClick(1)}><Rate disabled defaultValue={1} /></span>
      </div>
    );
  };
  export default RatingFilter;