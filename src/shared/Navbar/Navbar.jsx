import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";

function Navbar({ istrue = false }) {
  const location = useLocation().pathname;
  const [scrolled, setScrolled] = useState(istrue);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(istrue || window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  return (
    <header className="fixed top-0 z-50 w-full">
      <Container>
        <nav
          className={cn(
            "flex flex-row-reverse md:flex-row items-center justify-between gap-2 pl-4 pr-2 py-2 md:pl-6 md:pr-4 md:py-4 lg:p-6 rounded-b-xl md:rounded-b-2xl lg:rounded-b-3xl transition-colors duration-300",
            scrolled ? "bg-[#1B365D] shadow-lg" : "bg-white/20"
          )}
        >
          <div className="w-[137px] hidden lg:block"></div>

          <div className="hidden md:block">
            <ul className="flex list-none items-center gap-8">
              <li>
                <NavItem path="/">Home</NavItem>
              </li>
              <li>
                <NavItem path="/services">Services</NavItem>
              </li>
              <li>
                <NavItem path="/about-us">About us</NavItem>
              </li>
              <li>
                <NavItem path="/team">Team</NavItem>
              </li>
            </ul>
          </div>

          <Link to="/contact-us" >
            <Button className="rounded-sm md:rounded-md">Contact Us</Button>
          </Link>

          <div className="flex gap-5 md:hidden">
            <div
              className="bg-white rounded-sm p-2"
              onClick={() => setOpen(true)}
            >
              <IoIosMenu size={24} className="text-primary cursor-pointer" />
            </div>

            <div
              onClick={() => setOpen(false)}
              className={`fixed inset-0 z-50 bg-black/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
                isOpen ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            ></div>

            <div
              className={`fixed right-0 top-0 z-50 h-full w-[270px] border-transparent bg-white px-5 py-6 shadow-lg transition-transform duration-500 md:w-[300px] md:hidden ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="flex justify-between">
                    <button onClick={() => setOpen(false)}>
                      <RxCross2 size={24} />
                    </button>
                  </div>
                  <ul className="mt-10 space-y-5 text-base">
                    <li>
                      <MobNavItem path="/">Home</MobNavItem>
                    </li>
                    <li>
                      <MobNavItem path="/services">Services</MobNavItem>
                    </li>
                    <li>
                      <MobNavItem path="/about-us">About us</MobNavItem>
                    </li>
                    <li>
                      <MobNavItem path="/team">Team</MobNavItem>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;

const NavItem = ({ children, path }) => (
  <NavLink
    to={path}
    className={({ isActive }) =>
      cn(
        "text-lg font-medium capitalize transition-all duration-300 flex justify-center relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:transform after:transition-transform after:duration-300",
        isActive
          ? "text-primary after:bg-primary after:scale-x-100"
          : "text-white hover:after:bg-white hover:after:scale-x-100"
      )
    }
  >
    {children}
  </NavLink>
);

const MobNavItem = ({ children, path }) => (
  <NavLink
    to={path}
    className={({ isActive }) =>
      cn(
        "w-3/4 mx-auto text-lg font-medium capitalize transition-all duration-300 flex justify-center relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:transform after:transition-transform after:duration-300",
        isActive
          ? "text-primary after:bg-primary after:scale-x-100"
          : "text-[#1B365D] hover:after:bg-[#1B365D] hover:after:scale-x-100"
      )
    }
  >
    {children}
  </NavLink>
);
