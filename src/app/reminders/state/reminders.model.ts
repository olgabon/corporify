export interface ReminderModel {
    id?: number;
    reminderDate: number;
    archived: boolean;
    description: string;
}


export interface SingleTableReminderModel {
    id: number;
    data: {
        text: string
        description: string
        reminderDate: number
        topLevelEntity?: {
            state: {
                data: {
                    name: string
                }
            }
        }
        entity?: {
            state: {
                data: {
                    name: string
                }
            }
        }
    };
}
