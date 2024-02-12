const Header = () => {
    return (
        <header className="main-header" data-testid="header">
            <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                <a href="/">
                    <img
                        src="../../assets/logo-bn.png"
                        className="logo"
                        alt="Logotipo de The Refactor Project"
                        width="200"
                        height="57"
                    />
                </a>
            </div>
        </header>
    );
};

export default Header;
