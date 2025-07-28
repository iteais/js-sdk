import { Event } from './event';
import { User } from './user';
import { Role } from './role';
export interface Participant {
    id: number;
    user_id: number;
    event_id: number;
    role_id: number;
    event: Event;
    user: User;
    role: Role;
}
