import DesignServicesIcon from '@mui/icons-material/DesignServices';

const HeaderLogo = () => {
    return (
        <div className="relative flex items-center w-fit justify-center">
            <DesignServicesIcon fontSize="large" />
            <span className="font-bold text-[10px] absolute -bottom-[10px]">LOGO</span>
        </div>
    );
};

export default HeaderLogo;