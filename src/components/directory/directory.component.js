import React from 'react';
import MenuItem from "../menu-item/menu-item.component"
import './directory.style.css';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'Hats',
                    imgUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'hats'
                }, {
                    title: 'Jackets',
                    imgUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: ''
                }, {
                    title: 'Sneakers',
                    imgUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: ''
                }, {
                    title: 'Womens',
                    imgUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                }, {
                    title: 'Mens',
                    imgUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'men'
                },
            ]
        }
    }
    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({ id, ...other }) => {
                    return <MenuItem key={id} {...other} />
                })}
            </div>
        )
    }
}

export default Directory;
