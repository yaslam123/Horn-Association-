export default function SearchPopup({ isPopup, handlePopup }) {
    return (
        <>
            <div id="search-popup" className={`search-popup ${isPopup ? "active" : ""}`}>
                <div className="search-popup__overlay search-toggler" onClick={handlePopup} />
                {/* /.search-popup__overlay */}
                <div className="search-popup__content">
                    <form action="#">
                        <label htmlFor="search" className="sr-only">
                            Search here
                        </label>
                        {/* /.sr-only */}
                        <input type="text" id="search" placeholder="Search Here..." />
                        <button type="submit" aria-label="search submit" className="btn-box">
                            <i className="icon-icon-7"></i>
                        </button>
                    </form>
                </div>
                {/* /.search-popup__content */}
            </div>
            {/* /.search-popup */}
        </>
    );
}
