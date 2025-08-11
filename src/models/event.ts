import EventSection from "./event-section";

export interface Event {
    id: number;
    alias: string;
    title: string;
    info: string;
    full_info: string;
    visible: boolean;
    start_time: string;
    end_time: string;
    site: string;
    preview_img: string;
    detail_img: string;
    sections: EventSection[];
}
