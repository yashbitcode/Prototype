import HomeIcon from '@mui/icons-material/Home';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import NavItem from './NavItem';
import HeaderLogo from './HeaderLogo';
import DropDownMenu from './DropDownMenu';

const Header = () => {
    const navOptions = [
        {
            name: "Home",
            navigation: "/",
            icon: HomeIcon
        },
        {
            name: "History",
            navigation: "/history",
            icon: WorkHistoryIcon
        },
    ];

    return (
        <>
            <div className="w-[200px] max-sm:hidden">
                <HeaderLogo />
                <div className="mt-[3rem]">
                    <ul className="flex flex-col gap-[1rem]">
                        {
                            navOptions.map((el) => <NavItem key={el.name} name={el.name} Icon={el.icon} nav={el.navigation} />)
                        }
                    </ul>
                </div>
            </div>
            <div className="flex justify-between items-center min-sm:hidden">
                <HeaderLogo />
                <DropDownMenu navOptions={navOptions} />
            </div>
        </>
    );
};

export default Header;