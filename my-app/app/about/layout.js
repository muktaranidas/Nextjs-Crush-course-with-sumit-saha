import Link from "next/link";

export default function AboutLayout({children}) {
    return (
      <main>
        <nav>
          <ul>
            <li><Link href="/about/mission">Mission</Link></li>
            <li><Link href="/about/vision">Vision</Link></li>
           
          </ul>
        </nav>
        {children}
       
      </main>
    );
  }
  