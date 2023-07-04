interface Account {
  accountNumber: string;
  balance: number;
  transactions: Transaction[];
}

interface Transaction {
  type: string;
  amount: number;
  timestamp: Date;
}

class Bank {
  private accounts: Account[] = [];

  createAccount(): void {
    // Prompt the user for account details
    const userName = prompt("User Name:");
    const userFatherName = prompt("User Father Name:");
    const userMotherName = prompt("User Mother Name:");
    const userNationalID = prompt("User National ID Card Number:");
    const userMobileNumber = prompt("User Mobile Number:");
    const userEmail = prompt("User Email Address:");
    const userPassword = prompt("User Email Password:");
    const reEnterUserPassword = prompt("Re-enter User Email Password:");
    const userGuardianName = prompt("User Guardian Name:");
    const userGuardianMobileNumber = prompt("User Guardian Mobile Number:");
    const accountNomineeName = prompt("Account Nominee Name:");
    const nomineeMobileNumber = prompt("Nominee Mobile Number:");
    const nomineeNationalID = prompt("Nominee National ID Card Number:");

    // Generate a random account number and card number
    const accountNumber = Math.random().toString().substr(2, 10);
    const cardNumber = "**** **** **** " + Math.random().toString().substr(2, 4);

    // Prompt the user for card details
    const expirationDate = prompt("Card Expiration Date (MM/YY):");
    const cvv = prompt("CVV:");

    // Prompt the user to confirm account creation
    const confirmCreation = prompt("Confirm Account Creation (Y/N):");

    if (confirmCreation && confirmCreation.toUpperCase() === "Y") {
      // Create a new account object
      const newAccount: Account = {
        accountNumber,
        balance: 0,
        transactions: [],
      };

      // Add the account to the bank's accounts list
      this.accounts.push(newAccount);

      // Display the account details
      console.log("User Name:", userName);
      console.log("User Email:", userEmail);
      console.log("Password:", userPassword);
      console.log("Account Number:", accountNumber);
      console.log("Card Number:", cardNumber);
      console.log("Expiration Date:", expirationDate);
      console.log("CVV:", cvv);
      console.log("Card Type: VISA");

      // Display a success message
      console.log("Account created successfully.");
    } else {
      console.log("Account creation canceled.");
    }
  }

  discloseAccount(): void {
    // Prompt the user for account details
    const userName = prompt("User Name:");
    const accountNumber = prompt("Account Number:");
    const cardNumber = prompt("Card Number:");
    const expirationDate = prompt("Expiration Date (MM/YY):");
    const cvv = prompt("CVV:");
    const reason = prompt("Reason to Disclose:");

    // Prompt the user to confirm account disclosure
    const confirmDisclosure = prompt("Confirm Account Disclosure (Y/N):");

    if (confirmDisclosure && confirmDisclosure.toUpperCase() === "Y") {
      // Find the account in the bank's accounts list
      const account = this.accounts.find(
        (acc) =>
          acc.accountNumber === accountNumber &&
          acc.cardNumber === cardNumber &&
          acc.expirationDate === expirationDate &&
          acc.cvv === cvv
      );

      if (account) {
        // Remove the account from the bank's accounts list
        this.accounts = this.accounts.filter(
          (acc) => acc.accountNumber !== accountNumber && acc.cardNumber !== cardNumber
        );

        // Display a success message
        console.log("Account disclosed successfully.");
      } else {
        console.log("Invalid account details.");
      }
    } else {
      console.log("Account disclosure canceled.");
    }
  }

  // ...Rest of the code...
}

// Prompt the user for the bank action
let userInput = prompt(
  "Enter your choice (send money, deposit money, balance check, bank statements, withdrawal money, create account, disclose account, exit):"
);

while (userInput && userInput.toLowerCase() !== "exit") {
  // Initialize a new instance of the Bank class
  const bank = new Bank();

  switch (userInput.toLowerCase()) {
    case "send money":
      const bankName = prompt("Bank Name:");
      const accountNumber = prompt("Your Account Number:");
      const expirationDate = prompt("Card Expiration Date (MM/YY):");
      const cvv = prompt("CVV:");
      const sendAmount = parseFloat(prompt("Amount to Send:"));
      const senderBankName = prompt("Sender Bank Name:");
      const senderAccountNumber = prompt("Sender Account Number:");

      // Send money logic
      // ...

      break;

    case "deposit money":
      const accountHolderName = prompt("Account Holder Name:");
      const accountNumber = prompt("Account Number:");
      const depositAmount = parseFloat(prompt("Amount:"));
      const mobileNumber = prompt("Mobile Number:");
      const referenceName = prompt("Reference Name:");
      const referenceMobileNumber = prompt("Reference Mobile Number:");

      // Deposit money logic
      // ...

      break;

    case "balance check":
      const email = prompt("Enter your email:");
      const password = prompt("Enter Password:");

      // Balance check logic
      // ...

      break;

    case "bank statements":
      const email = prompt("Enter your email:");
      const password = prompt("Enter Password:");

      // Bank statements logic
      // ...

      break;

    case "withdrawal money":
      const email = prompt("Enter your email:");
      const password = prompt("Enter Password:");
      const withdrawalAmount = parseFloat(prompt("Enter the amount you want to withdraw:"));

      // Withdrawal money logic
      // ...

      break;

    case "create account":
      bank.createAccount();

      break;

    case "disclose account":
      bank.discloseAccount();

      break;

    default:
      console.log("Invalid choice.");
      break;
  }

  userInput = prompt(
    "Enter your choice (send money, deposit money, balance check, bank statements, withdrawal money, create account, disclose account, exit):"
  );
}

console.log("Exited the banking system.");
