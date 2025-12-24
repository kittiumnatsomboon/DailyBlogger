import { Link , Outlet } from "react-router-dom"

export default function Navbar(){
    return(
    <>
    <div>
        
        <Link to="/" className="pr-2">หน้าแรก</Link>
        <Link to="/Aboute" className="pr-2">เกี่ยวกับเรา</Link>
        <Link to="/Contact" className="pr-2">ติดต่อเรา</Link>
        <Link to="/Register" className="pr-2">สมัครสมาชิก</Link>
        <Link to="/Login" className="pr-2">เข้าสู่ระบบ</Link>
        <Outlet/>
    </div>
    </>
    )
}