function Header() {
    return (
        <header className="grid grid-cols-3 gap-4 grid-rows-1 items-center px-10 justify-center max-w-default mx-auto py-8">
            <h1 className="text-primary font-bold text-3xl">Violet Void</h1>
            <nav className="w-full"> 
                <ul className="flex gap-2 justify-evenly">
                    <li>Home</li>
                    <li>Store</li>
                    <li>Community</li>
                </ul>
            </nav>
            <div className="flex flex-nowrap gap-1 ml-auto items-center">
                <span>Username</span>
                <div className="bg-white rounded-full h-8 w-8"></div>
            </div>
        </header>
    )
}

export default Header;