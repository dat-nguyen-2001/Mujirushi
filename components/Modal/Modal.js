import classes from './Modal.module.css'
import Link from 'next/link';
import { Store } from '../../utils/Store';
import {useContext} from'react';

function Modal({open, children}) {
    if(!open) return null;
    const {dispatch} = useContext(Store);
    const resetCart = function() {
        dispatch({type:'RESET_CART'})
    }
  return (
    <>
    <div className={classes.overlay}></div>
    <div className={classes.modal_wrapper}>
        <div>{children}</div>
        <div className={classes.back_to_home}>
        <Link href={'/'}>
            <button onClick={resetCart}>TRANG CHỦ</button>
        </Link>
        </div>
    </div>
    </>
  )
}

export default Modal
