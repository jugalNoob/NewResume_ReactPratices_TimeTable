pragma solidity ^0.8.0;

contract Links {
    uint public balance;
struct Payingall {
    string name;
    
}

 mapping(address => Payingall) private Address;
 //Information
function UserInformaion(address payable add, uint num, string memory _name) public payable {
    // Transfer Ether to the specified address
    add.transfer(num);
      balance -= num;
    // Create a new Payingall struct with the provided _name
    Payingall memory all = Payingall(_name);
    // Store the Payingall struct in the mapping under the sender's address
    Address[msg.sender] = all;
    // Update the contract's balance by subtracting msg.value
  
}
  

    constructor() {
        balance = 1000 wei;
    }


    function Paying() public payable {
        // Add your payment logic here
    }

    receive() external payable {
        Paying();
    }

    function contribute(uint value) public payable {

        balance += value;
    }

    function withdraw(uint value) public payable {
        // require(value <= balance, "Insufficient balance");
        balance -= value;
        // payable(msg.sender).transfer(value);
    }

    function getBalance() public view returns (uint) {
        return balance;
    }



}