import Layout from "./Layout";

export default function Page(props) {
    const { title, date, siteTitle } = props;
    return (
        <Layout siteTitle={siteTitle}>
            <article className="page">
                { title && <div className="page__info">
                    <h1>{title}</h1>
                    {date && <h4 className="page__info__date">{date}</h4>}
                </div> }
                <br />
                <div className="page__body">{props.children}</div>
            </article>
        </Layout>
    );
}
