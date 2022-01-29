export default function Footer() {
    return (
        <footer className="footer container">
            <div className="footer__content">
                <section className="footer__content__links">
                    <h3>Links of Interest</h3>
                    <a href="/rss.xml">RSS Feed</a>
                    <br />
                    <a href="/todo">Todo List</a>
                    <br />
                    <a href="https://keyoxide.org/hkp/garrit@slashdev.space">
                        PGP Key
                    </a>
                    <br />
                    <a href="/blogroll">Blogroll</a>
                </section>
                <section className="footer__content__social">
                    <h3>Elsewhere</h3>
                    <a href="https://github.com/garritfra">Github</a>
                    <br />
                    <a href="https://www.linkedin.com/in/garritfranke/">
                        LinkedIn
                    </a>
                    <br />
                    <a href="mailto:garrit@slashdev.space">Email</a>
                    <br />
                    <a href="https://matrix.to/#/@garrit:matrix.slashdev.space">
                        Matrix
                    </a>
                </section>
            </div>
            <p>© 2019-2022 Garrit Franke</p>
        </footer>
    );
}
