import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";
import Container from "../Container";

const NavBar = () => {
    const [getMenu, setMenu] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const navigate = useNavigate();

    const changeBackground = () => {
        if (window.scrollY >= 32) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    window.addEventListener("scroll", changeBackground);

    const navLinks = [
        { title: "Home", path: "/" },
        { title: "Shop", path: "/shop" },
        { title: "About Us", path: "/about" },
        { title: "Blogs", path: "/blogs" },
    ];

    const handleClick = () => {
        navigate("/");
    };

    return (
        <>
            <nav
                className={
                    navbar
                        ? "bg-bg-gray-200 fixed w-full z-30"
                        : "bg-gray-100 shadow fixed w-full"
                }
            >
                <Container>
                    <div className="">
                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex justify-between items-center  py-6">
                            <div className="flex items-center gap-6">
                                <div
                                    onClick={handleClick}
                                    className=" text-3xl font-bold cursor-pointer"
                                >
                                    EShope
                                </div>
                                <div className=" flex gap-6">
                                    {navLinks.map((item, idx) => (
                                        <a
                                            href={item.path}
                                            key={idx}
                                            className="text-lg font-semibold"
                                        >
                                            {item.title}
                                        </a>
                                    ))}
                                </div>
                            </div>


                            <div className=" flex items-center gap-4">
                                {/* Search Field */}
                                <div className="relative flex items-center group">
                                    {/* Search Icon */}
                                    <Icon
                                        icon="mdi:magnify"
                                        width="24"
                                        height="24"
                                        className="cursor-pointer text-gray-600 group-hover:text-gray-900 transition-colors duration-300"
                                    />

                                    {/* Search Input Field */}
                                    <input   
                                        type="text"
                                        placeholder="Search..."
                                        className="absolute right-0 opacity-0 w-0 group-hover:opacity-100 group-hover:w-64 group-hover:right-0 group-hover:translate-x-0 transition-all duration-300 ease-in-out bg-white border border-gray-300 rounded-full pl-4 py-2 pr-4 focus:outline-none"
                                    />
                                </div>

                                <Icon icon="icon-park-outline:shopping" width="24" height="24" />
                            </div>

                        </div>

                        {/* Mobile Navigation */}
                        <div className="lg:hidden text-white py-6">
                            <div className="flex justify-between items-center">
                                <div
                                    onClick={handleClick}
                                    className="w-[16%] text-3xl font-bold cursor-pointer"
                                >
                                    EShope
                                </div>
                                <div className="flex items-center gap-3">
                                    <div>
                                        {/* Get Started Button */}
                                        <Link to={"auth"}>
                                            <Button text={"Get Started"} />
                                        </Link>
                                    </div>
                                    {/* Animated Hamburger/Cross Icon */}
                                    <div
                                        className={`text-white cursor-pointer transition-transform duration-300 ease-in-out ${getMenu ? "rotate-90" : "rotate-0"
                                            }`}
                                        onClick={() => setMenu(!getMenu)}
                                    >
                                        {getMenu ? (
                                            <Icon icon="charm:cross" width="40" height="40" color="blue" />
                                        ) : (
                                            <Icon icon="majesticons:menu" width="40" height="40" color="blue" />
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Drawer Menu */}
                            <div
                                className={`fixed top-[92px] right-0 h-full w-2/3 bg-primary text-white transform ${getMenu ? "translate-x-0" : "translate-x-full"
                                    } transition-transform duration-300 ease-in-out lg:hidden z-[50]`}
                            >
                                <div className="flex flex-col items-start p-6">
                                    {navLinks.map((item, idx) => (
                                        <a
                                            href={item.path}
                                            key={idx}
                                            className="text-lg font-semibold py-2 border-b border-gray-600 w-full"
                                            onClick={() => setMenu(false)}
                                        >
                                            {item.title}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </nav>
        </>
    );
};

export default NavBar;
