
// import the model
const Todo = require("../models/Todo");

// define routeHandler

exports.DeleteTodo = async (req, res) => {
    try {
        const { id } = req.params;

        await Todo.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Delete successfully"
        })
    }
    catch (error) {
        console.log(error);
        res.status(500)
            .json({
                success: false,
                data: "Internal server error",
                message: error.message
            })
    }
}
