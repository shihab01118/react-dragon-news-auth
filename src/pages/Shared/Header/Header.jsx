import Logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center mt-5 mb-7'>
            <img src={Logo} alt="Logo" className='mx-auto mb-5' />
            <p className='mb-2'>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;