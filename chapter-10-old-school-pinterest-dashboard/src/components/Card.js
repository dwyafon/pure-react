import React from "react";

// import PropTypes from 'prop-types';

const Card = ({ card }) => (
  <div className='card'>
    <div className="cardTitle">{card.cardTitle}</div>
    <div className="cardHeading">{card.heading}</div>
    <Images card={card} />
    <FollowButton />
  </div>
);

const Images = ({ card }) => {
  return (
    <div className="images">
      <div className="mainImage">
        <img src={card.mainImage} alt="Denmark" />
      </div>
      <div className="subimages">
        <div className="subImage1">
          <img src={card.subImage1} alt="Denmark" />
        </div>
        <div className="subImage2">
          <img src={card.subImage2} alt="Denmark" />
        </div>
        <div className="subImage3">
          <img src={card.subImage3} alt="Denmark" />
        </div>
      </div>
    </div>
  );
};

const FollowButton = () => {
  return <button className="followButton">Follow</button>;
};

// const ListHeading = ({ title }) => (
//   <span className="listHeader">
//     {title}
//     <span>
//       <MoreOptionsIcon />
//     </span>
//   </span>
// );

// const MoreOptionsIcon = () => <i className="fa fa-ellipsis-h options" />;
// const PlusIcon = () => <i className="fa fa-plus plus" />;
// const CardDescriptionIcon = () => (
//   <i className="fa fa-align-left description" />
// );

// const Card = ({ title }) => (
//   <span className="card">
//     {title}
//     <span>
//       <CardDescriptionIcon />
//     </span>
//   </span>
// );

// const AddCard = () => (
//   <span className="addCard">
//     <span>
//       <PlusIcon />
//     </span>
//     Add another card
//   </span>
// );

export default Card;
