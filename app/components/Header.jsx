import Link from "next/link"

const Header = () => {
  return (
    <header className="text-center p-4 bg-blue-500 text-white">
        <div>
            <div className="text-3xl font-bold">
                <Link href="/">Flynt</Link>
            </div>
            <div className="flex justify-center gap-5 font-bold">
                <Link href="/about">About</Link>
                <Link href="/about/team">Our Team</Link>
                <Link href="/code/repos">Code</Link>
            </div>
        </div>
    </header>
  )
}

export default Header