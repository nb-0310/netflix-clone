import React from 'react';
import SavedMovies from '../Components/SavedMovies';

const Account = () => {
  return (
    <div className='w-full'>
      <div className='w-full sm:h-[90vh] h-[60vh] relative'>
        <img
          className='w-full sm:h-[90vh] h-[60vh] object-cover'
          src='https://s3-us-west-2.amazonaws.com/techvibes/wp-content/uploads/2017/04/24135159/Netflix-Background.jpg'
          alt='/'
        />
        <div className='absolute top-0 left-0 w-full sm:h-[90vh] h-[60vh] opacity-100 bg-gradient-to-t from-[#111] to-transparent'></div>
      </div>
      <div className='w-full sm:mt-[-100px] z-50 absolute'>
        <SavedMovies />
      </div>
    </div>
  );
};

export default Account;