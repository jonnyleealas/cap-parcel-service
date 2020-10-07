
# code-academy-parcel-service
Application demonstrating Event Driven Architecture(EDA) using JS/ Node.js

## Business Requirements
As a business, our primary goal is to increase the visibility on the state of packages in the delivery process.

We have 2 major clients for this service: Vendors and Drivers. Each need to have full and live visibility into the state of a package as it’s being delivered to a customer
## Architecture:
Libraries Used:
```
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
```
- [x] As products are sold that need to be delivered, we need to alert the drivers that a package need pickup.
- [x] As a driver picks up a package, the store owner should know that the package is now “in transit”
- [x] Once the driver delivers a package, the store owner should know that the package has been delivered
- [x] Drivers need a way to scan a package and alert the vendors that the package is in transit

```
### Dependencies
```
"chalk": "^4.1.0",
"dotenv": "^8.2.0",
"faker": "^5.1.0"
```
### UML
[Application UML Diagram](./assets/capuml.md)
