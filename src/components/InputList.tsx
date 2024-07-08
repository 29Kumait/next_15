'use client';

import { useActionState, useEffect } from "react";
import stylex from "@stylexjs/stylex";

import { ContentListRequest } from '@/actions/actions';

export default function InputList() {
    const [state, action] = useActionState(ContentListRequest, {
        success: false,
        message: "",
        data: []
    });

    useEffect(() => {
        action();
    }, []);

    return (
        <>
            <ul>
                {state.data.map((content: { _id: string, description: string }) => (
                    <li {...stylex.props(stylesInputList.contentList)} key={content._id}>{content.description}</li>
                ))}
            </ul>
        </>
    );
}


const stylesInputList = stylex.create({
    contentList: {
        fontSize: "1rem",
        margin: "29px",
        color: "rgb(245, 245, 247)",
        alignItems: "center",
        borderColor: "#4a86c7",
        borderRadius: 8,
        borderStyle: "solid",
        borderWidth: 2,
        display: "flex",
        flexBasis: 0,
        flexGrow: 1,
        height: "auto",
        justifyContent: "center",
        marginEnd: "auto",
        marginStart: "auto",
        paddingEnd: 8,
        paddingStart: 8,
        maxWidth: "calc(80% - 30px)",
        backgroundColor: "rbg(106,115,123)",
        paddingTop: 49,
        paddingBottom: 29,
        textAlign: "center",
    },
});