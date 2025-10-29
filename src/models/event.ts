import EventSection from "./event-section";

export interface Event {
    id: number;
    alias: string;
    title: string;
    info: string;
    full_info: string;
    visible: boolean;
    visible_on_main: boolean;
    start_time: string;
    end_time: string;
    site: string;
    // new fields
    preview_img: string;
    detail_img: string;
    default_role_id: number;
    created_by: number;
    send_reg_email: boolean;
}
