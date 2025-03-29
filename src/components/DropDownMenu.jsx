import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { Link } from 'react-router';

export default function DropDownMenu({navOptions}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <ArrowDropDownCircleIcon fontSize="large" className="text-black" />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >   
                {
                    navOptions.map((el) => {
                        const Icon = el.icon;

                        return (
                            <Link to={el.navigation} key={el.name}>
                                <div className="flex items-center cursor-pointer">
                                    
                                    <MenuItem onClick={handleClose}>
                                        <Icon fontSize="small" className="pr-[5px]" />
                                        {el.name}
                                    </MenuItem>    
                                </div>  
                            </Link>
                        );
                    })
                }
            </Menu>
        </div>
    );
}
