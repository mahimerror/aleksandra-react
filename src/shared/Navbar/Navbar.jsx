import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className=" fixed top-0 z-50 w-full">
      <Container>
        <nav className="flex items-center justify-between gap-2 bg-white/20 p-6 rounded-b-3xl">
          <div className="w-[137px]"></div>

          <div className={`hidden md:block`}>
            <ul className="flex list-none items-center gap-5">
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

          <Link to="contact-us">
            <Button>Contact Us</Button>
          </Link>

          {/* <div className="flex gap-5">
          <div className="hidden md:block">
            {isAuthenticated ? (
              <NotifySection />
            ) : (
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  className="text-sm xl:text-base"
                  asChild
                >
                  <Link to="/login">Sign in</Link>
                </Button>
                <Button asChild className="text-sm xl:text-base">
                  <Link to="/pro-register">Join as a Pro</Link>
                </Button>
              </div>
            )}
          </div>

          <button onClick={() => setOpen(!isOpen)} className="md:hidden">
            <RxHamburgerMenu className="text-2xl" />
          </button>

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
                  <SiteLogo className="w-30" />
                  <button onClick={() => setOpen(false)}>
                    <RxCross2 size={24} />
                  </button>
                </div>
                <ul className="font-syne mt-10 space-y-4 text-base">
                  {[
                    { to: "/", label: "Home" },
                    { to: "/about-us", label: "About us" },
                    { to: "/services", label: "Services" },
                    { to: "/contact", label: "Contact" },
                  ].map((item) => (
                    <li key={item.to}>
                      <NavLink
                        onClick={() => setOpen(false)}
                        to={item.to}
                        className={({ isActive }) =>
                          `text-md w-full font-poppins font-medium capitalize transition-colors duration-300 ${
                            isActive ? "text-accent" : "hover:text-accent"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              {!isAuthenticated ? (
                <div className="flex flex-col items-center gap-2">
                  <Button className="w-full" variant="outline" asChild>
                    <Link to="/login">Sign in</Link>
                  </Button>
                  <Button className="w-full" asChild>
                    <Link to="/pro-register">Join as a Pro</Link>
                  </Button>
                </div>
              ) : (
                <NotifySection />
              )}
            </div>
          </div>
        </div> */}
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
        "text-lg  capitalize  transition-all duration-300 w-24 flex justify-center",
        isActive ? "text-primary font-semibold" : "text-white font-medium"
      )
    }
  >
    {children}
  </NavLink>
);
