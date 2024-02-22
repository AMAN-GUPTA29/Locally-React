const redirectLogged = (req, res, next) => {
    if (req.session.userID && req.session.customer) {
      res.send({
        status: "OK",
        isLogged: true,
        redirect: "CustomerView"
      });
    } else if (req.session.userID && req.session.seller) {
        res.send({
            status: "OK",
            isLogged: true,
            redirect: "SellerView"
          });
    } else if (req.session.userID && req.session.admin) {
        res.send({
            status: "OK",
            isLogged: true,
            redirect: "AdminView"
          });
    } else {
      next();
    }
};

const redirectUnLoggedCustomer = (req, res, next) => {
    if (!req.session.userID) {
        res.send({
            status: "OK",
            isLogged: false,
            redirect: "CustomerLogin"
          });
    } else if (req.session.seller) {
        res.send({
            status: "OK",
            isLogged: true,
            redirect: "SellerView"
          });
    } else if (req.session.admin) {
        res.send({
            status: "OK",
            isLogged: true,
            redirect: "AdminView"
          });
    } else {
      next();
    }
};

module.exports.redirectLogged = redirectLogged;
module.exports.redirectUnLoggedCustomer = redirectUnLoggedCustomer;