import React from "react";
import Link from "next/link";

function Navbar(props) {
  const { username, user } = props;

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">FEED</button>
          </Link>
        </li>
        {username && (
          <>
            <li className="push-left">
              <Link href="/admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL} alt={user?.photoURL} />
              </Link>
            </li>
          </>
        )}
        {!username && (
          <li>
            <Link href="/enter">
              <button className="btn-blue">Login</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
