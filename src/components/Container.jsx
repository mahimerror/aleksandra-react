import { cn } from "@/lib/utils";
import PropTypes from "prop-types";

function Container({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "container mx-auto max-w-[1620px] px-4 md:px-6 lg:px-7 xl:px-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
};
export default Container;
