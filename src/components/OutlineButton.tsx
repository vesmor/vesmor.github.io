import { buttonVariants } from "./ui/button";
// import { Button } from "./ui/button";
import { Link } from "react-router-dom"; // Import the 'Link' component from the appropriate package

interface ButtonOutlineProps {
    // children: React.ReactNode
    text: string;
    link: string;
}

export function ButtonOutline(props: ButtonOutlineProps) {
  return <Link className={buttonVariants({ variant: "outline" })} to={props.link}>{props.text}</Link>
}
