
# code-academy-parcel-service
Application demonstrating Event Driven Architecture(EDA) using JS/ Node.js

## Business Requirements
As a business, our primary goal is to increase the visibility on the state of packages in the delivery process.

We have 2 major clients for this service: Vendors and Drivers. Each need to have full and live visibility into the state of a package as it’s being delivered to a customer
## Architecture:
Libraries Used:
```

```

## Step 1
```
Run npm i
```
## Step 2
Touch .env and use the following variables so hide backend secrets.
```
add a .env folder in your root 
Add a PORT=<path>
Add a SECRET=<secret>
Add a MONGODB_URI=<path>
```
## Testing
``` 
npm test server.test.js
```
### Task Checklist
```
- [] As products are sold that need to be delivered, we need to alert the drivers that a package is ready for pickup/delivery

- [] As a driver picks up a package, the store owner should know that the package is now “in transit”

- [] Once the driver delivers a package, the store owner should know that the package has been delivered
- [] As stores sell product and need a package delivered, Drivers need an instant notification to pick the package up
- [] Drivers need a way to scan a package and alert the vendors that the package is in transit
- [] Drivers need a way to scan a package and alert the vendors that the package has been delivered

- [] Middleware for 500 and 404 errors
```
### UML
[Application UML Diagram](./assets/capuml.md)
