// import React from "react";
// import './menu-item.styles.scss'
// import { useHistory }  from 'react-router-dom';

// const MenuItem = ({title,imageUrl,size,history,linkUrl,match}) => ( // ovo {title} je isto sto i props.title
//         <div className={`${size} menu-item`}
//             onClick={() => history.push(`${match.url}${linkUrl}`)}
//             >
//             <div className='background-image' style={{
//                 backgroundImage: `url(${imageUrl})`
//             }} />
//             <div className='content'>
//                 <div className='title'>{title.toUpperCase()}</div>
//                 <span className='subtitle'>SHOP NOW</span>
//             </div>
//         </div>
// )

// export default MenuItem;


import React from "react";
import './menu-item.styles.scss'
import { useNavigate } from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, linkUrl}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${linkUrl}`);
  };

  return (
    <div className={`${size} menu-item`} onClick={handleClick}>
      <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}} />
      <div className='content'>
        <div className='title'>{title.toUpperCase()}</div>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;




