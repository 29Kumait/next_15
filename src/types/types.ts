export type ExerciseItem = {
    id: string;
    name: string;
    url: string;
};

export type Data = {
    [key: string]: ExerciseItem[];
};
