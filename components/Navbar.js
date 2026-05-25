import Link from "next/link";

export default function Navbar() {
   return (
      <nav className="navbar">
         <div className="logo">LandCalc</div>

         <div className="nav-links">
            <Link href="/">Home</Link>

            <Link href="/kanal-to-sqft">Kanal</Link>

            <Link href="/gaj-to-sqft">Gaj</Link>

            <Link href="/acre-to-kanal">Acre</Link>
         </div>
      </nav>
   );
}
