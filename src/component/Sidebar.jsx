import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import {
    FaUserGraduate,
    FaAngleDown,
    FaAngleUp,
    FaUniversity,
    FaRegMoneyBillAlt,
    FaRegCreditCard,
    FaRegKeyboard,
    FaRegEdit,
    FaCcAmazonPay,
    FaServer,
    FaFileExport,
    FaCoins,
} from 'react-icons/fa'
import {
    FaCircleMinus,
    FaMoneyCheckDollar,
    FaWallet,
    FaFileInvoiceDollar,
    FaGears,
    FaFileImport,
    FaAddressCard,
} from 'react-icons/fa6'
import { BsFillMortarboardFill } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../assets/images/logo.png' // with import
import './css/sidebar.css'

const ManajmenData = [
    {
        id: 1,
        to: 'program-studi',
        name: 'Program Studi',
    },
    {
        id: 2,
        to: 'kelas',
        name: 'Kelas',
    },
    {
        id: 3,
        to: 'siswa',
        name: 'Siswa',
    },
]
function Sidebar() {
    const [toggle1, setToggle1] = React.useState(false)
    const [toggle2, setToggle2] = React.useState(false)
    const [toggle3, setToggle3] = React.useState(false)
    const [toggle4, setToggle4] = React.useState(false)
    const [toggle5, setToggle5] = React.useState(false)
    const [toggle6, setToggle6] = React.useState(false)
    const [toggle7, setToggle7] = React.useState(false)
    const [toggle8, setToggle8] = React.useState(false)
    const [toggle9, setToggle9] = React.useState(false)

    const toggleNav = () => {
        setToggle1((prevToggle) => {
            return prevToggle === false ? true : false
        })
    }

    const toggleNav2 = () => {
        setToggle2((prevToggle) => {
            return prevToggle === false ? true : false
        })
    }

    const toggleNav3 = () => {
        setToggle3((prevToggle) => {
            return prevToggle === false ? true : false
        })
    }

    const toggleNav4 = () => {
        setToggle4((prevToggle) => {
            return prevToggle === false ? true : false
        })
    }

    const toggleNav5 = () => {
        setToggle5((prevToggle) => {
            return prevToggle === false ? true : false
        })
    }

    const toggleNav6 = () => {
        setToggle6((prevToggle) => {
            return prevToggle === false ? true : false
        })
    }

    const toggleNav7 = () => {
        setToggle7((prevToggle) => {
            return prevToggle === false ? true : false
        })
    }

    const toggleNav8 = () => {
        setToggle8((prevToggle) => {
            return prevToggle === false ? true : false
        })
    }
    const toggleNav9 = () => {
        setToggle9((prevToggle) => {
            return prevToggle === false ? true : false
        })
    }

    return (
        <div className="sidebar-text">
            <div className="min-vh-100 sidebar-wrapper">
                <div className="brand-name">
                    <div className="brand-name__image-wrapper">
                        <img src={logo} className=" me-1 fs-1" />
                    </div>
                    {/* <FaUniversity className='me-3 fs-1' /> */}
                </div>

                <div className="list-group list-group-flush ">
                    <hr className="text-white d-none d-sm-block"></hr>
                    <ul className="nav nav-pills flex" id="parentM">
                        <Link className="link" to="/admin">
                            <li className="nav-item nav-link   my-1">
                                <IconContext.Provider
                                    value={{ color: '#DC84F3' }}
                                >
                                    <FaRegKeyboard
                                        className="icons-sidebar"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            padding: '3px',
                                            color: '#5B5DEE',
                                            boxShadow:
                                                'rgba(215, 12, 12, 0.15) 1.95px 1.95px 2.6px',
                                        }}
                                    />
                                </IconContext.Provider>

                                <span className="ms-2">Dashboard</span>
                            </li>
                        </Link>

                        {/* baru=================== */}
                        <Link className="link" to="/admin/pembayaran-siswa">
                            <li className="nav-item nav-link text-black  my-1">
                                <IconContext.Provider
                                    value={{ color: '#DC84F3' }}
                                >
                                    <FaCcAmazonPay
                                        className="icons-sidebar"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            padding: '3px',
                                            color: '#5B5DEE',
                                            boxShadow:
                                                'rgba(215, 12, 12, 0.15) 1.95px 1.95px 2.6px',
                                        }}
                                    />
                                </IconContext.Provider>

                                <span className="ms-2">Pembayaran Siswa</span>
                            </li>
                        </Link>

                        <Link className="link" to="/admin/kirim-tagihan">
                            <li className="nav-item nav-link text-black  my-1">
                                <IconContext.Provider
                                    value={{ color: '#DC84F3' }}
                                >
                                    <FaMoneyCheckDollar
                                        className="icons-sidebar"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            color: '#5B5DEE',
                                            padding: '3px',
                                            boxShadow:
                                                'rgba(215, 12, 12, 0.15) 1.95px 1.95px 2.6px',
                                        }}
                                    />
                                </IconContext.Provider>

                                <span className="ms-2">Kirim Tagihan</span>
                            </li>
                        </Link>

                        <Link className="link" to="/admin/page-manajemen-data">
                            <li className="nav-item nav-link text-black  my-1">
                                <IconContext.Provider
                                    value={{ color: '#DC84F3' }}
                                >
                                    <FaServer
                                        className="icons-sidebar"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            color: '#5B5DEE',
                                            padding: '3px',
                                            boxShadow:
                                                'rgba(215, 12, 12, 0.15) 1.95px 1.95px 2.6px',
                                        }}
                                    />
                                </IconContext.Provider>

                                <span className="ms-2">Manajemen Data</span>
                            </li>
                        </Link>
                        {/* baru=================== */}

                        {/* lama ========================== */}

                        {/* <li className="nav-item my-2" onClick={toggleNav}>
                            <a
                                href="#submenu"
                                className="nav-link "
                                data-bs-toggle="collapse"
                                aria-current="page"
                            >
                                <IconContext.Provider
                                    value={{ color: '#DC84F3' }}
                                >
                                    <FaUserGraduate
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            color: '#5B5DEE',
                                            padding: '3px',
                                            borderradius: '50x',
                                            boxShadow:
                                                'rgba(215, 12, 12, 0.15) 1.95px 1.95px 2.6px',
                                        }}
                                    />
                                </IconContext.Provider>

                                <span className="ms-2">Manajemen Data</span>
                                <Navbar.Toggle
                                    aria-controls="responsive-navbar-nav"
                                    className="ms-2"
                                >
                                    {toggle1 === true ? (
                                        <FaAngleUp />
                                    ) : (
                                        <FaAngleDown />
                                    )}
                                </Navbar.Toggle>
                            </a>
                            <ul
                                className="nav collapse ms-1 flex-column justify-content-end column-wrapper bg-ul "
                                id="submenu"
                                data-bs-parent="#parentM"
                            >
                                {ManajmenData.map((item) => (
                                    <Link
                                        to={item.to}
                                        className="link color"
                                        key={item.id}
                                    >
                                        <li
                                            className="nav-item nav-link  m-1"
                                            style={{ color: '#5B5DEE' }}
                                        >
                                            <FaCircleMinus /> {item.name}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </li> */}

                        {/* lama ========================== */}

                        {/* baru=================== */}

                        <Link className="link" to="/admin/page-akademik">
                            <li className="nav-item nav-link text-black  my-1">
                                <IconContext.Provider
                                    value={{ color: '#DC84F3' }}
                                >
                                    <BsFillMortarboardFill
                                        className="icons-sidebar"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            color: '#5B5DEE',
                                            padding: '3px',
                                            boxShadow:
                                                'rgba(215, 12, 12, 0.15) 1.95px 1.95px 2.6px',
                                        }}
                                    />
                                </IconContext.Provider>

                                <span className="ms-2">Akademik</span>
                            </li>
                        </Link>

                        <Link className="link" to="/admin/setting-pembayaran">
                            <li className="nav-item nav-link text-black  my-1">
                                <IconContext.Provider
                                    value={{ color: '#DC84F3' }}
                                >
                                    <FaGears
                                        className="icons-sidebar"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            color: '#5B5DEE',
                                            padding: '3px',
                                            boxShadow:
                                                'rgba(215, 12, 12, 0.15) 1.95px 1.95px 2.6px',
                                        }}
                                    />
                                </IconContext.Provider>

                                <span className="ms-2">Seting Pembayaran</span>
                            </li>
                        </Link>

                        <Link className="link" to="/admin/page-kas-bank">
                            <li className="nav-item nav-link text-black  my-1">
                                <IconContext.Provider
                                    value={{ color: '#DC84F3' }}
                                >
                                    <FaRegCreditCard
                                        className="icons-sidebar"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            color: '#5B5DEE',
                                            padding: '3px',
                                            boxShadow:
                                                'rgba(215, 12, 12, 0.15) 1.95px 1.95px 2.6px',
                                        }}
                                    />
                                </IconContext.Provider>

                                <span className="ms-2">Kas Bank</span>
                            </li>
                        </Link>

                        <Link className="link" to="/admin/laporan-pembayaran">
                            <li className="nav-item nav-link text-black  my-1">
                                <IconContext.Provider
                                    value={{ color: '#DC84F3' }}
                                >
                                    <FaRegEdit
                                        className="icons-sidebar"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            color: '#5B5DEE',
                                            padding: '3px',
                                            boxShadow:
                                                'rgba(215, 12, 12, 0.15) 1.95px 1.95px 2.6px',
                                        }}
                                    />
                                </IconContext.Provider>

                                <span className="ms-2">Lap. Pembayaran</span>
                            </li>
                        </Link>

                        <Link className="link" to="/admin/laporan-keuangan">
                            <li className="nav-item nav-link text-black  my-1">
                                <IconContext.Provider
                                    value={{ color: '#DC84F3' }}
                                >
                                    <FaFileInvoiceDollar
                                        className="icons-sidebar"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            color: '#5B5DEE',
                                            padding: '3px',
                                            boxShadow:
                                                'rgba(215, 12, 12, 0.15) 1.95px 1.95px 2.6px',
                                        }}
                                    />
                                </IconContext.Provider>

                                <span className="ms-2">Lap. Keuangan</span>
                            </li>
                        </Link>

                        {/* <Link className="link" to="/admin/backup-data">
                            <li className="nav-item nav-link text-black  my-1">
                                <IconContext.Provider
                                    value={{ color: '#DC84F3' }}
                                >
                                    <FaCoins
                                        className="icons-sidebar"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            color: '#5B5DEE',
                                            padding: '3px',
                                            boxShadow:
                                                'rgba(215, 12, 12, 0.15) 1.95px 1.95px 2.6px',
                                        }}
                                    />
                                </IconContext.Provider>

                                <span className="ms-2">Backup Data</span>
                            </li>
                        </Link> */}

                        <Link className="link" to="/admin/export-db">
                            <li className="nav-item nav-link   my-1">
                                <IconContext.Provider
                                    value={{ color: '#DC84F3' }}
                                >
                                    <FaFileImport
                                        className="icons-sidebar"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            padding: '3px',
                                            color: '#5B5DEE',
                                            boxShadow:
                                                'rgba(215, 12, 12, 0.15) 1.95px 1.95px 2.6px',
                                        }}
                                    />
                                </IconContext.Provider>

                                <span className="ms-2">Export DB</span>
                            </li>
                        </Link>

                        <Link className="link" to="/admin/bulk/siswa">
                            <li className="nav-item nav-link   my-1">
                                <IconContext.Provider
                                    value={{ color: '#DC84F3' }}
                                >
                                    <FaAddressCard
                                        className="icons-sidebar"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            padding: '3px',
                                            color: '#5B5DEE',
                                            boxShadow:
                                                'rgba(215, 12, 12, 0.15) 1.95px 1.95px 2.6px',
                                        }}
                                    />
                                </IconContext.Provider>

                                <span className="ms-2">Bulk Data Siswa</span>
                            </li>
                        </Link>

                        <Link className="link" to="/admin/pengaturan/lembaga">
                            <li className="nav-item nav-link   my-1">
                                <IconContext.Provider
                                    value={{ color: '#DC84F3' }}
                                >
                                    <FaGears
                                        className="icons-sidebar"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            padding: '3px',
                                            color: '#5B5DEE',
                                            boxShadow:
                                                'rgba(215, 12, 12, 0.15) 1.95px 1.95px 2.6px',
                                        }}
                                    />
                                </IconContext.Provider>

                                <span className="ms-2">Pengaturan</span>
                            </li>
                        </Link>
<Link className="link" to="/admin/pengaturan/konfigurasi-wa">
                            <li className="nav-item nav-link   my-1">
                                <IconContext.Provider
                                    value={{ color: '#DC84F3' }}
                                >
                                    <FaGears
                                        className="icons-sidebar"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            padding: '3px',
                                            color: '#5B5DEE',
                                            boxShadow:
                                                'rgba(215, 12, 12, 0.15) 1.95px 1.95px 2.6px',
                                        }}
                                    />
                                </IconContext.Provider>

                                <span className="ms-2">Pengaturan wa</span>
                            </li>
                        </Link>
                        {/* baru=================== */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
