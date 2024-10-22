import Profile from '../../../../public/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center justify-center container mx-auto my-5 border-b-2 py-3'>
                 
      <h1 className='text-4xl font-bold '>Knowledge Cafe</h1>
     <img src={Profile} alt="" />
        </div>
    );
};

export default Header;