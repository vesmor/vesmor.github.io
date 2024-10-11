import ShinyButton from "@/components/ui/shiny-button";
import { Link } from "react-router-dom";

interface ShinyButtonProps {
  text: string;
  link: string;
}

export function ShinyButtonLink(props: ShinyButtonProps) {
  return (
    <a href={props.link}>
      <ShinyButton >
        {props.text}
      </ShinyButton>
    </a>
  );
}
 