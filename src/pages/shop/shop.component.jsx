import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    console.log(collections);
    return (
      <div className="shop-page">
        {collections.map((
          { id, ...otherCollectionProps } //OTHER PROPS ARE ITEM, TITLE, AND ROUTENAME
        ) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
