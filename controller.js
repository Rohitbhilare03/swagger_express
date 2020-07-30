module.exports = {
    getAllUsers: async (req, res) => {
        return res.send("List of user");
    },
    loginUser: async (req, res) => {
        return res.status(200).send(`${req.userName} wanted to login `);
    },
    userById: async (req, res) => {
       var userId =  req.params.id;
       console.log(userId);
        return res.status(200).send(`data of ${userId}`);
    }
}