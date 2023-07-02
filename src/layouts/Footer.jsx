function Footer() {
    return(
        <footer className="page-footer indigo darken-1">
          <div className="footer-copyright indigo darken-1">
            <div className="container ">
                
            {/* добавляем актуальный год */}
            © {new Date().getFullYear()} React Movie
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
    )
}

export default Footer;