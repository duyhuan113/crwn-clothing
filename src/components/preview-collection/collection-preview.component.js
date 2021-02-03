import React from 'react';

import '../preview-collection/collection-preview.component.styles.css';
import CollectionComponent from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => {
    
    return (
        
        <div className="collection-preview ">
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items.filter((item, index) => index < 4)
                    .map(({ id, ...other }) => {
                      return  <CollectionComponent key={id} {...other} />
                    })}
            </div>
        </div>
    )
}

export default CollectionPreview;