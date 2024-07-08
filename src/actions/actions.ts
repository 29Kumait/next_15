import { fetchCreateContent, fetchContentList } from '@/utils/fetchContent';

export async function ContentFormRequest(prevState: any, formData: any) {
    const description = formData.get("description");
    try {
        const content = await fetchCreateContent({ description });

        if (!content) {
            return { success: false, message: "Content not saved" };
        }
        return { success: true, message: "Content saved successfully" };
    } catch (error) {
        return { success: false, message: (error as Error).toString() };
    }
}


export async function ContentListRequest() {
    try {
        const contentList = await fetchContentList();
        if (typeof contentList === 'string') {
            return { success: false, message: contentList, data: [] };
        }
        return { success: true, message: "Content fetched successfully", data: contentList };
    } catch (error) {
        return { success: false, message: (error as Error).toString(), data: [] };
    }
}