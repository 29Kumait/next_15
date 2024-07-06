"use client";

import React, { useRef } from "react";
import * as stylex from "@stylexjs/stylex";
import { spacing, text } from "../app/globalTokens.stylex";

import useFetchData from "./useFetchData";
import useCreateChart from "./useCreateChart";

const ChartComponent: React.FC = () => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const trafficData = useFetchData();
    useCreateChart(chartRef, trafficData);

    return (
        <div>
            <div {...stylex.props(chartStyles.chartContainer)}>
                <canvas ref={chartRef} {...stylex.props(chartStyles.chartCanvas)}></canvas>
                {trafficData.map(
                    (data, index) =>
                        data && (
                            <div key={index}>
                                <h2 {...stylex.props(chartStyles.views)}>
                                    {data.repo} - Total Views:{" "}
                                    {data.data.views.reduce((total, view) => total + view.count, 0)}
                                </h2>
                                <p {...stylex.props(chartStyles.total)}>
                                    Unique Visitors:{" "}
                                    {data.data.views.reduce((total, view) => total + view.uniques, 0)}
                                </p>
                            </div>
                        )
                )}
            </div>
        </div>
    );
};

export default ChartComponent;

const chartStyles = stylex.create({
    chartContainer: {
        width: '100%',
        height: 'auto',
        margin: spacing.sm,
        padding: spacing.xxl,
        backgroundColor: '#33445788',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    chartCanvas: {
        width: '100%',
        height: 'auto',
    },
    views: {
        fontWeight: 600,
        marginBottom: spacing.sm,
    },
    total: {
        fontSize: text.sm,
        opacity: 0.7,
    },
});