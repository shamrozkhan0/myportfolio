import PurpleButton from "../common/PurpleButton";
import "../../styles/Components/Navbar.css"

const Navbar = () => {
    return (


        <nav className="navbar navbar-expand-md mt-3 mx-2  ">
            <div iv className="container nav-container position-relative border-4 border-purple ps-2 ps-md-4 pe-2 py-3 py-md-2  rounded-2 ">

                <a className="navbar-brand text-light fw-semibold fs-3" href="#">Shamroz Khan</a>
                <button className="navbar-toggler text-light border-light px-3 py-2" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars text-light fs-3 "></i>
                </button>


                <div className="collapse navbar-collapse gap-5 justify-content-end " id="navbarNav">
                    <ul className="navbar-nav d-flex align-items-center gap-5">
                        <li className="nav-item">
                            <a className="nav-link text-light fw-semibold active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light-emphasis fw-semibold" href="#">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light-emphasis fw-semibold" href="#">Projects </a>
                        </li>
                    </ul>

                    <PurpleButton Title={"HIRE ME"} className={"hire-btn"} />

                </div>

            </div>
        </nav>
    )
}

export default Navbar;