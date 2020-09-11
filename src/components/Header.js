import React from 'react';
import '../assets/css/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import Logo from '../assets/img/amazon-logo.png';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function Header() {
	return (
		<div className="header">
			<img className="header__logo" src={Logo} alt="amazon logo" />
			<div className="header__search">
				<input className="header__searchInput" type="text" />
				<SearchIcon className="header__searchIcon" />
			</div>
			<div className="header__nav">
				<div className="header__option">
					<span className="header__optionLineOne">Hello, Sign in</span>
					<span className="header__optionLineTwo">Account & Lists</span>
				</div>
				<div className="header__option">
					<span className="header__optionLineOne">Returns</span>
					<span className="header__optionLineTwo">& Orders</span>
				</div>
				<div className="header__option">
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
				</div>
				<div className="header__cart">
					<AddShoppingCartIcon />
					<span className="header__optionLineTwo header__cartCount">0</span>
				</div>
			</div>
		</div>
	);
}

export default Header;
