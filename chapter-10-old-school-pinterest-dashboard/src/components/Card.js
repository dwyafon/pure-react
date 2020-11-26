import React from "react";

// import PropTypes from 'prop-types';

const Card = ({ cards }) => (
  <div className="list">
    <div>
      <ListHeading title={list.listHeader} />
    </div>
    <div className="allCards">
      {list.cards.map((card) => (
        <Card title={card.title} key={card.id} />
      ))}
    </div>
    <div>
      <AddCard />
    </div>
  </div>
);

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
