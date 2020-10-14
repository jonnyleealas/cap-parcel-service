
# code-academy-parcel-service
Application demonstrating Event Driven Architecture(EDA) using JS/ Node.js/Socket.io

## Business Requirements
We will need to build a front end and a backend
## Architecture:

```
Javascript
Node.js
Socket.io
faker

```

## Step 1
After cloning repository
```
Run npm i
```
## Step 2
Touch .env and use the following variables so hide backend secrets.
```
add a .env folder in your root 

```
## Testing
``` 
npm test server.test.js
```
### Task Checklist
**V1 Event Driven Programming**
```
- [x] As products are sold that need to be delivered, we need to alert the drivers that a package need pickup.
- [x] As a driver picks up a package, the store owner should know that the package is now “in transit”
- [x] Once the driver delivers a package, the store owner should know that the package has been delivered
- [x] Drivers need a way to scan a package and alert the vendors that the package is in transit

```
**V2 Socket.io**
```
- [x] UML
- [x] README.md
- [x] CAPS will connect vendors and clients.
- [] Each store will have its own room.
- [x] Start socket.io on a designated port.
- [x] Monitor pickup
- [x] Monitor in-transit
- [x] Monitor delivered
- [x] Broadcast events and payload to appropriate clients in CAPS.
- [x] Pickup can broadcast on all sockets.
- [] in-transit and delivered goes to correct vendor. Emit message and payload.
```
### Dependencies
```
"chalk": "^4.1.0",
"dotenv": "^8.2.0",
"faker": "^5.1.0"
```
### UML
- [Application UML Diagram](./assets/capuml.md)
- [Socket.io UML](./assets/socketio.md)
