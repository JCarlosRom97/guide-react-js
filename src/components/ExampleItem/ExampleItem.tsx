import { useFetchText } from "../../hooks/useGetText";
import { CodeBlock } from "../CodeBlock/CodeBlock";

const ExampleItem = ({title, url}:{title?:string,url:string}) => {
    const { data, isLoading, isError, error } = useFetchText(
        url
    );
    return (
        <article className="solid-block">
            {title && <h3 className="left"><strong>{title}</strong></h3>}

            {isLoading && <p>Loading code...</p>}

            {isError && (
                <p role="alert" className="error">
                    Error: {error}
                </p>
            )}

            {!isLoading && !isError && data && (
                <CodeBlock code={data} />
            )}
        </article>
    )
}

export default ExampleItem;