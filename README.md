# CRUD Code Test 

Please read each note very carefully!
Feel free to add/change the project structure to a clean architecture to your view.

Create a simple CRUD application with Angular that implements the below model:
```
Customer {
	Firstname
	Lastname
	DateOfBirth
	PhoneNumber
	Email
	BankAccountNumber
}
```
## Practices and patterns (Must):

- [TDD](https://angular.io/guide/testing) [Wiki](https://en.wikipedia.org/wiki/Test-driven_development)
- [DDD](https://en.wikipedia.org/wiki/Domain-driven_design)
- [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development)
- Clean git commits that shows your work progress.
- [Microfrontend](https://en.wikipedia.org/wiki/Microfrontend)

### Validations (Must)

- During Create; validate the phone number to be a valid *mobile* number only (You can use [Google LibPhoneNumber](https://github.com/google/libphonenumber) to validate mobile number).

- A Valid email and a valid account number must be checked before submitting the form.

- Create a Browser local storage to store the list of customers.

- Customers must be unique in the database: By `Firstname`, `Lastname` and `DateOfBirth`.

- Email must be unique in the local storage or memory array

### Delivery (Must)
- Please clone this repository in a new GitHub repository in private mode and share with ID: `mason-chase` in private mode on github.com, make sure you do not erase my commits and then create a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) (code review).
