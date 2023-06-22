// class Ticket {
//     destination: string;
//     price: number;
//     status: string;
//     constructor(destination: string, price: number, status: string) {
//         this.destination = destination;
//         this.price = price;
//         this.status = status;
//     }
//     toString(): string {
//         return `Ticket { destination: '${this.destination}', price: ${this.price.toFixed(2)}, status: '${this.status}' }`;
//     }
// }
// class TicketSystem {
//     tickets: Ticket[];
//     sortingCriteria: string;
//     addTickets(tickets: string[]) {
//         this.tickets = [];
//         for (const data of tickets) {
//             const [destination, price, status] = data.split('|');
//             const ticket = new Ticket(destination, Number(price), status);
//             this.tickets.push(ticket);
//         }
//     }
//     sortTickets(sortingCriteria: string): void {
//         const sortingKey = sortingCriteria.toLowerCase();
//         if (sortingKey === 'destination' || sortingKey === 'status') {
//             this.tickets.sort((a, b) => {
//                 const sortingKeyA = String(a[sortingKey]);
//                 const sortingKeyB = String(b[sortingKey]);
//                 return sortingKeyA.localeCompare(sortingKeyB);
//             });
//         } else if (sortingKey === 'price') {
//             this.tickets.sort((a, b) => {
//                 const sortingKeyA = Number(a[sortingKey]);
//                 const sortingKeyB = Number(b[sortingKey]);
//                 return sortingKeyA - sortingKeyB;
//             });
//         }
//     }
//     printSummary(): void {
//         console.log(`[\n ${this.tickets.map((ticket) => ticket.toString()).join(',\n')}\n]`)
//     }
// }
// const inputData = [
//     'Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed',
// ];
// const myTicketSystem = new TicketSystem();
// myTicketSystem.addTickets(inputData);
// myTicketSystem.sortTickets('destination');
// myTicketSystem.printSummary();
//-----------------------------------------------------------
class Ticket {
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}
function createTickets(tickets, sortingCriteria) {
    const ticketObjects = tickets.map((ticket) => {
        const [destination, price, status] = [...ticket.split('|')];
        return new Ticket(destination, Number(price), status);
    });
    return ticketObjects.sort((obj1, obj2) => {
        if (sortingCriteria === 'price') {
            return obj1.price - obj2.price;
        }
        else {
            return obj1[sortingCriteria].localeCompare(obj2[sortingCriteria]);
        }
    });
}
const tickets = [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
];
const destination = 'destination';
// const tickets = [
//     'Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'
//     ];
// const destination = 'status';
// const tickets = [
//     'Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'
// ];
// const destination = 'price';
console.log(createTickets(tickets, destination));
//# sourceMappingURL=tickets.js.map