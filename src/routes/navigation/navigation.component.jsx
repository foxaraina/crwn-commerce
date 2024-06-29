import { Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {LogoContainer, NavigationContainer, NavLink, NavLinkContainer} from "./navigation.styles";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentUser} from "../../store/user/user.selectors";
import {selectCartIsOpen} from "../../store/cart/cart.selectors";
import {signOut} from "../../store/user/user.slice";

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectCartIsOpen)
    const dispatch = useDispatch()

    return (
        <>
            <NavigationContainer>
                <LogoContainer className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavLinkContainer>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {currentUser ? (
                        <NavLink as="span" onClick={() => dispatch(signOut())}>SIGN OUT</NavLink>
                        ) : (
                        <NavLink to='/auth'>SIGN IN</NavLink> )
                    }
                    <CartIcon/>
                </NavLinkContainer>
                {isCartOpen && <CartDropdown/>}
            </NavigationContainer>
            <Outlet />
        </>
    );
};

export default Navigation;