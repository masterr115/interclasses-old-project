const { getDayOfWeek, getMonth } = require("./dateutils");
module.exports = {
    /*
      ##### Handlebars Functions
      */

    formatdate: (date) => {
        const newdate = new Date(date);
        return `${newdate.getDate()} de ${getMonth(newdate.getMonth() + 1)} às ${newdate.getHours()}:${newdate.getMinutes() < 9 ? "0" + newdate.getMinutes() : newdate.getMinutes() }`;
    },

    isAdmin: (user) => {
        const admin = user.admin
        if (admin == true) {
            return true
        } else {
            return false
        }
    }

};