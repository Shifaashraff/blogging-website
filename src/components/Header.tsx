import Link from "next/link"

export default function Header(){
return(
<div className="bar">
    <div className="header-top">
        <div className="top-left">
            <img src="/img/Search (1).png" />
        </div>
        <div className="top-mid">
            <img src="/img/Avion (1).png" />
        </div>
        <div className="top-right">
            <img src="/img/Shopping--cart (1).png" />
            <img src="/img/User--avatar (1).png" />
        </div>
    </div>
    <div className="header-bottom">
        <ul className="icon-list">
                <li><Link href="/">Plant pots</Link></li>
                <li><Link href="/shop">Ceramic</Link></li>
                <li><Link href="/product">Table</Link></li>
                <li><Link href="/cart">Chair</Link></li>
                <li><Link href="/contact-us">Crockery</Link></li>
                <li><Link href="/about">tablewear</Link></li>
                <li><Link href="/faq">Cutlery</Link></li>
        </ul>
    </div>
</div>
)
}