import React from 'react';
import menu from '../../../assets/menu/menu.jpg';
import shop from '../../../assets/shop/banner2.jpg'
let image ; 
const ItemImage = ({mainFont,subFont,pageName}) => {
  if(pageName==='menu')image=menu ; 
  if(pageName==='shop')image=shop ; 
  const backgroundImageStyle = {
    backgroundImage: `url('${image.src}')`, // Note the quotes around the URL
    width: '100%',
    height: '800px',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div style={backgroundImageStyle} className='flex flex-col justify-center items-center w-full h-full '>
      <div  className='bg-gray-900 bg-opacity-60 w-[80%] h-[300px] mx-auto flex flex-col justify-center items-center'>
        <h2 className='text-5xl uppercase text-white mb-3'>{mainFont}</h2>
        <h2 className='text-2xl uppercase text-white'>{subFont}</h2>
      </div>
    </div>
  );
};

export default ItemImage;
