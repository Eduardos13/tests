function checkPassword(password) {
    const correctPassword = "jqueryismyjam";
    const message = (password === correctPassword) ? "Access granted" : "Access denied, wrong password!";
    
    return message;
  }

  checkPassword("jqueryismyjam");