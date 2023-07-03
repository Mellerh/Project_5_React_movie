function Footer() {
    return(
        <footer className="page-footer indigo darken-1">
          <div className="footer-copyright indigo darken-1">
            <div className="container ">
                
            {/* добавляем актуальный год */}
            © {new Date().getFullYear()} React Movies
            <span className="right">{new Date().toLocaleString()}</span>
            </div>
          </div>
        </footer>
    )
}

export default Footer;