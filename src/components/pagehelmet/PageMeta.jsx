import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { getPageTitle } from "../../helpers/helper";

const PageMeta = () => {
    let location = useLocation();
    const pathstring = location.pathname;
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{getPageTitle(pathstring)}</title>
                <link
                    rel="shortcut icon"
                    href="https://assets.stickpng.com/images/63079fb4dcb2d1d1e80cc79a.png"
                    type="image/x-icon"
                />
            </Helmet>
        </>
    );
};

export default PageMeta;
