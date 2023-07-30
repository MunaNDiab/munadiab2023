
function logCustomerInfo(customer) {
    // Log customer information
    console.log(customer.custCode);
    console.log(customer.custName);
    console.log(customer.custAge);
    console.log(customer.custPhone);
    console.log(customer.custMobile);
    console.log(customer.custAddress);
    console.log(customer.custEmail);
}

function showMessage() {
    const zeadAge = 36;
    // Show message about Zead's age
    alert(Zead's age is ${zeadAge});
  }

// Define customer object
const customer = {
    custCode: '',
    custName: ' ',
    custAge: '',
    custPhone: '',
    custMobile: '',
    custAddress: ' ',
    custEmail: ' ',
    fax: ''
};

logCustomerInfo(customer);
showMessage();
