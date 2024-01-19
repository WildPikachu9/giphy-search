import './Loader.css';
import loader from './loading-7528_128.gif';

export const Loader = () => {
    return (
        <div className='loader-container'>
            <img  
                src={loader} 
                alt='loader' 
            />
        </div>
    );
};