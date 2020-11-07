const FakeAuth = { 
  isAuthenticated: false, 
  authenticate : (cb) => {
    setTimeout(cb, 100);
    FakeAuth.isAuthenticated = true;
  }
};

export default FakeAuth;