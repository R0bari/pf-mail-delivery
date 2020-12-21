interface MessageSpecification {
    theme: string;
    body: string;
    files: Array<string>;
    filesSize: Array<number>;
    senderEmail: string;
    recipientEmail: string;
    sendDate: string;
    deliveryService: string;
}