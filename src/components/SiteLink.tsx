import { Link, useLocation } from "react-router-dom";

type SiteLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  /** A route ("/work") or a homepage section ("#contact"). */
  to: string;
};

/**
 * A link that works from any page.
 *
 * - Routes ("/work") use React Router, so the page changes without a reload.
 * - Homepage sections ("#contact") stay plain anchors while you're on the
 *   homepage (the same scrolling as before), and go to "/#contact" from
 *   other pages, where ScrollManager scrolls to the section.
 */
export default function SiteLink({ to, ...rest }: SiteLinkProps) {
  const { pathname } = useLocation();

  if (to.startsWith("#")) {
    if (pathname === "/") return <a href={to} {...rest} />;
    return <Link to={`/${to}`} {...rest} />;
  }

  return <Link to={to} {...rest} />;
}
