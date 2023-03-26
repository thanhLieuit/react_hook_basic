import { useParams, useHistory } from "react-router-dom";
import useFetch from "../customize/fetch";
const DetailBlog = () => {
    let { id } = useParams();

    let history = useHistory();

    const { data: dataBlogDetail, isLoading, isError }
        // = useFetch('https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z');
        = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false);
    console.log('check data detail', dataBlogDetail);
    const handleBackData = () => {
        history.push("/blog");
    }
    return (
        <>
            <div><span onClick={handleBackData}>&lt;-- Back</span></div>
            <div className="blog-detail">
                {dataBlogDetail &&
                    <>
                        <div className="title">
                            blog id: {id} ---- {isLoading === true ? 'Loading data....' : dataBlogDetail.title}
                        </div>
                        <div className="content">
                            {dataBlogDetail.body}
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default DetailBlog;