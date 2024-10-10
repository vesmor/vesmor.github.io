import {Button, buttonVariants } from "@/components/ui/button"
import { Link } from "react-router-dom";

interface ButtonOutlineProps {
    // children: React.ReactNode
    text: string;
    link: string;
}

export function ButtonOutline(props: ButtonOutlineProps) {
  return (
    <Link className={buttonVariants({ variant: "outline" })} to={"/hi"}>Click here</Link>

  )

}
