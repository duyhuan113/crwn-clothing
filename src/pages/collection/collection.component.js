import React from "react";

import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem  from "../../components/collection-item/collection-item.component";
import "./collection.styles.css";

const CollectionPage = ({ collection }) => {
  console.log(collection);
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
      asd
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    collection: selectCollection(state.shop.collections,ownProps.match.params.collectionId),
  };
};

export default connect(mapStateToProps)(CollectionPage);
