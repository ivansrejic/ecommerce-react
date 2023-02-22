import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss'

class Directory extends React.Component {

    constructor()
    {
        super();

        this.state = {
            section: [
                {
                    title: 'hats',
                    imageUrl: 'http://i.ibb.co/cvpntL1/hats.png',
                    id:1 ,
                    linkUrl: 'hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'http://i.ibb.co/px2tCc3/jackets.png',
                    id:2,
                    linkUrl: ''
                },
                {
                    title: 'sneakers',
                    imageUrl: 'http://i.ibb.co/0jqHpnp/sneakers.png',
                    id:3,
                    linkUrl: ''
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    id:4,
                    size: 'large',
                    linkUrl: ''
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    id:5,
                    size: 'large',
                    linkUrl: ''
                },

            ]
        }
    }

    render()
    {
        return (
            <div className='directory-menu'>
                {
                    this.state.section.map(({title,imageUrl,id,size,linkUrl}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
                        // Mozemo umesto propsa gore da pisemo {id, ...otherSectionProps} , a dole da stavimo key={id}
                        //{...otherSectionProps}
                    ))
                }
            </div>
        )
    }
}

export default Directory;