"use client";

import Link from "next/link";
import headerStyles from '@/styles/Header.module.css'

function Header() {

	return (
		<div className={headerStyles.elementSeparation}>
			<Link href='/'>Home</Link>
            <Link href='/buttons'>Buttons Lesson</Link>
			<Link href='/text'>Text Lesson</Link>
			<Link href='/youtubeCopyBasics1'>YouTube Copy Basics 1</Link>
			<Link href='/youtubeCopyBasics2'>YouTube Copy Basics 2</Link>
			<Link href='/youtubeCopyBasics3'>YouTube Copy Basics 3</Link>
			<Link href='/youtubeCopyBasics4'>YouTube Copy Basics 4</Link>
			<Link href='/youtubeCopyBasics5'>YouTube Copy Basics 5</Link>
			<Link href='/youtubeCopyBasics6'>YouTube Copy Basics 6</Link>
			<Link href='/youtubeCopyBasics7'>YouTube Copy Basics 7</Link>
		</div>
	);
}

export default Header;