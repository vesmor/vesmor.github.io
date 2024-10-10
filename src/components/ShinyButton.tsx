import ShinyButton from "@/components/ui/shiny-button";
import { Link } from "react-router-dom";

export function ShinyButtonDemo() {
  return (<ShinyButton><Link to={"/hi"}>Hello!</Link></ShinyButton>);
}
