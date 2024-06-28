import { Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {LogoContainer, NavigationContainer, NavLink, NavLinkContainer} from "./navigation.styles";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../store/user/user.selectors";
import {selectCartIsOpen} from "../../store/cart/cart.selectors";

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectCartIsOpen)

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
                        <NavLink as="span" onClick={signOutUser}>SIGN OUT</NavLink>
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