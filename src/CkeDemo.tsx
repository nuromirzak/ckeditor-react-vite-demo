import "ckeditor5-custom-build";
import Editor from "ckeditor5-custom-build";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import {useEffect} from "react";

console.log("Editor", Editor);

interface CkeDemoProps {
    data: string;
    setData: (data: string) => void;
    onLoaded: () => void;
}

export function CkeDemo({data, setData, onLoaded}: CkeDemoProps) {
    console.log("CkeDemo loaded");

    useEffect(() => {
        onLoaded();
        console.log("CkeDemo useEffect");
    }, [onLoaded]);

    return (
        <div className="App">
            <h2>Using CKEditor&nbsp;5 build in React</h2>
            <CKEditor
                editor={Editor}
                data={data}
                onReady={(editor) => {
                    console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                    console.log(event);
                    const data = editor.getData();
                    setData(data);
                }}
            />
        </div>
    );
}
