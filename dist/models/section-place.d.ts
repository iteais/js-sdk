import EventSection from "./event-section";
export default interface SectionPlace {
    id: number;
    event_id: number;
    title: string;
    sections: EventSection[];
}
