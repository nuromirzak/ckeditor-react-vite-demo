// import {CkeDemo} from "./CkeDemo.tsx";
import React, {useState} from "react";
import {initialCkeditorHtml} from "./initialCkeditorHtml.ts";

const CkeDemo = React.lazy(async () => {
    const module = await import("./CkeDemo.tsx");
    return {default: module.CkeDemo};
});

function App() {
    const [data, setData] = useState<string>(initialCkeditorHtml);
    const [isCkeLoaded, setIsCkeLoaded] = useState<boolean>(false);

    return (
        <>
            <h1>Welcome to Ckeditor 5 Demo</h1>

            {isCkeLoaded && (
                <div>
                    <h3>Editor data:</h3>
                    <pre>{data}</pre>
                    <div className="ck-content" dangerouslySetInnerHTML={{__html: data}}></div>
                </div>
            )}

            <hr/>

            {<React.Suspense fallback={<div>Loading...</div>}>
                <CkeDemo data={data} setData={setData} onLoaded={() => {
                    return setIsCkeLoaded(true);
                }}/>
            </React.Suspense>}
        </>
    );
}

export {App};
