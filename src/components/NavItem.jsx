const NavItem = ({name, Icon}) => {
    return (
        <li className="flex items-center gap-[6px] cursor-pointer">
            <Icon fontSize="small" className="text-[#5b5f5f]" />
            <span className="text-[1rem] text-[#5b5f5f]">{name}</span>
        </li>
    );
};

export default NavItem;