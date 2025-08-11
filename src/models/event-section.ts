import {SectionMember} from "./section-member";

export default interface EventSection {
  id: number;
  title: string;
  info: string;
  full_info: string;
  start_time: string;
  end_time: string;
  created_at: string;
  updated_at: string;
  event_id: number;
  place_id: number;
  members: SectionMember[];
}
