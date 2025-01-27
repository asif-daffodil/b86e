import { Helmet } from "react-helmet";


const useTitle = (children) => {
    return (
        <Helmet>
            <title>{children}</title>
        </Helmet>
    );
};

export default useTitle;