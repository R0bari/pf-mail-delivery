export class Message {
    id: number;
    theme: string;
    body: string;
    files: Array<string>;
    filesSize: Array<number>;
    senderId: number; 
    senderEmail: string;
    recipientEmail: string;
    sendDate: string;

    constructor(id: number, specification: MessageSpecification) {
        this.id = id;
        this.theme = specification.theme;
        this.body = specification.body;
        this.files = [...specification.files];
        this.filesSize = [...specification.filesSize];
        this.senderEmail = specification.senderEmail;
        this.senderId = Math.floor(Math.random() * 10000);
        this.recipientEmail = specification.recipientEmail;
        this.sendDate = specification.sendDate;

    }
    
    static editMessage(messageToEdit: Message, specification: MessageSpecification) {
        messageToEdit.theme = specification.theme || messageToEdit.theme;
        messageToEdit.body = specification.body || messageToEdit.body;
        messageToEdit.files = [...specification.files] || messageToEdit.files;
        messageToEdit.filesSize = [...specification.filesSize] || messageToEdit.filesSize;
        messageToEdit.senderEmail = specification.senderEmail || messageToEdit.senderEmail;
        return messageToEdit;
    }
}