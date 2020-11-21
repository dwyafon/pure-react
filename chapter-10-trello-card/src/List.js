import React from "react";
// import MoreOptionsButton from "../../chapter-10-tweet-list/src/MoreOptionsButton";
// import PropTypes from 'prop-types';

const List = ({ list }) => (
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

const ListHeading = ({ title }) => (
  <span className="listHeader">
    {title}
    <span>
      <MoreOptionsButton />
    </span>
  </span>
);

const MoreOptionsButton = () => <i className="fa fa-ellipsis-h options" />;
const PlusIcon = () => <i className="fa fa-plus plus" />;

const Card = ({ title }) => <span className="card">{title}</span>;

const AddCard = () => (
  <span className="addCard">
    <span>
      <PlusIcon />
    </span>
    Add another card
  </span>
);

export default List;
