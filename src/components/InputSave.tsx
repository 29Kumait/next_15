'use client';

import { useActionState } from "react";
import stylex from "@stylexjs/stylex";
import { ContentFormRequest } from '@/actions/actions';

export default function InputSave() {


    const [formState, action] = useActionState(ContentFormRequest, {
        success: null,
        message: "",
    });

    return (
        <>
            <form action={action} {...stylex.props(stylesContentForm.form)}>
                <textarea
                    name="description"
                    placeholder=" ⓣ🅈ⓟⒺ"
                    rows={4}
                    cols={40}
                    required
                    {...stylex.props(stylesContentForm.textarea)}
                />
                <button type="submit" {...stylex.props(stylesContentForm.button)}>
                    Save
                </button>
            </form>

            {formState.message && <p>{formState.message}</p>}
        </>
    );
}

const stylesContentForm = stylex.create({
    form: {
        maxWidth: 380,
        marginInlineStart: "auto",
        marginInlineEnd: "auto",
        marginBottom: 34,
    },
    button: {
        color: "#4b51b7",
        alignItems: "center",
        borderColor: "#4a86c7",
        borderRadius: 8,
    },
    textarea: {
        backgroundColor: "transparent",
        borderStyle: "none",
        boxSizing: "border-box",
        color: "var(--primary-text)",
        fontSize: 16,
        fontWeight: "normal",
        lineHeight: 1.25,
        padding: "26px 16px 10px",
        width: "100%",
        alignSelf: "center",
    },
});


// 'use client';

// import { useState, useEffect } from 'react';
// import { fetchCreateContent, fetchContentList } from '@/utils/fetchContent';

// interface Content {
//     _id: string;
//     description: string;
// }

// const ContentManager = () => {
//     const [contentList, setContentList] = useState<Content[]>([]);
//     const [description, setDescription] = useState<string>('');
//     const [error, setError] = useState<string>('');
//     const [loading, setLoading] = useState<boolean>(false);

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             const data = await fetchContentList();
//             if (typeof data === 'string') {
//                 setError(data);
//             } else {
//                 setContentList(data);
//             }
//             setLoading(false);
//         };

//         fetchData();
//     }, []);

//     const handleSubmit = async (event: React.FormEvent) => {
//         event.preventDefault();
//         setLoading(true);
//         const result = await fetchCreateContent({ description });
//         if (typeof result === 'string') {
//             setError(result);
//         } else {
//             setContentList((prevContent) => [...prevContent, result]);
//             setDescription('');
//         }
//         setLoading(false);
//     };

//     return (
//         <div>
//             <h1>Content Manager</h1>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                     placeholder="Enter description"
//                     required
//                 />
//                 <button type="submit" disabled={loading}>
//                     {loading ? 'Saving...' : 'Save Content'}
//                 </button>
//             </form>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <ul>
//                 {contentList.map((content) => (
//                     <li key={content._id}>{content.description}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ContentManager;
